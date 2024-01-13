import { Link } from "@tanstack/react-router";

const GroupsPlaceholder = () => {
	return (
		<Link to="create-group" className="flex justify-center text-neutral-500">
			Add a new group...
		</Link>
	);
};

export default GroupsPlaceholder;
