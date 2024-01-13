import { ReactNode } from "react";
import PhoneData from "./PhoneData";

interface NavProps {
	children: ReactNode;
}

const Nav = ({ children }: NavProps) => {
	return (
		<nav className="flex-0 flex flex-col gap-2 border-b border-solid border-neutral-300 bg-neutral-100 pb-2  pt-4 font-medium">
			<PhoneData />
			{children}
		</nav>
	);
};

export default Nav;
