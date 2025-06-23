import type { HTMLAttributes, PropsWithChildren } from "react";

const MaxWidthWrapper = (
	props: PropsWithChildren & HTMLAttributes<HTMLDivElement>,
) => {
	return (
		<div className={`w-full max-w-[85%] mx-auto ${props.className || ""}`}>
			{props.children}
		</div>
	);
};

export default MaxWidthWrapper;
