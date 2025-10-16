"use client";

import { use, useEffect } from "react";
import AssignmentView from "@/components/assignments/AssignmentView";
import BackButton from "@/components/custom/BackButton";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import SubmissionTable from "@/components/submissions/SubmissionTable";
import useAssignments from "@/hooks/useAssignments";
import PageLoader from "@/components/loader/PageLoader";
import ErrorMessage from "@/components/custom/ErrorMessage";
import { useRouter } from "next/navigation";
import UploadSubmissions from "@/components/submissions/UploadSubmissions";

function Page({params}) {
  const {id} = use(params);

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
          <CardHeader className="flex justify-between gap-2 items-center">
            <h1 className="text-xl font-bold">Submissions</h1>
            <UploadSubmissions assignment_id={assignment.id}/>
          </CardHeader>
          <CardContent className="px-3 sm:px-4">
            <SubmissionTable assignment={assignment}/>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

export default Page;