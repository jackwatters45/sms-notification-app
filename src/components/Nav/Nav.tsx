import { mdiChevronLeft } from "@mdi/js";
import Icon from "@mdi/react";

// TODO make input actually centers
const Nav = () => {
	return (
		<nav className="flex justify-between py-1 -ml-2">
			<div className="flex items-center">
				<Icon path={mdiChevronLeft} size={1.5} color={"#3b82f6"} />
				<h1 className="text-blue-500 text-lg">SMS Reminders</h1>
			</div>
			<input type="text" value={"Allow user to edit name"} />
			<div className="text-blue-500 text-lg">Logout</div>
		</nav>
	);
};

export default Nav;
