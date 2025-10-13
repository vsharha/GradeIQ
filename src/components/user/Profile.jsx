"use server"

import { UserCircle } from "lucide-react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import LogoutButton from "@/components/login/LogoutButton";
import { fetchUser } from "@/services/fetchApi";
import getServerAuthHeaders from "@/services/getServerAuthHeaders";

async function Profile() {
  let user = {}
  try {
    const headers = await getServerAuthHeaders()
    user = await fetchUser(headers)
  } catch (e) {
    console.log(e)
  }

  return (
    <div className="h-full flex items-center relative">
      <DropdownMenu>
        <DropdownMenuTrigger className="rounded-full">
          <UserCircle/>
            <span>{user?.name}</span>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <LogoutButton/>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}

export default Profile;