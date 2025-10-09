import Logo from "@/components/custom/Logo";
import Navbar from "@/components/custom/Navbar";
import { ModeToggle } from "@/components/ui/mode-toggle";

function Header() {
  return (
    <header className="sticky top-0 border-sidebar-border border-b p-4 bg-sidebar flex justify-between items-center">
      <div className="flex flex-row items-center gap-5">
        <Logo/>
        <Navbar/>
      </div>
      <ModeToggle />
    </header>
  );
}

export default Header;