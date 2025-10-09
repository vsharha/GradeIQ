import { Card, CardContent, CardDescription, CardFooter, CardHeader } from "@/components/ui/card";
import StyledProgress from "@/components/assignments/StyledProgress";

function AssignmentView({assignment}) {
  const { title, createdOn, description, submitted, marked } = assignment

  return (
    <div>
      <Card>
        <CardHeader>
          <h1 className="font-bold text-2xl">{title}</h1>
          <p className="text-muted-foreground">{description}</p>
          <div className="flex flex-col">
            <span className="font-semibold">
              Created on
            </span>
            <span className="">
              {createdOn}
            </span>
          </div>
        </CardHeader>
        <CardContent>
          <StyledProgress value={marked} max={submitted} label="Grading progress"/>
        </CardContent>
        <CardFooter>

        </CardFooter>
      </Card>
    </div>
  );
}

export default AssignmentView;