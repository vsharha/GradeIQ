import { assignments } from "@/data/data";
import AssignmentView from "@/components/assignments/AssignmentView";

async function Page({params}) {
  const {id} = await params;

  return (
    <div>{assignments.filter((assignment)=>assignment.id === Number(id)).map((assignment)=>
      <AssignmentView assignment={assignment} key={assignment.id}/>
    )}</div>
  );
}

export default Page;