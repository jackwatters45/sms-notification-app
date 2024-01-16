import { Control, Path } from "react-hook-form";
import * as z from "zod";

export interface ISharedInputNoNameProps<T extends z.ZodType> {
	control: Control<z.infer<T>>;
	label: string;
	description?: string;
	placeholder?: string;
}

export interface ISharedInputProps<T extends z.ZodType>
	extends ISharedInputNoNameProps<T> {
	name: Path<z.infer<T>>;
}
