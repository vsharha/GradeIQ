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

  const {isLoading,file} = useDownloadSubmission(id)

  if(!isLoading) {
    console.log(file)
  }

  return (
    <div className="w-full flex items-center">
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <button>
            {open?<Maximize size={20}/>:<Maximize2 size={20} />}
          </button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Submission</DialogTitle>
          </DialogHeader>
          <VariableView>
            <User size={15}/> {student_name}
          </VariableView>
          <VariableView>
            <Gauge size={15}/> {grade?`${grade?.toFixed(2)} / ${max_grade?.toFixed(2)}`:"N/A"}
          </VariableView>
          {/*<PdfViewer base64String={base64String}/>*/}
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default SubmissionView;