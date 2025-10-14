import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Trash } from "lucide-react";
import { useState } from "react";
import useAssignmentMutation from "@/hooks/useAssignmentMutation";
import getClientAuthHeaders from "@/services/getClientAuthHeaders";
import { deleteAssignment } from "@/services/fetchApi";
import BlockLoader from "@/components/loader/BlockLoader";
import { useRouter } from "next/navigation";

function DeleteAssignment({assignment_id}) {
  const [open, setOpen] = useState(false);
  const router = useRouter();

  const {isLoading, mutate} = useAssignmentMutation(async (assignment_id)=>{
    const headers = await getClientAuthHeaders();
    return await deleteAssignment(assignment_id, headers);
  })

  function handleDelete() {
    mutate(assignment_id, {
      onSuccess: () => {
        router.back();
      }
    })
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
          <Button onClick={handleDelete} disabled={isLoading}>
            {isLoading?<BlockLoader/>:<span>Yes</span>}
          </Button>
          <Button variant="secondary" onClick={()=>setOpen(false)} disabled={isLoading}>
            No
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export default DeleteAssignment;