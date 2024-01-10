import defaultUserAvatar from "@/constants/defaultUserAvatar";

const useGroupNav = () => {
	const fetchAvatar = () => defaultUserAvatar;

	const avatar = fetchAvatar();

	return { avatar: avatar ?? defaultUserAvatar };
};

export default useGroupNav;
