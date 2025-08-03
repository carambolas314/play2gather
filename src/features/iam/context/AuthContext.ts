import { createContext } from "react";
import type { RequestError } from "@shared/types";
import type { AuthContextType, UserProfile } from "../types";

export type AuthContextActions = {
	initialize: (payload: {
		isAuthenticated: boolean;
		user: UserProfile | null;
	}) => void;
	loginStart: () => void;
	loginSuccess: (payload: { token: string }) => void;
	loginFailure: (payload: RequestError) => void;
	logout: () => void;
	loading: (payload: boolean) => void;
	refreshTokenStart: () => void;
	refreshTokenSuccess: (payload: { token: string }) => void;
	refreshTokenFailure: () => void;
	setCurrentUser: (payload: UserProfile | null) => void;
	setToken: (payload: string | null) => void;
};

export const AuthContext = createContext<AuthContextType | undefined>(
	undefined,
);
