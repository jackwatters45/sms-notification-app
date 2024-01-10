import { Button } from "../../ui/button";
import useLocalLogin from "./useLocalLogin";

const LocalLogin = () => {
	const { showPassword, toggleShowPassword, register, onSubmit } = useLocalLogin();

	return (
		<form onSubmit={onSubmit} className="gap-4 flex flex-col text-neutral-500">
			<div className="relative border border-solid border-neutral-300 hover:border-neutral-400 rounded-lg">
				<label htmlFor="username" className="absolute top-3 left-4 text-xs ">
					Email
				</label>
				<input
					className="w-full rounded-lg pt-7 pb-2 px-4 text-lg"
					type="email"
					id="username"
					autoComplete="username"
					{...register("username")}
				/>
			</div>
			<div className="relative border border-solid border-neutral-300 hover:border-neutral-400 rounded-lg">
				<label htmlFor="password" className="absolute top-3 left-4 text-xs">
					Password
				</label>
				<input
					className="w-full rounded-lg pt-7 pb-2 px-4 text-lg "
					type={showPassword ? "text" : "password"}
					id="password"
					autoComplete="current-password"
					{...register("password")}
				/>
				<button
					className="absolute right-3 top-6 font-semibold text-sm "
					onClick={toggleShowPassword}
					type="button"
				>
					{showPassword ? "Hide" : "Show"}
				</button>
			</div>
			<Button className="bg-blue-500 hover:bg-blue-400" type="submit">
				Continue
			</Button>
		</form>
	);
};

export default LocalLogin;
