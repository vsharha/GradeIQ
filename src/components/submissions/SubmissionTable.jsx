"use client"

import {
  useReactTable,
  getCoreRowModel, flexRender,
} from "@tanstack/react-table";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { formatDate } from "@/services/services";
import { Check, LucideX } from "lucide-react";

function SubmissionTable({submissions, maxGrade}) {
  const columns = [
    {
      id: "header",
      header: "",
      cell: info => info.row.index + 1
    },
    {
      accessorKey: "studentName",
      header: "Name"
    },
    {
      accessorKey: "submittedOn",
      header: "Submitted On",
      cell: info => {
        const value = info.getValue();
        return value ? formatDate(value) : "";
      }
    },
    {
      accessorKey: "grade",
      header: "Grade",
      cell: info => {
        const value = info.getValue();
        return `${value.toFixed(2)} / ${maxGrade.toFixed(2)}`
      }
    },
    {
      accessorKey: "gradeConfirmed",
      header: "Confirmed",
      cell: info => {
        const value = info.getValue();
        return <div>
          {value ? <Check className="text-green-700 dark:text-green-400"/>:<LucideX className="text-red-700 dark:text-red-400"/>}
        </div>
      }
    }
  ]

  const table = useReactTable({
    data: submissions,
    columns,
    getCoreRowModel: getCoreRowModel(),
  })

  return (
    <div>
      <Table>
        <TableHeader>
          {table.getHeaderGroups().map((headerGroup)=>
            <TableRow key={headerGroup.id}>
              {headerGroup.headers.map((header)=>
                <TableHead key={header.id}>
                  {header.isPlaceholder?null:flexRender(header.column.columnDef.header, header.getContext())}
                </TableHead>
              )}
            </TableRow>
          )}
        </TableHeader>
        <TableBody>
          {table.getRowModel().rows?.length ? (
            table.getRowModel().rows.map((row) => (
              <TableRow
                key={row.id}
                data-state={row.getIsSelected() && "selected"}
              >
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
  );
}

export default SubmissionTable;