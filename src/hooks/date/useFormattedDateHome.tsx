const useFormatDateHome = (dateString: Date): string => {
	const today = new Date();
	const date = new Date(dateString);

	let formattedDate: string;
	const oneDay = 24 * 60 * 60 * 1000;
	const daysDifference = Math.floor((today.getTime() - date.getTime()) / oneDay);

	if (daysDifference < 1 && today.getDate() === date.getDate()) {
		formattedDate = date.toLocaleTimeString([], {
			hour12: false,
			hour: "numeric",
			minute: "2-digit",
		});
	} else if (daysDifference < 7 && today.getDay() !== date.getDay()) {
		formattedDate = date.toLocaleDateString([], { weekday: "long" });
	} else {
		formattedDate = date.toLocaleDateString([], {
			year: "2-digit",
			month: "2-digit",
			day: "2-digit",
		});
	}

	return formattedDate;
};

export default useFormatDateHome;
