import LoadingButton from "@/components/loader/LoadingButton";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import getClientAuthHeaders from "@/services/getClientAuthHeaders";
import { confirmSubmissionGrades } from "@/services/fetchApi";
import useSubmissionMutation from "@/hooks/useSubmissionMutation";
import { Check } from "lucide-react";

function ConfirmSubmissions({ selected, setSelected, assignment_id, ...props }) {
  const [open, setOpen] = useState(false);

  const { mutate, isPending } = useSubmissionMutation(assignment_id, async ({ assignment_id, submission_ids }) => {
    const headers = await getClientAuthHeaders();
    return await confirmSubmissionGrades(assignment_id, submission_ids, headers);
  });

  async function handleConfirm() {
    await mutate({ assignment_id, submission_ids:selected });
    setOpen(false);
    if (typeof setSelected === "function") {
      setSelected([]);
    }
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <LoadingButton isLoading={isPending} disabled={selected.length === 0} variant="secondary" {...props}>
          <Check/> <span className="hidden sm:block">Confirm</span>
        </LoadingButton>
      </DialogTrigger>
      <DialogContent>
        <DialogTitle>
          Confirm grades for {selected.length} submission{selected.length > 1 ? "s" : ""}?
        </DialogTitle>
        <DialogDescription>
          Our AI will grade your submissions
        </DialogDescription>
        <DialogFooter>
          <Button variant="secondary" onClick={() => setOpen(false)}>
            No
          </Button>
          <Button onClick={handleConfirm}>
            Yes
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export default ConfirmSubmissions;