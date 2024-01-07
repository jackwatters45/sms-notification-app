import { mdiArrowUp, mdiPlus } from "@mdi/js";
import Icon from "@mdi/react";
import TextArea from "rc-textarea";

const MessageInputRow = () => {
	return (
		<div className="relative flex gap-4 pl-5 pr-8 items-center">
			<button className="self-end mb-1">
				<input type="file" className="hidden" name="csv-upload" id="csv-upload" />
				<div className="bg-neutral-200 h-12 w-12 flex justify-center items-center rounded-full">
					<Icon path={mdiPlus} size={1.3} color={"#525252"} />
				</div>
			</button>
			<div className="relative w-full leading-[0] overflow-hidden">
				<TextArea
					name="reminder-message"
					id="reminder-message"
					autoSize={true}
					className="w-full rounded-3xl pl-5 pr-14 py-2 border-2 border-neutral-300 leading-normal"
					placeholder="Message"
				/>
				<button className="absolute bottom-2 right-2 h-10 w-10 bg-blue-500 rounded-full flex items-center justify-center">
					<Icon path={mdiArrowUp} size={1.3} color={"white"} />
				</button>
			</div>
		</div>
	);
};

export default MessageInputRow;
