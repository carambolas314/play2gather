// src/components/Layout.tsx
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

interface LayoutProps {
	children?: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = () => {
	return (
		<div id="layout">
			<div id="inner">
				<Navbar />
				<Outlet />
				<Footer />
			</div>
		</div>
	);
};

export default Layout;
