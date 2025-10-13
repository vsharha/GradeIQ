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
import { useState } from "react";
import RubricForm from "@/components/assignments/RubricForm";
import { useForm } from "react-hook-form";
import { createAssignment } from "@/services/fetchApi";
import getClientAuthHeaders from "@/services/getClientAuthHeaders";
import useAssignmentMutation from "@/hooks/useAssignmentMutation";

function CreateAssignment({className, wide=false}) {
  const [step, setStep] = useState(0);
  const [open, setOpen] = useState(false);

  const form = useForm({
    defaultValues: {
      due: new Date(Date.now() + 5 * 24 * 60 * 60 * 1000),
      title: "",
      description: "",
      max_grade: 100,
      passing_grade: 50,
      files: null,
      assignment_name: ""
    }
  })

  const {isLoading, mutate} = useAssignmentMutation(async (assignment) => {
    const headers = await getClientAuthHeaders();
    return await createAssignment(assignment, headers);
  })

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className={className}><Plus/> <span className={!wide?"hidden lg:block":""}>New</span></Button>
      </DialogTrigger>
      <DialogContent>
        {step===0 &&
          <>
            <DialogHeader>
              <DialogTitle>Create assignment</DialogTitle>
            </DialogHeader>
            <CreateAssignmentForm form={form}/>
            <DialogFooter>
              <Button onClick={form.handleSubmit(mutate)} disabled={isLoading}>Create</Button>
            </DialogFooter>
          </>
        }
        {step===1 &&
          <>
            <DialogHeader>
              <DialogTitle>Edit rubric</DialogTitle>
            </DialogHeader>
            <RubricForm form={form}/>
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