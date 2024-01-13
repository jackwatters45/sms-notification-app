import { Button } from "../../ui/button";
import useLocalLogin from "./useLocalLogin";

// TODO Autofill style, errors, functionality, zod
const LocalLogin = () => {
	const { showPassword, toggleShowPassword, register, onSubmit } = useLocalLogin();

	return (
		<form onSubmit={onSubmit} className="flex flex-col gap-4 text-neutral-500">
			<div className="relative rounded-lg border border-solid border-neutral-300 hover:border-neutral-400">
				<label htmlFor="username" className="absolute left-4 top-3 text-xs ">
					Email
				</label>
				<input
					className="w-full rounded-lg px-4 pb-2 pt-7 text-lg"
					type="email"
					id="username"
					autoComplete="username"
					{...register("username")}
				/>
			</div>
			<div className="relative rounded-lg border border-solid border-neutral-300 hover:border-neutral-400">
				<label htmlFor="password" className="absolute left-4 top-3 text-xs">
					Password
				</label>
				<input
					className="w-full rounded-lg px-4 pb-2 pt-7 text-lg "
					type={showPassword ? "text" : "password"}
					id="password"
					autoComplete="current-password"
					{...register("password")}
				/>
				<button
					className="absolute right-3 top-6 text-sm font-semibold "
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
