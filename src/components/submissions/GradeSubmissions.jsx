import LoadingButton from "@/components/loader/LoadingButton";
import { Dialog, DialogContent, DialogFooter, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import getClientAuthHeaders from "@/services/getClientAuthHeaders";
import { gradeSubmissions } from "@/services/fetchApi";
import useSubmissionMutation from "@/hooks/useSubmissionMutation";

function GradeSubmissions({selected, setSelected, assignment_id}) {
  const [open, setOpen] = useState(false);

  const {mutate, isPending} = useSubmissionMutation(assignment_id, async ({ assignment_id, submission_ids }) => {
    const headers = await getClientAuthHeaders();
    return await gradeSubmissions(assignment_id, submission_ids, headers);
  })

  function handleGrade() {
    mutate({assignment_id, selected})
    setOpen(false)
    setSelected([])
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
    "Polishing expression..."
  ];

  return (
    <div className="flex gap-4 justify-center items-center">
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger disabled={selected.length===0} asChild>
          <LoadingButton isLoading={isPending} messages={messages}>
            Grade
          </LoadingButton>
        </DialogTrigger>
        <DialogContent>
          <DialogTitle>
            Grade {selected.length} submission{selected.length>1?"s":""}?
          </DialogTitle>
          <DialogFooter>
            <Button variant="secondary" onClick={()=>setOpen(false)} >
              No
            </Button>
            <Button onClick={handleGrade}>
              Yes
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
      {selected.length!==0&&<span>Selected: {selected.length}</span>}
    </div>
  );
}

export default GradeSubmissions;