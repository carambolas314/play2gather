import { BellIcon, LogoP2G, ProfileIcon } from "@assets/index";
import MaxWidthWrapper from "@components/wrappers/MaxWidthWrapper";
import { useAuth } from "@features/iam/hooks/useAuth";
import type { UserProfile } from "@features/iam/types";
import { Link, useLocation, useNavigate } from "react-router-dom";

const CustomNavLink = ({
	to,
	children,
	isActive,
}: {
	to: string;
	children: React.ReactNode;
	isActive: boolean;
}) => {
	return (
		<Link
			to={to}
			className={`hover:text-white ${
				isActive ? "underline text-[#CBE220]" : "text-gray-300"
			}`}
		>
			{children}
		</Link>
	);
};

const UserAuthSkeleton = () => (
	<div className="flex items-center space-x-4 text-sm">
		<div className="w-24 h-4 bg-gray-500/40 rounded animate-pulse"></div>
		<div className="w-8 h-8 bg-gray-500/40 rounded-full animate-pulse"></div>
	</div>
);

const AuthenticatedUserActions = ({
	currentUser,
	handleLogout,
}: {
	currentUser: UserProfile;
	handleLogout: () => void;
}) => {
	const location = useLocation(); // Presumindo que você usa react-router-dom

	return (
		<div className="flex items-center space-x-4 text-sm">
			<span className="text-white">Olá, {currentUser.name}!</span>
			<CustomNavLink to="/profile" isActive={location.pathname === "/profile"}>
				<ProfileIcon />
			</CustomNavLink>
			<BellIcon />
			<button className="text-white hover:underline" onClick={handleLogout}>
				Sair
			</button>
		</div>
	);
};

const GuestUserActions = ({
	isLoginRoute,
	isRegisterRoute,
}: {
	isLoginRoute: boolean;
	isRegisterRoute: boolean;
}) => (
	<div className="flex items-center space-x-4 text-sm">
		{!isRegisterRoute && (
			<Link to="/register" className="text-white hover:underline">
				Cadastre-se
			</Link>
		)}
		{!isLoginRoute && (
			<Link
				to="/login"
				className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-md"
			>
				Fazer login
			</Link>
		)}
	</div>
);

const Navbar = () => {
	const { currentUser, logout, isAuthenticated, loading, isInitialized } =
		useAuth();
	const isLoginRoute = window.location.pathname === "/login";
	const isRegisterRoute = window.location.pathname === "/register";
	const navigate = useNavigate();

	const handleLogout = async () => {
		await logout();
		navigate("/login");
	};

	const renderUserActions = () => {
		if (loading || !isInitialized) {
			return <UserAuthSkeleton />;
		}

		if (isAuthenticated && currentUser?.name) {
			return (
				<AuthenticatedUserActions
					currentUser={currentUser}
					handleLogout={handleLogout}
				/>
			);
		}
		if (!isAuthenticated && !loading) {
			return (
				<GuestUserActions
					isLoginRoute={isLoginRoute}
					isRegisterRoute={isRegisterRoute}
				/>
			);
		}
		return <UserAuthSkeleton />;
	};

	return (
		<nav className="bg-[#162059] text-white py-2">
			<MaxWidthWrapper className="flex justify-between items-center">
				<div className="flex items-center">
					<Link to={"/home"}>
						<LogoP2G width={125} height={80} />
					</Link>
				</div>
				{!isLoginRoute && !isRegisterRoute && (
					<div className="flex space-x-8 text-base">
						<CustomNavLink to="/home" isActive={location.pathname === "/home"}>
							Início
						</CustomNavLink>
						<CustomNavLink
							to="/collection"
							isActive={location.pathname === "/collection"}
						>
							Coleção
						</CustomNavLink>
						<CustomNavLink
							to="/community"
							isActive={location.pathname === "/community"}
						>
							Comunidade
						</CustomNavLink>
					</div>
				)}
				{renderUserActions()}
			</MaxWidthWrapper>
		</nav>
	);
};

export default Navbar;
