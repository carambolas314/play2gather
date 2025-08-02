// src/components/RegisterStep3.tsx
import React, { useState } from "react";
import type { RegisterUserFormValues } from "./RegisterFlow";
import type { Control, UseFormGetValues } from "react-hook-form";

const ProgressBar: React.FC<{ current: number; total: number }> = ({
	current,
	total,
}) => {
	const progressWidth = (current / total) * 100;
	return (
		<div className="w-1/2 h-2 bg-gray-600 rounded-full self-center">
			<div
				className="h-full bg-[#CBE220] rounded-full transition-all duration-500"
				style={{ width: `${progressWidth}%` }}
			></div>
		</div>
	);
};

// Interface para as props deste componente
interface RegisterStep3Props {
	onSubmit: (data: { favoriteGames: string[] }) => void; // Espera um array de strings
	onPrevious: () => void;
	control: Control<RegisterUserFormValues>;
	getValues: UseFormGetValues<RegisterUserFormValues>;
}

const allGames = [
	{
		title: "Harvest Moon",
		category: "Simulação",
		imageUrl: "https://via.placeholder.com/100x100/6B40E3/FFFFFF?text=HM",
	},
	{
		title: "Farmville",
		category: "Simulação",
		imageUrl: "https://via.placeholder.com/100x100/6B40E3/FFFFFF?text=FV",
	},
	{
		title: "Animal Crossing",
		category: "Simulação",
		imageUrl: "https://via.placeholder.com/100x100/6B40E3/FFFFFF?text=AC",
	},
	{
		title: "Stardew Valley",
		category: "Simulação",
		imageUrl: "https://via.placeholder.com/100x100/6B40E3/FFFFFF?text=SDV",
	},
	{
		title: "Terraria",
		category: "Aventura",
		imageUrl: "https://via.placeholder.com/100x100/6B40E3/FFFFFF?text=TR",
	},
	{
		title: "Minecraft",
		category: "Aventura",
		imageUrl: "https://via.placeholder.com/100x100/6B40E3/FFFFFF?text=MC",
	},
	{
		title: "Valheim",
		category: "Sobrevivência",
		imageUrl: "https://via.placeholder.com/100x100/6B40E3/FFFFFF?text=VH",
	},
	{
		title: "Among Us",
		category: "Casual",
		imageUrl: "https://via.placeholder.com/100x10E3/FFFFFF?text=AU",
	},
	// Adicione mais jogos conforme necessário para testar as categorias
];

const RegisterStep3: React.FC<RegisterStep3Props> = ({
	onSubmit,
	onPrevious,
}) => {
	const [searchTerm, setSearchTerm] = useState("");
	const [selectedGames, setSelectedGames] = useState<string[]>([]);

	// Dados simulados de jogos e categorias - SUBSTITUA PELOS SEUS DADOS REAIS OU CHAME UMA API

	// Filtra e agrupa os jogos por categoria
	const filteredAndGroupedGames = React.useMemo(() => {
		const filtered = allGames.filter((game) =>
			game.title.toLowerCase().includes(searchTerm.toLowerCase()),
		);
		return filtered.reduce(
			(acc, game) => {
				if (!acc[game.category]) {
					acc[game.category] = [];
				}
				acc[game.category].push(game);
				return acc;
			},
			{} as Record<string, typeof allGames>,
		); // Tipagem para o objeto agrupado
	}, [searchTerm]);

	const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setSearchTerm(event.target.value);
	};

	const toggleGameSelection = (gameTitle: string) => {
		if (selectedGames.includes(gameTitle)) {
			setSelectedGames(selectedGames.filter((game) => game !== gameTitle));
		} else if (selectedGames.length < 3) {
			setSelectedGames([...selectedGames, gameTitle]);
		} else {
			alert("Você pode escolher até três jogos.");
		}
	};

	const handleFinishRegistration = () => {
		onSubmit({ favoriteGames: selectedGames });
	};

	return (
		<div className="bg-[#2B2156] mt-16 mb-32 p-8 md:p-10 rounded-2xl shadow-2xl w-full max-w-lg mx-auto overflow-hidden">
			{/* Top section: Arrow back and progress bar */}
			<div className="flex mb-8 flex-col">
				<ProgressBar current={3} total={3} />
				<button
					onClick={onPrevious}
					className="text-white text-3xl self-baseline mt-1"
				>
					&larr;
				</button>
			</div>

			{/* Title */}
			<h1 className="text-white text-2xl text-center font-bold mb-4">
				Quais os seus jogos favoritos?
			</h1>

			{/* Search Bar */}
			<div className="relative mb-6">
				<input
					type="text"
					placeholder="Buscar jogos"
					value={searchTerm}
					onChange={handleSearchChange}
					className="w-full p-3 pl-4 rounded-xl bg-[#42397B] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#6B40E3]"
				/>
				{/* Ícone de Lupa - SVG inline com className COMBINADO */}
				<svg
					className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" // TODAS AS CLASSES AQUI
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

			{/* Game Categories Section - Scrolling for long lists */}
			<div className="max-h-[300px] overflow-y-auto pr-2 custom-scrollbar">
				{Object.entries(filteredAndGroupedGames).map(
					([categoryName, games]) => (
						<div key={categoryName} className="mb-6 last:mb-0">
							<h2 className="text-white text-xl font-semibold mb-3">
								{categoryName}
							</h2>
							<div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-4">
								{games.map((game) => (
									<button
										key={game.title}
										onClick={() => toggleGameSelection(game.title)}
										className={`relative rounded-md overflow-hidden group focus:outline-none focus:ring-2 focus:ring-[#6B40E3] transition duration-200
                              ${selectedGames.includes(game.title) ? "border-2 border-[#CBE220]" : ""}`}
									>
										<img
											src={game.imageUrl}
											alt={game.title}
											className="w-full h-auto block"
										/>
										{/* Overlay para o título, fica visível apenas no hover ou selecionado */}
										<div
											className={`absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 p-1 text-center text-white text-xs font-semibold
                                  group-hover:opacity-100 ${selectedGames.includes(game.title) ? "opacity-100" : "opacity-0"}`}
										>
											{game.title}
										</div>
										{/* Ícone de seleção */}
										{selectedGames.includes(game.title) && (
											<div className="absolute top-1 right-1 bg-[#CBE220] text-black rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold">
												✓
											</div>
										)}
									</button>
								))}
							</div>
						</div>
					),
				)}
			</div>

			{/* Finish Button */}
			<button
				onClick={handleFinishRegistration}
				disabled={selectedGames.length === 0}
				className={`w-full bg-[#6B40E3] hover:bg-[#5734B7] text-white font-semibold py-4 rounded-xl transition duration-200 mt-8
                    ${selectedGames.length === 0 ? "opacity-50 cursor-not-allowed" : ""}`}
			>
				Escolha até três para concluir
			</button>
		</div>
	);
};

export default RegisterStep3;
