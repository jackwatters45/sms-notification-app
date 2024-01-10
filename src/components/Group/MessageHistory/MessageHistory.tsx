import Instructions from "./Instructions";
import useMessageHistory from "./useMessageHistory";

const MESSAGES = [
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

const MessageHistory = () => {
	const { middleRowRef } = useMessageHistory();

	return (
		<div className="flex-1 overflow-y-auto flex flex-col" ref={middleRowRef}>
			{MESSAGES.map((message, i) => (
				<div key={i} className="flex flex-col gap-1 py-2 px-4 ">
					<Instructions />
					<div className="self-center text-neutral-400 text-lg mt-2 mb-1">
						<span className="font-medium mr-1">Yesterday</span>
						<span>9:18pm</span>
					</div>
					<div className="self-end text-white bg-blue-500 rounded-3xl px-5 py-2 w-fit max-w-[75%] with-tail-blue">
						{message}
					</div>
				</div>
			))}
			<div className="self-end text-neutral-400 text-lg font-medium pr-4 my-1">
				{/* TODO needs to actually deal with failure */}
				Delivered
			</div>
		</div>
	);
};

export default MessageHistory;
