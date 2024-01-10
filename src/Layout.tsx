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
		<div className="h-screen w-screen flex font-normal text-2xl flex-col ">
			<Outlet />
			<Suspense>
				<TanStackRouterDevtools />
			</Suspense>
		</div>
	);
};

export default Layout;
