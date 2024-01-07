import Nav from "./components/Nav";
import Message from "./components/Message";
import History from "./components/History";

function App() {
	return (
		<div className="h-screen w-screen flex font-normal text-2xl flex-col ">
			<Nav />
			<History />
			<Message />
		</div>
	);
}

export default App;
