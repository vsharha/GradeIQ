import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Trash } from "lucide-react";
import { useState } from "react";

function DeleteAssignment() {
  const [open, setOpen] = useState();

  function handleDelete() {
    setOpen(false)
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="secondary">
          <Trash/>
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>
            Delete?
          </DialogTitle>
        </DialogHeader>
        <DialogFooter>
          <Button onClick={handleDelete}>
            Yes
          </Button>
          <Button variant="secondary" onClick={()=>setOpen(false)}>
            No
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export default DeleteAssignment;