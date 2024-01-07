import MessageInputRow from "./MessageInputRow";

const Message = () => {
	return (
		<div className="flex flex-0 flex-col gap-4 pt-4">
			<MessageInputRow />
			<div className="bg-zinc-300 p-4 flex gap-2 flex-wrap">
				<div className="p-1 flex-1 bg-white rounded-lg flex flex-col items-center justify-center shadow-2xl">
					<label htmlFor="date">Date of Event:</label>
					<input type="text" name="date" id="date" />
				</div>
				<div className="p-1 flex-1 bg-white rounded-lg flex flex-col items-center justify-center shadow-2xl">
					{" "}
					<label htmlFor="repeat">Repeat?</label>
					<input type="text" name="repeat" id="repeat" />
				</div>
				<div className="p-1 flex-1 bg-white rounded-lg flex flex-col items-center justify-center shadow-2xl">
					{" "}
					<label htmlFor="remind">Early Reminders</label>
					<input type="text" name="remind" id="remind" />
				</div>
			</div>
		</div>
	);
};

export default Message;
