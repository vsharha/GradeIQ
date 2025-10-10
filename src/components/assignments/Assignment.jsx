"use client";

import StyledProgress from "@/components/assignments/StyledProgress";
import {Card, CardContent, CardFooter, CardHeader} from "@/components/ui/card";
import {useState, useEffect} from "react";
import OverlayLoader from "@/components/custom/OverlayLoader";
import { formatDate } from "@/services/services";
import { Calendar, ChevronRight } from "lucide-react";

function Assignment({assignment, index, onClick}) {
  const { title, createdOn, description, submitted, marked, dueDate } = assignment

  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    setIsLoading(false);
  }, [assignment]);

  function handleClick() {
    setIsLoading(true)
    onClick()
  }

  return (
    <div className="w-full p-2 min-h-64 sm:w-1/2 md:w-1/3 lg:w-1/4 select-none">
      <Card className="h-full overflow-hidden hover:-translate-y-2 transition-all duration-150 hover:shadow-lg shadow-shadow/50 relative cursor-pointer" onClick={handleClick}>
        <OverlayLoader isLoading={isLoading}/>
        <CardHeader>
          <div className="font-bold text-lg flex flex-row justify-between">
            <span className="flex-1">
              <h2>{title}</h2>
            </span>
            <ChevronRight size={24} className="translate-y-1"/>
          </div>
          <div className="flex gap-3 flex-wrap justify-between">
            <div className="flex gap-2 flex-row items-center">
              <span className="flex items-center gap-2"><Calendar size={15}/> Due:</span>
              <p className="text-sm text-muted-foreground">{formatDate(dueDate)}</p>
            </div>
          </div>
        </CardHeader>
        <CardContent className="flex-1">
          <p>{description}</p>
        </CardContent>
        <CardFooter className="w-full">
          <StyledProgress value={marked} max={submitted} label="Grading progress"/>
        </CardFooter>
      </Card>
    </div>
  );
}

export default Assignment;