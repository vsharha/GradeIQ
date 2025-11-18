import {Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger,} from "@/components/ui/dialog";
import {Gauge, Maximize, Maximize2, User} from "lucide-react";
import VariableView from "@/components/custom/VariableView";
import {useState} from "react";
import CustomPdfViewer from "@/components/custom/CustomPdfViewer";
import useDownloadSubmission from "@/hooks/useDownloadSubmission";
import GradeSubmissions from "@/components/submissions/GradeSubmissions";
import Feedback from "@/components/submissions/Feedback";
import PassingGrade from "@/components/submissions/PassingGrade";

function SubmissionView({submission, assignment}) {
  const {student_name, grade, id, feedback, grading_status} = submission;
  const {max_grade, passing_grade, id: assignment_id} = assignment;

  const [open, setOpen] = useState(false);

  const {isLoading, file} = useDownloadSubmission(id, {enabled: open});

  return (
    <div className="w-full flex items-center">
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <button>
            {open ? <Maximize size={20}/> : <Maximize2 size={20}/>}
          </button>
        </DialogTrigger>
        <DialogContent
          className="sm:h-fit max-h-[calc(100dvh*9/10)] w-600 sm:max-w-1/2 overflow-hidden flex flex-col p-0">
          <div className="overflow-auto flex flex-col gap-3">
            <div className="p-8 pb-0 w-full">
              <DialogHeader className="mb-4 flex flex-row justify-between items-center">
                <DialogTitle>Submission</DialogTitle>
                <GradeSubmissions
                  assignment_id={assignment_id}
                  selected={grading_status === "pending" ? [] : [id]}
                  className="w-fit"
                />
              </DialogHeader>
              <VariableView>
                <User size={15}/> {student_name}
              </VariableView>
              <VariableView>
                <Gauge size={15}/>{" "}
                <PassingGrade
                  grade={grade}
                  max_grade={max_grade}
                  passing_grade={passing_grade}
                />
              </VariableView>
              <div className="mt-2">
                <Feedback feedback={feedback}/>
              </div>
            </div>
            <div className="p-2 sm:p-4 pt-0 sm:pt-0 flex-1">
              {open && !isLoading && <CustomPdfViewer url={file?.url}/>}
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default SubmissionView;
