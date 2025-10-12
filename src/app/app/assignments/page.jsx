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
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="flex flex-col gap-4 w-full max-w-content">
      <div className="flex items-center flex-col gap-6 sm:flex-row sm:justify-between px-1">
        <div className="flex flex-row gap-3 justify-between w-full flex-1 items-center">
          <h1 className="font-bold text-2xl w-full flex-1 text-left">Created Assignments</h1>
          <CreateAssignment className="mr-auto sm:m-none"/>
        </div>
        <div className="w-full sm:w-fit flex items-center gap-3 mr-auto">
          <Input placeholder="Search..." autoComplete="off" value={searchQuery} onChange={(e)=>setSearchQuery(e.target.value)} className="flex-1 w-full sm:w-35 md:w-60"/>
          <Sort sort={sort} setSort={setSort} setDirection={setDirection} direction={direction}/>
        </div>
      </div>
      <div className="flex flex-row flex-wrap h-fit sm:gap-y-2 w-full">
        {isLoading && <PageLoader/>}
        {error && <ErrorMessage error={error} className="mt-5"/>}
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
          .filter((assignment)=>assignment.title.includes(searchQuery))
          .map((assignment, i)=>
          <Assignment key={assignment.id} index={i} assignment={assignment} onClick={()=>handleClick(assignment.id)}/>
        )}
      </div>
    </div>
  );
}

export default Page;