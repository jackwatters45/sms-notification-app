import GroupNav from "./GroupNav/GroupNav";
import Message from "../Shared/MessageForm";
import MessageHistory from "./MessageHistory";

const Group = () => {
	return (
		<>
			<GroupNav />
			<MessageHistory />
			<Message includePlus={false} />
		</>
	);
};

export default Group;
