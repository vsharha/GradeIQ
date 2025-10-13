"use client"

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { usePathname } from "next/navigation";
import Link from "next/link";

const links = [
  {label: 'Assignments', href: '/app/assignments'},
  {label: 'Analytics', href: '/app/analytics'},
]

function Navbar() {
  const pathname = usePathname()

  return (
    <NavigationMenu className="hidden sm:block">
      <NavigationMenuList>
        {links.map((link)=>
          <NavigationMenuItem key={link.label}>
            <NavigationMenuLink asChild>
              <Link href={link.href} className={pathname === link.href?"bg-accent text-accent-foreground":"text-foreground/80 hover:bg-accent"}>
                {link.label}
              </Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
        )}
      </NavigationMenuList>
    </NavigationMenu>
  );
}

export default Navbar;