import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Trash } from "lucide-react";
import { useState } from "react";
import useAssignmentMutation from "@/hooks/useAssignmentMutation";
import getClientAuthHeaders from "@/services/getClientAuthHeaders";
import { deleteAssignment } from "@/services/fetchApi";
import BlockLoader from "@/components/loader/BlockLoader";
import { useRouter } from "next/navigation";

function DeleteAssignment({assignment_id, title=false, ...props}) {
  const [open, setOpen] = useState(false);

  const {isLoading, mutate} = useAssignmentMutation(async (assignment_id)=>{
    const headers = await getClientAuthHeaders();
    return await deleteAssignment(assignment_id, headers);
  })

  function handleDelete() {
    mutate(assignment_id)
  }

  return (
    <div onClick={(e)=>e.stopPropagation()}>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Button variant="secondary" className="flex gap-2 items-center" {...props}>
            <Trash />
            {title&&<span>Delete</span>}
          </Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>
              Delete?
            </DialogTitle>
          </DialogHeader>
          <DialogFooter>
            <Button variant="secondary" onClick={()=>setOpen(false)} disabled={isLoading} >
              No
            </Button>
            <Button onClick={handleDelete} disabled={isLoading}>
              {isLoading?<BlockLoader/>:<span>Yes</span>}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default DeleteAssignment;