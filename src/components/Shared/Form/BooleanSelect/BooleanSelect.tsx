import * as z from "zod";

import {
	FormControl,
	FormDescription,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectLabel,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { ISharedInputProps } from "../formTypes";

interface IBooleanSelectProps<T extends z.ZodType> extends ISharedInputProps<T> {
	placeholder?: "no" | "yes";
}

const BooleanSelect = <T extends z.ZodType>({
	control,
	name,
	label,
	description,
	placeholder = "no",
}: IBooleanSelectProps<T>) => {
	return (
		<FormField
			control={control}
			name={name}
			render={({ field }) => (
				<FormItem>
					<FormLabel>{label}</FormLabel>
					<Select onValueChange={field.onChange} defaultValue={field.value as string}>
						<FormControl>
							<SelectTrigger>
								<SelectValue placeholder={placeholder} />
							</SelectTrigger>
						</FormControl>
						<SelectContent>
							<SelectGroup>
								<SelectLabel hidden>{label}</SelectLabel>
								<SelectItem value="yes">Yes</SelectItem>
								<SelectItem value="no">No</SelectItem>
							</SelectGroup>
						</SelectContent>
					</Select>
					<FormDescription>{description}</FormDescription>
					<FormMessage />
				</FormItem>
			)}
		/>
	);
};

export default BooleanSelect;
