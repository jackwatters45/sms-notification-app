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
		<Link to={id} className="flex h-[100px] items-center gap-4 px-4">
			<img
				src={avatar || defaultUserAvatar}
				alt="Group"
				className="h-20 w-20 rounded-full"
			/>
			<div className="h-full flex-1 border-t border-solid border-neutral-300 py-4">
				<div className="flex justify-between">
					<span className="font-medium">{name}</span>
					<span className="pr-2 text-lg text-neutral-500">{formattedDate}</span>
				</div>
				<div className="text-lg text-neutral-500">{lastMessage}</div>
			</div>
		</Link>
	);
};

export default GroupPreview;
