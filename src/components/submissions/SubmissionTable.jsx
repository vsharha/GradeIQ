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
import PassingGrade from "@/components/submissions/PassingGrade";
import CheckX from "@/components/custom/CheckX";
import EditSubmission from "@/components/submissions/EditSubmission";
import Checkbox from "@/components/custom/Checkbox";

function SubmissionTable({assignment, selected, setSelected}) {
  const {id, max_grade, passing_grade} = assignment

  function toggleSelection(rowIndex) {
    setSelected((selected) => {
      if(!selected.includes(rowIndex)) {
        return [...selected, rowIndex]
      }
      return selected.filter((index) => index !== rowIndex);
    });
  };

  const {submissions, error, isLoading} = useSubmissions(id)

  const columns = [
    {
      id: "view",
      header: ()=> {
        if(!submissions?.length) {
          return null
        }

        const filteredIDs = submissions
          .filter((submission)=>submission.grading_status!=="pending")
          .reduce((selected, current) => [...selected, current.id], [])

        const allSelected = selected.length === filteredIDs.length

        return <div className="flex items-start justify-start w-full">
          <Checkbox checked={!isLoading && allSelected} onChange={() => {
            if (allSelected) {
              setSelected([])
            } else {
              setSelected(
                filteredIDs
              )
            }
          }} />
        </div>
      }
      ,
      cell: info => {
        const submission = info.row.original;
        const rowIndex = info.row.index;
        return <div className="flex flex-row items-center gap-3 w-fit sm:gap-5">
          <Checkbox className="w-full h-full" checked={selected.includes(submission.id)} onChange={()=>toggleSelection(submission.id)} disabled={submission.grading_status==="pending"}/>
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

        return <PassingGrade grade={grade} passing_grade={passing_grade} max_grade={max_grade}/>
      }
    },
    {
      accessorKey: "grade_confirmed",
      header: "Confirmed",
      cell: info => {
        const gradeConfirmed = info.getValue();
        return <CheckX value={gradeConfirmed}/>;
      }
    },
    {
      accessorKey: "created_at",
      header: "Submitted On",
      cell: info => {
        const value = info.getValue();
        return value ? formatDate(value) : "";
      }
    },
    {
      id: "edit",
      cell: info => {
        const submission = info.row.original;
        return <EditSubmission submission={submission} assignment_id={assignment.id}/>
      }
    }
  ]

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
                No submissions.
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