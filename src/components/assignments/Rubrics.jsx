import Boolean from "@/components/custom/Boolean";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

function Rubrics({rubrics}) {
  return (
    <Tabs className="flex flex-col gap-3 max-w-full" defaultValue={0}>
      <TabsList className="flex flex-wrap h-fit w-full">
        {rubrics.mark_scheme.map((rubric, i)=>
          <TabsTrigger value={i} key={i} className="min-w-[8%] w-[50%] max-w-[50%]">{rubric.number}</TabsTrigger>
        )}
      </TabsList>
      {rubrics.mark_scheme.map((rubric, i)=>
        <TabsContent value={i} key={i}>
          <div key={i} className="flex flex-col gap-2">
            <div>
              <h1 className="font-bold">Question</h1>
              <h1>{rubric.question}</h1>
            </div>
            <div>
              <h1 className="font-bold">Answer</h1>
              <h1>{rubric.answer}</h1>
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
              {rubric.rubrics.map((rubric, i)=>
                <div key={i} className="flex gap-1 justify-between">
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
        </TabsContent>
      )}
    </Tabs>
  );
}

export default Rubrics;