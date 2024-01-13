interface useFormatDateGroupReturn {
	date: string;
	time: string;
}

const useFormatDateGroup = (dateString: string): useFormatDateGroupReturn => {
	const now = new Date();
	const date = new Date(dateString);

	const diff = now.getTime() - date.getTime();

	const diffDays = Math.floor(diff / (1000 * 60 * 60 * 24));

	let currentDate: string;
	if (diffDays === 0) {
		currentDate = "Today";
	} else if (diffDays === 1) {
		currentDate = "Yesterday";
	} else if (diffDays < 7) {
		currentDate = date.toLocaleDateString("en-US", { weekday: "long" });
	} else {
		currentDate =
			date.toLocaleDateString("en-US", {
				weekday: "short",
				month: "short",
				day: "numeric",
			}) + " at";
	}

	const time = date.toLocaleTimeString([], {
		hour12: false,
		hour: "numeric",
		minute: "2-digit",
	});

	return { date: currentDate, time };
};

export default useFormatDateGroup;
