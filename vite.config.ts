import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";
import tailwindcss from "@tailwindcss/vite";
import path from "path";

// https://vite.dev/config/
export default defineConfig({
	plugins: [
		react(),
		svgr({
			include: "**/*.svg?react",
		}),
		tailwindcss(),
	],
	resolve: {
		alias: {
			"@shared": path.resolve(__dirname, "src/shared"),
			"@features": path.resolve(__dirname, "src/features"),
			"@components": path.resolve(__dirname, "src/shared/components"),
			"@assets": path.resolve(__dirname, "src/assets"),
		},
	},
	server: {
		host: "0.0.0.0",
	},
	define: {
		"process.env.VITE_API_URL": JSON.stringify(process.env.API_URL),
		"process.env.VITE_NODE_ENV": JSON.stringify(process.env.NODE_ENV),
	},
});
