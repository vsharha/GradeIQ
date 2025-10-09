import { Button } from "@/components/ui/button";
import Assignment from "@/components/assignments/Assignment";
import { Plus } from "lucide-react";

const assignments = [
  {
    id: 1,
    title: "History of Ancient Rome",
    createdOn: "04 0ct, 2025",
    description: "An in-depth analysis of the socio-political structure of the Roman Republic and its transition into the Roman Empire. Students are expected to cite primary sources.",
    submitted: 70,
    marked: 30,
  }
]

function Page() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <h1 className="font-bold text-2xl">Created Assignments</h1>
        <Button><Plus/> New assignment</Button>
      </div>
      {assignments.map((assignment)=><Assignment key={assignment.id} assignment={assignment}/>)}
    </div>
  );
}

export default Page;