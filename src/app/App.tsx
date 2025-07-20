import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { appRoutes } from "./router";
import { AuthProvider } from "@features/iam/components/AuthProvider";

const router = createBrowserRouter(appRoutes);

const App = () => {
	return (
		<AuthProvider>
			<RouterProvider router={router} />
		</AuthProvider>
	);
};

export default App;
