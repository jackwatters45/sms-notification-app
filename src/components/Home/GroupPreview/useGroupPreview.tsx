const useGroupPreview = (lastMessageTime: Date) => {
	const today = new Date();

	let formattedDate: string;
	const oneDay = 24 * 60 * 60 * 1000;
	const daysDifference = Math.floor(
		(today.getTime() - lastMessageTime.getTime()) / oneDay,
	);

	if (daysDifference < 1 && today.getDate() === lastMessageTime.getDate()) {
		formattedDate = lastMessageTime.toLocaleTimeString([], {
			hour12: false,
			hour: "numeric",
			minute: "2-digit",
		});
	} else if (daysDifference < 7 && today.getDay() !== lastMessageTime.getDay()) {
		formattedDate = lastMessageTime.toLocaleDateString([], { weekday: "long" });
	} else {
		formattedDate = lastMessageTime.toLocaleDateString([], {
			year: "2-digit",
			month: "2-digit",
			day: "2-digit",
		});
	}

	return { formattedDate };
};

export default useGroupPreview;
