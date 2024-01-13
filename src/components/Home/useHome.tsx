interface ITempGroupPreviewProps {
	id: string;
	name: string;
	avatar: string | undefined;
	lastMessage: string;
	lastMessageTime: Date;
}

const groups: ITempGroupPreviewProps[] = [
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

const useHome = () => {
	return { groups };
};

export default useHome;
