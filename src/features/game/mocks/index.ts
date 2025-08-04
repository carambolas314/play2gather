import {
	CommunityImage,
	EpicImage,
	SteamImage,
	MicrosoftImage,
	AchievementImage,
	GameImage,
	LiveCardImage,
	VideoCardImage,
	NoticeCardImage,
	GameGTA,
	GameMario,
	GameHK,
	GameHK2,
	GameMetroid,
	GameZelda,
	ProfileIcon,
} from "@assets/mocks";

import type { TagItemType } from "@components/ui/Tags";
import type { AchievementsType } from "../components/AsideItems/AchievementsAsideItem";
import type { RelatedGameProps } from "../components/AsideItems/RelatedGamesAsideItem";
import type { SystemRequirementsProps } from "../components/ReviewSectionTabs/SystemRequirements";
import type { FanGalleryProps } from "../components/ReviewSectionTabs/FanGallery";
import type { RelatedContentProps } from "../components/ReviewSectionTabs/RelatedContent/RelatedContent";
import type { PopularCardItemProps } from "../components/PopularCardItem";
import type { Post, ReviewContent } from "@shared/types/content/post";

export const tagsMock: TagItemType[] = [
	{ label: "Tag de gênero", color: "purple" },
	{ label: "Tag de mecânica", color: "yellow" },
	{ label: "Tag de estilo", color: "red" },
];

export const storesMock = [
	{
		name: "Steam",
		logo: SteamImage,
		price: "R$ 9,99",
	},
	{
		name: "Epic",
		logo: EpicImage,
		price: "R$ 9,99",
	},
	{
		name: "Microsoft store",
		logo: MicrosoftImage,
		price: "R$ 9,99",
	},
];

export const communityMock = {
	title: "Cabana dos Junimos",
	image: CommunityImage,
	usersCount: 99,
	tags: tagsMock,
};

export const achievementsMock: AchievementsType[] = [
	{
		id: "1",
		gameId: "game-1",
		title: "Conquista 1",
		icon: AchievementImage,
		link: "https://example.com/achievement/1",
	},
	{
		id: "2",
		gameId: "game-1",
		title: "Conquista 2",
		icon: AchievementImage,
		link: "https://example.com/achievement/2",
	},
	{
		id: "3",
		gameId: "game-1",
		title: "Conquista 2",
		icon: AchievementImage,
		link: "https://example.com/achievement/2",
	},
	{
		id: "4",
		gameId: "game-1",
		title: "Conquista 2",
		icon: AchievementImage,
		link: "https://example.com/achievement/2",
	},
	{
		id: "5",
		gameId: "game-1",
		title: "Conquista 2",
		icon: AchievementImage,
		link: "https://example.com/achievement/2",
	},
	{
		id: "6",
		gameId: "game-1",
		title: "Conquista 2",
		icon: AchievementImage,
		link: "https://example.com/achievement/2",
	},
	{
		id: "7",
		gameId: "game-1",
		title: "Conquista 2",
		icon: AchievementImage,
		link: "https://example.com/achievement/2",
	},
	{
		id: "8",
		gameId: "game-1",
		title: "Conquista 2",
		icon: AchievementImage,
		link: "https://example.com/achievement/2",
	},
	{
		id: "9",
		gameId: "game-1",
		title: "Conquista 2",
		icon: AchievementImage,
		link: "https://example.com/achievement/2",
	},
	{
		id: "10",
		gameId: "game-1",
		title: "Conquista 2",
		icon: AchievementImage,
		link: "https://example.com/achievement/2",
	},
	{
		id: "11",
		gameId: "game-1",
		title: "Conquista 2",
		icon: AchievementImage,
		link: "https://example.com/achievement/2",
	},
	{
		id: "12",
		gameId: "game-1",
		title: "Conquista 2",
		icon: AchievementImage,
		link: "https://example.com/achievement/2",
	},
	{
		id: "13",
		gameId: "game-1",
		title: "Conquista 2",
		icon: AchievementImage,
		link: "https://example.com/achievement/2",
	},
];

export const sameDeveloperMock: RelatedGameProps[] = [
	{
		id: "1",
		gameId: "game-1",
		image: GameImage,
		title: "Game 1",
		rating: 4.5,
		tags: [
			{ label: "Aventura", color: "purple" },
			{ label: "Indie", color: "yellow" },
		],
	},
	{
		id: "2",
		gameId: "game-2",
		image: GameImage,
		title: "Game 2",
		rating: 4.0,
		tags: [
			{ label: "Ação", color: "red" },
			{ label: "Multiplayer", color: "yellow" },
			{ label: "Multiplayerasdfasdfasdfasdf", color: "purple" },
			{ label: "Multiplayerasdfasdfasf", color: "purple" },
		],
	},
];

