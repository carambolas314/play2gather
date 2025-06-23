import {
	type ReactNode,
	useReducer,
	useEffect,
	useMemo,
	useLayoutEffect,
	useRef,
} from "react";

import type { AuthState, Login } from "../types";

import { authReducer, initialState } from "../state/auth.reducer";
import * as actionCreators from "../state/auth.actions";

import { api, requestConfig } from "@shared/lib/axios";
import { AuthContext, type AuthContextActions } from "../context/AuthContext";
import type { RequestError } from "@shared/types";

export function AuthProvider({ children }: { children: ReactNode }) {
	const [state, dispatch] = useReducer(authReducer, initialState);
	const stateRef = useRef<AuthState>(state);

	useLayoutEffect(() => {
		stateRef.current = state;
	});

	const actions: AuthContextActions = useMemo(
		() => ({
			initialize: (payload) => dispatch(actionCreators.initialize(payload)),
			loginStart: () => dispatch(actionCreators.loginStart()),
			loginSuccess: (payload) => dispatch(actionCreators.loginSuccess(payload)),
			loginFailure: (payload) => dispatch(actionCreators.loginFailure(payload)),
			logout: () => dispatch(actionCreators.logout()),
			refreshTokenStart: () => dispatch(actionCreators.refreshTokenStart()),
			refreshTokenSuccess: (payload) =>
				dispatch(actionCreators.refreshTokenSuccess(payload)),
			refreshTokenFailure: () => dispatch(actionCreators.refreshTokenFailure()),
		}),
		[],
	);

	useEffect(() => {
		const initializeApp = async () => {
			try {
				const localToken = localStorage.getItem("token");
				if (localToken && localToken !== "undefined") {
					const response = await api.get("/user/profile", requestConfig(false));
					actions.initialize({
						isAuthenticated: true,
						user: response.data ?? null,
						token: localToken,
					});
				} else {
					actions.initialize({
						isAuthenticated: false,
						user: null,
						token: null,
					});
				}
			} catch (error) {
				console.error("Failed to initialize auth state:", error);
				localStorage.removeItem("token");
				actions.initialize({ isAuthenticated: false, user: null, token: null });
			}
		};
		initializeApp();
	}, [actions]);

	useLayoutEffect(() => {
		const authInterceptor = api.interceptors.request.use((config) => {
			if (stateRef.current.token) {
				config.headers.Authorization = `Bearer ${stateRef.current.token}`;
				config.withCredentials = true;
			}
			return config;
		});

		const refreshInterceptor = api.interceptors.response.use(
			(response) => response,
			async (error) => {
				const originalRequest = error.config;
				const currentState = stateRef.current;

				if (
					error.response?.status === 401 &&
					!originalRequest._retry &&
					!currentState.isRefreshing &&
					currentState.token
				) {
					originalRequest._retry = true;
					actions.refreshTokenStart();

					try {
						const response = await api.post(
							"/auth/refresh-token",
							{},
							requestConfig(true),
						);
						const newToken = response.data.token;

						localStorage.setItem("token", newToken);
						actions.refreshTokenSuccess({ token: newToken });

						originalRequest.headers.Authorization = `Bearer ${newToken}`;
						return api(originalRequest);
					} catch (refreshError) {
						localStorage.removeItem("token");
						actions.refreshTokenFailure();
						return Promise.reject(refreshError);
					}
				}
				return Promise.reject(error);
			},
		);

		return () => {
			api.interceptors.request.eject(authInterceptor);
			api.interceptors.response.eject(refreshInterceptor);
		};
	}, [actions]);

	const login = async (data: Login): Promise<boolean> => {
		actions.loginStart();
		try {
			const response = await api.post(
				"/auth/login",
				data,
				requestConfig(false),
			);
			const { token } = response.data;
			localStorage.setItem("token", token);
			actions.loginSuccess({ token });
			return true;
		} catch (error) {
			console.error("Login failed:", error);
			actions.loginFailure(error as RequestError);
			return false;
		}
	};

	const logout = async () => {
		try {
			await api.get("/auth/logout", requestConfig(false));
			localStorage.removeItem("token");
			actions.logout();
		} catch (error) {
			console.error("Server logout failed, but client is logged out.", error);
		}
	};

	const contextValue = { ...state, login, logout };

	return (
		<AuthContext.Provider value={contextValue}>
			{state.isInitialized ? children : <div>Carregando...</div>}
		</AuthContext.Provider>
	);
}
