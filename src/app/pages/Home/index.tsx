import React from "react";

import { mockPopularLists } from "@features/game/mocks";
import { mockHomeData } from "./mocks";

import PopularLists from "@features/game/components/PopularList";

// TODO: REFACTOR

const Home: React.FC = () => {
	return (
		<div className="min-h-screen bg-[#1C1C2E] text-white font-jost">
			<div className="max-w-7xl mx-auto p-4 md:p-8">
				<h1 className="text-4xl font-bold mb-12 mt-6">
					{mockHomeData.welcomeMessage}
				</h1>

				<div className="mb-12">
					<h2 className="text-2xl font-semibold mb-4">
						Atividades dos seus amigos
					</h2>
					<div className="flex space-x-6 overflow-x-auto ">
						{mockHomeData.friendActivities.map((activity) => (
							<div
								key={activity.id}
								className="flex-shrink-0 w-44 h-full rounded-xl shadow-lg "
							>
								<img
									src={activity.gameImageUrl}
									alt={activity.game}
									className="w-full h-3/5 object-cover"
								/>
								<div className="p-3 ">
									<div className="flex items-center space-x-2 ">
										<img
											src={activity.profileImageUrl}
											alt="Perfil"
											className="w-9 rounded-full border-2 border-[#2B2156]"
										/>
										<div>
											<p className="text-sm font-semibold">
												{activity.friendName}
											</p>
											<p className="text-xs text-[#CBE220]">
												{activity.status}
											</p>
										</div>
									</div>
								</div>
							</div>
						))}
					</div>
				</div>

				<div className="bg-[#2B2156] p-6 rounded-xl shadow-lg">
					<div className="flex items-center justify-between mb-2">
						<div className="flex items-center space-x-4">
							<img
								src={mockHomeData.communityPanel.iconUrl}
								alt="Ícone da Comunidade"
								className="w-12 h-12 rounded-full"
							/>
							<div>
								<h2 className="text-xl font-bold">
									{mockHomeData.communityPanel.title}
								</h2>
								<p className="text-sm text-gray-400">
									{mockHomeData.communityPanel.postsCount} novos posts
								</p>
							</div>
						</div>
						<button className="bg-[#6B40E3] hover:bg-[#5734B7] text-white py-2 px-6 rounded-xl font-semibold transition duration-200">
							Visitar comunidade
						</button>
					</div>
				</div>
				<div className="mt-6">
					<h2 className="text-2xl font-semibold mb-4">
						Destaques da sua coleção
					</h2>
					<div className="mt-12 ">
						<div className="grid grid-cols-1 md:grid-cols-4 gap-6">
							<div className="bg-[#2B2156] text-[#CBE220] p-6 rounded-xl shadow-lg flex flex-col items-start">
								<img
									src="./src/assets/icons/game-icon.svg"
									alt="Número de jogos"
									className=" w-15 mb-4"
								/>
								<p className=" text-lg font-semibold">N° de jogos</p>
								<p className="text-3xl font-bold">{}</p>
								<p className=" text-sm mt-1">
									O último jogo adicionado foi há 2 dias
								</p>
							</div>
							<div className="bg-[#2B2156] text-[#F28F3B] p-6 rounded-xl shadow-lg flex flex-col items-start">
								<img
									src="./src/assets/icons/calendar-icon.svg"
									alt="Ano de lançamento"
									className="w-17 mb-4"
								/>
								<h3 className=" text-lg font-normal">Ano de lançamento</h3>
								<p className="text-3xl font-bold">2020-2025</p>
								<p className=" text-sm mt-1">
									6 jogos adicionados nos últimos 6 meses
								</p>
							</div>
							<div className="bg-[#2B2156]  text-[#CBE220] p-6 rounded-xl shadow-lg flex flex-col items-start">
								<img
									src="src/assets/icons/dev-icon.svg"
									alt="Desenvolvedoras"
									className="w-12 mb-4"
								/>
								<h3 className=" text-lg font-normal">
									Desenvolvedoras predominantes
								</h3>
								<p className="text-3xl font-bold text-[#CBE220]">Epic Games</p>
								<p className=" text-sm mt-1">Garena, PUBG</p>
								<p className=" text-sm">Corporation e Activision</p>
							</div>
							<div className="bg-[#2B2156] text-[#F28F3B] p-6 rounded-xl shadow-lg flex flex-col items-start">
								<img
									src="src/assets/icons/battle-icon.svg"
									alt="Gêneros"
									className="w-15 mb-4"
								/>
								<h3 className="text-lg font-normal">Gêneros Predominantes</h3>
								<p className="text-3xl font-bold text-[#F28F3B]">
									Battle Royale
								</p>
								<p className=" text-sm mt-1">RPG, FPS e MOBA</p>
							</div>
						</div>
					</div>
				</div>
				<div className="mt-6">
					<PopularLists items={mockPopularLists} />
				</div>
			</div>
		</div>
	);
};

export default Home;
