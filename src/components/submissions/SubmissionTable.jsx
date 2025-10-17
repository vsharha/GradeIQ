"use client"

import {
  useReactTable,
  getCoreRowModel, flexRender,
} from "@tanstack/react-table";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { formatDate } from "@/lib/formatDate";
import SubmissionView from "@/components/submissions/SubmissionView";
import useSubmissions from "@/hooks/useSubmissions";
import ErrorMessage from "@/components/custom/ErrorMessage";
import BlockLoader from "@/components/loader/BlockLoader";
import { Input } from "@/components/ui/input";

function SubmissionTable({assignment, selected, setSelected}) {
  const {id, max_grade, passing_grade} = assignment

  const toggleSelection = (rowIndex) => {
    setSelected((prev) => {
      const next = [...prev];
      next[rowIndex] = !next[rowIndex];
      return next;
    });
  };

  const columns = [
    {
      id: "view",
      header: "",
      cell: info => {
        const submission = info.row.original;
        const rowIndex = info.row.index
        return <div className="flex flex-row items-center gap-3 w-fit sm:gap-5">
          <Input type="checkbox" className="accent-primary h-full" checked={!!selected[rowIndex]} onChange={()=>toggleSelection(rowIndex)}/>
          <SubmissionView submission={submission} assignment={assignment} />
          <span>{rowIndex+1}</span>
        </div>;
      }
    },
    {
      accessorKey: "student_name",
      header: "Name"
    },
    {
      accessorKey: "grade",
      header: "Grade",
      cell: info => {
        const grade = info.getValue();
        return <div>
          {grade ?
            <span className={grade>=passing_grade?"text-passed":"text-failed"}>
              {grade?.toFixed(2)}
            </span>
            /
            <span>
              {max_grade?.toFixed(2)}
            </span> :
            <span>
              N/A
            </span>
          }
        </div>
      }
    },
    // {
    //   accessorKey: "grade_confirmed",
    //   header: "Confirmed",
    //   cell: info => {
    //     const gradeConfirmed = info.getValue();
    //     return <CheckX value={gradeConfirmed}/>;
    //   }
    // },
    {
      accessorKey: "created_at",
      header: "Submitted On",
      cell: info => {
        const value = info.getValue();
        return value ? formatDate(value) : "";
      }
    },
  ]


  const {submissions, error, isLoading} = useSubmissions(id)

  const table = useReactTable({
    data: submissions || [],
    columns,
    getCoreRowModel: getCoreRowModel(),
  })

  return (
    <div>
      <Table className="lg:h-full">
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
        <TableBody className="lg:h-full lg:overflow-scroll">
          {error && <ErrorMessage error={error}/>}
          {isLoading &&
            <TableRow>
              <TableCell colSpan={columns.length} className="h-24 text-center">
                <BlockLoader/>
              </TableCell>
            </TableRow>
          }
          {!error && !isLoading && !table.getRowModel().rows?.length &&
            <TableRow>
              <TableCell colSpan={columns.length} className="h-24 text-center">
                No results.
              </TableCell>
            </TableRow>
          }
          {!error && !isLoading &&
            (table.getRowModel().rows.map((row) => (
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
            )))
          }
        </TableBody>
      </Table>
    </div>
  );
}

export default SubmissionTable;