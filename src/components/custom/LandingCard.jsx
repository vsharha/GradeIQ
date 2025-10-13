import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

function LandingCard({children}) {
  return (
    <div className="flex-1 w-full h-full p-1.5 sm:w-1/4 flex flex-row gap-2 items-center">
      <Card className="flex-1 h-full bg-primary/10 w-full py-1.5 p-3 sm:p-5">
        <CardContent className="flex flex-col items-center h-full justify-between gap-1 text-center p-0">
          {children}
        </CardContent>
      </Card>
    </div>
  );
}

export default LandingCard;