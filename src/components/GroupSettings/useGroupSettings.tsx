import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { useAutoAnimate } from "@formkit/auto-animate/react";

import { toast } from "../ui/use-toast";

interface IReminder {
	num: number;
	period: "months" | "weeks" | "days";
}

export const formSchema = z
	.object({
		name: z.string().max(40),
		isScheduled: z.enum(["no", "yes"]),
		scheduledDate: z.date().optional(),
		isRecurring: z.enum(["no", "yes"]),
		recurringNum: z.number().positive().int().max(36).optional(),
		recurringPeriod: z.enum(["years", "months", "weeks", "days"]).optional(),
		isReminders: z.enum(["no", "yes"]),
		reminders: z
			.array(
				z.object({
					num: z.number().positive().int().max(36),
					period: z.enum(["months", "weeks", "days"]),
				}),
			)
			.max(6)
			.optional(),
	})
	.refine(
		(data) => {
			if (data.isScheduled === "yes" && data.scheduledDate === undefined) {
				return false;
			}
			if (
				data.isRecurring === "yes" &&
				(data.recurringNum === undefined || data.recurringPeriod === undefined)
			) {
				return false;
			}
			if (
				data.isReminders === "yes" &&
				(data.reminders === undefined || data.reminders?.length === 0)
			) {
				return false;
			}

			return true;
		},
		{
			message: "Required fields are missing based on the conditional selections.",
			path: ["scheduledDate", "recurringNum", "recurringPeriod", "reminders"],
		},
	);

const useGroupSettings = () => {
	const defaultReminder: IReminder = { num: 1, period: "weeks" };

	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			name: "",
			isScheduled: "no",
			scheduledDate: undefined,
			isRecurring: "no",
			recurringNum: 1,
			recurringPeriod: "months",
			isReminders: "no",
			reminders: [defaultReminder],
		},
	});

	const onSubmit = (data: z.infer<typeof formSchema>) => {
		toast({
			title: "You submitted the following values:",
			description: (
				<pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
					<code className="text-white">{JSON.stringify(data, null, 2)}</code>
				</pre>
			),
		});
	};

	const watch = form.watch;

	const isScheduled = watch("isScheduled") === "yes";

	const isRecurring = watch("isRecurring") === "yes";

	const isReminders = watch("isReminders") === "yes";

	const recurringNumGreaterThanOne = Number(watch("recurringNum")) > 1;

	const reminders = watch("reminders") ?? [];

	const removeReminder = (index: number) => {
		const currentReminders = form.getValues("reminders") ?? [];

		if (currentReminders.length === 0) return;

		currentReminders.splice(index);

		form.setValue("reminders", currentReminders);
	};

	const addReminder = () => {
		const currentReminders = form.getValues("reminders") ?? [];

		if (currentReminders.length >= 6) return;

		const newReminders = [...currentReminders, defaultReminder];

		form.setValue("reminders", newReminders);
	};

	const [parent] = useAutoAnimate();

	return {
		form,
		onSubmit,
		isScheduled,
		isRecurring,
		isReminders,
		recurringNumGreaterThanOne,
		reminders,
		removeReminder,
		addReminder,
		parent,
	};
};

export default useGroupSettings;
