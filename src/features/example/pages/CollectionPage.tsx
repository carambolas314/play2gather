// src/pages/CollectionPage.tsx
import React, { useState, useEffect } from 'react';

// Certifique-se de que o caminho e o nome do arquivo estão corretos:
import CustomRangeSlider from '../components/Range_Slider'; // Assumindo o nome do arquivo Range_Slider.tsx


// Definições de tipo (mantidas)
interface Game {
  id: string;
  name: string;
  year: number;
  description: string;
  rating: number; // 1-5 stars
  imageUrl: string;
  platform: string[];
  genre: string[];
  developer: string[];
}

interface Filters {
  dateRange: [number, number]; // [minYear, maxYear]
  platforms: string[];
  genres: string[];
  developers: string[];
}

const CollectionPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filters, setFilters] = useState<Filters>({
    dateRange: [2000, 2025],
    platforms: [],
    genres: [],
    developers: [],
  });
  const [currentPage, setCurrentPage] = useState(1);
  const [games, setGames] = useState<Game[]>([]);
  const [filteredGames, setFilteredGames] = useState<Game[]>([]);
  const gamesPerPage = 12;

  // ESTADOS PARA CONTROLAR A VISIBILIDADE DAS SEÇÕES DE FILTRO
  const [showPlatforms, setShowPlatforms] = useState(true);
  const [showGenres, setShowGenres] = useState(true);
  const [showDevelopers, setShowDevelopers] = useState(true);

  // Dados de jogos simulados (AJUSTADO PARA UM PLACEHOLDER DE IMAGEM MAIS GENÉRICO)
  // O ideal é usar imagens reais ou um placeholder que você controle bem.
  const mockGames: Game[] = Array.from({ length: 50 }).map((_, i) => ({
    id: `game-${i}`,
    name: `Nome do jogo ${i + 1}`, // Mantido o nome simples
    year: 2020 + (i % 6), // Anos entre 2020 e 2025
    description: `Descrição resumida do jogo podendo ocupar no máximo...`, // Descrição padrão
    rating: (i % 5) + 1, // 1 a 5 estrelas
    // Imagem placeholder mais genérica para simular o comportamento da sua imagem
    imageUrl: 'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/413150/capsule_616x353.jpg?t=17111',
    platform: ['PC', 'Playstation 5', 'Xbox', 'Nintendo Switch'][i % 4].split(','),
    genre: ['RPG', 'FPS', 'MOBA', 'Aventura'][i % 4].split(','),
    developer: ['Garena', 'PUBG', 'Corporation', 'Activision', 'Epic Games'][i % 5].split(','),
  }));

  useEffect(() => {
    setGames(mockGames);
  }, []);

  useEffect(() => {
    let tempGames = [...games];
    if (searchTerm) {
      tempGames = tempGames.filter(game =>
        game.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        game.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    tempGames = tempGames.filter(game => {
      const gameYear = game.year;
      const matchesDate = gameYear >= filters.dateRange[0] && gameYear <= filters.dateRange[1];
      const matchesPlatforms = filters.platforms.length === 0 || filters.platforms.some(fp => game.platform.includes(fp));
      const matchesGenres = filters.genres.length === 0 || filters.genres.some(fg => game.genre.includes(fg));
      const matchesDevelopers = filters.developers.length === 0 || filters.developers.some(fd => game.developer.includes(fd));
      return matchesDate && matchesPlatforms && matchesGenres && matchesDevelopers;
    });
    setFilteredGames(tempGames);
    setCurrentPage(1);
  }, [searchTerm, filters, games]);

  const totalPages = Math.ceil(filteredGames.length / gamesPerPage);
  const indexOfLastGame = currentPage * gamesPerPage;
  const indexOfFirstGame = indexOfLastGame - gamesPerPage;
  const currentGames = filteredGames.slice(indexOfFirstGame, indexOfLastGame);

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  const handleFilterChange = (newFilters: Partial<Filters>) => {
    setFilters(prevFilters => ({ ...prevFilters, ...newFilters }));
  };

  const handleDateRangeChange = (newRange: [number, number]) => {
    handleFilterChange({ dateRange: newRange });
  };

  return (
    <div className="min-h-screen bg-[#1C1C2E] text-white font-jost">

      <div className="max-w-7xl mx-auto p-8 pt-4 md:p-10">
        <h1 className="text-3xl font-bold mb-2">Coleção de jogos do Fulano</h1>
        <p className="text-white text-opacity-70 text-lg mb-8">
          Explore sua coleção. Filtre por plataforma, gênero ou ano de lançamento.
        </p>

        <div className="relative mb-6 w-full max-w-lg mx-auto">
          <input
            type="text"
            placeholder="Buscar jogos na coleção"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full p-3 pl-4 rounded-xl bg-[#42397B] text-gray-400 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#6B40E3]"
          />
          <svg
            className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
            />
          </svg>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Painel de Filtros (Coluna Esquerda) */}
          <div className="lg:col-span-1 bg-[#2B2156] p-6 rounded-xl shadow-lg">
            <h2 className="text-xl font-semibold mb-6">Filtrar por:</h2>

            {/* Filtro por Data de Lançamento */}
            <div className="mb-2 pb-4 border-b border-gray-700">
              <label className="block text-white text-lg mb-2">Data de lançamento:</label>
              <CustomRangeSlider
                min={1990}
                max={2025}
                value={filters.dateRange}
                onChange={handleDateRangeChange}
                minLabel={String(filters.dateRange[0])}
                maxLabel={String(filters.dateRange[1])}
              />
            </div>

            {/* Filtro por Plataforma */}
            <div className="mb-2 pt-4 pb-4 border-b border-gray-700">
              <div
                className="flex justify-between items-center cursor-pointer"
                onClick={() => setShowPlatforms(!showPlatforms)}
              >
                <h3 className="text-lg font-medium">Plataforma</h3>
                <svg
                  className={`w-5 h-5 transition-transform duration-300 ${
                    showPlatforms ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </div>
              {showPlatforms && (
                <div className="mt-4"> {/* Removido text-center daqui */}
                  {['Computador', 'Nintendo Switch', 'Xbox', 'Playstation 5'].map(platform => (
                    <label key={platform} className="flex items-center text-white mb-2">
                      <input
                        type="checkbox"
                        checked={filters.platforms.includes(platform)}
                        onChange={(e) => {
                          const newPlatforms = e.target.checked
                            ? [...filters.platforms, platform]
                            : filters.platforms.filter(p => p !== platform);
                          handleFilterChange({ platforms: newPlatforms });
                        }}
                        className="form-checkbox h-5 w-5 text-[#6B40E3] bg-[#42397B] border-gray-400 rounded focus:ring-[#6B40E3]"
                        style={{ accentColor: '#6B40E3' }}
                      />
                      <span className="ml-2">{platform}</span>
                    </label>
                  ))}
                  <button className="text-[#CBE220] text-sm mt-2 hover:underline">Mostrar mais</button>
                </div>
              )}
            </div>

            {/* Filtro por Gênero */}
            <div className="mb-2 pt-4 pb-4 border-b border-gray-700">
              <div
                className="flex justify-between items-center cursor-pointer"
                onClick={() => setShowGenres(!showGenres)}
              >
                <h3 className="text-lg font-medium">Gênero</h3>
                <svg
                  className={`w-5 h-5 transition-transform duration-300 ${
                    showGenres ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </div>
              {showGenres && (
                <div className="mt-4"> {/* Removido text-center daqui */}
                  {['RPG', 'FPS', 'MOBA', 'Aventura'].map(genre => (
                    <label key={genre} className="flex items-center text-white mb-2">
                      <input
                        type="checkbox"
                        checked={filters.genres.includes(genre)}
                        onChange={(e) => {
                          const newGenres = e.target.checked
                            ? [...filters.genres, genre]
                            : filters.genres.filter(g => g !== genre);
                          handleFilterChange({ genres: newGenres });
                        }}
                        className="form-checkbox h-5 w-5 text-[#6B40E3] bg-[#42397B] border-gray-400 rounded focus:ring-[#6B40E3]"
                        style={{ accentColor: '#6B40E3' }}
                      />
                      <span className="ml-2">{genre}</span>
                    </label>
                  ))}
                  <button className="text-[#CBE220] text-sm mt-2 hover:underline">Mostrar mais</button>
                </div>
              )}
            </div>

            {/* Filtro por Desenvolvedora */}
            <div className="pt-4">
              <div
                className="flex justify-between items-center cursor-pointer"
                onClick={() => setShowDevelopers(!showDevelopers)}
              >
                <h3 className="text-lg font-medium">Desenvolvedoras</h3>
                <svg
                  className={`w-5 h-5 transition-transform duration-300 ${
                    showDevelopers ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </div>
              {showDevelopers && (
                <div className="mt-4"> {/* Removido text-center daqui */}
                  {['Garena', 'PUBG', 'Corporation', 'Activision'].map(developer => (
                    <label key={developer} className="flex items-center text-white mb-2">
                      <input
                        type="checkbox"
                        checked={filters.developers.includes(developer)}
                        onChange={(e) => {
                          const newDevelopers = e.target.checked
                            ? [...filters.developers, developer]
                            : filters.developers.filter(d => d !== developer);
                          handleFilterChange({ developers: newDevelopers });
                        }}
                        className="form-checkbox h-5 w-5 text-[#6B40E3] bg-[#42397B] border-gray-400 rounded focus:ring-[#6B40E3]"
                        style={{ accentColor: '#6B40E3' }}
                      />
                      <span className="ml-2">{developer}</span>
                    </label>
                  ))}
                  <button className="text-[#CBE220] text-sm mt-2 hover:underline">Mostrar mais</button>
                </div>
              )}
            </div>
          </div>

          {/* Área de Exibição dos Jogos (Coluna Direita) */}
          <div className="lg:col-span-3">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {currentGames.map(game => (
                <div key={game.id} className="bg-[#ECE9F7] rounded-xl shadow-lg overflow-hidden flex">
                  {/* Imagem do jogo */}
                  {/* Ajustei o placeholder para um cinza claro para simular o comportamento de imagem 'não encontrada' da sua foto */}
                  <img src={game.imageUrl} alt={game.name} className="w-22 h-34 object-cover flex-shrink-0 rounded-[1vw] m-2" />
                  
                  {/* Conteúdo do Card */}
                  <div className="p-4 flex-grow">
                    <h3 className="text-black text-sm font-semibold mb-1">
                      {game.name} ({game.year}) {/* Adicionei o ano aqui */}
                    </h3>
                    <p className="text-black text-sm mb-2 line-clamp-2">
                      {game.description}
                    </p>
                    {/* Estrelas de Avaliação */}
                    <div className="flex text-yellow-400 mb-2">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <svg
                          key={i}
                          className={`h-5 w-5 ${i < game.rating ? 'text-purple-700' : 'text-gray-600'}`}
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.538 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.783.57-1.838-.197-1.538-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.462a1 1 0 00.95-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Paginação */}
            <div className="flex justify-center mt-8 space-x-2">
              {Array.from({ length: totalPages }).map((_, i) => (
                <button
                  key={i + 1}
                  onClick={() => handlePageChange(i + 1)}
                  className={`px-4 py-2 rounded-lg font-semibold ${
                    currentPage === i + 1 ? 'bg-[#6B40E3] text-white' : 'bg-[#42397B] text-gray-300 hover:bg-[#5734B7]'
                  }`}
                >
                  {i + 1}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Seção de Informações Gerais */}
          <div className="mt-12 ">
        <h2 className="text-3xl font-bold mb-4">Informações gerais</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6"> {/* Adicionado 'gap-6' para espaçamento */}
          
          {/* Card de N° de jogos */}
          <div className="bg-[#2B2156] text-[#CBE220] p-6 rounded-xl shadow-lg flex flex-col items-start">
            <img src="./src/features/example/mocks/Game-icon.svg" alt="Número de jogos" className=" w-15 mb-4" />
            <p className=" text-lg font-semibold">N° de jogos</p>
            <p className="text-3xl font-bold">{games.length}</p>
            <p className=" text-sm mt-1">O último jogo adicionado foi há 2 dias</p>
          </div>

          {/* Card de Ano de Lançamento */}
          <div className="bg-[#2B2156] text-[#F28F3B] p-6 rounded-xl shadow-lg flex flex-col items-start">
            <img src="./src/features/example/mocks/calendar-icon.svg" alt="Ano de lançamento" className="w-17 mb-4" />
            <h3 className=" text-lg font-normal">Ano de lançamento</h3>
            <p className="text-3xl font-bold">2020-2025</p>
            <p className=" text-sm mt-1">6 jogos adicionados nos últimos 6 meses</p>
          </div>

          {/* Card de Desenvolvedoras Predominantes */}
          <div className="bg-[#2B2156]  text-[#CBE220] p-6 rounded-xl shadow-lg flex flex-col items-start">
            <img src="./src/features/example/mocks/dev-icon.svg" alt="Desenvolvedoras" className="w-12 mb-4" />
            <h3 className=" text-lg font-normal">Desenvolvedoras predominantes</h3>
            <p className="text-3xl font-bold text-[#CBE220]">Epic Games</p>
            <p className=" text-sm mt-1">Garena, PUBG</p>
            <p className=" text-sm">Corporation e Activision</p>
          </div>

          {/* Card de Gêneros Predominantes */}
          <div className="bg-[#2B2156] text-[#F28F3B] p-6 rounded-xl shadow-lg flex flex-col items-start">
            <img src="./src/features/example/mocks/battle-icon.svg" alt="Gêneros" className="w-15 mb-4" />
            <h3 className="text-lg font-normal">Gêneros Predominantes</h3>
            <p className="text-3xl font-bold text-[#F28F3B]">Battle Royale</p>
            <p className=" text-sm mt-1">RPG, FPS e MOBA</p>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default CollectionPage;