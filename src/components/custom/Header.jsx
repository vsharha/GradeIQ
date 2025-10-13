import Logo from "@/components/custom/Logo";
import Navbar from "@/components/custom/Navbar";
import { ModeToggle } from "@/components/ui/mode-toggle";
import Link from "next/link";

function Header({showSettings=true, children}) {
  return (
    <header className="sticky top-0 border-sidebar-border border-b p-4 bg-sidebar backdrop-blur supports-[backdrop-filter]:bg-sidebar/60 flex justify-center z-50">
      <div className="flex justify-between items-center w-content">
        <div className="flex flex-row items-center gap-5">
          <Link href={"/"}>
            <Logo/>
          </Link>
        </div>
        <div className="flex-1 flex flex-row pl-5 pr-4 justify-end items-center">
          {children}
        </div>
        <div className="flex items-center gap-3">
          {showSettings &&
          <ModeToggle />}
        </div>
      </div>
    </header>
  );
}

export default Header;