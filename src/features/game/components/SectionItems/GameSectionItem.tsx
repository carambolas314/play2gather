import type { ButtonHTMLAttributes, PropsWithChildren } from "react";
import StarRating from "@components/ui/StarRating";

interface GameCardProps {
	title: string;
	subtitle: string;
	image: string;
	rating: number;
	reviews: string;
}

const AddButton = ({
	children,
	...props
}: PropsWithChildren & ButtonHTMLAttributes<HTMLButtonElement>) => {
	return (
		<button
			className="bg-white text-[#1C1C2E] text-sm px-7 py-4 rounded-full shadow cursor-pointer hover:bg-blue-300 transition-colors duration-300"
			{...props}
		>
			{children}
		</button>
	);
};

const GameSectionTitle = ({ title }: { title: string }) => {
	return <h2 className="text-[42px] font-bold mb-2">{title}</h2>;
};

const GameSectionInfos = ({
	subtitle,
	rating,
	reviews,
}: {
	subtitle: string;
	rating: number;
	reviews: string;
}) => {
	return (
		<div className="flex mb-3 justify-between items-center">
			<div className="flex flex-col">
				<p className="text-sm underline">{subtitle}</p>
				<div className="flex items-center">
					<StarRating rating={rating} />
					<span className="ml-2 text-sm">{reviews}</span>
				</div>
			</div>
			<AddButton>➕ Adicionar à coleção</AddButton>
		</div>
	);
};

const GameCoverImage = ({ image, alt }: { image: string; alt: string }) => {
	return (
		<div className="relative rounded-xl overflow-hidden">
			<img
				src={image}
				alt={`Capa de ${alt}`}
				className="w-full h-auto rounded-lg"
			/>
		</div>
	);
};

export default function GameSectionItem({
	title,
	subtitle,
	image,
	rating,
	reviews,
}: GameCardProps) {
	return (
		<div className="bg-[#1c1c2e] text-white rounded-xl p-2 max-w-[670px] mb-3">
			<GameSectionTitle title={title} />
			<GameSectionInfos subtitle={subtitle} rating={rating} reviews={reviews} />
			<GameCoverImage image={image} alt={title} />
		</div>
	);
}
