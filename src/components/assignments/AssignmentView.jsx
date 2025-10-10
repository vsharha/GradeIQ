import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import StyledProgress from "@/components/assignments/StyledProgress";
import { Calendar } from "lucide-react";
import { formatDate } from "@/services/services";

function AssignmentView({assignment}) {
  const { title, createdOn, dueDate, description, submitted, marked } = assignment

  return (
    <div className="flex flex-col gap-3">
      <Card>
        <CardHeader>
          <h1 className="font-bold text-2xl">{title}</h1>
          <p className="text-muted-foreground text-xl">{description}</p>
        </CardHeader>
        <CardContent>
          <div className="flex gap-10 flex-wrap mt-2">
            <div className="flex gap-1 flex-col">
              <span className="flex items-center gap-2"><Calendar size={15}/> Due:</span>
              <p className="text-sm text-muted-foreground">{formatDate(dueDate)}</p>
            </div>
            <div className="flex gap-1 flex-col">
              <span className="flex items-center gap-2"><Calendar size={15}/> Created on:</span>
              <p className="text-sm text-muted-foreground">{formatDate(createdOn)}</p>
            </div>
          </div>
        </CardContent>
      </Card>
      <Card>
        <CardContent>
          <StyledProgress value={marked} max={submitted} label="Grading progress"/>
        </CardContent>
      </Card>
    </div>
  );
}

export default AssignmentView;