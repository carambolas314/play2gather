import { pathsToModuleNameMapper } from "ts-jest";
import { compilerOptions } from "./tsconfig.json";

export default {
	preset: "ts-jest",
	testEnvironment: "jsdom",
	moduleNameMapper: {
		...pathsToModuleNameMapper(compilerOptions.paths || {}, {
			prefix: "<rootDir>/",
		}),
		"^@components/(.*)$": "<rootDir>/src/shared/components/$1",
		"^@features/(.*)$": "<rootDir>/src/features/$1",
		"^@shared/(.*)$": "<rootDir>/src/shared/$1",
		"^@assets/(.*)$": "<rootDir>/src/assets/$1",
	},
	setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
};
