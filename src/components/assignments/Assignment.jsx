"use client";

import {Card, CardContent, CardFooter, CardHeader} from "@/components/ui/card";
import {useState, useEffect} from "react";
import OverlayLoader from "@/components/loader/OverlayLoader";
import { formatDate } from "@/lib/formatDate";
import { Calendar, ChevronRight } from "lucide-react";
import SubmissionProgress from "@/components/custom/SubmissionProgress";
import { cn } from "@/lib/utils";

function Assignment({assignment, onClick}) {
  const { title, description, due } = assignment

  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    setIsLoading(false);
  }, [assignment]);

  function handleClick() {
    setIsLoading(true)
    onClick()
  }

  return (
    <div className="w-full py-2 min-h-64 sm:px-2 sm:w-1/2 md:w-1/3 lg:w-1/4 select-none">
      <Card className="w-full h-full overflow-hidden sm:hover:-translate-y-2 transition-all duration-150 hover:shadow-xl shadow-shadow relative cursor-pointer" onClick={handleClick}>
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
              <p className={cn("text-sm text-muted-foreground", new Date(due) < new Date() ? "text-failed" : "")}>{formatDate(due)}</p>
            </div>
          </div>
        </CardHeader>
        <CardContent className="flex-1">
          <p>{description}</p>
        </CardContent>
        <CardFooter className="w-full">
          <SubmissionProgress assignment={assignment}/>
        </CardFooter>
      </Card>
    </div>
  );
}

export default Assignment;