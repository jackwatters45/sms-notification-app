import { useRef } from "react";

import { useTextAreaStore } from "@/hooks/useTextAreaStore";

const useMessage = () => {
	const textAreaContainerRef = useRef<HTMLDivElement>(null);

	const { textAreaHeight, setTextAreaHeight } = useTextAreaStore((state) => ({
		textAreaHeight: state.textAreaHeight,
		setTextAreaHeight: state.setTextAreaHeight,
	}));

	const handleInput = () => {
		const textArea = textAreaContainerRef.current;
		if (!textArea) return;

		const newHeight = textArea.clientHeight;
		const heightDifference = newHeight - textAreaHeight;

		if (heightDifference !== 0) setTextAreaHeight(newHeight + textAreaHeight);
	};

	return { handleInput, textAreaContainerRef };
};

export default useMessage;
