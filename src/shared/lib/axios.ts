import axios, { type AxiosRequestConfig } from "axios";

export const api = axios.create({
	baseURL: import.meta.env.VITE_API_URL + "api",
	timeout: 10000,
	headers: { "Content-Type": "application/json" },
});

export const requestConfig = (credentials = true): AxiosRequestConfig => {
	const token = localStorage.getItem("token");

	const config: AxiosRequestConfig = {
		headers: {
			"Content-Type": "application/json",
		},
		timeout: 10000,
		withCredentials: credentials,
	};

	if (token && config.headers) {
		config.headers.Authorization = `Bearer ${token}`;
	}

	return config;
};
