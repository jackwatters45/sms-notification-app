import { mdiChevronLeft } from "@mdi/js";
import Icon from "@mdi/react";
import Nav from "../../Nav";
import { Link } from "@tanstack/react-router";

const CreateNav = () => {
	return (
		<Nav>
			<div className="-ml-2 flex h-16 items-center justify-center px-8 text-xl">
				<Link to="/" className="absolute left-8 flex items-center">
					<Icon path={mdiChevronLeft} size={1.5} color={"#3b82f6"} />
					<h1 className="text-blue-500">Back</h1>
				</Link>
				<div className="text-2xl">Create a new group</div>
				{/* <button
					className="absolute right-10 flex items-center gap-2 text-blue-500"
					onClick={() => {}}
				>
					<span>Save</span>
					<Icon path={mdiContentSave} size={1} color={"#3b82f6"} />
				</button> */}
			</div>
		</Nav>
	);
};

export default CreateNav;
