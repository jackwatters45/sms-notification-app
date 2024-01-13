import { Link } from "@tanstack/react-router";

// TODO make go back actually work
const NotFound = () => {
	return (
		<div className="flex h-screen flex-col items-center justify-center bg-gray-100">
			<div className="w-[min(600px,90vw)] rounded-lg bg-white p-6 shadow-md">
				<div className="rounded-lg bg-blue-500 p-4">
					<p className="text-lg text-white">Oops! This page couldn’t be found.</p>
				</div>
				<p className="mt-4 flex items-center justify-between">
					<Link to="/" className="text-blue-500 hover:text-blue-600">
						Go Back
					</Link>
					<Link to="/" className="text-blue-500 hover:text-blue-600">
						Return Home
					</Link>
				</p>
			</div>
		</div>
	);
};

export default NotFound;
