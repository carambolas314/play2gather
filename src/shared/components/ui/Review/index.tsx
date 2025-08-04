import { ComentIcon, LikeIcon } from "@assets/index";
import type { BadgeStatus } from "@shared/enums/Content";
import type { PropsWithChildren } from "react";
import { Link } from "react-router-dom";

const GameStatusBadge = ({ badgeStatus }: { badgeStatus: BadgeStatus }) => {
	const badgeStyles: Record<
		BadgeStatus,
		{ label: string; colors: { text: string; background: string } }
	> = {
		completed: {
			label: "Jogo completo",
			colors: { text: "text-lime-100", background: "bg-lime-400" },
		},
		playing: {
			label: "Jogando",
			colors: { text: "text-orange-100", background: "bg-orange-400" },
		},
		recommended: {
			label: "Recomendado",
			colors: { text: "text-blue-100", background: "bg-blue-400" },
		},
	};

	const currentBadge = badgeStyles[badgeStatus];

	return (
		<div className="flex items-center gap-2 text-xs mt-1">
			<span className={`flex items-center gap-1 ${currentBadge.colors.text}`}>
				<div
					className={`text-xs font-semibold rounded w-[10px] h-[10px] ${currentBadge.colors.background}`}
				></div>
				{currentBadge.label}
			</span>
		</div>
	);
};

const PostActions = ({
	likes,
	comments,
	postId,
}: {
	likes: number;
	comments: number;
	postId: string | number;
}) => {
	console.log(postId);
	return (
		<div className="flex gap-6 mt-2 text-white/70 text-sm">
			<div className="flex items-center gap-1">
				<LikeIcon /> {likes}
			</div>
			<div className="flex items-center gap-1">
				<ComentIcon /> {comments}
			</div>
		</div>
	);
};

const PublishedDate = ({ date }: { date: Date }) => {
	return (
		<p className="text-white/50 mt-2 text-xs">
			Publicada em{" "}
			{new Date(date).toLocaleDateString("pt-BR", {
				day: "2-digit",
				month: "2-digit",
				year: "numeric",
			})}
		</p>
	);
};

const TextDescription = ({ text }: { text: string }) => {
	return (
		<p className="text-white mt-1 leading-relaxed text-justify">
			{text.length > 400 ? `${text.slice(0, 400)}...` : text}
		</p>
	);
};

const ReviewTitle = ({
	title,
	reviewsCount,
	isUserLinked = false,
}: {
	title: string;
	reviewsCount?: number;
	isUserLinked?: boolean;
}) => {
	return (
		<div className="flex items-center gap-2 text-white">
			{isUserLinked ? (
				<Link
					to={`/users/${title}`}
					className="text-base text-lg hover:underline cursor-pointer"
					style={{ all: "unset", textDecoration: "none", cursor: "pointer" }}
				>
					<strong className="text-base text-lg">@{title}</strong>
				</Link>
			) : (
				<strong className="text-base text-lg">{title}</strong>
			)}
			{reviewsCount && (
				<span className="text-white/60">- {reviewsCount} análises</span>
			)}
		</div>
	);
};

const ReviewImage = ({
	src,
	alt,
	isAvatar = false,
}: {
	src: string;
	alt?: string;
	isAvatar?: boolean;
}) => {
	if (isAvatar) {
		return (
			<img
				src={src}
				alt={alt || "Foto de Perfil"}
				className="w-full max-w-[50px] max-h-[50px] h-13 rounded-full w"
			/>
		);
	}
	return (
		<img
			src={src}
			alt={alt || "Imagem do jogo"}
			className="object-cover"
			loading="lazy"
			height={50}
			style={{
				maxWidth: 150,
			}}
		/>
	);
};

const Review = ({
	children,
	className = "p-4",
}: { className?: string } & PropsWithChildren) => {
	return <div className={`flex gap-2 ${className}`}>{children}</div>;
};

Review.StatusBadge = GameStatusBadge;
Review.PostActions = PostActions;
Review.PublishedDate = PublishedDate;
Review.Description = TextDescription;
Review.Title = ReviewTitle;
Review.Image = ReviewImage;
export default Review;
