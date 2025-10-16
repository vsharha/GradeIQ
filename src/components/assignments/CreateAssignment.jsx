"use client";

import {
  Dialog,
  DialogContent,
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
  const [step, setStep] = useState(0);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) {
      setStep(0);
    }
  }, [open]);

  const [generated, setGenerated] = useState({});

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className={className}><Plus/> <span className={!wide?"hidden lg:block":""}>New</span></Button>
      </DialogTrigger>
      <DialogContent className="p-0 overflow-hidden w-full">
        <div className="overflow-auto w-full max-h-[calc(100dvh*9/10)]  p-8 h-full">
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
                <DialogTitle>Upload mark scheme</DialogTitle>
              </DialogHeader>
              <CreateAssignmentForm onSubmit={()=>setOpen(false)} generated={generated}/>
            </>
          }
        </div>
      </DialogContent>
    </Dialog>
  );
}

export default CreateAssignment;