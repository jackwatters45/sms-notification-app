import { ColumnDef } from "@tanstack/react-table";

import { z } from "zod";

export const userSchema = z.object({
	phone: z
		.string()
		.min(1, "Phone number is required")
		.regex(/^\+\d{10,15}$/, "Invalid phone number format"), // Example regex for international phone numbers
	name: z.string().min(1, "Name is required"),
	remind: z.boolean(),
	notes: z.string().optional(),
});

export type IUser = z.infer<typeof userSchema>;

export const columns: ColumnDef<IUser>[] = [
	{
		accessorKey: "name",
		header: "Name",
	},
	{
		accessorKey: "phone",
		header: "Phone Number",
	},
	{
		accessorKey: "remind",
		header: "Remind",
	},
	{
		accessorKey: "notes",
		header: "Notes",
	},
];
