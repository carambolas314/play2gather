export type GenericPrimaryButtonProps = {
	onClick?: () => void;
	to?: string;
	hasLineGradient?: boolean;
	text: string;
	className?: string;
	as?: React.ElementType;
};

const GenericPrimaryButton: React.FC<GenericPrimaryButtonProps> = ({
	onClick,
	to,
	hasLineGradient = false,
	text,
	className = "",
	as: Component = "button",
}) => {
	const content = (
		<Component
			onClick={onClick}
			className={`z-10 bg-[#6B40E3] border border-[#F0F4FF] hover:bg-[#5734B7] text-white py-2 px-6 rounded-4xl font-medium block ${className}`}
			{...(to ? { to } : {})}
		>
			{text}
		</Component>
	);

	return (
		<div
			className={`flex items-center justify-center w-full ${hasLineGradient ? "relative  my-8" : ""}`}
		>
			{hasLineGradient && (
				<div className="absolute inset-y-5 w-full h-px bg-[radial-gradient(#ffffff_30%,_#2a254b_70%)] opacity-50"></div>
			)}
			{content}
		</div>
	);
};

export default GenericPrimaryButton;
