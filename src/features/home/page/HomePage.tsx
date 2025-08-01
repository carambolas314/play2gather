import React from 'react';


// Dados simulados para a página inicial
const homeData = {
  welcomeMessage: 'Bem vindo de volta Lorenalpsum!',
  friendActivities: [
    { id: 'a1', game: 'HOLLOW KNIGHT', friendName: '@lorenalpsum', status: 'Começou a jogar', gameImageUrl: 'https://cdn.akamai.steamstatic.com/steam/apps/367520/capsule_616x353.jpg' },
    { id: 'a2', game: 'Mario Kart 8', friendName: '@lorenalpsum', status: 'Abandonou', gameImageUrl: 'https://assets.nintendo.com/image/upload/ar_16:9,b_rgb:FFFFFF,c_pad,dpr_2.0,f_auto,q_auto,w_600/b_rgb:none/v1/ncom/en_CA/games/switch/m/mario-kart-8-deluxe-switch/switch-mario-kart-8-deluxe-switch-hero-1' },
    { id: 'a3', game: 'Grand Theft Auto V', friendName: '@lorenalpsum', status: 'Adicionou à coleção', gameImageUrl: 'https://cdn.akamai.steamstatic.com/steam/apps/271590/capsule_616x353.jpg' },
    { id: 'a4', game: 'The Legend of Zelda', friendName: '@lorenalpsum', status: 'Começou a jogar', gameImageUrl: 'https://cdn.akamai.steamstatic.com/steam/apps/1841310/capsule_616x353.jpg' },
    { id: 'a5', game: 'Metroid Dread', friendName: '@lorenalpsum', status: 'Começou a jogar', gameImageUrl: 'https://assets.nintendo.com/image/upload/ar_16:9,b_rgb:FFFFFF,c_pad,dpr_2.0,f_auto,q_auto,w_600/b_rgb:none/v1/ncom/en_CA/games/switch/m/metroid-dread-switch/switch-metroid-dread-switch-hero-1' },
    { id: 'a6', game: 'Hollow Knight: Silksong', friendName: '@lorenalpsum', status: 'Começou a jogar', gameImageUrl: 'https://cdn.akamai.steamstatic.com/steam/apps/1030300/capsule_616x353.jpg' },
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
      {/* Navbar */}
      {/* <Navbar /> */}

      {/* Conteúdo principal da página com largura máxima e centralizado */}
      <div className="max-w-7xl mx-auto p-4 md:p-8">
        
        {/* ----- Cabeçalho de Boas-Vindas ----- */}
        <h1 className="text-3xl font-bold mb-8">
          {homeData.welcomeMessage}
        </h1>

        {/* ----- Seção de Atividade de Amigos ----- */}
        <div className="mb-12">
          <h2 className="text-xl font-bold mb-4">Atividades dos seus amigos</h2>
          <div className="flex space-x-6 overflow-x-auto custom-scrollbar"> {/* Scroll horizontal */}
            {homeData.friendActivities.map(activity => (
              <div key={activity.id} className="flex-shrink-0 w-64 h-80 bg-[#2B2156] rounded-xl shadow-lg overflow-hidden relative">
                <img src={activity.gameImageUrl} alt={activity.game} className="w-full h-3/5 object-cover" />
                <div className="p-4 relative">
                  <div className="flex items-center space-x-2 absolute top-0 transform -translate-y-1/2">
                    <img src="https://via.placeholder.com/48/8B5CF6/FFFFFF?text=P" alt="Perfil" className="w-12 h-12 rounded-full border-2 border-[#2B2156]" />
                    <div>
                      <p className="text-sm font-semibold">{activity.friendName}</p>
                      <p className="text-xs text-gray-400">{activity.status}</p>
                    </div>
                  </div>
                  <h3 className="text-lg font-bold mt-8">{activity.game}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ----- Painel de Comunidade em Destaque ----- */}
        <div className="bg-[#2B2156] p-6 rounded-xl shadow-lg">
          {/* Cabeçalho do Painel da Comunidade */}
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-4">
              <img src={homeData.communityPanel.iconUrl} alt="Ícone da Comunidade" className="w-12 h-12 rounded-full" />
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
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

            {/* Coluna 1: Posts em Destaque */}
            <div>
              <h3 className="text-lg font-bold mb-4">Posts em destaque</h3>
              <div className="space-y-4">
                {homeData.communityPanel.featuredPosts.map(post => (
                  <div key={post.id} className="flex items-start space-x-4">
                    <img src={post.userPic} alt={post.user} className="w-10 h-10 rounded-full flex-shrink-0" />
                    <div>
                      <p className="font-semibold">{post.user} <span className="text-sm text-gray-400 font-normal">jogando</span></p>
                      <p className="text-sm text-gray-300 mt-1 line-clamp-3">{post.content}</p>
                      <div className="flex items-center space-x-4 text-xs text-gray-400 mt-2">
                        <div className="flex items-center space-x-1">
                          {/* Ícone de like (simulado) */}
                          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path d="M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 11-3 0v-6zM6 10.333V15a2 2 0 002 2h2.167a2 2 0 001.665-1.026l5.77-9.584A2 2 0 0015.535 5H13a2 2 0 00-2 2v2.167h-2.167a1.5 1.5 0 01-1.5-1.5v-6z" /></svg>
                          <span>{post.likes}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          {/* Ícone de comentário (simulado) */}
                          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path d="M2 5a2 2 0 012-2h12a2 2 0 012 2v6a2 2 0 01-2 2H8l-4 4V5z" /></svg>
                          <span>{post.comments}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Coluna 2: Videos */}
            <div>
              <h3 className="text-lg font-bold mb-4">Videos</h3>
              <div className="space-y-4">
                {homeData.communityPanel.videos.map(video => (
                  <div key={video.id}>
                    <img src={video.thumbnailUrl} alt={video.title} className="w-full rounded-lg mb-2" />
                    <p className="text-sm font-semibold">{video.title}</p>
                    <p className="text-xs text-gray-400">{video.user}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Coluna 3: Galeria de Fãs */}
            <div>
              <h3 className="text-lg font-bold mb-4">Galeria de Fãs</h3>
              <div className="grid grid-cols-2 gap-2">
                {homeData.communityPanel.fanArt.map(art => (
                  <div key={art.id}>
                    <img src={art.imageUrl} alt="Fan Art" className="w-full rounded-lg mb-1" />
                    <p className="text-xs text-gray-400">{art.user}</p>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
};

export default HomePage;