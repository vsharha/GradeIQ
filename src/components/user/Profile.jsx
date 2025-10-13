import { UserCircle } from "lucide-react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";

function Profile() {
  return (
    <div className="h-full flex items-center relative">
      <DropdownMenu>
        <DropdownMenuTrigger className="rounded-full">
          <UserCircle/>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          hello
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  // <Button onClick={handleLogout}>
  );
}

export default Profile;