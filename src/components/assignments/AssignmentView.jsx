import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import StyledProgress from "@/components/assignments/StyledProgress";
import { ArrowUp, ArrowUpCircle, Calendar, Gauge, Target, Trophy } from "lucide-react";
import { formatDate } from "@/services/services";
import SubmissionProgress from "@/components/custom/SubmissionProgress";
import VariableTitleView from "@/components/custom/VariableTitleView";

function AssignmentView({assignment}) {
  const { title, createdOn, dueDate, description, maxGrade, passingGrade } = assignment

  return (
    <div className="flex flex-col gap-3">
      <Card>
        <CardHeader>
          <h1 className="font-bold text-2xl">{title}</h1>
          <p className="text-muted-foreground text-xl">{description}</p>
        </CardHeader>
        <CardContent>
          <div className="flex gap-y-5 flex-wrap mt-2">
            <VariableTitleView variable={formatDate(dueDate)}>
              <Calendar size={15}/> Due
            </VariableTitleView>
            <VariableTitleView variable={formatDate(createdOn)}>
              <Calendar size={15}/> Created on
            </VariableTitleView>
            <VariableTitleView variable={maxGrade}>
              <Target size={15}/> Max grade
            </VariableTitleView>
            <VariableTitleView variable={passingGrade}>
              <ArrowUpCircle size={15}/> Passing grade
            </VariableTitleView>
          </div>
        </CardContent>
      </Card>
      <Card>
        <CardContent>
          <SubmissionProgress assignmentID={assignment.id}/>
        </CardContent>
      </Card>
    </div>
  );
}

export default AssignmentView;