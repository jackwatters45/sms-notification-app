import RootNav from "./RootNav";
import GroupPreviews from "./GroupPreviews/GroupPreviews";
import GroupsPlaceholder from "./Placeholder";
import useHome from "./useHome";

const Home = () => {
	const { groups } = useHome();
	return (
		<>
			<RootNav />
			<div className="p-4">
				{groups.length > 0 ? <GroupPreviews groups={groups} /> : <GroupsPlaceholder />}
			</div>
		</>
	);
};

export default Home;
