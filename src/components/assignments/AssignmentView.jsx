import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { ArrowUpCircle, Calendar, Target } from "lucide-react";
import { formatDate } from "@/lib/formatDate";
import SubmissionProgress from "@/components/custom/SubmissionProgress";
import VariableTitleView from "@/components/custom/VariableTitleView";
import EditAssignment from "@/components/assignments/EditAssignment";
import DeleteAssignment from "@/components/assignments/DeleteAssignment";

function AssignmentView({assignment}) {
  const { title, created_at, due, description, max_grade, passing_grade, id } = assignment

  return (
    <div className="flex flex-col gap-3">
      <Card>
        <CardHeader className="flex flex-col gap-5">
          <div className="flex w-full gap-3 sm:gap-2 items-start flex-col">
            <h1 className="font-bold text-xl sm:text-2xl w-fit">{title}</h1>
            <p className="text-muted-foreground text-md sm:text-xl">{description}</p>
          </div>
          <div className="flex w-full gap-3 items-center sm:w-fit h-full">
            <EditAssignment/>
            <DeleteAssignment assignment_id={id}/>
          </div>
        </CardHeader>
        <CardContent>
          <div className="flex gap-y-5 flex-wrap mt-2">
            <VariableTitleView variable={formatDate(due)}>
              <Calendar size={15}/> Due
            </VariableTitleView>
            <VariableTitleView variable={formatDate(created_at)}>
              <Calendar size={15}/> Created on
            </VariableTitleView>
            <VariableTitleView variable={max_grade}>
              <Target size={15}/> Max grade
            </VariableTitleView>
            <VariableTitleView variable={passing_grade}>
              <ArrowUpCircle size={15}/> Passing grade
            </VariableTitleView>
          </div>
        </CardContent>
      </Card>
      <Card>
        <CardContent>
          <SubmissionProgress assignment={assignment}/>
        </CardContent>
      </Card>
    </div>
  );
}

export default AssignmentView;