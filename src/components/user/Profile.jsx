"use client";

import { LucideX, UserCircle } from "lucide-react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import LogoutButton from "@/components/login/LogoutButton";
import LoginButton from "@/components/login/LoginButton";
import useUser from "@/hooks/useUser";
import AnimatedLoader from "@/components/loader/AnimatedLoader";
import { Button } from "@/components/ui/button";

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
          <button className="cursor-pointer flex items-center gap-4 py-1 px-2 hover:bg-accent hover:text-accent-foreground rounded-md flex items-center justify-center text-start transition-all">
            <div className="h-full flex items-center justify-center">
              <UserCircle size={25}/>
            </div>
            <div className="flex flex-col">
              <span className="text-sm">{user_name}</span>
              <span className="text-muted-foreground text-sm">{role}</span>
            </div>
          </button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-fit">
          <LogoutButton/>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}

export default Profile;