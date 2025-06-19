import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    svgr({
      include: "**/*.svg?react",
    }),
  ],
  server: {
    host: "0.0.0.0",
  },
  define: {
  "process.env.VITE_API_URL": JSON.stringify(process.env.API_URL),
  "process.env.VITE_NODE_ENV": JSON.stringify(process.env.NODE_ENV),
}
});
