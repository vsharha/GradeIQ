"use client";

import { LucideX, UserCircle } from "lucide-react";
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
    return <span><LucideX/></span>
  }

  if(!user) {
    return <LoginButton/>
  }

  const {user_name, role} = user

  return (
    <div className="h-full flex items-center relative">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <div className="h-full cursor-pointer flex items-center gap-1 mr-2">
            <div className="h-full flex items-center aspect-square justify-center">
              <UserCircle size={25}/>
            </div>
            <div className="flex flex-col">
              <span className="text-sm">{user_name}</span>
              <span className="text-muted-foreground text-sm">{role}</span>
            </div>
          </div>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-fit">
          <LogoutButton/>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}

export default Profile;