import type { AvatarColor, BadgeStatus } from "@features/game/types/common";

export interface UserReviewCardProps {
	id: string | number;
	username: string;
	reviewsCount: number;
	date: string;
	text: string;
	likes: number;
	comments: number;
	badgeStatus: BadgeStatus;
	avatarColor?: AvatarColor;
}

export function UserReviewCard({
	username,
	reviewsCount,
	date,
	text,
	likes,
	comments,
	badgeStatus,
	avatarColor = "purple",
}: UserReviewCardProps) {
	const badgeStyles: Record<
		BadgeStatus,
		{ label: string; colorClass: string }
	> = {
		completed: { label: "Jogo completo", colorClass: "text-green-400" },
		playing: { label: "Jogando", colorClass: "text-orange-400" },
		recommended: { label: "Recomendado", colorClass: "text-blue-400" },
	};

	// Mapeamento para as cores do avatar.
	const avatarColorMap: Record<AvatarColor, string> = {
		purple: "bg-purple-500",
		blue: "bg-blue-500",
		green: "bg-green-500",
		orange: "bg-orange-500",
		red: "bg-red-500",
	};

	const currentBadge = badgeStyles[badgeStatus];
	const currentAvatarClass = avatarColorMap[avatarColor];

	return (
		<div className="flex gap-2 px-6 py-4 border-b border-white/10">
			<div className="w-13 h-13 rounded-full flex items-center justify-center text-white text-lg font-bold shrink-0">
				<div className={`${currentAvatarClass} w-full h-full rounded-full`} />
			</div>

			<div className="flex flex-col text-sm text-white w-full">
				<div className="flex items-center gap-2">
					<strong className="text-base text-lg">{username}</strong>
					<span className="text-white/60">• {reviewsCount} análises</span>
				</div>

				<div className="flex items-center gap-2 text-xs mt-1">
					<span className="flex items-center gap-1">
						<span
							className={`text-xs font-semibold ${currentBadge.colorClass}`}
						>
							●
						</span>
						{currentBadge.label}
					</span>
				</div>

				<p className="text-white/50 mt-1 text-xs">Publicado em {date}</p>
				<p className="text-white mt-2 leading-relaxed">{text}</p>

				<div className="flex gap-6 mt-2 text-white/70 text-sm">
					<div className="flex items-center gap-1">
						<span>🤍</span> {likes}
					</div>
					<div className="flex items-center gap-1">
						<span>💬</span> {comments}
					</div>
				</div>
			</div>
		</div>
	);
}
