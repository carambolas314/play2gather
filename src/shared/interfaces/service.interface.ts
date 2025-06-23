import type {
	Result,
	ApiSuccessResponse,
	ApiSuccessResponseWithData,
	ApiErrorResponse,
	ValidationErrorResponse,
	PaginatedResponse,
} from "../types";

export interface IApiService<T> {
	getAll(): Promise<Result<PaginatedResponse<T>, ApiErrorResponse>>;
	getById(id: string): Promise<Result<T, ApiErrorResponse>>;
	create(data: T): Promise<Result<ApiSuccessResponse, ValidationErrorResponse>>;
	update(
		id: string,
		data: T,
	): Promise<Result<ApiSuccessResponseWithData, ValidationErrorResponse>>;
	delete(id: string): Promise<Result<ApiSuccessResponse, ApiErrorResponse>>;
}
