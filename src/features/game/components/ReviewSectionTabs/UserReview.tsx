import { ProfileIcon } from "@assets/mocks";
import Review from "@components/ui/Review";
import type { Post, ReviewContent } from "@shared/types/content/post";

export function UserReviewCard({ post }: { post: Post<ReviewContent> }) {
	const { postId, likes, content, createdAt, childrenIds } = post;
	return (
		<Review>
			<Review.Image src={content.reviewImage || ProfileIcon} isAvatar />
			<div className="flex flex-col text-sm">
				<Review.Title title={content.title} isUserLinked />
				<Review.StatusBadge badgeStatus={content.badgeStatus} />
				<Review.PublishedDate date={createdAt} />
				<Review.Description text={content.message ?? ""} />
				<Review.PostActions
					likes={likes}
					comments={childrenIds?.length ?? 0}
					postId={postId}
				/>
			</div>
		</Review>
	);
}
