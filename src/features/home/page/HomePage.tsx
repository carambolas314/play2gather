import React from 'react';

import {
	mockPopularLists,
} from "../../game/mocks";
import PopularLists from '@features/game/components/PopularList';

// Dados simulados para a página inicial
const homeData = {
  welcomeMessage: 'Bem vindo de volta Lorenalpsum!',
  friendActivities: [
    { id: 'a1', game: 'HOLLOW KNIGHT', friendName: '@lorenalpsum', status: 'Começou a jogar', gameImageUrl: './src/features/home/mocks/game-hollow.svg' },
    { id: 'a2', game: 'Mario Kart 8', friendName: '@lorenalpsum', status: 'Abandonou', gameImageUrl: './src/features/home/mocks/game-mario.svg' },
    { id: 'a3', game: 'Grand Theft Auto V', friendName: '@lorenalpsum', status: 'Adicionou à coleção', gameImageUrl: './src/features/home/mocks/game-gta.svg' },
    { id: 'a4', game: 'The Legend of Zelda', friendName: '@lorenalpsum', status: 'Começou a jogar', gameImageUrl: './src/features/home/mocks/game-zelda.svg' },
    { id: 'a5', game: 'Metroid Dread', friendName: '@lorenalpsum', status: 'Começou a jogar', gameImageUrl: './src/features/home/mocks/game-metroid.svg' },
    { id: 'a6', game: 'Hollow Knight: Silksong', friendName: '@lorenalpsum', status: 'Começou a jogar', gameImageUrl: './src/features/home/mocks/game-hollow2.svg' },
  ],
  communityPanel: {
    title: 'Cabana dos juninos',
    postsCount: 99,
    iconUrl: 'https://via.placeholder.com/60x60/78ED01/000000?text=CJ',
    featuredPosts: [
      { id: 'p1', user: 'NomeUsuário', status: 'jogando', content: 'Todos os seres humanos nascem livres e iguais em dignidade e direitos...', likes: 56, comments: 44, userPic: 'https://via.placeholder.com/48/8B5CF6/FFFFFF' },
      { id: 'p2', user: 'NomeUsuário', status: 'jogando', content: 'Todos os seres humanos nascem livres e iguais em dignidade e direitos...', likes: 56, comments: 44, userPic: 'https://via.placeholder.com/48/8B5CF6/FFFFFF' },
    ],
    videos: [
      { id: 'v1', title: 'Título do vídeo não importa onde', user: 'Nome do canal', thumbnailUrl: 'https://via.placeholder.com/150x100/FFD700/000000?text=Video+1' },
      { id: 'v2', title: 'Título do vídeo não importa onde', user: 'Nome do canal', thumbnailUrl: 'https://via.placeholder.com/150x100/FFD700/000000?text=Video+2' },
      { id: 'v3', title: 'Título do vídeo não importa onde', user: 'Nome do canal', thumbnailUrl: 'https://via.placeholder.com/150x100/FFD700/000000?text=Video+3' },
    ],
    fanArt: [
      { id: 'fa1', user: 'NomeUsuário', imageUrl: 'https://via.placeholder.com/100x100/8B5CF6/FFFFFF?text=FanArt' },
      { id: 'fa2', user: 'NomeUsuário', imageUrl: 'https://via.placeholder.com/100x100/8B5CF6/FFFFFF?text=FanArt' },
      { id: 'fa3', user: 'NomeUsuário', imageUrl: 'https://via.placeholder.com/100x100/8B5CF6/FFFFFF?text=FanArt' },
    ],
  },
};

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#1C1C2E] text-white font-jost">

      {/* Conteúdo principal da página com largura máxima e centralizado */}
      <div className="max-w-7xl mx-auto p-4 md:p-8">
        
        {/* ----- Cabeçalho de Boas-Vindas ----- */}
        <h1 className="text-4xl font-bold mb-12 mt-6">
          {homeData.welcomeMessage}
        </h1>

        {/* ----- Seção de Atividade de Amigos ----- */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Atividades dos seus amigos</h2>
          <div className="flex space-x-6 overflow-x-auto "> {/* Scroll horizontal */}
            {homeData.friendActivities.map(activity => (
              <div key={activity.id} className="flex-shrink-0 w-44 h-full rounded-xl shadow-lg ">
                <img src={activity.gameImageUrl} alt={activity.game} className="w-full h-3/5 object-cover" />
                <div className="p-3 ">
                  <div className="flex items-center space-x-2 ">
                    <img src="./src/features/home/mocks/profile-img.svg" alt="Perfil" className="w-9 rounded-full border-2 border-[#2B2156]" />
                    <div>
                      <p className="text-sm font-semibold">{activity.friendName}</p>
                      <p className="text-xs text-[#CBE220]">{activity.status}</p>
                    </div>
                  </div>
                  
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ----- Painel de Comunidade em Destaque ----- */}
        <div className="bg-[#2B2156] p-6 rounded-xl shadow-lg">
          {/* Cabeçalho do Painel da Comunidade */}
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center space-x-4">
              <img src="../src/features/home/mocks/profile-img.svg" alt="Ícone da Comunidade" className="w-12 h-12 rounded-full" />
              <div>
                <h2 className="text-xl font-bold">{homeData.communityPanel.title}</h2>
                <p className="text-sm text-gray-400">{homeData.communityPanel.postsCount} novos posts</p>
              </div>
            </div>
            <button className="bg-[#6B40E3] hover:bg-[#5734B7] text-white py-2 px-6 rounded-xl font-semibold transition duration-200">
              Visitar comunidade
            </button>
          </div>

          {/* Grid de Conteúdo da Comunidade */}
         
        </div>
          <div className='mt-6'>
              <h2 className="text-2xl font-semibold mb-4">Destaques da sua coleção</h2>
              <div className="mt-12 ">
					<div className="grid grid-cols-1 md:grid-cols-4 gap-6">
						{" "}
						{/* Adicionado 'gap-6' para espaçamento */}
						{/* Card de N° de jogos */}
						<div className="bg-[#2B2156] text-[#CBE220] p-6 rounded-xl shadow-lg flex flex-col items-start">
							<img
								src="./src/features/example/mocks/Game-icon.svg"
								alt="Número de jogos"
								className=" w-15 mb-4"
							/>
							<p className=" text-lg font-semibold">N° de jogos</p>
							<p className="text-3xl font-bold">{}</p>
							<p className=" text-sm mt-1">
								O último jogo adicionado foi há 2 dias
							</p>
						</div>
						{/* Card de Ano de Lançamento */}
						<div className="bg-[#2B2156] text-[#F28F3B] p-6 rounded-xl shadow-lg flex flex-col items-start">
							<img
								src="./src/features/example/mocks/calendar-icon.svg"
								alt="Ano de lançamento"
								className="w-17 mb-4"
							/>
							<h3 className=" text-lg font-normal">Ano de lançamento</h3>
							<p className="text-3xl font-bold">2020-2025</p>
							<p className=" text-sm mt-1">
								6 jogos adicionados nos últimos 6 meses
							</p>
						</div>
						{/* Card de Desenvolvedoras Predominantes */}
						<div className="bg-[#2B2156]  text-[#CBE220] p-6 rounded-xl shadow-lg flex flex-col items-start">
							<img
								src="./src/features/example/mocks/dev-icon.svg"
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
						{/* Card de Gêneros Predominantes */}
						<div className="bg-[#2B2156] text-[#F28F3B] p-6 rounded-xl shadow-lg flex flex-col items-start">
							<img
								src="./src/features/example/mocks/battle-icon.svg"
								alt="Gêneros"
								className="w-15 mb-4"
							/>
							<h3 className="text-lg font-normal">Gêneros Predominantes</h3>
							<p className="text-3xl font-bold text-[#F28F3B]">Battle Royale</p>
							<p className=" text-sm mt-1">RPG, FPS e MOBA</p>
						</div>
					</div>
				</div>
          </div>
          <div className='mt-6'>
              <PopularLists items={mockPopularLists} />
          </div>

      </div>
    </div>
  );
};

export default HomePage;