import { mdiChevronLeft, mdiCogOutline } from "@mdi/js";
import Icon from "@mdi/react";
import { Link } from "@tanstack/react-router";

import Nav from "@/components/Nav";
import useGroupNav from "./useGroupNav";

const GroupNav = () => {
	const { avatar } = useGroupNav();

	return (
		<Nav>
			<div className="-pl-2 flex h-24 items-center justify-center px-8 text-xl">
				<Link to="/" className="absolute left-8 flex items-center">
					<Icon path={mdiChevronLeft} size={1.5} color={"#3b82f6"} />
					<h1 className="text-blue-500 ">SMS Reminders</h1>
				</Link>
				<div className="flex flex-col items-center gap-1">
					<img src={avatar} alt="Group" className="h-16 w-16 rounded-full" />
					<input
						type="text"
						className="text-lg font-normal"
						value={"Allow user to edit name"}
					/>
				</div>
				<button
					className="absolute right-10 cursor-pointer text-blue-500"
					// TODO -> modal
					onClick={() => {
						console.log("");
					}}
				>
					<Icon path={mdiCogOutline} size={1.5} color={"#3b82f6"} />
				</button>
			</div>
		</Nav>
	);
};

export default GroupNav;
