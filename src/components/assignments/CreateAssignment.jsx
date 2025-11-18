"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import MarkSchemeForm from "@/components/assignments/MarkSchemeForm";
import { useEffect, useState } from "react";
import CreateAssignmentForm from "@/components/assignments/CreateAssignmentForm";
import getClientAuthHeaders from "@/services/getClientAuthHeaders";
import { createAssignment } from "@/services/fetchApi";

function CreateAssignment({ className, wide = false }) {
  const [step, setStep] = useState(0);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) {
      setStep(0);
    }
  }, [open]);

  const [generated, setGenerated] = useState({});

  async function handleSubmit(assignment, setError) {
    const headers = await getClientAuthHeaders();
    const result = await createAssignment(assignment, headers, setError);
    setOpen(false);
    return result;
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className={className}>
          <Plus /> <span className={!wide ? "hidden lg:block" : ""}>New</span>
        </Button>
      </DialogTrigger>
      <DialogContent className="p-0 overflow-hidden h-fit max-h-[calc(9/10*100dvh)] gap-0 flex flex-col">
        {step === 0 && (
          <>
            <div className="flex flex-col p-5">
              <DialogHeader>
                <DialogTitle>Upload mark scheme</DialogTitle>
                <DialogDescription>
                  The AI will extract questions and rubrics for you
                </DialogDescription>
              </DialogHeader>
              <MarkSchemeForm
                onSubmit={() => setStep((step) => step + 1)}
                setGenerated={setGenerated}
              />
            </div>
          </>
        )}

        {step === 1 && (
          <>
            <DialogHeader className="p-5 pb-0">
              <DialogTitle>Create assignment</DialogTitle>
            </DialogHeader>
            <CreateAssignmentForm
              onSubmit={handleSubmit}
              generated={generated}
            />
          </>
        )}
      </DialogContent>
    </Dialog>
  );
}

export default CreateAssignment;
