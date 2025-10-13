"use client";

import { UserCircle } from "lucide-react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import LogoutButton from "@/components/login/LogoutButton";
import LoginButton from "@/components/login/LoginButton";
import useUser from "@/hooks/useUser";
import AnimatedLoader from "@/components/loader/AnimatedLoader";

function Profile() {
  const {user, isLoading, error} = useUser()

  if(isLoading) {
    return <AnimatedLoader/>
  }

  if(error) {
    return null
  }

  if(!user) {
    return <LoginButton/>
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