import type { AuthAction, UserProfile } from "../types";
import type { RequestError } from "@shared/types";

export const initialize = (payload: {
	isAuthenticated: boolean;
	token: string | null;
	user: UserProfile | null;
}): AuthAction => ({
	type: "INITIALIZE",
	payload,
});

export const loginStart = (): AuthAction => ({
	type: "LOGIN_START",
});

export const loginSuccess = (payload: { token: string }): AuthAction => ({
	type: "LOGIN_SUCCESS",
	payload,
});

export const loginFailure = (payload: RequestError): AuthAction => ({
	type: "LOGIN_FAILURE",
	payload,
});

export const refreshTokenStart = (): AuthAction => ({
	type: "REFRESH_TOKEN_START",
});

export const refreshTokenSuccess = (payload: {
	token: string;
}): AuthAction => ({
	type: "REFRESH_TOKEN_SUCCESS",
	payload,
});

export const refreshTokenFailure = (): AuthAction => ({
	type: "REFRESH_TOKEN_FAILURE",
});

export const logout = (): AuthAction => ({
	type: "LOGOUT",
});
