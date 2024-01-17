import {
	Table,
	TableBody,
	TableCaption,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table";
import { useReactTable, getCoreRowModel, flexRender } from "@tanstack/react-table";

import { IUser, columns } from "./columns";

const data: IUser[] = [
	{ phone: "+48589791648", name: "Name1", remind: true, notes: "Note 45" },
	{ phone: "+24031880957", name: "Name61", remind: true, notes: "" },
	{ phone: "+75631835077", name: "Name45", remind: true, notes: "" },
	{ phone: "+80476857893", name: "Name53", remind: true, notes: "" },
	{ phone: "+25361607707", name: "Name55", remind: false, notes: "Note 10" },
	{ phone: "+55576482732", name: "Name75", remind: false, notes: "Note 92" },
	{ phone: "+18930288559", name: "Name87", remind: false, notes: "Note 68" },
	{ phone: "+12742237297", name: "Name5", remind: true, notes: "" },
	{ phone: "+19665887175", name: "Name27", remind: false, notes: "Note 68" },
	{ phone: "+8951285370", name: "Name2", remind: false, notes: "Note 99" },
];

// border
// spacing
//
// advanced table shite
const GroupTable = () => {
	const table = useReactTable({
		data,
		columns,
		getCoreRowModel: getCoreRowModel(),
	});

	return (
		<div className="container mx-auto py-10">
			<div className="rounded-md border border-solid border-black p-4">
				<Table>
					<TableCaption>A list of your recent invoices.</TableCaption>
					<TableHeader>
						{table.getHeaderGroups().map((headerGroup) => (
							<TableRow key={headerGroup.id}>
								{headerGroup.headers.map((header) => {
									return (
										<TableHead key={header.id}>
											{header.isPlaceholder
												? null
												: flexRender(header.column.columnDef.header, header.getContext())}
										</TableHead>
									);
								})}
							</TableRow>
						))}
					</TableHeader>
					<TableBody>
						{table.getRowModel().rows?.length ? (
							table.getRowModel().rows.map((row) => (
								<TableRow key={row.id} data-state={row.getIsSelected() && "selected"}>
									{row.getVisibleCells().map((cell) => (
										<TableCell key={cell.id}>
											{flexRender(cell.column.columnDef.cell, cell.getContext())}
										</TableCell>
									))}
								</TableRow>
							))
						) : (
							<TableRow>
								<TableCell colSpan={columns.length} className="h-24 text-center">
									No results.
								</TableCell>
							</TableRow>
						)}
					</TableBody>
				</Table>
			</div>
		</div>
	);
};

export default GroupTable;
