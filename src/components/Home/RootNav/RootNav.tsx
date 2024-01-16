import { mdiPencilBoxOutline } from "@mdi/js";
import Icon from "@mdi/react";
import Nav from "../../Nav";
import { Link } from "@tanstack/react-router";

const RootNav = () => {
	return (
		<Nav>
			<div className="-ml-2 flex h-16 items-center justify-between px-8 py-4 text-xl">
				<div className="text-3xl">SMS Reminders</div>
				<Link to="create-group" className=" pb-1 text-blue-500 hover:text-blue-600">
					<Icon path={mdiPencilBoxOutline} size={1.2} />
				</Link>
			</div>
		</Nav>
	);
};

export default RootNav;
