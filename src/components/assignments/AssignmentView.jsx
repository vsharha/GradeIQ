import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { ArrowUpCircle, Calendar, Target } from "lucide-react";
import { formatDate } from "@/lib/formatDate";
import SubmissionProgress from "@/components/custom/SubmissionProgress";
import VariableTitleView from "@/components/custom/VariableTitleView";
import DeleteAssignment from "@/components/assignments/DeleteAssignment";
import MarkScheme from "@/components/assignments/MarkScheme";
import EditAssignment from "@/components/assignments/EditAssignment";

function AssignmentView({assignment}) {
  const { title, created_at, due, description, max_grade, passing_grade, id, mark_scheme } = assignment

  return (
    <div className="flex flex-col gap-3">
      <Card className="">
        <CardHeader className="flex flex-col gap-5">
          <div className="flex w-full gap-3 sm:gap-2 items-start flex-col">
            <h1 className="font-bold text-xl sm:text-2xl w-fit">{title}</h1>
            <p className="text-muted-foreground text-md sm:text-xl">{description}</p>
          </div>
          <div className="flex w-full gap-3 items-center sm:w-fit h-full">
            <DeleteAssignment assignment_id={id}/>
            <EditAssignment assignment={assignment}/>
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
      {mark_scheme &&
        <Card>
          <CardContent>
            <MarkScheme mark_scheme={mark_scheme} />
          </CardContent>
        </Card>
      }
    </div>
  );
}

export default AssignmentView;