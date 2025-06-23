import type { AlertColor } from "@shared/enums/alert";
import type { AxiosError } from "axios";

export interface FieldValidationError {
	field: string;
	message: string;
}

export interface ApiErrorResponse {
	timestamp: Date;
	status: number;
	error: string;
	message: string;
	details?: string;
	path: string;
	flag: AlertColor;
}

export interface ValidationErrorResponse extends ApiErrorResponse {
	errors: FieldValidationError[];
}

// This interface extends AxiosError to include a specific response type for API errors.
/*
 It can be better if on the future you abstract the use of RequestError for only pass
 the RequestError.response <ApiErrorResponse> to the components that need it.
 */
export type RequestError = AxiosError<ApiErrorResponse>;
