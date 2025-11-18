// javascript
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
import DeleteSubmissions from "@/components/submissions/DeleteSubmissions";
import ConfirmSubmissions from "@/components/submissions/ConfirmSubmissions";

function Page({ params }) {
  const { id } = use(params);

  const [selected, setSelected] = useState([]);

  const router = useRouter();

  const { assignments, isLoading, error } = useAssignments();

  useEffect(() => {
    if (!isLoading) {
      const assignment = assignments?.find((a) => a.id === Number(id));
      if (!assignment) {
        router.push("/app");
      }
    }
  }, [isLoading, assignments, id, router]);

  if (isLoading) {
    return <PageLoader />;
  }

  if (error) {
    return <ErrorMessage error={error} />;
  }

  const assignment = assignments.find(
    (assignment) => assignment.id === Number(id),
  );

  if (!assignment) {
    return null;
  }

  return (
    <div className="flex flex-col gap-3 w-full max-w-content">
      <BackButton href="/app/assignments" />
      <div className="flex flex-col w-full flex-1 lg:flex-row gap-6 lg:gap-4">
        <AssignmentView assignment={assignment} />
        <Card className="gap-2 pb-6 lg:flex-1 lg:min-h-[calc(100dvh*3/4)]">
          <CardHeader className="flex flex-col">
            <div className="flex justify-between w-full">
              <h1 className="text-xl font-bold">Submissions</h1>
              <UploadSubmissions assignment_id={id} />
            </div>
            <div className="flex items-center gap-4 w-full sm:w-fit justify-between">
              <div className="flex items-center gap-2">
                <DeleteSubmissions
                  selected={selected}
                  assignment_id={id}
                  setSelected={setSelected}
                />
                <ConfirmSubmissions
                  selected={selected}
                  assignment_id={id}
                  setSelected={setSelected}
                />
                <GradeSubmissions
                  selected={selected}
                  assignment_id={id}
                  setSelected={setSelected}
                />
              </div>
              {selected.length !== 0 && (
                <span>Selected: {selected.length}</span>
              )}
            </div>
          </CardHeader>
          <CardContent className="px-3 sm:px-4">
            <SubmissionTable
              assignment={assignment}
              selected={selected}
              setSelected={setSelected}
            />
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

export default Page;
