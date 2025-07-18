const Register = () => {
	return (
		<div className="min-h-screen bg-[#1C1C2E] flex items-center justify-center font-jost">
			{/* Card de Registro centralizado */}
			<div className="bg-[#2B2156] mt-16 mb-32 p-8 md:p-10 rounded-2xl shadow-2xl w-full max-w-md mx-auto">
				{/* Top section: Arrow back and progress bar */}
				<div className="flex mb-6 flex-col">
					<div className="w-1/2 h-2 bg-gray-600 rounded-full self-center">
						<div className="w-1/3 h-full bg-[#CBE220] rounded-full"></div>{" "}
						{/* Exemplo de progresso 1/3 */}
					</div>
					<button className="text-white text-3xl self-baseline">
						&larr; {/* Flecha para a esquerda */}
					</button>
				</div>

				{/* Title and Description */}
				<h1 className="text-white text-3xl font-bold mb-2">
					Crie uma nova conta!
				</h1>
				<p className="text-white text-opacity-70 text-base mb-8">
					Organize a coleção e visite a comunidade de seus jogos!
				</p>

				{/* Form Fields */}
				<div className="mb-3">
					<label htmlFor="username" className="block text-white text-lg mb-2 ">
						Nome de Usuário
					</label>
					<input
						type="text"
						id="username"
						placeholder="Seu nome de Usuário"
						className="w-full p-4 rounded-lg bg-[#42397B] text-gray-500 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#6B40E3]"
					/>
				</div>

				<div className="mb-3">
					<label htmlFor="password" className="block text-white text-lg mb-2 ">
						Senha
					</label>
					<input
						type="password"
						id="password"
						placeholder="Mínimo 8 caracteres"
						className="w-full p-4 rounded-lg bg-[#42397B] text-gray-500 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#6B40E3]"
					/>
				</div>

				<div className="mb-6">
					<label htmlFor="email" className="block text-white text-lg mb-2">
						Email
					</label>
					<input
						type="email"
						id="email"
						placeholder="Seu email"
						className="w-full p-4 rounded-lg bg-[#42397B] text-gray-500 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#6B40E3]"
					/>
				</div>

				{/* Continue with Email Button */}
				<button className="w-full bg-[#6B40E3] hover:bg-[#5734B7] text-white font-semibold py-4 rounded-xl mb-6 transition duration-200">
					Continuar com Email
				</button>

				{/* Or register with section */}
				<p className="text-white text-opacity-70 text-center mb-4">
					Ou se registre com
				</p>

				{/* Social Media Icons */}
				<div className="flex justify-center gap-4">
					{/* Substitua por SVGs ou componentes de ícone reais */}
					<button className="bg-white rounded-full p-3 flex items-center justify-center shadow-lg hover:scale-105 transition duration-200">
						<img
							src="https://img.icons8.com/color/48/000000/google-logo.png"
							alt="Google"
							className="h-6 w-6"
						/>
					</button>
					<button className="bg-white rounded-full p-3 flex items-center justify-center shadow-lg hover:scale-105 transition duration-200">
						<img
							src="https://img.icons8.com/color/48/000000/facebook-new.png"
							alt="Facebook"
							className="h-6 w-6"
						/>
					</button>
					<button className="bg-white rounded-full p-3 flex items-center justify-center shadow-lg hover:scale-105 transition duration-200">
						<img
							src="https://img.icons8.com/ios-filled/50/000000/twitterx--v1.png"
							alt="Twitter X"
							className="h-6 w-6"
						/>
					</button>
				</div>
			</div>
		</div>
	);
};
export default Register;
