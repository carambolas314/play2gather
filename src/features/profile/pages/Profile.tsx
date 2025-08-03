import React from "react";
import like from "../mocks/like.svg";
import coments from "../mocks/coments.svg";
import { FanGallery } from "@features/game/components/ReviewSectionTabs/FanGallery";

import { mockFanGallery } from "@features/game/mocks";
import { ProfileIcon } from "@assets/mocks";

// Dados de perfil simulados
const profileData = {
	username: "Lorenalpsum",
	bio: "Imagina que louco... O Natal cair numa sexta-feira 13? Se sentindo pensativa",
	profilePicUrl:
		"https://fiverr-res.cloudinary.com/images/q_auto,f_auto/gigs/134461590/original/a3de5a6800cc304d2ff7d663b493449f13e12f95/make-you-a-pixel-art-profile-picture.png",
	bannerUrl: "../src/features/profile/mocks/banner-profile.svg",
	friendsCount: 100,
	friends: [
		{ id: "f1", name: "CyberNinja", profilePic: ProfileIcon },
		{ id: "f2", name: "PixelPanda", profilePic: ProfileIcon },
		{ id: "f3", name: "StarGamer", profilePic: ProfileIcon },
		{ id: "f4", name: "NovaPhoenix", profilePic: ProfileIcon },
		{ id: "f5", name: "TechWiz", profilePic: ProfileIcon },
		{ id: "f6", name: "MysticBard", profilePic: ProfileIcon },
		{ id: "f7", name: "Ghost_Reaper", profilePic: ProfileIcon },
		{ id: "f8", name: "Luna_Blaze", profilePic: ProfileIcon },
	],

	communities: [
		{
			id: "c1",
			name: "CABANA DOS JUNIMOS",
			imageUrl: "../src/features/profile/mocks/cabana-comunidade.svg",
		},
		{
			id: "c2",
			name: "Hollow Knight",
			imageUrl: "../src/features/profile/mocks/hollow-comunidade.svg",
		},
		{
			id: "c3",
			name: "Stardew Valley",
			imageUrl: "../src/features/profile/mocks/mine-comunidade.svg",
		},
	],
	reviews: [
		{
			id: "r1",
			gameTitle: "Minecraft",
			textcolor: "#E96745",
			gaming: "Jogando",
			gameImageUrl: "../src/features/profile/mocks/mine-review.svg",
			date: "09/06/2099",
			reviewText:
				"Todos os seres humanos nascem livres e iguais em dignidade e direitos. São dotados de razão e consciência e devem agir em relação uns aos outros com espírito de fraternidade. Todos os seres humanos nascem livres e iguais em dignidade e direitos. São dotados de razão e consciência e devem agir em relação uns aos outros com espírito de fraternidade.",
		},
		{
			id: "r2",
			gameTitle: "Nome do jogo",
			textcolor: "#CBE220",
			gaming: "Jogo completo",
			gameImageUrl: "../src/features/profile/mocks/mario-review.svg",
			date: "09/06/2099",
			reviewText:
				"Todos os seres humanos nascem livres e iguais em dignidade e direitos. São dotados de razão e consciência e devem agir em relação uns aos outros com espírito de fraternidade. Todos os seres humanos nascem livres e iguais em dignidade e direitos. São dotados de razão e consciência e devem agir em relação uns aos outros com espírito de fraternidade.",
		},
	],
};

// TODO: REFACTOR

