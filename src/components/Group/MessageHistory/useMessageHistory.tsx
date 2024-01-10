import { useEffect, useRef } from "react";

import { useTextAreaStore } from "@/hooks/useTextAreaStore";

const useMessageHistory = () => {
	const middleRowRef = useRef<HTMLDivElement>(null);

	const textAreaHeight = useTextAreaStore((state) => state.textAreaHeight);

	useEffect(() => {
		const observer = new ResizeObserver((entries) => {
			for (const entry of entries) {
				if (entry.target === middleRowRef.current) {
					middleRowRef.current.scrollTop = middleRowRef.current.scrollHeight;
				}
			}
		});

		if (middleRowRef.current) {
			observer.observe(middleRowRef.current);
		}

		return () => observer.disconnect();
	}, [textAreaHeight]);

	return { middleRowRef };
};

export default useMessageHistory;
