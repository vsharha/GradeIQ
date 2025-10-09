import StyledProgress from "@/components/assignments/StyledProgress";
import {Card, CardContent, CardDescription, CardFooter, CardHeader} from "@/components/ui/card";

function Assignment({assignment}) {
  const { title, createdOn, description, submitted, marked } = assignment

  return (
    <Card>
      <CardHeader>
        <h2 className="font-bold text-lg">{title}</h2>
        <h3 className="text-sm text-muted-foreground">{createdOn}</h3>
      </CardHeader>
      <CardContent>
        <p className="text-justify">{description}</p>
      </CardContent>
      <CardFooter className="w-full">
        <StyledProgress value={marked} max={submitted} label="Grading progress"/>
      </CardFooter>
    </Card>
  );
}

export default Assignment;