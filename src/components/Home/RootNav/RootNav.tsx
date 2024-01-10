import { mdiPencilBoxOutline } from "@mdi/js";
import Icon from "@mdi/react";
import Nav from "../../Nav";
import { Link } from "@tanstack/react-router";

const RootNav = () => {
	return (
		<Nav>
			<div className="flex justify-between items-center px-8 py-4 -ml-2 text-xl">
				<div className="text-3xl">SMS Reminders</div>
				<Link to="create" className=" text-blue-500 pb-1">
					<Icon path={mdiPencilBoxOutline} size={1.2} />
				</Link>
			</div>
		</Nav>
	);
};

export default RootNav;
