import { ReactNode } from "react";

interface SentMessageProps {
	children: ReactNode;
}

export const SentMessage = ({ children }: SentMessageProps) => {
	return (
		<div className="with-tail-blue w-fit max-w-[75%] self-end rounded-3xl bg-blue-500 px-5 py-2 text-white">
			{children}
		</div>
	);
};

export default SentMessage;
