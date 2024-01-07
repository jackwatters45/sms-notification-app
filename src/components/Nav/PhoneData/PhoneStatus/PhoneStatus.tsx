import Icon from "@mdi/react";
import { mdiBatteryCharging, mdiSignal, mdiWifi } from "@mdi/js";

const PhoneStatus = () => {
	return (
		<div className="flex items-center gap-4">
			<Icon path={mdiSignal} size={1} className="scale-x-150 scale-y-90" />
			<Icon path={mdiWifi} size={1} className="scale-x-125" />
			<Icon
				path={mdiBatteryCharging}
				size={1}
				className="scale-y-150 scale-x-125 rotate-90"
			/>
		</div>
	);
};

export default PhoneStatus;
