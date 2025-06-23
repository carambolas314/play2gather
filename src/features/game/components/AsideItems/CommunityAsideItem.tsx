import { TagList, type TagItemType } from "@components/ui/Tags";
import AsideItem from ".";

interface CommunityCardProps {
	title: string;
	image: string;
	usersCount: number;
	tags: TagItemType[];
}

export default function CommunityAsideItem({
	title,
	image,
	usersCount,
	tags,
}: CommunityCardProps) {
	return (
		<AsideItem>
			<AsideItem.Title>{title}</AsideItem.Title>
			<AsideItem.CommunityImage image={image} title={title} />
			<AsideItem.Info>
				{usersCount} Usuários adicionaram esse jogo à coleção
			</AsideItem.Info>
			<TagList tags={tags} />
		</AsideItem>
	);
}
