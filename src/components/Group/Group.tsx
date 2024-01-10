import GroupNav from "./GroupNav/GroupNav";
import Message from "./Message";
import MessageHistory from "./MessageHistory";

const Group = () => {
	return (
		<>
			<GroupNav />
			<MessageHistory />
			<Message />
		</>
	);
};

export default Group;
