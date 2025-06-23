import Game from "./pages/Game";

export const gameRoutes = [
	{
		path: "/games/:id",
		element: (
			<>
				<Game />
			</>
		),
	},
];
