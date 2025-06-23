import { PopularCardItem, type PopularCardItemProps } from "./PopularCardItem";

export interface PopularListProps {
	items: PopularCardItemProps[];
}

export default function PopularLists({ items }: PopularListProps) {
	return (
		<div className="bg-[#1c1c2e] pt-6 text-white space-y-4 max-w-[670px] w-full">
			<h2 className="text-2xl font-bold">Listas populares</h2>
			<div className="flex justify-between gap-6 flex-wrap">
				{items?.length > 0 &&
					items.map((item, index) => (
						<PopularCardItem
							key={index}
							images={item.images}
							title={item.title}
							creator={item.creator}
						/>
					))}
			</div>
		</div>
	);
}
