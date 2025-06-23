import { StarIcon } from "@assets/mocks";

const StarRating = ({ rating }: { rating: number }) => {
	return (
		<div className="flex mt-1 ">
			{[...Array(5)].map((_, i) => (
				<StarIcon
					key={`full-${i}`}
					fill={i < rating ? "#F5C73D" : ""}
					className="w-4 h-4 mr-1 mt-1 mb-2"
				/>
			))}
		</div>
	);
};

export default StarRating;
