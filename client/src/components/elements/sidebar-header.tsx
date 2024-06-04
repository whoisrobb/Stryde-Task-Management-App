"use client";

import { useUserStore } from "@/store/user-store";
import Link from "next/link";

const SidebarHeader = () => {
    const user = useUserStore((state) => state.userData);
  return (
    <div className="border-b h-16 px-2 flex items-center">
      <Link href={`/workspace/${user?.userId}`} className="flex items-center">
        <p className="text-lg font-bold">STRYDE MANAGER</p>
      </Link>
    </div>
  )
}

export default SidebarHeader;