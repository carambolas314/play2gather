import type { RouteObject } from "react-router-dom";
import NotFoundPage from "./pages/NotFound";
import Home from "./pages/Home";
import About from "./pages/About";
import Layout from "@shared/components/layout/Layout";
import { gameRoutes, iamRoutes, collectionRoutes } from "@features/routes";

export const appRoutes: RouteObject[] = [
	{
		path: "/",
		element: <Layout />,
		errorElement: <NotFoundPage />,
		children: [
			{ path: "/", element: <Home /> },
			{ path: "/about", element: <About /> },
			...iamRoutes,
			...gameRoutes,
			...collectionRoutes
			
			
		],
	},
];
