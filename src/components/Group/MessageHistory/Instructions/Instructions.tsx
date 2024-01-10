const Instructions = () => {
	return (
		<div className="flex flex-col gap-[2px] max-w-[75%]">
			<div className="bg-neutral-200 rounded-3xl px-5 py-2 w-fit">
				Welcome to SMS Reminders
			</div>
			<div className="bg-neutral-200 rounded-3xl px-5 py-2 w-fit">
				Click the plus button to upload your csv or use the built-in tool
			</div>
			<div className="bg-neutral-200 rounded-3xl px-5 py-2 w-fit with-tail">
				If you use a csv, make sure it matches the format indicated by the built-in tool{" "}
			</div>
		</div>
	);
};

export default Instructions;
