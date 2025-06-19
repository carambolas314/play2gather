import { pathsToModuleNameMapper } from "ts-jest";
import { compilerOptions } from "./tsconfig.json";

export default {
	preset: "ts-jest",
	testEnvironment: "jsdom",
	moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths || {}, {
		prefix: "<rootDir>/",
	}),
	setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
};
