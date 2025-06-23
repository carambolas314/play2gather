import { createContext } from "react";
import type { RequestError } from "@shared/types";
import type { AuthContextType, UserProfile } from "../types";

export type AuthContextActions = {
	initialize: (payload: {
		isAuthenticated: boolean;
		token: string | null;
		user: UserProfile | null;
	}) => void;
	loginStart: () => void;
	loginSuccess: (payload: { token: string }) => void;
	loginFailure: (payload: RequestError) => void;
	logout: () => void;
	refreshTokenStart: () => void;
	refreshTokenSuccess: (payload: { token: string }) => void;
	refreshTokenFailure: () => void;
};

export const AuthContext = createContext<AuthContextType | undefined>(
	undefined,
);
