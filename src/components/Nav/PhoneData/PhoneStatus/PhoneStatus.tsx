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
				className="rotate-90 scale-x-125 scale-y-150"
			/>
		</div>
	);
};

export default PhoneStatus;
