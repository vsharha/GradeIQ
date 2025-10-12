"use client"

import Assignment from "@/components/assignments/Assignment";
import CreateAssignment from "@/components/assignments/CreateAssignment";
import { useRouter } from "next/navigation";
import Sort from "@/components/custom/Sort";
import { useState } from "react";
import useAssignments from "@/hooks/useAssignments";
import ErrorMessage from "@/components/custom/ErrorMessage";
import PageLoader from "@/components/loader/PageLoader";
import { Input } from "@/components/ui/input";

function Page() {
  const router = useRouter()

  function handleClick(id) {
    router.push(`./assignments/${id}`)
  }

  const { assignments, isLoading, error } = useAssignments()

  const [direction, setDirection] = useState("up");
  const [sort, setSort] = useState("date");

  return (
    <div className="flex flex-col gap-4 w-full max-w-content">
      <div className="flex items-center flex-col gap-4 sm:flex-row sm:justify-between px-1">
        <h1 className="font-bold text-2xl w-full flex-1 text-left">Created Assignments</h1>
        <div className="w-fit flex items-center gap-3 mr-auto">
          <Sort sort={sort} setSort={setSort} setDirection={setDirection} direction={direction}/>
          <CreateAssignment className="mr-auto sm:m-none"/>
        </div>
      </div>
      {/*<Input placeholder="Start typing..."/>*/}
      <div className="flex flex-row flex-wrap h-fit sm:gap-y-2 w-full">
        {isLoading && <PageLoader/>}
        {error && <ErrorMessage error={error}/>}
        {!isLoading && !error && assignments
          .sort((a, b) => {
            let result = 0;
            switch (sort) {
              case "date":
                result = new Date(a.due) - new Date(b.due);
                break;
              case "name":
                result = a.title.localeCompare(b.title);
                break;
              default:
                result = 0;
            }
            return direction === "up" ? -result : result;
          })
          .map((assignment, i)=>
          <Assignment key={assignment.id} index={i} assignment={assignment} onClick={()=>handleClick(assignment.id)}/>
        )}
      </div>
    </div>
  );
}

export default Page;