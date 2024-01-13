import { useFormatDateHome } from "@/hooks/date";

const useGroupPreview = (lastMessageTime: Date) => {
	const formattedDate = useFormatDateHome(lastMessageTime);

	return { formattedDate };
};

export default useGroupPreview;
