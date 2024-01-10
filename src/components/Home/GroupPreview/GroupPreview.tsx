import { Link } from "@tanstack/react-router";

import defaultUserAvatar from "@/constants/defaultUserAvatar";
import useGroupPreview from "./useGroupPreview";

interface IGroupPreviewProps {
	id: string;
	name: string;
	avatar: string | undefined;
	lastMessage: string;
	lastMessageTime: Date;
}

const GroupPreview = ({
	id,
	name,
	avatar,
	lastMessage,
	lastMessageTime,
}: IGroupPreviewProps) => {
	const { formattedDate } = useGroupPreview(lastMessageTime);

	return (
		<Link to={id} className="flex px-4 items-center gap-4 h-[100px]">
			<div>
				<img
					src={avatar || defaultUserAvatar}
					alt="Group"
					className="h-20 w-20 rounded-full"
				/>
			</div>
			<div className="flex-1 py-4 border-neutral-300 border-t border-solid h-full">
				<div className="flex justify-between">
					<span className="font-medium">{name}</span>
					<span className="text-lg text-neutral-500">{formattedDate}</span>
				</div>
				<div className="text-lg text-neutral-500">{lastMessage}</div>
			</div>
		</Link>
	);
};

export default GroupPreview;
