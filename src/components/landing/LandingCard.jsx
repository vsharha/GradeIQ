import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Upload } from "lucide-react";

function LandingCard({ children, title, index }) {
  return (
    <div className="flex-1 w-full h-full p-1.5 sm:w-1/4 flex flex-row gap-2 items-center">
      <Card className="flex-1 h-full bg-primary/10 w-full py-1.5 p-3 sm:p-3">
        <CardContent className="flex flex-row sm:flex-col items-center h-full justify-between gap-1 sm:gap-0 text-center p-1">
          <div className="flex-1 flex gap-4 items-center sm:flex-col sm:gap-0">
            {index && (
              <div className="h-8 aspect-square bg-primary/20 flex items-center justify-center rounded-full">
                <span className="">{index}</span>
              </div>
            )}
            <div className="flex items-center flex-1">
              <h1 className="text-md sm:text-xl font-bold text-start sm:text-center">
                {title}
              </h1>
            </div>
          </div>
          <div className="h-fit sm:mb-2">{children}</div>
        </CardContent>
      </Card>
    </div>
  );
}

export default LandingCard;
