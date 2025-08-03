import {
	type ReactNode,
	useReducer,
	useEffect,
	useMemo,
	useLayoutEffect,
	useRef,
	useCallback,
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

	const actions: AuthContextActions = useMemo(() => {
		console.log("Auth actions initialized");
		return {
			initialize: (payload) => dispatch(actionCreators.initialize(payload)),
			loginStart: () => dispatch(actionCreators.loginStart()),
			loginSuccess: (payload) => dispatch(actionCreators.loginSuccess(payload)),
			loginFailure: (payload) => dispatch(actionCreators.loginFailure(payload)),
			logout: () => dispatch(actionCreators.logout()),
			loading: (payload) => dispatch(actionCreators.loading(payload)),
			refreshTokenStart: () => dispatch(actionCreators.refreshTokenStart()),
			refreshTokenSuccess: (payload) =>
				dispatch(actionCreators.refreshTokenSuccess(payload)),
			refreshTokenFailure: () => dispatch(actionCreators.refreshTokenFailure()),
			setCurrentUser: (payload) =>
				dispatch(actionCreators.setCurrentUser(payload)),
			setToken: (payload) => dispatch(actionCreators.setToken(payload)),
		};
	}, []);

	useEffect(() => {
		const initializeApp = async () => {
			try {
				const localToken = localStorage.getItem("token");
				if (localToken && localToken !== "undefined") {
					actions.setToken(localToken);
				} else {
					actions.setToken(null);
					actions.initialize({
						isAuthenticated: false,
						user: null,
					});
				}
			} catch (error) {
				console.error("Failed to initialize auth state:", error);
				actions.setToken(null);
			} finally {
				actions.loading(false);
			}
		};
		initializeApp();
	}, [actions]);

	const fetchCurrentUser = useCallback(async () => {
		try {
			const response = await api.get("/profile", requestConfig(true));
			actions.initialize({
				isAuthenticated: true,
				user: response.data,
			});
		} catch (error) {
			console.error("Failed to fetch current user:", error);
			actions.initialize({
				isAuthenticated: false,
				user: null,
			});
		}
	}, [actions]);

	useEffect(() => {
		if (state.token) {
			fetchCurrentUser();
		}
	}, [state.token, fetchCurrentUser]);

	useLayoutEffect(() => {
		const authInterceptor = api.interceptors.request.use((config) => {
			if (!(config as any)._retry && stateRef.current.token) {
				config.headers.Authorization = `Bearer ${stateRef.current.token}`;
				config.withCredentials = true;
			}
			return config;
		});

		return () => {
			api.interceptors.request.eject(authInterceptor);
		};
	}, [state.token]);

	useLayoutEffect(() => {
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
							"/refresh",
							{},
							requestConfig(true),
						);
						const newToken = response.data.accessToken;

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
			api.interceptors.response.eject(refreshInterceptor);
		};
	}, [actions, state.isRefreshing]);

	const login = async (data: Login): Promise<boolean> => {
		actions.loginStart();
		try {
			const response = await api.post("/login", data, requestConfig(true));
			const { accessToken: token } = response.data;
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
			await api.post("/logout", {}, requestConfig(false));
			localStorage.removeItem("token");
			actions.logout();
		} catch (error) {
			console.error("Server logout failed, but client is logged out.", error);
			actions.logout();
			localStorage.removeItem("token");
		}
	};

	const contextValue = { ...state, login, logout, actions };

	return (
		<AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
	);
}
