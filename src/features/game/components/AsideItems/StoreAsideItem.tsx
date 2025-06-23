import AsideItem from ".";

export interface StoreItem {
	name: string;
	logo: string;
	price: string;
}

interface StoreListProps {
	stores: StoreItem[];
}

const StoreItem = ({ name, logo, price }: StoreItem) => {
	return (
		<li className="flex justify-between items-center">
			<div className="flex items-center space-x-3">
				<img src={logo} alt={name} className="w-16 h-16 rounded-md" />
				<span className="text-sm">{name}</span>
			</div>
			<span className="text-sm text-white">{price}</span>
		</li>
	);
};

const StoreList = ({ stores }: StoreListProps) => {
	return (
		<ul className="space-y-3">
			{stores.map((store, idx) => (
				<StoreItem key={idx} {...store} />
			))}
		</ul>
	);
};

export default function StoreAsideItem({ stores }: StoreListProps) {
	return (
		<>
			<AsideItem>
				<AsideItem.Title className="text-left">Onde comprar</AsideItem.Title>
				<StoreList stores={stores} />
			</AsideItem>
		</>
	);
}
