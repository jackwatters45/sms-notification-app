import * as z from "zod";

import { ISharedInputProps } from "../formTypes";
import {
	FormControl,
	FormDescription,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

const DateTimeInput = <T extends z.ZodType>({
	control,
	name,
	label,
	description,
}: ISharedInputProps<T>) => {
	return (
		<FormField
			control={control}
			name={name}
			render={({ field }) => (
				<FormItem>
					<FormLabel>{label}</FormLabel>
					<FormControl>
						<Input
							type="datetime-local"
							{...field}
							value={field.value ? field.value.toISOString().slice(0, 16) : ""}
							onChange={(e) => field.onChange(new Date(e.target.value))}
						/>
					</FormControl>
					{description && <FormDescription>{description}</FormDescription>}
					<FormMessage />
				</FormItem>
			)}
		/>
	);
};

export default DateTimeInput;
