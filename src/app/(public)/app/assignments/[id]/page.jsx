"use client";

import {use} from "react"
import AssignmentView from "@/components/assignments/AssignmentView";
import BackButton from "@/components/custom/BackButton";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import SubmissionTable from "@/components/submissions/SubmissionTable";
import useAssignments from "@/hooks/useAssignments";
import PageLoader from "@/components/loader/PageLoader";
import ErrorMessage from "@/components/custom/ErrorMessage";
import { useRouter } from "next/navigation";

function Page({params}) {
  const {id} = use(params);

  const { assignments, isLoading, error } = useAssignments();

  if(isLoading) {
    return <PageLoader/>;
  }

  if(error) {
    return <ErrorMessage error={error}/>;
  }

  return(
    <div className="flex flex-col gap-3 w-full max-w-content">
      <BackButton href="/app/assignments"/>
      <AssignmentView assignment={assignment}/>
      <Card className="mt-5 sm:mt-8 gap-2 pb-6">
        <CardHeader>
          <h1 className="text-xl font-bold">Submissions</h1>
        </CardHeader>
        <CardContent className="px-3 sm:px-4">
          <SubmissionTable assignment={assignment}/>
        </CardContent>
      </Card>
    </div>
  );
}

export default Page;