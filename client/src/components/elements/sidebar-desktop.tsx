"use client";

import { cn } from "@/lib/utils";
import { useUserStore } from "@/store/user-store";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "../ui/button";
import { ExitIcon } from "@radix-ui/react-icons";
import { useSidebarStore } from "@/store/sidebar-store";

const SidebarDesktop = () => {
    const pathname = usePathname();
    const user = useUserStore((state) => state.userData);
    const sidebarNav = useSidebarStore((state) => state.navItems);    
  return (
    <div className="w-[17rem] h-[calc(100vh-4rem)] justify-between flex flex-col gap-4 px-2 py-4">
      <div className="">
        {sidebarNav.map((nav, index) => (
          <div className="" key={index}>
            <h1 className="uppercase text-lg font-bold">{nav.name}</h1>
            <div className="flex flex-col">
              {nav.items.map((item, index) => (
                <Link href={item.title === 'workspace' ? `/workspace/${user?.userId}` : item.href} key={index} className={cn(
                  "text-muted-foreground capitalize py-1 px-2 w-full ml-2 flex gap-2",
                  pathname.includes(item.title) && 'text-primary font-bold bg-secondary'
                )}>{item.title}</Link>
              ))}
            </div>
          </div>
        ))}
      </div>

      <Button variant={'ghost'} className="space-x-2">
        <ExitIcon />
        <span>Log out</span>
      </Button>
    </div>
  )
}

export default SidebarDesktop;