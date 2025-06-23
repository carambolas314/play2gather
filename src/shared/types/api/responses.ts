import type { AlertColor } from "@shared/enums/alert";

export interface ApiSuccessResponse {
	id: string;
	message: string;
	flag: AlertColor;
}

export interface ApiSuccessResponseWithData<T = object>
	extends ApiSuccessResponse {
	data: T;
}
