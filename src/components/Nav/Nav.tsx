import { ReactNode } from "react";
import PhoneData from "./PhoneData";

interface NavProps {
	children: ReactNode;
}

const Nav = ({ children }: NavProps) => {
	return (
		<nav className="flex flex-0 flex-col bg-neutral-100 border-b border-neutral-300 border-solid font-medium pb-2  pt-4 gap-2">
			<PhoneData />
			{children}
		</nav>
	);
};

export default Nav;
