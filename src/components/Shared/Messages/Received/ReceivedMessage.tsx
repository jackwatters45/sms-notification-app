import { ReactNode } from "react";

interface ReceivedMessageProps {
	children: ReactNode;
}

export const ReceivedMessage = ({ children }: ReceivedMessageProps) => {
	return <div className="w-fit rounded-3xl bg-neutral-200 px-5 py-2">{children}</div>;
};

export default ReceivedMessage;
