// TODO BaseUrl
const apiBaseUrl = "";

const AlternateLogins = () => {
	return (
		<div className="flex flex-col gap-2 items-center pt-8">
			<span className="text-sm font-bold text-neutral-500">Or continue with</span>
			<div className="flex gap-3">
				<button className="bg-none cursor-pointer p-2 ">
					<a href={`${apiBaseUrl}/auth/login/facebook`}>
						<img
							src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/facebook/facebook-plain.svg"
							alt="login with facebook"
							className="w-10"
						/>
					</a>
				</button>
				<button className="bg-none cursor-pointer p-2 ">
					<a href={`${apiBaseUrl}/auth/login/google`}>
						<img
							src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg"
							alt="login with google"
							className="w-10"
						/>
					</a>
				</button>
				<button className="bg-none cursor-pointer p-2 ">
					<a href={`${apiBaseUrl}/auth/login/github`}>
						<img
							src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
							alt="login with github"
							className="w-10"
						/>
					</a>
				</button>
			</div>
		</div>
	);
};

export default AlternateLogins;
