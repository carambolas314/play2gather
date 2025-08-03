import CollectionPage from "./pages/Collection";
import ProfilePage from "./pages/Profile";

export const profileRoutes = [
	{
		path: "/profile",
		element: (
			<>
				<ProfilePage />
			</>
		),
	},
	{
		path: "/collection",
		element: (
			<>
				<CollectionPage />
			</>
		),
	},
];
