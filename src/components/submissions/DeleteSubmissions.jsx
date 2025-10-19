import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Trash } from "lucide-react";
import LoadingButton from "@/components/loader/LoadingButton";
import useSubmissionMutation from "@/hooks/useSubmissionMutation";
import getClientAuthHeaders from "@/services/getClientAuthHeaders";
import { deleteSubmissions } from "@/services/fetchApi";
import { useState } from "react";
import { Button } from "@/components/ui/button";

function DeleteSubmissions({selected, setSelected, assignment_id}) {
  const [open, setOpen] = useState(false);

  const {isPending, mutate} = useSubmissionMutation(assignment_id, async ({ assignment_id, submission_ids })=>{
    const headers = await getClientAuthHeaders();
    return await deleteSubmissions(assignment_id, submission_ids, headers);
  })

  async function handleDelete() {
    await mutate({ assignment_id, submission_ids:selected });
    setOpen(false);
    if (typeof setSelected === "function") {
      setSelected([]);
    }
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <LoadingButton variant="secondary" className="flex items-center" disabled={selected.length === 0} isLoading={isPending}>
          <Trash/> Delete
        </LoadingButton>
      </DialogTrigger>
      <DialogContent>
        <DialogTitle>
          Delete {selected.length} submission{selected.length > 1 ? "s" : ""}?
        </DialogTitle>
        <DialogDescription>
          This action is permanent
        </DialogDescription>
        <DialogFooter>
          <Button variant="secondary" onClick={() => setOpen(false)}>
            No
          </Button>
          <Button onClick={handleDelete}>
            Yes
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export default DeleteSubmissions;