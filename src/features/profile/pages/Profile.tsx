import { FanGallery } from "@features/game/components/ReviewSectionTabs/FanGallery";

import { mockFanGallery } from "@features/game/mocks";
import { FriendsList } from "../components/FriendsSection/FriendsList";
import { Link } from "react-router-dom";
import GenericPrimaryButton from "@components/ui/Button/GenericPrimaryButton";
import AsideItem from "@features/game/components/AsideItems";
import {
	communitysMock,
	mockUserReview,
	userFriendsMock,
	userProfileMock,
} from "../mocks";
import { useAuth } from "@features/iam/hooks/useAuth";
import GameReviewCardList from "../components/GameReviewCard/GameReviewCardList";

const ProfilePage: React.FC = () => {
	const { currentUser } = useAuth();

	return (
		<div className="min-h-screen bg-[#1C1C2E] text-white font-jost">
			<div className="max-w-7xl mx-auto p-6 md:p-12">
				<div className="relative mb-12">
					<div
						className="w-full h-48 bg-cover bg-center rounded-2xl"
						style={{ backgroundImage: `url(${userProfileMock.bannerUrl})` }}
					></div>
					<div className="absolute top-32 left-8 flex items-end">
						<img
							src={userProfileMock.profilePicUrl}
							alt="Foto de Perfil"
							className="w-36 h-36 rounded-full border-4 border-[#2B2156] bg-[#2B2156]"
						/>
						<div className="ml-4 mb-8">
							<h1 className="text-3xl font-bold">@{currentUser?.name}</h1>
							<div className="bg-[#EAF3A6] rounded-lg mb-2">
								<p className="text-black text-opacity-70 mt-1 ml-3 mr-3">
									{userProfileMock.bio}
								</p>
							</div>

							<div className=" flex justify-start space-x-6">
								<button className="text-[#CBE220] font-semibold pb-1 border-b-2 border-[#CBE220]">
									Perfil
								</button>
								<button className="text-white text-opacity-70 hover:text-[#CBE220]">
									Coleção
								</button>
								<button className="text-white text-opacity-70 hover:text-[#CBE220]">
									Listas
								</button>
								<button className="text-white text-opacity-70 hover:text-[#CBE220]">
									Favoritos
								</button>
								<button className="text-white text-opacity-70 hover:text-[#CBE220]">
									Assinatura
								</button>
							</div>
						</div>
					</div>
				</div>

				<div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
					<div className="lg:col-span-3 bg-[#644BBF]/20 rounded-xl p-1 mt-12">
						<div className="p-4">
							<AsideItem.Title
								autoMargin={false}
								className="text-left text-2xl font-semibold mb-2"
							>
								Comunidades
							</AsideItem.Title>
							<div className="flex space-x-4 overflow-x-auto custom-scrollbar">
								{communitysMock.map((community) => (
									<div
										key={community.id}
										className="flex-shrink-0 w-64 relative rounded-xl overflow-hidden"
									>
										<img
											src={community.imageUrl}
											alt={community.name}
											className="w-full h-24 object-cover"
										/>
									</div>
								))}
							</div>
						</div>
						<div className="p-2">
							<AsideItem.Title
								autoMargin={false}
								className="text-left pl-2 text-2xl font-semibold mb-2"
							>
								Ultimas Reviews
							</AsideItem.Title>
							<GameReviewCardList userReviews={mockUserReview} />
							<GenericPrimaryButton
								text="Mostrar mais"
								hasLineGradient
								as={Link}
								to="/reviews"
							/>
							<AsideItem.Title
								autoMargin={false}
								className="text-left pl-4 text-2xl font-semibold mb-1"
							>
								Galery
							</AsideItem.Title>
							<FanGallery
								fanImages={mockFanGallery.fanImages.slice(0, 6)}
							></FanGallery>
						</div>
					</div>
					<FriendsList friends={userFriendsMock} />
				</div>
			</div>
		</div>
	);
};

export default ProfilePage;
