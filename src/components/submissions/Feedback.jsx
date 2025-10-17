import Truncate from "@/components/custom/Truncate";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useState } from "react";
import StyledCollapsible from "@/components/custom/StyledCollapsible";

function Feedback({feedback}) {
  const [value, setValue] = useState(0);

  if(!feedback) {
    return null;
  }

  const {
    overall_feedback,
    question_grades
  } = feedback

  return (
    <div className="flex flex-col gap-2">
      <StyledCollapsible title="Feedback" className="font-bold text-lg">
        <h2 className="font-semibold">Overall feedback</h2>
        <Truncate length={150}>{overall_feedback}</Truncate>
        {question_grades.length > 0 &&
          <Tabs defaultValue={0} value={value} onValueChange={setValue}>
            <TabsList className="w-full">
              {question_grades.map((question_grade, i)=>
                <TabsTrigger value={i} key={i}>{question_grade.number}</TabsTrigger>
              )}
            </TabsList>
              {question_grades.map((question_grade, i) => {
                const {number, question_text, total_marks, awarded_marks, criteria_feedback} = question_grade
                return (
                  <TabsContent value={i} key={i}>
                    <div className="flex gap-3 justify-between border-1 border-primary p-2 rounded-sm mt-4 mb-6 flex-col">
                      <div className="flex flex-row items-centers justify-between gap-4">
                        <div className="font-bold">Question {number}</div>
                        {/*to be taken from mark scheme*/}
                        <div className="font-bold">{Number(total_marks).toFixed(2)}/{Number(awarded_marks).toFixed(2)}</div>
                      </div>
                      <Truncate length={200}>{question_text}</Truncate>
                    </div>
                    <div>
                      {criteria_feedback.map((criteria, i) => {
                        const {criterion, max_marks, awarded_marks, feedback, evidence, overall_comment} = criteria

                        return <StyledCollapsible title = {
                          <div className="flex flex-1 gap-3 justify-between items-center w-full">
                            {/*to be taken from mark scheme*/}
                            <div className="flex-1 w-fit text-start">
                              <p className="font-semibold whitespace-normal">{criterion}</p>
                            </div>
                            <div className="font-bold text-end">{awarded_marks}/{max_marks}</div>
                          </div>
                        } defaultOpen={false} key={i}>
                          <div className="border-2 rounded-sm p-2 flex flex-col gap-2">
                            <div>
                              <h3 className="font-semibold">Feedback</h3>
                              <div>{feedback}</div>
                            </div>
                            <div>
                              <h3 className="font-semibold">Evidence</h3>
                              <div>{evidence}</div>
                            </div>
                          </div>
                          <div>{overall_comment}</div>
                        </StyledCollapsible>
                      })}
                    </div>
                 </TabsContent>
                )
              })}
          </Tabs>
        }
      </StyledCollapsible>
    </div>
  );
}

export default Feedback;