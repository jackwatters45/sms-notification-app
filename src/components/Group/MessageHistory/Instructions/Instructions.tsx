const Instructions = () => {
	return (
		<div className="flex max-w-[75%] flex-col gap-[2px]">
			<div className="w-fit rounded-3xl bg-neutral-200 px-5 py-2">
				Welcome to SMS Reminders
			</div>
			<div className="w-fit rounded-3xl bg-neutral-200 px-5 py-2">
				Click the plus button to upload your csv or use the built-in tool
			</div>
			<div className="with-tail w-fit rounded-3xl bg-neutral-200 px-5 py-2">
				If you use a csv, make sure it matches the format indicated by the built-in tool
			</div>
		</div>
	);
};

export default Instructions;
