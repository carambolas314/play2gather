const tagColors = {
	purple: "border-purple-500 text-purple-500",
	yellow: "border-yellow-400 text-yellow-400",
	red: "border-red-500 text-red-500",
};

export type TagItemType = {
	label: string;
	color: "purple" | "yellow" | "red";
} & React.HTMLAttributes<HTMLSpanElement>;

const TagItem = (props: TagItemType) => {
	return (
		<span
			className={`px-3 py-1 text-xs border rounded-full max-w-[120px] truncate ${tagColors[props.color]} ${props.className || ""}`}
			style={{ display: "inline-block", verticalAlign: "middle" }}
			{...props}
		>
			{props.label}
		</span>
	);
};

const TagList = ({
	tags,
	className,
}: {
	tags: TagItemType[];
	className?: string;
}) => {
	return (
		<div className={`flex flex-wrap gap-2 ${className}`} role="presentation">
			{tags?.length > 0 &&
				tags
					.slice(0, 4)
					.map((tag, index) => (
						<TagItem
							key={`${tag.label}-${tag.color}-${index}`}
							label={tag.label}
							color={tag.color}
						/>
					))}
		</div>
	);
};

export { TagItem, TagList };
