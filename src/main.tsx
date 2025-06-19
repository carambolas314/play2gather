import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { appRoutes } from "./routes/appRoutes";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./styles/reset.css";
import "./styles/index.css";

const router = createBrowserRouter(appRoutes);

createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<RouterProvider router={router} />
	</StrictMode>,
);
