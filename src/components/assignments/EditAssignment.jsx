import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Pencil } from "lucide-react";
import { Button } from "@/components/ui/button";
import CreateAssignmentForm from "@/components/assignments/CreateAssignmentForm";
import getClientAuthHeaders from "@/services/getClientAuthHeaders";
import { updateAssignment } from "@/services/fetchApi";
import { useState } from "react";

function EditAssignment({ assignment, title = false, ...props }) {
  const [open, setOpen] = useState(false);

  async function handleSubmit(payload, setError) {
    const headers = await getClientAuthHeaders();
    const result = await updateAssignment(
      assignment.id,
      payload,
      headers,
      setError,
    );
    setOpen(false);
    return result;
  }

  return (
    <div onClick={(e) => e.stopPropagation()}>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Button variant="secondary" {...props}>
            <Pencil />
            {title && <span>Edit</span>}
          </Button>
        </DialogTrigger>
        <DialogContent className="p-0 overflow-hidden h-fit max-h-[calc(9/10*100dvh)] gap-0 flex flex-col">
          <DialogHeader className="px-6 pt-5 pb-0">
            <DialogTitle className="pb-0">Edit assignment</DialogTitle>
          </DialogHeader>
          <CreateAssignmentForm
            generated={assignment}
            submitButtonText="Edit"
            onSubmit={handleSubmit}
          />
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default EditAssignment;
