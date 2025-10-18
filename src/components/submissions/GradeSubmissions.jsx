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
import { gradeSubmissions } from "@/services/fetchApi";
import useSubmissionMutation from "@/hooks/useSubmissionMutation";

function GradeSubmissions({ selected, setSelected, assignment_id, setPending, ...props }) {
  const [open, setOpen] = useState(false);
  const [pendingSubmissions, setPendingSubmissions] = useState([]);

  const { mutate, isPending } = useSubmissionMutation(assignment_id, async ({ assignment_id, submission_ids }) => {
    setPendingSubmissions(selected);
    if(typeof setPending==="function") {
      setPending((pending)=>[...pending, ...selected])
    }
    const headers = await getClientAuthHeaders();
    return await gradeSubmissions(assignment_id, submission_ids, headers);
  });

  async function handleGrade() {
    await mutate({ assignment_id, submission_ids:selected });
    setOpen(false);
    if (typeof setSelected === "function") {
      setSelected([]);
    }
    if(typeof setPending === "function") {
      setPending((pending)=>pending.filter((id)=>!pendingSubmissions.includes(id)));
    }
  }

  const messages = [
    "Tabulating results...",
    "Pinging feedback engine...",
    "Enforcing equitable rules...",
    "Refining assessment notes...",
    "Composing concise comments...",
    "Invoking helper bots...",
    "Normalizing grade curves...",
    "Scouting apt phrasing...",
    "Validating academic tone...",
    "Polishing expression...",
  ];

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <LoadingButton isLoading={isPending} messages={messages} disabled={selected.length === 0} {...props}>
          Grade
        </LoadingButton>
      </DialogTrigger>
      <DialogContent>
        <DialogTitle>
          Grade {selected.length} submission{selected.length > 1 ? "s" : ""}?
        </DialogTitle>
        <DialogDescription>
          Our AI will grade your submissions
        </DialogDescription>
        <DialogFooter>
          <Button variant="secondary" onClick={() => setOpen(false)}>
            No
          </Button>
          <Button onClick={handleGrade}>
            Yes
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export default GradeSubmissions;