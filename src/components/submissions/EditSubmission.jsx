import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Pencil } from "lucide-react";
import EditSubmissionForm from "@/components/submissions/EditSubmissionForm";
import { useState } from "react";

function EditSubmission({ assignment_id, submission }) {
  const { grading_status } = submission;
  const [open, setOpen] = useState();

  function handleSubmit() {
    setOpen(false);
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="secondary" disabled={grading_status === "pending"}>
          <Pencil />
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Edit submission</DialogTitle>
        </DialogHeader>
        <EditSubmissionForm
          submission={submission}
          onSubmit={handleSubmit}
          assignment_id={assignment_id}
        />
      </DialogContent>
    </Dialog>
  );
}

export default EditSubmission;
