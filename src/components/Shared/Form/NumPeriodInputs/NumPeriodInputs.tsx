import { Path } from "react-hook-form";
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
import { Input } from "@/components/ui/input";
import { ISharedInputNoNameProps } from "../formTypes";

interface INumPeriodInputs<T extends z.ZodType> extends ISharedInputNoNameProps<T> {
	numName: Path<z.infer<T>>;
	periodName: Path<z.infer<T>>;
	numGreaterThanOne: boolean;
}

const NumPeriodInputs = <T extends z.ZodType>({
	numName,
	numGreaterThanOne,
	periodName,
	control,
	label,
	description,
}: INumPeriodInputs<T>) => {
	return (
		<div className="flex flex-1 items-start justify-evenly gap-4">
			<FormField
				control={control}
				name={numName}
				render={({ field }) => (
					<FormItem className="flex-1">
						<FormLabel hidden>{label}</FormLabel>
						<Input
							placeholder="Number"
							type="number"
							{...field}
							onChange={(e) => field.onChange(parseInt(e.target.value, 10) || undefined)}
						/>
						<FormMessage className="col-span-full" />
					</FormItem>
				)}
			/>
			<FormField
				control={control}
				name={periodName}
				render={({ field }) => (
					<FormItem className="flex-1 space-y-0">
						<FormLabel className="hidden">{label}</FormLabel>
						<Select onValueChange={field.onChange} defaultValue={field.value}>
							<FormControl>
								<SelectTrigger>
									<SelectValue placeholder="Time Period" />
								</SelectTrigger>
							</FormControl>
							<SelectContent>
								<SelectGroup>
									<SelectLabel hidden>{label}</SelectLabel>
									<SelectItem value="years">
										Year{numGreaterThanOne ? "s" : ""}
									</SelectItem>
									<SelectItem value="months">
										Month{numGreaterThanOne ? "s" : ""}
									</SelectItem>
									<SelectItem value="weeks">
										Week{numGreaterThanOne ? "s" : ""}
									</SelectItem>
									<SelectItem value="days">Day{numGreaterThanOne ? "s" : ""}</SelectItem>
								</SelectGroup>
							</SelectContent>
						</Select>
						{description && <FormDescription>{description}</FormDescription>}
						<FormMessage className="col-span-full" />
					</FormItem>
				)}
			/>
		</div>
	);
};

export default NumPeriodInputs;
