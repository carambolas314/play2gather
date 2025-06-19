import type { RouteObject } from "react-router-dom";
import Layout from "../components/layout/Layout";
import NotFoundPage from "../pages/NotFound";
import Home from "../pages/Home";
import About from "../pages/About";

export const appRoutes: RouteObject[] = [
	{
		path: "/",
		element: <Layout />,
		errorElement: <NotFoundPage />,
		children: [
			{ path: "/", element: <Home /> },
			{ path: "/about", element: <About /> },
		],
	},
];
