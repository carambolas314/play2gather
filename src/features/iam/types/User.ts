export interface User {
	id: string;
	name: string;
	email: string;
	password: string;
	address: string;
	wallet?: number;
	roles: string[];
}
export type UserProfile = Omit<User, "password">;
export type UserById = Pick<User, "id" | "name" | "email" | "address">;
