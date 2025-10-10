import { assignments } from "@/data/data";
import AssignmentView from "@/components/assignments/AssignmentView";
import BackButton from "@/components/custom/BackButton";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";

async function Page({params}) {
  const {id} = await params;

  const assignment = assignments.find((assignment)=>assignment.id === Number(id))

  return(
    <div className="flex flex-col gap-3">
      <BackButton/>
      <AssignmentView assignment={assignment} key={assignment.id}/>
      <Card className="mt-5 sm:mt-8">
        <CardHeader>
          <h1 className="text-xl font-bold">Submissions</h1>
        </CardHeader>
      </Card>
    </div>
  );
}

export default Page;