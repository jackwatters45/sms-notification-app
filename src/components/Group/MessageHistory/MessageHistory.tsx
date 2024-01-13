import SentMessage from "@/components/Shared/Messages/Sent/SentMessage";
import Instructions from "./Instructions";
import useMessageHistory from "./useMessageHistory";
import MessageDate from "./MessageDate";

type MessageWithDate = {
	message: string;
	date: string;
};

const MESSAGES: string[] = [
	"Just saw the most amazing sunset at the beach!",
	"Have you tried the new cafe downtown? Their coffee is fantastic!",
	"Can't believe how fast this year is going. Already making plans for the holidays.",
	"I've started a new book series and it's incredibly engaging. Highly recommend it!",
	"Did you catch the latest movie release? I heard it's getting great reviews.",
	"I'm planning a hiking trip next weekend. Excited to explore some new trails!",
	"Recently started learning guitar, and it's both challenging and fun.",
	"There's a charity run happening next month. Thinking of participating!",
	"Exploring photography lately, and I'm absolutely loving the experience.",
	"Just finished a DIY project at home. It's so rewarding to create something with your own hands.",
];

const getRandomDate = (): string => {
	const start = new Date(2022, 0, 1);
	const end = new Date();
	return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()))
		.toISOString()
		.split("T")[0];
};

const messagesWithDates: MessageWithDate[] = MESSAGES.map((message) => ({
	message,
	date: getRandomDate(),
}));

const MessageHistory = () => {
	const { middleRowRef } = useMessageHistory();

	return (
		<div className="flex flex-1 flex-col overflow-y-auto" ref={middleRowRef}>
			{messagesWithDates.map(({ message, date }, i) => (
				<div key={i} className="flex flex-col gap-1 px-4 py-2 ">
					<Instructions />
					<MessageDate messageDate={date} />
					<SentMessage>{message}</SentMessage>
				</div>
			))}
			<div className="my-1 self-end pr-4 text-lg font-medium text-neutral-400">
				{/* TODO needs to actually deal with failure */}
				Delivered
			</div>
		</div>
	);
};

export default MessageHistory;
