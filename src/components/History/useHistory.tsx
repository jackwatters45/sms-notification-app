import { useEffect, useRef } from "react";

const useHistory = () => {
	const middleRowRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		if (middleRowRef.current) {
			middleRowRef.current.scrollTop = middleRowRef.current.scrollHeight;
		}
	}, []);

	return { middleRowRef };
};

export default useHistory;
