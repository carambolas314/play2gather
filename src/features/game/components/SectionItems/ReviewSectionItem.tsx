// components/ReviewsSection.tsx
import { useTabs, type TabConfig } from "../../hooks/useTabs";

type ReviewsSectionProps = {
	tabs: TabConfig[];
};

export function ReviewsSection({ tabs }: ReviewsSectionProps) {
	const { activeTab, setActiveTab, TabContent } = useTabs({ tabs });

	return (
		<div className="bg-[#644BBF]/25 text-white rounded-xl pt-4 space-y-3 max-w-[670px]">
			<div className="flex gap-3 border-b border-white/20 pb-2 text-sm">
				{tabs.map((tab) => (
					<button
						key={tab.id}
						onClick={() => setActiveTab(tab.id)}
						className={`cursor-pointer ml-9 pb-1 ${
							activeTab?.id === tab.id
								? "text-white font-semibold border-b-2 border-violet-500"
								: "text-white/60 hover:text-white"
						}`}
					>
						{tab.label}
					</button>
				))}
			</div>

			{TabContent}
		</div>
	);
}
