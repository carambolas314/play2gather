import { type CSSProperties, type PropsWithChildren } from "react";

type AsideItemProps = {
	className?: string;
} & PropsWithChildren &
	CSSProperties;

const AsideItem = ({ children, ...props }: AsideItemProps) => {
	return (
		<div
			className={`bg-[#1c1c2e] text-white rounded-xl p-4`}
			style={{ ...props }}
		>
			{children}
		</div>
	);
};

const AsideItemTitle = ({ children, className }: AsideItemProps) => {
	return (
		<h3 className={`text-[25px] text-center font-bold mb-4 ${className}`}>
			{children}{" "}
		</h3>
	);
};

const AsideItemCommunityImage = ({
	image,
	title,
}: {
	image: string;
	title: string;
}) => {
	return (
		<div className="overflow-hidden rounded-xl mb-3">
			<img
				src={image}
				alt={title}
				className="w-200 h-40 object-cover rounded-xl"
			/>
		</div>
	);
};

const AsideItemInfo = ({ children, ...props }: AsideItemProps) => {
	return (
		<p className="text-sm text-gray-200 mb-3 py-1" style={{ ...props }}>
			{children}
		</p>
	);
};

AsideItem.Title = AsideItemTitle;
AsideItem.CommunityImage = AsideItemCommunityImage;
AsideItem.Info = AsideItemInfo;

export default AsideItem;
