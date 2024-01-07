import useDigitalClock from "./useDigitalClock";

const DigitalClock = () => {
	const { formatTime, currentTime } = useDigitalClock();

	return <div className="text-xl font-medium">{formatTime(currentTime)}</div>;
};

export default DigitalClock;
