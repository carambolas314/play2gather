import React from "react";

type RelatedContentProps = {
	children: React.ReactNode;
};

type SectionProps = {
	title: string;
	children: React.ReactNode;
};

type GridProps = {
	children: React.ReactNode;
};

type ItemProps = {
	image?: string;
	imageAlt: string;
	title: string;
	badgeText?: string;
	children?: React.ReactNode;
};

function Item({ image, imageAlt, title, badgeText, children }: ItemProps) {
	const fallbackImage =
		"data:image/svg+xml;utf8,<svg width='300' height='130' xmlns='http://www.w3.org/2000/svg'><rect width='300' height='130' fill='%23222'/><text x='50%' y='50%' dominant-baseline='middle' text-anchor='middle' fill='white' font-size='20'>Unavailable</text></svg>";

	return (
		<div>
			<div className="relative rounded-xl overflow-hidden mb-2">
				<img
					src={image || fallbackImage}
					alt={imageAlt}
					className="w-full h-[130px] object-cover rounded-xl"
					onError={(e) => {
						const target = e.target as HTMLImageElement;
						if (target.src !== fallbackImage) {
							target.src = fallbackImage;
						}
					}}
				/>
				{badgeText && (
					<span className="absolute top-2 left-2 bg-red-600 text-white text-xs px-2 py-1 rounded">
						{badgeText}
					</span>
				)}
			</div>
			<p className="text-white font-semibold text-sm">{title}</p>
			{children && <div className="text-white/60 text-xs">{children}</div>}
		</div>
	);
}

function Grid({ children }: GridProps) {
	return <div className="grid grid-cols-2 gap-4">{children}</div>;
}

function Section({ title, children }: SectionProps) {
	return (
		<div>
			<h3 className="text-lg font-semibold mb-3">{title}</h3>
			{children}
		</div>
	);
}

export function RelatedContent({ children }: RelatedContentProps) {
	return <div className="space-y-6 p-4">{children}</div>;
}

RelatedContent.Section = Section;
RelatedContent.Grid = Grid;
RelatedContent.Item = Item;
