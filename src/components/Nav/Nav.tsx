import NavOptions from "./NavOptions";
import PhoneData from "./PhoneData";

const Nav = () => {
	return (
		<nav className="flex flex-0 flex-col bg-neutral-100 border-b border-neutral-300 border-solid font-medium pb-2  pt-4 gap-2">
			<PhoneData />
			<NavOptions avatar="" />
		</nav>
	);
};

export default Nav;
