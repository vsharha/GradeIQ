"use client"

import Assignment from "@/components/assignments/Assignment";
import CreateAssignment from "@/components/assignments/CreateAssignment";
import { assignments } from "@/data/data";
import { useRouter } from "next/navigation";

function Page() {
  const router = useRouter()

  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center flex-col gap-4 justify-center sm:flex-row sm:justify-between">
        <h1 className="font-bold text-2xl">Created Assignments</h1>
        <CreateAssignment/>
      </div>
      <div className="flex flex-row flex-wrap h-fit">
        {assignments.map((assignment, i)=><Assignment key={assignment.id} index={i} assignment={assignment} onClick={()=>router.push(`./assignments/${assignment.id}`)}/>)}
      </div>
    </div>
  );
}

export default Page;