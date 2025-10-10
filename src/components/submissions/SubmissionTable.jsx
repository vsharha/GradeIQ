"use client"

import {
  useReactTable,
  getCoreRowModel, flexRender,
} from "@tanstack/react-table";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { formatDate } from "@/services/services";
import { studentSubmissions } from "@/data/data";
import CheckX from "@/components/custom/CheckX";
import SubmissionView from "@/components/submissions/SubmissionView";

function SubmissionTable({assignment}) {
  const {id, maxGrade, passingGrade} = assignment
  const submissions = studentSubmissions.find((submission) => submission.assignmentID === Number(id)).submissions

  const columns = [
    {
      id: "view",
      header: "",
      cell: info => {
        const submission = info.row.original;
        return <SubmissionView submission={submission} assignment={assignment}/>;
      }
    },
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
      id: "passed",
      accessorKey: "grade",
      header: "Passed",
      cell: info => {
        const grade = info.getValue();
        return <CheckX value={grade>passingGrade}/>;
      }
    },
    {
      accessorKey: "gradeConfirmed",
      header: "Confirmed",
      cell: info => {
        const gradeConfirmed = info.getValue();
        return <CheckX value={gradeConfirmed}/>;
      }
    },
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