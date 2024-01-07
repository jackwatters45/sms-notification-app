import Instructions from "./Instructions";

const MESSAGES = [
	"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi.",
	"Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum.",
	"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi.",
	"Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum.",
];

const History = () => {
	return (
		<div className="flex-1 overflow-y-auto">
			{MESSAGES.map((message, i) => (
				<div key={i} className="flex  flex-col gap-1 py-2 px-4 ">
					<Instructions />
					<div className="self-end text-white bg-blue-500 rounded-3xl px-5 py-2 w-fit max-w-[75%]">
						{message}
					</div>
				</div>
			))}
		</div>
	);
};

export default History;
