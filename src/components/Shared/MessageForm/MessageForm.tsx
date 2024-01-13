import { mdiArrowUp, mdiPlus } from "@mdi/js";
import Icon from "@mdi/react";
import TextArea from "rc-textarea";

import useMessageForm from "./useMessageForm";

interface MessageFormProps {
	includePlus?: boolean;
}

const MessageForm = ({ includePlus = true }: MessageFormProps) => {
	const { textAreaContainerRef, handleInput } = useMessageForm();

	return (
		<div
			className="flex-0 relative flex items-center gap-4 py-4 pl-5
		pr-8"
		>
			{includePlus && (
				<button className="mb-1 self-end">
					<input type="file" className="hidden" name="csv-upload" id="csv-upload" />
					<div className="flex h-12 w-12 items-center justify-center rounded-full bg-neutral-200">
						<Icon path={mdiPlus} size={1.3} color={"#525252"} />
					</div>
				</button>
			)}
			<div
				className="relative w-full overflow-hidden leading-[0]"
				ref={textAreaContainerRef}
			>
				<TextArea
					name="reminder-message"
					id="reminder-message"
					autoSize={true}
					className="w-full rounded-3xl border-2 border-neutral-300 py-2 pl-5 pr-14 leading-normal"
					placeholder="Message"
					onInput={handleInput}
				/>
				<button className="absolute bottom-2 right-2 flex h-10 w-10 items-center justify-center rounded-full bg-blue-500">
					<Icon path={mdiArrowUp} size={1.3} color={"white"} />
				</button>
			</div>
		</div>
	);
};

export default MessageForm;
