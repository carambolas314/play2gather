import { Link } from "react-router-dom";
import AsideItem from ".";

export type AchievementsType = {
	id: string;
	gameId: string;
	title: string;
	icon: string;
	link: string;
};

interface AchievementsGridProps {
	achievements: AchievementsType[];
}

const AchievementsGrid = ({ achievements }: AchievementsGridProps) => {
	const maxAchievements = 10;
	const maxAchievementsToShow =
		achievements.length == maxAchievements ? maxAchievements : 9;
	const achievementsToShow = Math.min(
		achievements.length,
		maxAchievementsToShow,
	);
	const sliceStart = achievements.length - achievementsToShow;
	const sliceEnd = achievements.length;
	const achievementsToDisplay = achievements.slice(sliceStart, sliceEnd);

	return (
		<div className="grid grid-cols-5 gap-3 pl-4">
			{achievementsToDisplay.map((achievement, i) => (
				<Link
					to={achievement.link}
					key={achievement.id}
					className="w-[60px]"
					title={achievement.title}
					aria-label={`Conquista ${i + 1}: ${achievement.title}`}
				>
					<img
						src={achievement.icon}
						alt={`Conquista ${i + 1}`}
						className="w-15 h-15 object-contain"
					/>
				</Link>
			))}

			{achievements?.length > maxAchievements && (
				<Link
					to={`/achievements/${achievements[0].gameId}`}
					className="w-[60px] relative z-5"
					title={`Mais conquistas (${achievements.length - 9})`}
					aria-label={`Mais conquistas (${achievements.length - 9})`}
				>
					<img
						src={achievements[10].icon}
						alt="Mais conquistas"
						className="w-[15] h-[15] object-contain filter brightness-40 hover:brightness-100 transition duration-300 ease-in-out rounded-lg"
					/>
					<div className="absolute top-0 left-0 w-[60px] h-[60px] rounded flex items-center justify-center text-white text-sm font-bold z-10">
						{achievements.length - 9}+
					</div>
				</Link>
			)}
		</div>
	);
};

const AchievementsAsideItem = ({ achievements }: AchievementsGridProps) => {
	return (
		<AsideItem padding={0}>
			<AsideItem.Title className="text-left pl-4">Conquistas</AsideItem.Title>
			<AchievementsGrid achievements={achievements} />
		</AsideItem>
	);
};

export default AchievementsAsideItem;
