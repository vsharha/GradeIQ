import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Eye, Gauge, Maximize, Maximize2, User } from "lucide-react";
import VariableView from "@/components/custom/VariableView";
import { useState } from "react";
import PdfViewer from "@/components/custom/PdfViewer";
import useDownloadSubmission from "@/hooks/useDownloadSubmission";

function SubmissionView({submission, assignment}) {
  const {student_name, grade, id} = submission
  const {max_grade} = assignment

  const [open, setOpen] = useState(false)

  const {isLoading,file} = useDownloadSubmission(id, {enabled:open})

  return (
    <div className="w-full flex items-center">
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <button>
            {open?<Maximize size={20}/>:<Maximize2 size={20} />}
          </button>
        </DialogTrigger>
        <DialogContent className="max-h-[calc(100dvh*8/10)] overflow-hidden p-0">
          <div className="overflow-auto p-6">
            <DialogHeader>
              <DialogTitle>Submission</DialogTitle>
            </DialogHeader>
            <VariableView>
              <User size={15}/> {student_name}
            </VariableView>
            <VariableView>
              <Gauge size={15}/> {grade?`${grade?.toFixed(2)} / ${max_grade?.toFixed(2)}`:"N/A"}
            </VariableView>
            <div className="mt-3 rounded-sm overflow-hidden">
              <PdfViewer url={file?.url}/>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default SubmissionView;