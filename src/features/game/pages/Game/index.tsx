import GameSectionItem from "../../components/SectionItems/GameSectionItem";
import CommunityAsideItem from "../../components/AsideItems/CommunityAsideItem";
import StoreAsideItem from "../../components/AsideItems/StoreAsideItem";
import AchievementsAsideItem from "../../components/AsideItems/AchievementsAsideItem";
import RelatedGamesAsideItem from "../../components/AsideItems/RelatedGamesAsideItem";

import {
	communityMock,
	storesMock,
	achievementsMock,
	sameDeveloperMock,
	mockPopularLists,
} from "../../mocks";
import MaxWidthWrapper from "@components/wrappers/MaxWidthWrapper";
import { CoverImage } from "@assets/mocks";
import { ReviewsSection } from "@features/game/components/SectionItems/ReviewSectionItem";
import { TABS_CONFIG } from "./TabsConfig";
import PopularLists from "@features/game/components/PopularList";

const Game = () => {
	//const { id } = useParams();

	return (
		<>
			<main className="bg-[#1C1C2E] py-5 flex justify-center pb-[10%] gap-5">
				<MaxWidthWrapper className="flex justify-center items-start">
					<section
						className="flex flex-col pt-10 w-[45%]"
						style={{ gap: "5%" }}
					>
						<GameSectionItem
							title="Stardew Valley"
							subtitle="Jogo base ou DLC"
							image={CoverImage}
							rating={4.5}
							reviews="99+ avaliações"
						/>
						<ReviewsSection tabs={TABS_CONFIG} />
						<PopularLists items={mockPopularLists} />
					</section>
					<aside className="w-[35%] pt-41 max-w-md">
						<CommunityAsideItem
							title={communityMock.title}
							image={communityMock.image}
							usersCount={communityMock.usersCount}
							tags={communityMock.tags}
						/>
						<StoreAsideItem stores={storesMock} />
						<AchievementsAsideItem achievements={achievementsMock} />
						<RelatedGamesAsideItem
							title="Jogos do mesmo desenvolvedor"
							info="Desenvolvidos pelo mesmo estúdio."
							sameDeveloper={sameDeveloperMock}
						/>
						<RelatedGamesAsideItem
							info="Jogos relacionados por tags."
							sameDeveloper={sameDeveloperMock}
						/>
					</aside>
				</MaxWidthWrapper>
			</main>
		</>
	);
};

export default Game;
