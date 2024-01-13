import GroupPreview from "../GroupPreview";
import { IGroupPreviewProps } from "../GroupPreview/GroupPreview";

interface GroupPreviewsProps {
	groups: IGroupPreviewProps[];
}

const GroupPreviews = ({ groups }: GroupPreviewsProps) => {
	return (
		<div>
			{groups.map((group) => (
				<GroupPreview key={group.id} {...group} />
			))}
			<div className="flex items-center gap-4">
				<div className="w-20" />
				<div className="flex-1 border-b border-solid border-neutral-300" />
			</div>
		</div>
	);
};

export default GroupPreviews;
