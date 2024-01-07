import DigitalClock from "./DigitalClock";
import PhoneStatus from "./PhoneStatus";

const PhoneData = () => {
	return (
		<div className="flex justify-between text-lg pl-20 pr-16">
			<DigitalClock />
			<PhoneStatus />
		</div>
	);
};

export default PhoneData;
