import { useFormatDateGroup } from "@/hooks/date";

const useMessageDate = (messageDate: string) => {
	const formattedDate = useFormatDateGroup(messageDate);

	return formattedDate;
};

export default useMessageDate;