const ProfilePage: React.FC = () => {
	return (
		<div className="min-h-screen bg-[#1C1C2E] text-white font-jost">
			{/* Navbar - Descomente se for usar */}
			{/* <Navbar /> */}

			{/* Conteúdo principal da página com largura máxima e centralizado */}
			<div className="max-w-7xl mx-auto p-6 md:p-12">
				{/* ----- Seção de Cabeçalho do Perfil ----- */}
				<div className="relative mb-12">
					{/* Banner */}
					<div
						className="w-full h-48 bg-cover bg-center rounded-2xl"
						style={{ backgroundImage: `url(${profileData.bannerUrl})` }}
					></div>

					{/* Info do Perfil */}
					<div className="absolute top-32 left-8 flex items-end">
						<img
							src={profileData.profilePicUrl}
							alt="Foto de Perfil"
							className="w-36 h-36 rounded-full border-4 border-[#2B2156] bg-[#2B2156]"
						/>
						<div className="ml-4 mb-8">
							<h1 className="text-3xl font-bold">@{profileData.username}</h1>
							<div className="bg-[#EAF3A6] rounded-lg mb-2">
								<p className="text-black text-opacity-70 mt-1 ml-3 mr-3">
									{profileData.bio}
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

				{/* ----- Layout de 2 Colunas para o Conteúdo Principal ----- */}
				<div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
					{/* Coluna Principal (Esquerda - Comunidades e Reviews) */}
					<div className="lg:col-span-3 bg-[#644BBF]/20 rounded-xl p-4 mt-12">
						{/* ----- Seção de Comunidades ----- */}
						<div className=" ">
							<h2 className="text-2xl font-semibold mb-4">Comunidades</h2>
							<div className="flex space-x-4 overflow-x-auto custom-scrollbar">
								{" "}
								{/* overflow-x-auto para scroll horizontal */}
								{profileData.communities.map((community) => (
									<div
										key={community.id}
										className="flex-shrink-0 w-64 h-36 relative rounded-xl overflow-hidden"
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

						{/* ----- Seção de Últimas Reviews ----- */}
						<div className="mb-8">
							<h2 className="text-2xl font-semibold">Últimas reviews</h2>
							<div className="mt-4">
								{profileData.reviews.map((review) => (
									<div
										key={review.id}
										className=" p-2 rounded-xl flex items-start space-x-4"
									>
										<img
											src={review.gameImageUrl}
											alt={review.gameTitle}
											className="w-35 h-full object-cover rounded-lg flex-shrink-0"
										/>
										<div className="flex-grow">
											<div className="flex justify-between items-center mb-2">
												<h3 className="text-white text-xl font-semibold">
													{review.gameTitle}
												</h3>
											</div>
											<div>
												<p className={`text-xs text-[${review.textcolor}]`}>
													● {review.gaming}
												</p>
											</div>
											<span className="text-xs">
												Publicado em {review.date}
											</span>

											<p className=" text-sm mb-4 text-justify">
												{review.reviewText}
											</p>
											<div className="flex items-center space-x-4 text-gray-400 text-sm">
												<div className="flex items-center space-x-1">
													{/* Ícone de like (simulado) */}
													<img src={like} alt="" className="w-5" />
													<span>56</span>
												</div>
												<div className="flex items-center space-x-1">
													{/* Ícone de comentário (simulado) */}
													<img src={coments} alt="" className="w-4" />
													<span>99</span>
												</div>
											</div>
										</div>
									</div>
								))}
							</div>
							<div className="relative flex items-center justify-center w-full my-8">
								{/* Linha de separação que desvanece */}
								<div className="absolute inset-y-5 w-full h-px bg-white opacity-50"></div>
								<button className="relative z-10 bg-[#6B40E3] border border-[#F0F4FF] hover:bg-[#5734B7] text-white py-2 px-6 rounded-4xl font-medium  mx-auto block">
									Mostrar mais
								</button>
							</div>
						</div>
						<div className="mt-8">
							<h2 className="text-2xl font-bold mb-4">Galeria</h2>
							<FanGallery fanImages={mockFanGallery.fanImages}></FanGallery>
						</div>
					</div>
					<div className="lg:col-span-1">
						<div className="bg-[#644BBF]/20 p-2 rounded-xl">
							<h2 className="text-2xl font-semibold mb-4 text-center">
								Amigos ({profileData.friendsCount})
							</h2>
							<div className="space-y-2 ">
								{profileData.friends.map((friend) => (
									<div
										key={friend.id}
										className="flex items-center space-x-1 bg-[#644BBF]/30 rounded-lg p-2"
									>
										<img
											src={friend.profilePic}
											alt="Foto de Perfil"
											className="w-6 rounded-full"
										/>
										<p className="text-white">{friend.name}</p>
									</div>
								))}
							</div>
							<button className="bg-[#6B40E3] border border-[#F0F4FF] hover:bg-[#5734B7] rounded-4xl text-white py-2 px-6 font-medium mt-6 mx-auto block">
								Mostrar mais
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ProfilePage;
