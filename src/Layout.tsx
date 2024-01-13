import { Suspense, lazy } from "react";
import { Outlet } from "@tanstack/react-router";

const TanStackRouterDevtools =
	import.meta.env.NODE_ENV === "production"
		? () => null
		: lazy(() =>
				import("@tanstack/router-devtools").then((res) => ({
					default: res.TanStackRouterDevtools,
				})),
			);

const Layout = () => {
	return (
		<div className="flex h-screen w-screen flex-col text-2xl font-normal ">
			<Outlet />
			<Suspense>
				<TanStackRouterDevtools />
			</Suspense>
		</div>
	);
};

export default Layout;
