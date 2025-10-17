import Boolean from "@/components/custom/Boolean";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import StyledCollapsible from "@/components/custom/StyledCollapsible";
import { useState } from "react";
import Truncate from "@/components/custom/Truncate";

function MarkScheme({rubrics}) {
  const [value, setValue] = useState(0);

  return (
    <Tabs className="flex flex-col gap-5 max-w-full" defaultValue={0} value={value} onValueChange={setValue}>
      <TabsList className="flex flex-wrap h-fit w-full">
        {rubrics.mark_scheme.map((rubric, i)=>
          <TabsTrigger value={i} key={i} className="min-w-[8%] w-[50%] max-w-[calc(100%*1/3)]">{rubric.number}</TabsTrigger>
        )}
      </TabsList>
      <StyledCollapsible title={`Question ${rubrics.mark_scheme[value].number}`} defaultOpen={true} className="font-bold text-xl">
        {rubrics.mark_scheme.map((rubric, i)=>
          <TabsContent value={i} key={i}>
            <div key={i} className="flex flex-col gap-3">
              <div>
                <h1 className="font-bold">Question</h1>
                <div className="border-2 p-2 rounded-sm mt-2">
                  <Truncate length={250}>
                    {rubric.question}
                  </Truncate>
                </div>
              </div>
              <div>
                <h1 className="font-bold">Answer</h1>
                <div className="border-2 p-2 rounded-sm mt-2">
                  <Truncate length={250}>
                    {rubric.answer}
                  </Truncate>
                </div>
              </div>
              <div className="flex flex-row gap-2">
                <span className="font-bold">Precise answer:</span>
                <Boolean flag={rubric.precise_answer}/>
              </div>
              {rubric.options?.map((option, i)=>
                <p key={i}>{option}</p>
              )}
              <div className="flex flex-col gap-2">
                <h1 className="font-bold">Rubrics</h1>
                <div className="rounded-sm mt-2 border-2 overflow-hidden">
                  {rubric.rubrics.map((rubric, i)=>
                    <div key={i} className="flex gap-4 justify-between border-1 p-2">
                      <span>
                        {rubric.criterion}
                      </span>
                      <span className="font-bold">
                        {rubric.marks}
                      </span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </TabsContent>
        )}
      </StyledCollapsible>
    </Tabs>
  );
}

export default MarkScheme;