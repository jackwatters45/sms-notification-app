import TextArea from "rc-textarea";

import Nav from "./components/Nav";
import PhoneData from "./components/PhoneData";

function App() {
	return (
		<div className="h-screen w-screen flex flex-col ">
			<div className="flex flex-col bg-neutral-100 border-b border-neutral-300 border-solid px-2 pt-1 font-medium">
				<PhoneData />
				<Nav />
			</div>
			{/* set actual settings in the text part */}
			<main className="flex flex-col gap-1 py-2 px-4">
				<div className="flex flex-col gap-[1px]">
					<div className="bg-neutral-200 rounded-xl px-3 py-2 w-fit font-medium">
						Early Reminders
					</div>
					<div className="bg-neutral-200 rounded-xl px-3 py-2 w-fit font-medium">
						Date
					</div>
					<div className="bg-neutral-200 rounded-xl px-3 py-2 w-fit font-medium">
						Repeat
					</div>
				</div>

				{/* make look like sms message at bottom of text */}
				<TextArea
					name="reminder-message"
					id="reminder-message"
					autoSize={{ minRows: 4 }}
					className="self-end text-white bg-blue-500 rounded-xl min-h-6 px-3 py-2 w-fit font-medium placeholder-white"
					placeholder="Enter message here..."
				/>

				<input type="file" name="csv-upload" id="csv-upload" />
			</main>
		</div>
	);
}

export default App;
