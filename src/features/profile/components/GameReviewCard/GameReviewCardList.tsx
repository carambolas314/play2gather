import Review from "@components/ui/Review";
import type { Post, ReviewContent } from "@shared/types/content/post";

const GameReviewCardList = ({
	userReviews,
}: {
	userReviews: Post<ReviewContent>[];
}) => {
	return (
		<>
			{userReviews.map((review: Post<ReviewContent>) => (
				<Review className="p-2 gap-3" key={review.postId}>
					<Review.Image src={review.content.reviewImage || ""} />
					<div className="flex flex-col text-sm">
						<Review.Title title={review.content.title} />
						<Review.StatusBadge badgeStatus={review.content.badgeStatus} />
						<Review.PublishedDate date={review.createdAt} />
						<Review.Description text={review.content.message ?? ""} />
						<Review.PostActions
							likes={review.likes}
							comments={review.childrenIds?.length ?? 0}
							postId={review.postId}
						/>
					</div>
				</Review>
			))}
		</>
	);
};

export default GameReviewCardList;
