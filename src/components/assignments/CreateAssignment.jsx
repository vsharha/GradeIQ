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
import CreateAssignmentForm from "@/components/assignments/CreateAssignmentForm";
import { useEffect, useState } from "react";
import RubricForm from "@/components/assignments/RubricForm";

function CreateAssignment({className}) {
  const [step, setStep] = useState(0);
  const [open, setOpen] = useState(false);

  useEffect(()=>{
    setStep(0)
  },[open])

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className={className}><Plus/> New assignment</Button>
      </DialogTrigger>
      <DialogContent>
        {step===0 &&
          <>
            <DialogHeader>
              <DialogTitle>Create assignment</DialogTitle>
            </DialogHeader>
            <CreateAssignmentForm/>
            <DialogFooter>
              <Button onClick={()=>setStep((step)=>step+1)}>Upload</Button>
            </DialogFooter>
          </>
        }
        {step===1 &&
          <>
            <DialogHeader>
              <DialogTitle>Edit rubric</DialogTitle>
            </DialogHeader>
            <RubricForm/>
            <DialogFooter>
              <Button>Create assignment</Button>
            </DialogFooter>
          </>
        }
      </DialogContent>
    </Dialog>
  );
}

export default CreateAssignment;