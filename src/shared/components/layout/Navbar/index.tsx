import MaxWidthWrapper from "@components/wrappers/MaxWidthWrapper";
import { useAuth } from "@features/iam/hooks/useAuth";
import { Link, useLocation } from "react-router-dom";
import logo from "../mocks/logo-p2g.svg"
import profile from "../mocks/profile-img.svg"

const Navbar = () => {
	const { isAuthenticated, currentUser } = useAuth();

	const location = useLocation();
	const isLoginRoute = location.pathname === "/login";
	const isRegisterRoute = location.pathname === "/register";

	return (
		<nav className="bg-[#162059] text-white py-6 ">
			<MaxWidthWrapper className="flex justify-between items-center">
				<div className="flex items-center">
					
						<img src={logo} alt="" className="w-22"/>
					
				</div>

				{!isLoginRoute && !isRegisterRoute && (
					<div className="flex space-x-8 text-base">
						<a href="/home" className="text-white hover:text-[#CBE220]">
							Início
						</a>
						<a href="/collection" className="text-white hover:text-[#CBE220]">
							Coleção
						</a>
						<a href="#" className="text-white hover:text-[#CBE220] ">
							Comunidade
						</a>
					</div>
				)}


				{!isAuthenticated && (
					<div className="flex items-center space-x-4 text-sm">
						{!isRegisterRoute && (
							<button className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-md">
								<a href="/register" className="text-white hover:underline">
								Cadastre-se
								</a>
								</button>
							
							
						)}
						{!isLoginRoute && (
							<button className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-md">
								<a href="/login" className="text-white hover:underline">
								Fazer login
								</a>
							</button>
						)}
					</div>
				)}

				{isAuthenticated && currentUser && currentUser.name && (
					<div className="flex items-center space-x-4 text-sm">
			
						<a href="/profile" target="" rel="">
							<img src={profile} alt="" className="w-10 h-10" />
						</a>							
						<a href="/login" className="text-white hover:underline">
							Sair
						</a>
					</div>
				)}
			</MaxWidthWrapper>
		</nav>
	);
};

export default Navbar;
