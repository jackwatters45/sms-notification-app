import {
	RouterProvider,
	Router,
	Route,
	RootRoute,
	NotFoundRoute,
} from "@tanstack/react-router";
import Group from "./components/Group";
import Layout from "./Layout";
import NotFound from "./components/NotFound";
import Home from "./components/Home";
import Login from "./components/Login";
import CreateGroup from "./components/CreateGroup";
import Table from "./components/GroupTable";

const rootRoute = new RootRoute({
	component: Layout,
});

const indexRoute = new Route({
	getParentRoute: () => rootRoute,
	path: "/",
	component: Home,
});

const loginRoute = new Route({
	getParentRoute: () => rootRoute,
	path: "login",
	component: Login,
});

const createRoute = new Route({
	getParentRoute: () => rootRoute,
	path: "create-group",
	component: CreateGroup,
});

const groupRoute = new Route({
	getParentRoute: () => rootRoute,
	path: "group/$groupId",
	component: Group,
});

const notFoundRoute = new NotFoundRoute({
	getParentRoute: () => rootRoute,
	component: NotFound,
});

// TODO -> modal instead of route
const tableRoute = new Route({
	getParentRoute: () => rootRoute,
	path: "table",
	component: Table,
});

const routeTree = rootRoute.addChildren([
	indexRoute,
	loginRoute,
	groupRoute,
	createRoute,
	tableRoute,
]);

const router = new Router({ routeTree, notFoundRoute });

declare module "@tanstack/react-router" {
	interface Register {
		router: typeof router;
	}
}

const Routes = () => {
	return <RouterProvider router={router} />;
};

export default Routes;
