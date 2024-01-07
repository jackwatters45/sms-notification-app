import { useState, useEffect } from "react";

const useDigitalClock = () => {
	const [currentTime, setCurrentTime] = useState(new Date());

	useEffect(() => {
		const timerId = setInterval(() => {
			setCurrentTime(new Date());
		}, 60000);

		return () => {
			clearInterval(timerId);
		};
	}, []);

	const formatTime = (time: Date) => {
		const hours = time.getHours();
		const minutes = time.getMinutes();

		return [hours.toString().padStart(2, "0"), minutes.toString().padStart(2, "0")].join(
			":",
		);
	};

	return { formatTime, currentTime };
};

export default useDigitalClock;
