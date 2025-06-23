import type { TabConfig } from "../../hooks/useTabs";
import { UserReviewCard } from "../../components/ReviewSectionTabs/UserReview";
import { SystemRequirements } from "../../components/ReviewSectionTabs/SystemRequirements";
import { FanGallery } from "../../components/ReviewSectionTabs/FanGallery";

import {
	mockUserReview,
	mockRelatedContent,
	mockSystemRequirements,
	mockFanGallery,
} from "../../mocks";
import { CompoundRelatedContent } from "@features/game/components/ReviewSectionTabs/RelatedContent/RelatedContent";

export const TABS_CONFIG: TabConfig[] = [
	{
		id: 0,
		key: "reviews",
		label: "Avaliações",
		content: (
			<div className="p-4 space-y-4">
				{mockUserReview.map((review) => (
					<UserReviewCard key={review.id} {...review} />
				))}
			</div>
		),
	},
	{
		id: 1,
		key: "related",
		label: "Conteúdo Relacionado",
		content: (
			<CompoundRelatedContent
				lives={mockRelatedContent.lives}
				videos={mockRelatedContent.videos}
				notices={mockRelatedContent.notices}
			/>
		),
	},
	{
		id: 2,
		key: "requirements",
		label: "Requisitos",
		content: (
			<div className="p-4 space-y-6">
				{mockSystemRequirements.map((reqSet, index) => (
					<SystemRequirements key={`${reqSet.note}-${index}`} {...reqSet} />
				))}
			</div>
		),
	},
	{
		id: 3,
		key: "gallery",
		label: "Galeria de fãs",
		content: <FanGallery fanImages={mockFanGallery.fanImages} />,
	},
];
