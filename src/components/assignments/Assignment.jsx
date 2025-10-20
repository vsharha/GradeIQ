"use client";

import {Card, CardContent, CardFooter, CardHeader} from "@/components/ui/card";
import OverlayLoader from "@/components/loader/OverlayLoader";
import { formatDate } from "@/lib/formatDate";
import { Calendar, Menu } from "lucide-react";
import SubmissionProgress from "@/components/custom/SubmissionProgress";
import { cn } from "@/lib/utils";
import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import DeleteAssignment from "@/components/assignments/DeleteAssignment";
import EditAssignment from "@/components/assignments/EditAssignment";

function Assignment({assignment, onClick, loading, setLoading}) {
  const { title, description, due, id } = assignment

  function handleClick() {
    setLoading()
    onClick()
  }

  return (
    <div className="w-full py-1.5 min-h-64 sm:px-2 sm:w-1/2 md:w-1/3 lg:w-1/4 select-none">
      <Card className="w-full h-full overflow-hidden transition-all duration-150 relative cursor-pointer hover:brightness-98 dark:hover:brightness-85" onClick={handleClick}>
        <OverlayLoader isLoading={loading}/>
        <CardHeader>
          <div className="font-bold text-lg flex flex-row justify-between relative">
            <span className="w-7/8">
              <h2>{title}</h2>
            </span>
            <div className="flex items-center justify-center absolute -right-2">
              <DropdownMenu>
                <DropdownMenuTrigger className="w-fit h-fit">
                  <Menu/>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="flex flex-col gap-2">
                  <DeleteAssignment assignment_id={id} title={true} className="w-full" onClick={(e)=>e.stopPropagation()}/>
                  <EditAssignment assignment_id={id} title={true} className="w-full" onClick={(e)=>e.stopPropagation()} assignment={assignment}/>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
          <div className="flex gap-3 flex-wrap justify-between">
            <div className="flex gap-2 flex-row items-center">
              <span className="flex items-center gap-2"><Calendar size={15}/> Due:</span>
              <p className={cn("text-sm text-muted-foreground", new Date(due) < new Date() ? "text-failed" : "")}>{formatDate(due)}</p>
            </div>
          </div>
        </CardHeader>
        <CardContent className="flex-1">
          <p>{description}</p>
        </CardContent>
        <CardFooter className="w-full">
          <SubmissionProgress assignment={assignment}/>
        </CardFooter>
      </Card>
    </div>
  );
}

export default Assignment;