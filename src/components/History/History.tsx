import Instructions from "./Instructions";
import useHistory from "./useHistory";

const MESSAGES = [
	"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi.",
	"Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum.",
	"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi.",
	"Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum.",
];

const History = () => {
	const { middleRowRef } = useHistory();

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
				Delivered
			</div>
		</div>
	);
};

export default History;
