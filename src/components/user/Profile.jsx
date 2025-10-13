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
        <DropdownMenuTrigger asChild>
          <div className="h-full cursor-pointer">
            <div className="h-full flex items-center aspect-square justify-center">
              <UserCircle size={25}/>
            </div>
            <span>{user?.name}</span>
          </div>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <LogoutButton/>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}

export default Profile;