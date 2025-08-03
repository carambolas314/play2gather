// Supondo que estes tipos venham de uma pasta global /types ou de seus respectivos locais
import type { RequestError } from "@shared/types/api/errors";
import type { UserProfile } from "./User";
import type { Login } from "./Auth";

export interface AuthState {
	token: string | null;
	isAuthenticated: boolean;
	isRefreshing: boolean;
	currentUser: UserProfile | null;
	loading: boolean;
	error: RequestError | null;
	isInitialized: boolean;
}

export type AuthAction =
	| {
			type: "INITIALIZE";
			payload: {
				isAuthenticated: boolean;
				user: UserProfile | null;
			};
	  }
	| { type: "LOGIN_START" }
	| { type: "LOGIN_SUCCESS"; payload: { token: string } }
	| { type: "LOGIN_FAILURE"; payload: RequestError }
	| { type: "LOGOUT" }
	| { type: "REFRESH_TOKEN_START" }
	| { type: "REFRESH_TOKEN_SUCCESS"; payload: { token: string } }
	| { type: "REFRESH_TOKEN_FAILURE" }
	| { type: "LOADING"; payload: boolean }
	| { type: "SET_CURRENT_USER"; payload: UserProfile | null }
	| { type: "SET_TOKEN"; payload: string | null };

export interface AuthContextType extends AuthState {
	login: (data: Login) => Promise<boolean>;
	logout: () => Promise<void>;
}
