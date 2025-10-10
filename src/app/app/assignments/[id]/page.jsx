import { assignments } from "@/data/data";
import AssignmentView from "@/components/assignments/AssignmentView";
import BackButton from "@/components/custom/BackButton";

async function Page({params}) {
  const {id} = await params;

  const assignment = assignments.find((assignment)=>assignment.id === Number(id))

  return(
    <div className="flex flex-col gap-3">
      <BackButton/>
      <AssignmentView assignment={assignment} key={assignment.id}/>
    </div>
  );
}

export default Page;