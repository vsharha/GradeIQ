"use client";

import StyledProgress from "@/components/assignments/StyledProgress";
import {Card, CardContent, CardFooter, CardHeader} from "@/components/ui/card";
import {useState} from "react";
import Loader from "@/components/custom/Loader";

function Assignment({assignment, index, onClick}) {
  const { title, createdOn, description, submitted, marked } = assignment

  const [isLoading, setIsLoading] = useState(false)

  function handleClick() {
    setIsLoading(true)
    onClick()
  }

  return (
    <div className="w-full p-2 min-h-64 sm:w-1/2 md:w-1/3 lg:w-1/4 select-none" onClick={handleClick}>
      <Card className="h-full overflow-hidden hover:-translate-y-2 transition-all duration-150 hover:shadow-lg shadow-shadow/50 relative">
        {isLoading && <div className="absolute top-0 w-full h-full flex justify-center items-center backdrop-blur brightness-90 z-45"><Loader/></div>}
        <CardHeader>
          <h2 className="font-bold text-lg">{title}</h2>
          <h3 className="text-sm text-muted-foreground">{createdOn}</h3>
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