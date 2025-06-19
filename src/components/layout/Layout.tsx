// src/components/Layout.tsx
import { Outlet } from "react-router-dom";

interface LayoutProps {
	children?: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = () => {
	return (
		<div id="layout">
			<div id="inner">
				<nav>Navbar</nav>
				<main>
					<Outlet />
				</main>
				<footer>Footer</footer>
			</div>
		</div>
	);
};

export default Layout;
