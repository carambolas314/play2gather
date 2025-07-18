import MaxWidthWrapper from "@components/wrappers/MaxWidthWrapper";
import { useAuth } from "@features/iam/hooks/useAuth";
import { useLocation } from "react-router-dom";

const Navbar = () => {
	const { isAuthenticated, currentUser } = useAuth();

	const location = useLocation();
	const isLoginRoute = location.pathname === "/login";
	const isRegisterRoute = location.pathname === "/register";

	return (
		<nav className="bg-[#162059] text-white py-6 ">
			<MaxWidthWrapper className="flex justify-between items-center">
				<div className="flex items-center">
					<button className="bg-[#644BBF] text-white font-bold text-lg px-4 py-2 rounded-full">
						Play2Gather
					</button>
				</div>

				{!isLoginRoute && !isRegisterRoute && (
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
				)}

				{!isAuthenticated && (
					<div className="flex items-center space-x-4 text-sm">
						{!isRegisterRoute && (
							<a href="#" className="text-white hover:underline">
								Cadastre-se
							</a>
						)}
						{!isLoginRoute && (
							<button className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-md">
								Fazer login
							</button>
						)}
					</div>
				)}

				{isAuthenticated && currentUser && currentUser.name && (
					<div className="flex items-center space-x-4 text-sm">
						<span className="text-white">Olá, {currentUser.name}!</span>
						<a href="#" className="text-white hover:underline">
							Sair
						</a>
					</div>
				)}
			</MaxWidthWrapper>
		</nav>
	);
};

export default Navbar;
