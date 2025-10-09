import {
  Dialog,
  DialogContent,
  DialogDescription, DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import CreateAssignmentForm from "@/components/assignments/CreateAssignmentForm";

function CreateAssignment() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button><Plus/> New assignment</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Create assignment</DialogTitle>
        </DialogHeader>
        <CreateAssignmentForm/>
        <DialogFooter>
          <Button>Create</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export default CreateAssignment;