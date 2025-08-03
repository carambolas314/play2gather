import {
	GameGTA,
	GameHK,
	GameHK2,
	GameMario,
	GameMetroid,
	GameZelda,
	ProfileIcon,
} from "@assets/mocks";

export const mockHomeData = {
	welcomeMessage: "Bem vindo de volta Lorenalpsum!",
	friendActivities: [
		{
			id: "a1",
			game: "HOLLOW KNIGHT",
			friendName: "@lorenalpsum",
			status: "Começou a jogar",
			profileImageUrl: ProfileIcon,
			gameImageUrl: GameHK,
		},
		{
			id: "a2",
			game: "Mario Kart 8",
			friendName: "@lorenalpsum",
			status: "Abandonou",
			profileImageUrl: ProfileIcon,
			gameImageUrl: GameMario,
		},
		{
			id: "a3",
			game: "Grand Theft Auto V",
			friendName: "@lorenalpsum",
			status: "Adicionou à coleção",
			profileImageUrl: ProfileIcon,
			gameImageUrl: GameGTA,
		},
		{
			id: "a4",
			game: "The Legend of Zelda",
			friendName: "@lorenalpsum",
			status: "Começou a jogar",
			profileImageUrl: ProfileIcon,
			gameImageUrl: GameZelda,
		},
		{
			id: "a5",
			game: "Metroid Dread",
			friendName: "@lorenalpsum",
			status: "Começou a jogar",
			profileImageUrl: ProfileIcon,
			gameImageUrl: GameMetroid,
		},
		{
			id: "a6",
			game: "Hollow Knight: Silksong",
			friendName: "@lorenalpsum",
			status: "Começou a jogar",
			profileImageUrl: ProfileIcon,
			gameImageUrl: GameHK2,
		},
	],
	communityPanel: {
		title: "Cabana dos juninos",
		postsCount: 99,
		iconUrl: ProfileIcon,
		featuredPosts: [
			{
				id: "p1",
				user: "NomeUsuário",
				status: "jogando",
				content:
					"Todos os seres humanos nascem livres e iguais em dignidade e direitos...",
				likes: 56,
				comments: 44,
				userPic: "https://via.placeholder.com/48/8B5CF6/FFFFFF",
			},
			{
				id: "p2",
				user: "NomeUsuário",
				status: "jogando",
				content:
					"Todos os seres humanos nascem livres e iguais em dignidade e direitos...",
				likes: 56,
				comments: 44,
				userPic: "https://via.placeholder.com/48/8B5CF6/FFFFFF",
			},
		],
		videos: [
			{
				id: "v1",
				title: "Título do vídeo não importa onde",
				user: "Nome do canal",
				thumbnailUrl:
					"https://via.placeholder.com/150x100/FFD700/000000?text=Video+1",
			},
			{
				id: "v2",
				title: "Título do vídeo não importa onde",
				user: "Nome do canal",
				thumbnailUrl:
					"https://via.placeholder.com/150x100/FFD700/000000?text=Video+2",
			},
			{
				id: "v3",
				title: "Título do vídeo não importa onde",
				user: "Nome do canal",
				thumbnailUrl:
					"https://via.placeholder.com/150x100/FFD700/000000?text=Video+3",
			},
		],
		fanArt: [
			{
				id: "fa1",
				user: "NomeUsuário",
				imageUrl:
					"https://via.placeholder.com/100x100/8B5CF6/FFFFFF?text=FanArt",
			},
			{
				id: "fa2",
				user: "NomeUsuário",
				imageUrl:
					"https://via.placeholder.com/100x100/8B5CF6/FFFFFF?text=FanArt",
			},
			{
				id: "fa3",
				user: "NomeUsuário",
				imageUrl:
					"https://via.placeholder.com/100x100/8B5CF6/FFFFFF?text=FanArt",
			},
		],
	},
};
