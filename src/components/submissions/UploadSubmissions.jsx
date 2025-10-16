import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import UploadSubmissionsForm from "@/components/submissions/UploadSubmissionsForm";
import { UploadIcon } from "lucide-react";

function UploadSubmissions({assignment_id}) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="secondary">
          <UploadIcon/> Upload
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>
            Upload submissions
          </DialogTitle>
        </DialogHeader>
        <UploadSubmissionsForm assignment_id={assignment_id}/>
      </DialogContent>
    </Dialog>
  );
}

export default UploadSubmissions;