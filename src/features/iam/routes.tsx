import Login from "./pages/Login";
import RegisterFlow from "./pages/Register/RegisterFlow";

export const iamRoutes = [
	{
		path: "/login",
		element: <Login />,
	},
	{
		path: "/register",
		element: <RegisterFlow />,
	},
];
