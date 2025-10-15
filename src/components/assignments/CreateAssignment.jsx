"use client";

import {
  Dialog,
  DialogContent, DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import MarkschemeForm from "@/components/assignments/MarkschemeForm";
import { useEffect, useState } from "react";
import CreateAssignmentForm from "@/components/assignments/CreateAssignmentForm";

function CreateAssignment({className, wide=false}) {
  const [step, setStep] = useState(1);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) {
      setStep(1);
    }
  }, [open]);

  // const [generated, setGenerated] = useState({});
  const [generated, setGenerated] = useState({
    "title": "Discrete Mathematics and Probability: Proof Homework 1",
    "description": "This assessment covers fundamental proof techniques in discrete mathematics, including negation, counterexample, contraposition, and proof by contradiction or cases, focusing on properties of integers and irrational numbers.",
    "markscheme": [
      {
        "id": 1,
        "question": "(a) Write down the negation of the following statement.\nFor all integers n, if n is odd then (n² + 4) is prime",
        "answer": "There exists an integer n such that n is odd and (n² + 4) is not prime",
        "rubrics": [
          {
            "criterion": "Correct negation of the statement",
            "marks": 2
          }
        ]
      },
      {
        "id": 2,
        "question": "(b) Use a counterexample to prove the statement in part (a) is false.",
        "answer": "n = 9. For n=9, n is odd, and (n² + 4) = (9² + 4) = 81 + 4 = 85. Since 85 = 5 × 17, 85 is composite (not prime). Thus, n=9 is a counterexample.",
        "rubrics": [
          {
            "criterion": "Correct counterexample and justification",
            "marks": 2
          }
        ]
      },
      {
        "id": 3,
        "question": "Prove by contraposition that for any irrational number r its cube root ³√r is also irrational.",
        "answer": "The contrapositive statement is that for any real number r, if ³√r is rational then r is rational. Suppose that ³√r is rational. Then we can write ³√r = p/q for some integers p and q, where q ≠ 0. Cubing both sides, we get r = (p/q)³ = p³/q³. Since p and q are integers, p³ and q³ are also integers. As q ≠ 0, q³ ≠ 0. Therefore, r can be expressed as a ratio of two integers, p³/q³, which means r is rational. This proves the contrapositive statement, and thus the original statement is true.",
        "suggested_answer":true,
        "rubrics": [
          {
            "criterion": "Correct proof by contraposition",
            "marks": 4
          }
        ]
      },
      {
        "id": 4,
        "question": "Write out a proof that if a and b are integers then not all of a, (a+b), and ab are odd.",
        "answer": "Proof by contradiction: Assume, for the sake of contradiction, that all three quantities a, (a+b), and ab are odd. If a is odd and (a+b) is odd, then their difference, b = (a+b) - a, must be even (odd - odd = even). If b is even, then the product ab must also be even (odd × even = even). However, this contradicts our initial assumption that ab is odd. Therefore, the assumption that all three quantities are odd must be false. Hence, not all of a, (a+b), and ab can be odd.",
        "suggested_answer":true,
        "rubrics": [
          {
            "criterion": "Correct proof (e.g., by contradiction or cases)",
            "marks": 2
          }
        ]
      }
    ]
  });

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className={className}><Plus/> <span className={!wide?"hidden lg:block":""}>New</span></Button>
      </DialogTrigger>
      <DialogContent className="p-0 overflow-hidden">
        <div className="overflow-auto w-fit max-h-[calc(100dvh*9/10)]  p-8 h-full">
          {step===0 &&
            <>
              <DialogHeader>
                <DialogTitle>Create assignment</DialogTitle>
              </DialogHeader>
              <MarkschemeForm onSubmit={()=>setStep((step)=>step+1)} setGenerated={setGenerated}/>
            </>
          }

          {step === 1 &&
            <>
              <DialogHeader>
                <DialogTitle>Upload markscheme</DialogTitle>
              </DialogHeader>
              <CreateAssignmentForm generated={generated}/>
            </>
          }
        </div>
      </DialogContent>
    </Dialog>
  );
}

export default CreateAssignment;