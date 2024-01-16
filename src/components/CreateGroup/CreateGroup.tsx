import CreateNav from "./Nav";
import Message from "../Shared/MessageForm";
import CreateGroupDialogue from "./Dialogue/CreateGroupDialogue";

const CreateGroup = () => {
	return (
		<>
			<CreateNav />
			<CreateGroupDialogue />
			<Message />
		</>
	);
};

export default CreateGroup;
