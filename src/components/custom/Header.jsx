import Logo from "@/components/custom/Logo";
import Navbar from "@/components/custom/Navbar";
import { ModeToggle } from "@/components/ui/mode-toggle";
import Link from "next/link";

function Header({showNavbar=true}) {
  return (
    <header className="sticky top-0 border-sidebar-border border-b p-4 flex justify-between items-center z-50 bg-sidebar backdrop-blur supports-[backdrop-filter]:bg-sidebar/60">
      <div className="flex flex-row items-center gap-5">
        <Link href={"/"}>
          <Logo/>
        </Link>
        {showNavbar &&
        <Navbar/>}
      </div>
      <ModeToggle />
    </header>
  );
}

export default Header;