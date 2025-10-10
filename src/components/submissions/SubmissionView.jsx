import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Eye } from "lucide-react";

function SubmissionView() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <button>
          <Eye/>
        </button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Submission</DialogTitle>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}

export default SubmissionView;