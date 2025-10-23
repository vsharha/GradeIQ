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
import { Brain, BrainCircuit } from "lucide-react";
import SelectModel from "@/components/custom/SelectModel";
import { Label } from "@/components/ui/label";

function GradeSubmissions({ selected, setSelected, assignment_id, ...props }) {
  const [open, setOpen] = useState(false);

  const { mutate, isPending } = useSubmissionMutation(assignment_id, async ({ assignment_id, payload }) => {
    const headers = await getClientAuthHeaders();
    return await gradeSubmissions(assignment_id, payload, headers);
  });


  const [config, setConfig] = useState();

  async function handleGrade() {
    const payload = {ai_config: config, submission_ids:selected}
    await mutate({ assignment_id, payload });
    setOpen(false);
    if (typeof setSelected === "function") {
      setSelected([]);
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
        <SelectModel onChange={setConfig}/>
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