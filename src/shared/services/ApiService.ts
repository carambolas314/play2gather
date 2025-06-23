import { type AxiosInstance, AxiosError } from "axios";
import { requestConfig } from "@shared/lib/axios";
import type { IApiService } from "@shared/interfaces";
import type {
	ApiSuccessResponse,
	ValidationErrorResponse,
	ApiErrorResponse,
	PaginatedResponse,
	Result,
	ApiSuccessResponseWithData,
} from "../types";

export class ApiService<T> implements IApiService<T> {
	private api: AxiosInstance;
	private path: string;

	constructor(api: AxiosInstance, path: string) {
		this.api = api;
		this.path = path;
	}

	async getAll(): Promise<Result<PaginatedResponse<T>, ApiErrorResponse>> {
		try {
			const res = await this.api.get(this.path, requestConfig(false));
			return { ok: true, value: res.data };
		} catch (err) {
			return { ok: false, error: this.mapError(err) };
		}
	}

	async getById(id: string): Promise<Result<T, ApiErrorResponse>> {
		try {
			const res = await this.api.get(
				`${this.path}/${id}`,
				requestConfig(false),
			);
			return { ok: true, value: res.data };
		} catch (err) {
			return { ok: false, error: this.mapError(err) };
		}
	}

	async create(
		data: T,
	): Promise<Result<ApiSuccessResponse, ValidationErrorResponse>> {
		try {
			const res = await this.api.post(this.path, data, requestConfig(false));
			return { ok: true, value: res.data };
		} catch (err) {
			return {
				ok: false,
				error: this.mapError(err) as ValidationErrorResponse,
			};
		}
	}

	async update(
		id: string,
		data: T,
	): Promise<Result<ApiSuccessResponseWithData, ValidationErrorResponse>> {
		try {
			const res = await this.api.put(
				`${this.path}/${id}`,
				data,
				requestConfig(false),
			);
			return { ok: true, value: res.data };
		} catch (err) {
			return {
				ok: false,
				error: this.mapError(err) as ValidationErrorResponse,
			};
		}
	}

	async delete(
		id: string,
	): Promise<Result<ApiSuccessResponse, ApiErrorResponse>> {
		try {
			const res = await this.api.delete(
				`${this.path}/${id}`,
				requestConfig(false),
			);
			return { ok: true, value: res.data };
		} catch (err) {
			return { ok: false, error: this.mapError(err) };
		}
	}

	private mapError(error: unknown): ApiErrorResponse {
		if (error instanceof AxiosError && error.response?.data) {
			return error.response.data as ApiErrorResponse;
		}

		return {
			timestamp: new Date(),
			status: 500,
			error: "UnexpectedError",
			message: "Erro inesperado ao processar requisição.",
			details: JSON.stringify(error),
			path: this.path,
			flag: "DANGER",
		};
	}
}
