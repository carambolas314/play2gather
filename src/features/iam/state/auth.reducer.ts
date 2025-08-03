import type { AuthState, AuthAction } from "../types/State";

export const initialState: AuthState = {
	token: null,
	isAuthenticated: false,
	isRefreshing: false,
	currentUser: null,
	loading: true,
	error: null,
	isInitialized: false,
};

export const authReducer = (
	state: AuthState,
	action: AuthAction,
): AuthState => {
	switch (action.type) {
		case "INITIALIZE":
			return {
				...state,
				isAuthenticated: action.payload.isAuthenticated,
				currentUser: action.payload.user,
				isInitialized: true,
				loading: false,
			};
		case "LOGIN_START":
			return {
				...state,
				loading: true,
				error: null,
			};
		case "LOGIN_SUCCESS":
			return {
				...state,
				isAuthenticated: true,
				token: action.payload.token,
				loading: false,
				error: null,
			};
		case "LOGIN_FAILURE":
			return {
				...state,
				isAuthenticated: false,
				currentUser: null,
				token: null,
				error: action.payload,
				loading: false,
			};
		case "LOGOUT":
			return {
				...initialState,
				isInitialized: true,
				loading: false,
				isAuthenticated: false,
			};
		case "REFRESH_TOKEN_START":
			return {
				...state,
				isRefreshing: true,
			};
		case "REFRESH_TOKEN_SUCCESS":
			return {
				...state,
				token: action.payload.token,
				isRefreshing: false,
			};
		case "REFRESH_TOKEN_FAILURE":
			return {
				...initialState,
				isInitialized: true,
				loading: false,
				isAuthenticated: false,
				isRefreshing: false,
			};
		case "LOADING":
			return {
				...state,
				loading: action.payload,
			};
		case "SET_CURRENT_USER":
			return {
				...state,
				currentUser: action.payload,
			};
		case "SET_TOKEN":
			return {
				...state,
				token: action.payload,
			};
		default:
			return state;
	}
};
