import { mdiChevronLeft } from "@mdi/js";
import Icon from "@mdi/react";
import Nav from "../../Nav";
import { Link } from "@tanstack/react-router";
import GroupSettings from "@/components/GroupSettings";

const CreateNav = () => {
	return (
		<Nav>
			<div className="-ml-2 flex h-16 items-center justify-center px-8 text-xl">
				<Link
					to="/"
					className="absolute left-8 flex items-center text-blue-500 hover:text-blue-600"
				>
					<Icon path={mdiChevronLeft} size={1.5} />
					<h1 className=" ">Back</h1>
				</Link>
				<div className="text-2xl">Create a new group</div>
				<GroupSettings />
			</div>
		</Nav>
	);
};

export default CreateNav;
