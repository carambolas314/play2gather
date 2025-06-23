import MaxWidthWrapper from "@components/wrappers/MaxWidthWrapper";

const Navbar = () => {
	return (
		<nav className="bg-[#162059] text-white py-6 ">
			<MaxWidthWrapper className="flex justify-between items-center">
				<div className="flex items-center">
					<button className="bg-[#644BBF] text-white font-bold text-lg px-4 py-2 rounded-full">
						Play2Gather
					</button>
				</div>

				<div className="flex space-x-8 text-base">
					<a href="#" className="text-gray-300 hover:text-white">
						Início
					</a>
					<a href="#" className="text-white font-semibold">
						Coleção
					</a>
					<a href="#" className="text-gray-300 hover:text-white">
						Comunidade
					</a>
				</div>

				<div className="flex items-center space-x-4 text-sm">
					<a href="#" className="text-white hover:underline">
						Cadastre-se
					</a>
					<button className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-md">
						Fazer login
					</button>
				</div>
			</MaxWidthWrapper>
		</nav>
	);
};

export default Navbar;
