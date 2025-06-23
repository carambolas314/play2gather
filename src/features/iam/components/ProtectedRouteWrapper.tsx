import type { PropsWithChildren } from "react";
import { useAuth } from "../hooks/useAuth";
import { Navigate, Outlet } from "react-router-dom";

type ProtectedRouteProps = PropsWithChildren & {
	allowedRole?: string[];
};

const ProtectedRouteWrapper = ({ allowedRole }: ProtectedRouteProps) => {
	const { currentUser, loading } = useAuth();

	if (loading || currentUser === undefined) {
		return (
			<div
				style={{
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
					width: "100%",
					height: "70%",
					position: "absolute",
					top: "15%",
					left: 0,
					zIndex: 100,
				}}
			>
				<div className="spinner-border text-primary" role="status">
					<span className="visually-hidden">Loading...</span>
				</div>
			</div>
		);
	}
	if (
		!currentUser ||
		(allowedRole &&
			!allowedRole.some((role) => currentUser.roles.includes(role)))
	) {
		return <Navigate to={"/home"} />;
	}

	return <Outlet />;
};

export default ProtectedRouteWrapper;
