"use client";

import { ModeToggle } from "@/components/themes/mode-toggle";
import { UserButton, useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { getUserByEmail } from "./actions/user-actions";
import { useUserStore } from "@/store/user-store";

export default function Home() {
  const router = useRouter();
  const { isLoaded, user } = useUser();
  const setUser = useUserStore((state) => state.setUser);

  useEffect(() => {
    if (user) {
      fetchData();
    }
  }, [isLoaded]);

  const fetchData = async () => {
    const email = user?.primaryEmailAddress?.emailAddress;
    const data = await getUserByEmail(email!);
    setUser(data!)
    router.push(`/workspace/${data.userId}`);
  };

  return (
    <main className="">
      <ModeToggle />
      <UserButton />
    </main>
  );
}