export const mockUserReview: Post<ReviewContent>[] = [
	{
		postId: "1",
		authorId: "user-1",
		parentId: "1",
		relatedContentType: "REVIEW",
		content: {
			gameId: "1",
			message:
				"Todos os seres humanos nascem livres e iguais em dignidade e direitos. São dotados de razão e consciência e devem agir em relação uns aos outros com espírito de fraternidade. Todos os seres humanos nascem livres e iguais em dignidade e direitos. São dotados de razão e consciência e devem agir em relação uns aos outros com espírito de fraternidade.",
			reviewImage: ProfileIcon,
			badgeStatus: "completed",
			title: "LorenaIpsum",
			rating: 4.5,
		},
		likes: 99,
		childrenIds: ["2", "3", "4"],
		createdAt: new Date("2023-09-08"),
	},
	{
		postId: "2",
		authorId: "user-2",
		content: {
			message:
				"Todos os seres humanos nascem livres e iguais em dignidade e direitos. São dotados de razão e consciência e devem agir em relação uns aos outros com espírito de fraternidade. Todos os seres humanos nascem livres e iguais em dignidade e direitos. São dotados de razão e consciência e devem agir em relação uns aos outros com espírito de fraternidade.",
			reviewImage: ProfileIcon,
			badgeStatus: "playing",
			gameId: "2",
			title: "LorenaIpsum2",
			rating: 0,
		},
		likes: 50,
		createdAt: new Date("2023-09-10"),
		childrenIds: ["2", "3", "4"],
		relatedContentType: "REVIEW",
	},
];

export const mockSystemRequirements: SystemRequirementsProps[] = [
	{
		requirements: [
			{ label: "Sistema Operacional", value: "Windows 10" },
			{ label: "Processador", value: "Intel Core i5" },
			{ label: "Memória", value: "8 GB de RAM" },
			{ label: "Placa de Vídeo", value: "NVIDIA GTX 1060" },
			{ label: "DirectX", value: "Versão 11" },
			{ label: "Armazenamento", value: "20 GB de espaço disponível" },
		],
		note: "Requisitos mínimos para rodar o jogo.",
	},
	{
		requirements: [
			{ label: "Sistema Operacional", value: "Windows 10" },
			{ label: "Processador", value: "Intel Core i5" },
			{ label: "Memória", value: "8 GB de RAM" },
			{ label: "Placa de Vídeo", value: "NVIDIA GTX 1060" },
			{ label: "DirectX", value: "Versão 11" },
			{ label: "Armazenamento", value: "20 GB de espaço disponível" },
		],
		note: "Requisitos recomendados para rodar o jogo.",
	},
];

export const mockFanGallery: FanGalleryProps = {
	fanImages: [
		{
			id: 1,
			username: "NomeUsuário",
			image:
				"https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80",
		}, // altura média
		{
			id: 2,
			username: "NomeUsuário",
			image:
				"https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80",
		}, // altura grande
		{
			id: 3,
			username: "NomeUsuário",
			image:
				"https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80",
		}, // altura pequena
		{
			id: 4,
			username: "NomeUsuário",
			image:
				"https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=400&q=80",
		}, // altura média
		{
			id: 5,
			username: "NomeUsuário",
			image:
				"https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=400&q=80",
		}, // altura grande
		{
			id: 6,
			username: "NomeUsuário",
			image:
				"https://images.unsplash.com/photo-1519985176271-adb1088fa94c?auto=format&fit=crop&w=400&q=80",
		}, // altura pequena
		{
			id: 7,
			username: "NomeUsuário",
			image:
				"https://images.unsplash.com/photo-1519985176271-adb1088fa94c?auto=format&fit=crop&w=400&q=80",
		}, // altura média
		{
			id: 8,
			username: "NomeUsuário",
			image:
				"https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=600&q=80",
		}, // altura grande
		{
			id: 9,
			username: "NomeUsuário",
			image:
				"https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=300&q=80",
		}, // altura pequena
		{
			id: 10,
			username: "NomeUsuário",
			image:
				"https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=500&q=80",
		}, // altura média
		{
			id: 11,
			username: "NomeUsuário",
			image:
				"https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=700&q=80",
		}, // altura grande
		{
			id: 12,
			username: "NomeUsuário",
			image:
				"https://images.unsplash.com/photo-1519985176271-adb1088fa94c?auto=format&fit=crop&w=200&q=80",
		}, // altura pequena
	],
};

export const mockRelatedContent: RelatedContentProps = {
	lives: [
		{
			id: 1,
			image: LiveCardImage,
			title: "Live de Gameplay",
			channel: "Canal de Games",
			viewers: "1.2K",
		},
		{
			id: 2,
			image: LiveCardImage,
			title: "Live de Dicas",
			channel: "Dicas de Jogos",
			viewers: "800",
		},
	],
	videos: [
		{
			id: 1,
			image: VideoCardImage,
			title: "Vídeo de Análise",
			channel: "Canal de Análises",
		},
		{
			id: 2,
			image: VideoCardImage,
			title: "Vídeo de Gameplay",
			channel: "Canal de Games",
		},
	],
	notices: [
		{
			id: 1,
			image: NoticeCardImage,
			title: "Notícia Importante",
			reporter: "Descrição da notícia importante.",
		},
		{
			id: 2,
			image: NoticeCardImage,
			title: "Atualização do Jogo",
			reporter: "Descrição da atualização do jogo.",
		},
		{
			id: 2,
			title: "Atualização do Jogo",
			reporter: "Descrição da atualização do jogo.",
		},
	],
};

export const mockPopularLists: PopularCardItemProps[] = [
	{
		images: [GameGTA, GameMario, GameHK2, GameMetroid],
		title: "Paisagens Incríveis",
		creator: "João Silva",
	},
	{
		images: [GameMario, GameHK, GameZelda, GameHK2],
		title: "Aventuras Urbanas",
		creator: "Maria Souza",
	},
	{
		images: [GameMario, GameHK, GameGTA, GameMetroid],
		title: "Natureza Selvagem",
		creator: "Carlos Lima",
	},
];
