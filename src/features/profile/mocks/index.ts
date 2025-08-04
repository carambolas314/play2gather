import {
	BannerProfile,
	CabanaCommunity,
	HollowCommunity,
	MarioReview,
	MineCommunity,
	MineReview,
	ProfileIcon,
} from "@assets/mocks";
import type { Post, ReviewContent } from "@shared/types/content/post";

export const userProfileMock = {
	bio: "Imagina que louco... O Natal cair numa sexta-feira 13? Se sentindo pensativa",
	profilePicUrl:
		"https://fiverr-res.cloudinary.com/images/q_auto,f_auto/gigs/134461590/original/a3de5a6800cc304d2ff7d663b493449f13e12f95/make-you-a-pixel-art-profile-picture.png",
	bannerUrl: BannerProfile,
};

export const userFriendsMock = [
	{
		id: "f1",
		name: "CyberNinja",
		profilePic: ProfileIcon,
		link: "/home",
		status: "online",
	},
	{
		id: "f2",
		name: "PixelPanda",
		profilePic: ProfileIcon,
		link: "#",
		status: "offline",
	},
	{
		id: "f3",
		name: "StarGamer",
		profilePic: ProfileIcon,
		link: "#",
		status: "online",
	},
	{
		id: "f4",
		name: "NovaPhoenix",
		profilePic: ProfileIcon,
		link: "#",
		status: "offline",
	},
	{
		id: "f5",
		name: "TechWiz",
		profilePic: ProfileIcon,
		link: "#",
		status: "online",
		isPremium: true,
	},
	{
		id: "f6",
		name: "MysticBard",
		profilePic: ProfileIcon,
		link: "#",
		status: "offline",
	},
	{
		id: "f7",
		name: "Ghost_Reaper",
		profilePic: ProfileIcon,
		link: "#",
		status: "online",
	},
	{
		id: "f8",
		name: "Luna_Blaze",
		profilePic: ProfileIcon,
		link: "#",
		status: "offline",
		isPremium: true,
	},
];

export const communitysMock = [
	{
		id: "c1",
		name: "CABANA DOS JUNIMOS",
		imageUrl: CabanaCommunity,
		link: "#",
	},
	{
		id: "c2",
		name: "Hollow Knight",
		imageUrl: HollowCommunity,
		link: "#",
	},
	{
		id: "c3",
		name: "Minecraft",
		imageUrl: MineCommunity,
		link: "#",
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
			reviewImage: MineReview,
			badgeStatus: "completed",
			title: "Nome do Jogo",
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
			reviewImage: MarioReview,
			badgeStatus: "playing",
			gameId: "2",
			title: "Nome do Jogo",
			rating: 0,
		},
		likes: 50,
		createdAt: new Date("2023-09-10"),
		childrenIds: ["2", "3", "4"],
		relatedContentType: "REVIEW",
	},
];
