import type { RouteObject } from "react-router-dom";
import NotFoundPage from "./pages/NotFound";
import About from "./pages/About";
import Layout from "@shared/components/layout/Layout";
import { gameRoutes, iamRoutes, profileRoutes } from "@features/routes";
import Home from "./pages/Home";

export const appRoutes: RouteObject[] = [
	{
		path: "/",
		element: <Layout />,
		errorElement: <NotFoundPage />,
		children: [
			{
				path: "/home",
				element: <Home />,
			},
			{ path: "/about", element: <About /> },
			...iamRoutes,
			...gameRoutes,
			...profileRoutes,
		],
	},
];
