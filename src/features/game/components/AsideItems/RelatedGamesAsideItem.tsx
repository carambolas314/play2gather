import { TagList, type TagItemType } from "@components/ui/Tags";
import AsideItem from ".";
import StarRating from "@components/ui/StarRating";

export interface RelatedGameProps {
	gameId: string;
	id: string;
	image: string;
	title: string;
	rating: number;
	tags: TagItemType[];
}

export function RelatedGameCard({
	image,
	title,
	rating,
	tags,
}: RelatedGameProps) {
	return (
		<div className="flex gap-4 max-h-[130px] bg-[#1c1c2e] rounded-xl mb-4 overflow-hidden">
			<img src={image} alt={title} className="h-full rounded-lg object-cover" />
			<div className="flex w-[54%] flex-col justify-start gap-2">
				<div>
					<h4 className="text-lg font-semibold">{title}</h4>
					<StarRating rating={rating} />
				</div>
				<TagList tags={tags} />
			</div>
		</div>
	);
}

interface RelatedGamesSectionProps {
	sameDeveloper: RelatedGameProps[];
	title?: string;
	info?: string;
}

export default function RelatedGamesAsideItem({
	sameDeveloper,
	title,
	info,
}: RelatedGamesSectionProps) {
	return (
		<AsideItem paddingBottom={10}>
			{title && (
				<AsideItem.Title className="text-left">{title}</AsideItem.Title>
			)}
			{info && <AsideItem.Info padding={0}>{info}</AsideItem.Info>}{" "}
			{sameDeveloper?.length > 0 &&
				sameDeveloper.map((game) => (
					<RelatedGameCard key={game.gameId} {...game} />
				))}
		</AsideItem>
	);
}
