import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

// TODO Autofill, errors, functionality
const formSchema = z.object({
	username: z
		.string()
		.min(6, {
			message: "Email must be at least 6 characters.",
		})
		.max(30, {
			message: "Email must be at most 40 characters.",
		}),
	// TODO
	password: z
		.string()
		.min(8, {
			message: "Password must be at least 8 characters.",
		})
		.max(50),
});

const useLocalLogin = () => {
	const [showPassword, setShowPassword] = useState(false);
	const toggleShowPassword = () => setShowPassword((prev) => !prev);

	const { handleSubmit, register } = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			username: "",
			password: "",
		},
	});

	const onSubmit = handleSubmit((values: z.infer<typeof formSchema>) => {
		console.log(values);
	});

	return { showPassword, toggleShowPassword, register, onSubmit };
};

export default useLocalLogin;
