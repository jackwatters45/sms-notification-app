import { mdiTrashCanOutline } from "@mdi/js";
import Icon from "@mdi/react";

import { Button } from "@/components/ui/button";
import { Form, FormDescription, FormLabel } from "@/components/ui/form";
import { DialogFooter } from "@/components/ui/dialog";

import useGroupSettings, { formSchema } from "./useGroupSettings";
import DateTimeInput from "../Shared/Form/DateTimeInput";
import BooleanSelect from "../Shared/Form/BooleanSelect";

import NumPeriodInputs from "../Shared/Form/NumPeriodInputs";
import TextInput from "../Shared/Form/TextInput";

const GroupSettings = () => {
	const {
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
	} = useGroupSettings();

	return (
		<Form {...form}>
			<div className="flex flex-col pb-4 pt-3">
				<h2 className="text-2xl font-bold tracking-tight">Edit Group Settings</h2>
				<FormDescription>Make changes to group settings here.</FormDescription>
			</div>
			<form
				onSubmit={form.handleSubmit(onSubmit)}
				className="flex flex-col gap-8 sm:gap-6"
				ref={parent}
			>
				<TextInput<typeof formSchema>
					control={form.control}
					name="name"
					label="Name"
					placeholder="Enter a Group Name"
					description="The unique name for this group"
				/>

				<BooleanSelect<typeof formSchema>
					control={form.control}
					name="isScheduled"
					label="Scheduled"
					description="Schedule messages to be sent at a specific date and time"
				/>
				{isScheduled && (
					<DateTimeInput<typeof formSchema>
						control={form.control}
						name="scheduledDate"
						label="Scheduled Date"
					/>
				)}
				<BooleanSelect<typeof formSchema>
					control={form.control}
					name="isRecurring"
					label="Recurring"
					description="Set up automatic, recurring messages for consistent reminders"
				/>
				{isRecurring && (
					<div className="flex flex-col gap-3">
						<FormLabel>Recurring every</FormLabel>
						<NumPeriodInputs<typeof formSchema>
							control={form.control}
							numName="recurringNum"
							periodName="recurringPeriod"
							label="Recurring every"
							numGreaterThanOne={recurringNumGreaterThanOne}
						/>
					</div>
				)}
				<BooleanSelect<typeof formSchema>
					control={form.control}
					name="isReminders"
					label="Reminders"
					description="Send reminders at set increments before the due date"
				/>
				{isReminders && (
					<div className="flex flex-col gap-3">
						<FormLabel>Remind before</FormLabel>
						{reminders.map((reminder, index) => (
							<div key={index} className="flex items-start gap-4">
								<NumPeriodInputs<typeof formSchema>
									control={form.control}
									numName={`reminders.${index}.num`}
									periodName={`reminders.${index}.period`}
									label="Remind before"
									numGreaterThanOne={reminder.num > 1}
								/>
								<Button
									variant="ghost"
									type="button"
									className="px-0 text-blue-500 hover:text-blue-600"
									onClick={() => removeReminder(index)}
								>
									<Icon path={mdiTrashCanOutline} size={1} />
								</Button>
							</div>
						))}
						{reminders.length < 6 && (
							<Button
								variant="ghost"
								type="button"
								className="text-blue-500 hover:text-blue-600"
								onClick={addReminder}
							>
								+ Add another reminder
							</Button>
						)}
					</div>
				)}
				<DialogFooter>
					<Button type="submit" className="bg-blue-500 hover:bg-blue-600">
						Save changes
					</Button>
				</DialogFooter>
			</form>
		</Form>
	);
};

export default GroupSettings;
