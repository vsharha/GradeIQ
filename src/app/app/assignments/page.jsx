import { Button } from "@/components/ui/button";
import Assignment from "@/components/assignments/Assignment";
import { Plus } from "lucide-react";

const assignments = [
  {
    id: 1,
    title: "History of Ancient Rome",
    createdOn: "04 Oct, 2025",
    description: "An in-depth analysis of the socio-political structure of the Roman Republic and its transition into the Roman Empire. Students are expected to cite primary sources.",
    submitted: 70,
    marked: 30,
  },
  {
    id: 2,
    title: "Physics: Laws of Motion",
    createdOn: "10 Oct, 2025",
    description: "Explain Newton's three laws of motion with real-world examples. Include diagrams and calculations.",
    submitted: 55,
    marked: 40,
  },
  {
    id: 3,
    title: "Literature: Shakespearean Tragedies",
    createdOn: "15 Oct, 2025",
    description: "Compare and contrast the themes in Hamlet and Macbeth. Provide textual evidence.",
    submitted: 60,
    marked: 50,
  },
  {
    id: 4,
    title: "Biology: Cell Structure",
    createdOn: "20 Oct, 2025",
    description: "Describe the functions of cell organelles. Include labeled diagrams.",
    submitted: 80,
    marked: 75,
  },
  {
    id: 5,
    title: "Mathematics: Calculus Introduction",
    createdOn: "25 Oct, 2025",
    description: "Solve basic differentiation and integration problems. Show all steps.",
    submitted: 65,
    marked: 60,
  }
];


function Page() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center flex-col gap-4 justify-center sm:flex-row sm:justify-between">
        <h1 className="font-bold text-2xl">Created Assignments</h1>
        <Button className=""><Plus/> New assignment</Button>
      </div>
      <div className="flex flex-row flex-wrap h-fit">
        {assignments.map((assignment, i)=><Assignment key={assignment.id} index={i} assignment={assignment}/>)}
      </div>
    </div>
  );
}

export default Page;