import { assignments, studentSubmissions, submissions } from "@/data/data";
import AssignmentView from "@/components/assignments/AssignmentView";
import BackButton from "@/components/custom/BackButton";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import SubmissionTable from "@/components/submissions/SubmissionTable";

async function Page({params}) {
  const {id} = await params;

  const assignment = assignments.find((assignment) => assignment.id === Number(id))
  const submissions = studentSubmissions.find((submission) => submission.assignmentID === Number(id)).submissions

  return(
    <div className="flex flex-col gap-3 max-w-350 m-auto">
      <BackButton/>
      <AssignmentView assignment={assignment}/>
      <Card className="mt-5 sm:mt-8">
        <CardHeader>
          <h1 className="text-xl font-bold">Submissions</h1>
        </CardHeader>
        <CardContent>
          <SubmissionTable submissions={submissions}/>
        </CardContent>
      </Card>
    </div>
  );
}

export default Page;