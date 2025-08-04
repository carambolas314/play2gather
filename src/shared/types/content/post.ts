import type { BadgeStatus, ContentType } from "@shared/enums/Content";

export interface BaseContent {
	message?: string;
	tags?: string[];
	location?: { lat: number; lng: number; name?: string };
}

export interface MediaContent extends BaseContent {
	image?: string;
	video?: string;
	audio?: string;
	document?: string;
	link?: string;
}

export interface ReviewContent extends BaseContent {
	gameId: string;
	title: string;
	reviewImage: string;
	badgeStatus: BadgeStatus;
	rating: number;
}

export interface GameContent extends BaseContent {
	gameId: string;
	name: string;
	coverImage: string;
	genres: string[];
	platforms: string[];
	description?: string;
}

export interface PollContent extends BaseContent {
	poll: {
		question: string;
		options: string[];
		multiChoice?: boolean;
	};
}

export interface EventContent extends BaseContent {
	eventId: string;
	title: string;
	description?: string;
	date: Date;
	location: { lat: number; lng: number; name: string };
	image?: string;
	link?: string;
}

export type Post<T extends BaseContent> = {
	postId: string | number;
	authorId: string;
	parentId?: string;
	childrenIds?: string[];
	relatedContentType: ContentType;
	content: T;
	likes: number;
	createdAt: Date;
};
