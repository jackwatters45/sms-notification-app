import DigitalClock from "./DigitalClock";
import PhoneStatus from "./PhoneStatus";

const PhoneData = () => {
	return (
		<div className="flex justify-between pl-20 pr-16 text-lg">
			<DigitalClock />
			<PhoneStatus />
		</div>
	);
};

export default PhoneData;
