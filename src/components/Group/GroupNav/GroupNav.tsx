import { mdiChevronLeft } from "@mdi/js";
import Icon from "@mdi/react";
import { Link } from "@tanstack/react-router";

import Nav from "@/components/Nav";
import useGroupNav from "./useGroupNav";
import GroupOptions from "@/components/Group/GroupOptions";
import { Input } from "@/components/ui/input";

const GroupNav = () => {
	const { avatar } = useGroupNav();

	return (
		<Nav>
			<div className="-pl-2 flex h-24 items-center justify-center px-8 text-xl">
				<Link
					to="/"
					className="absolute left-8 flex items-center text-blue-500 hover:text-blue-600"
				>
					<Icon path={mdiChevronLeft} size={1.5} />
					<h1 className="">SMS Reminders</h1>
				</Link>
				<div className="flex flex-col items-center gap-1">
					<img src={avatar} alt="Group" className="h-16 w-16 rounded-full" />
					<Input
						type="text"
						className="border-0 bg-transparent text-lg font-normal outline-none"
						value={"Allow user to edit name"}
					/>
				</div>
				<GroupOptions />
			</div>
		</Nav>
	);
};

export default GroupNav;
