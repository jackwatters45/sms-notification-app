import ReceivedMessage from "@/components/Shared/Messages/Received/ReceivedMessage";
import SentMessage from "@/components/Shared/Messages/Sent/SentMessage";

const CreateGroupDialogue = () => {
	return (
		<div className="flex flex-1 flex-col gap-1 px-4 py-2">
			<ReceivedMessage>What would you like to name the new group?</ReceivedMessage>
			<SentMessage>&quot;New Group Name&quot;</SentMessage>
			<ReceivedMessage>Upload a csv to ?</ReceivedMessage>
			<SentMessage>&quot;New Group Name&quot;</SentMessage>
		</div>
	);
};

export default CreateGroupDialogue;
