import StyledProgress from "@/components/assignments/StyledProgress";
import {Card, CardContent, CardDescription, CardFooter, CardHeader} from "@/components/ui/card";

function Assignment({assignment, index}) {
  const { title, createdOn, description, submitted, marked } = assignment

  return (
    <div className="p-2 w-full min-h-64 sm:w-1/2 md:w-1/3 lg:w-1/4">
      <Card className="transition-all duration-150 hover:-translate-y-2 hover:shadow-lg shadow-shadow/50 h-full">
        <CardHeader>
          <h2 className="font-bold text-lg">{title}</h2>
          <h3 className="text-sm text-muted-foreground">{createdOn}</h3>
        </CardHeader>
        <CardContent className="flex-1">
          <p>{description}</p>
        </CardContent>
        <CardFooter className="w-full">
          <StyledProgress index={index} value={marked} max={submitted} label="Grading progress"/>
        </CardFooter>
      </Card>
    </div>
  );
}

export default Assignment;