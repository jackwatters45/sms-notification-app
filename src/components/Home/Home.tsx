import GroupPreview from "./GroupPreview";
import RootNav from "./RootNav";

const groups = [
	{
		id: "1",
		name: "Jack Watters",
		avatar: undefined,
		lastMessage: "Some message .....",
		lastMessageTime: new Date(),
	},
	{
		id: "2",
		name: "Jack Watters",
		avatar: undefined,
		lastMessage: "Some message .....",
		lastMessageTime: new Date(),
	},
];

const Home = () => {
	return (
		<>
			<RootNav />
			<div className="py-4">
				{groups.map((group) => (
					<GroupPreview key={group.id} {...group} />
				))}
				<div className="flex px-4 items-center gap-4">
					<div className="w-20" />
					<div className="flex-1 border-b border-solid border-neutral-300" />
				</div>
			</div>
		</>
	);
};

export default Home;
