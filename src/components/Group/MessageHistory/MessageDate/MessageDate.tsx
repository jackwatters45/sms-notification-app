import useMessageDate from "./useMessageDate";

interface MessageDateProps {
	messageDate: string;
}

const MessageDate = ({ messageDate }: MessageDateProps) => {
	const { date, time } = useMessageDate(messageDate);

	return (
		<div className="mb-1 mt-2 self-center text-lg text-neutral-400">
			{date && <span className="mr-1 font-medium">{date}</span>}
			<span>{time}</span>
		</div>
	);
};

export default MessageDate;
