"use client";

import { use, useEffect, useState } from "react";
import AssignmentView from "@/components/assignments/AssignmentView";
import BackButton from "@/components/custom/BackButton";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import SubmissionTable from "@/components/submissions/SubmissionTable";
import useAssignments from "@/hooks/useAssignments";
import PageLoader from "@/components/loader/PageLoader";
import ErrorMessage from "@/components/custom/ErrorMessage";
import { useRouter } from "next/navigation";
import UploadSubmissions from "@/components/submissions/UploadSubmissions";
import GradeSubmissions from "@/components/submissions/GradeSubmissions";

function Page({params}) {
  const {id} = use(params);

  const [selected, setSelected] = useState([]);

  const router = useRouter();

  const { assignments, isLoading, error } = useAssignments();

  if(isLoading) {
    return <PageLoader/>;
  }

  if(error) {
    return <ErrorMessage error={error}/>;
  }

  const assignment = assignments.find((assignment) => assignment.id === Number(id));

  if(!assignment) {
    router.push("/app");
  }

  return(
    <div className="flex flex-col gap-3 w-full max-w-content">
      <BackButton href="/app/assignments"/>
      <div className="flex flex-col lg:flex-row gap-6 lg:gap-4">
        <AssignmentView assignment={assignment}/>
        <Card className="gap-2 pb-6 lg:flex-1 lg:min-h-[calc(100dvh*3/4)]">
          <CardHeader className="flex flex-col">
            <h1 className="text-xl font-bold">Submissions</h1>
            <div className="flex justify-between gap-2 items-center justify-center">
              <UploadSubmissions assignment_id={assignment.id}/>
              <div className="flex gap-4 justify-center items-center">
                <GradeSubmissions selected={selected} assignment_id={id} setSelected={setSelected}/>
                {selected.length!==0&&<span>Selected: {selected.length}</span>}
              </div>
            </div>
          </CardHeader>
          <CardContent className="px-3 sm:px-4">
            <SubmissionTable assignment={assignment} selected={selected} setSelected={setSelected}/>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

export default Page;