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
        <DialogContent className="sm:h-fit max-h-[calc(100dvh*9/10)] w-600 sm:max-w-1/2 overflow-hidden p-0 flex flex-col">
          <div className="overflow-hidden max-h-full p-6 pb-0 w-full flex-1">
            <DialogHeader className="mb-4">
              <DialogTitle>Submission</DialogTitle>
            </DialogHeader>
            <VariableView>
              <User size={15}/> {student_name}
            </VariableView>
            <VariableView>
              <Gauge size={15}/> {grade?`${grade?.toFixed(2)} / ${max_grade?.toFixed(2)}`:"N/A"}
            </VariableView>
          </div>
          <div className="p-2 sm:p-4 pt-0 sm:pt-0 flex-1 max-h-full">
            <PdfViewer url={file?.url}/>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default SubmissionView;