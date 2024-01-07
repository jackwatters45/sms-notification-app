import { mdiChevronLeft } from "@mdi/js";
import Icon from "@mdi/react";

interface NavOptionsProps {
	avatar: string;
}

const defaultUserAvatar =
	"https://res.cloudinary.com/drheg5d7j/image/upload/v1693427762/odin-book/defaultUserAvatar_fuzkmd.png";

const NavOptions = ({ avatar }: NavOptionsProps) => {
	return (
		<div className="flex justify-center items-center px-8 -ml-2 text-xl">
			<div className="absolute left-8 flex items-center">
				<Icon path={mdiChevronLeft} size={1.5} color={"#3b82f6"} />
				<h1 className="text-blue-500 ">SMS Reminders</h1>
			</div>
			<div className="flex flex-col items-center gap-1">
				<img
					src={avatar || defaultUserAvatar}
					alt=""
					className="h-16 w-16 rounded-full"
				/>
				<input
					type="text"
					className="font-normal text-lg"
					value={"Allow user to edit name"}
				/>
			</div>
			<div className="absolute right-10 text-blue-500">Logout</div>
		</div>
	);
};

export default NavOptions;
