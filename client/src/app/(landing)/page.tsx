"use client";

import { useUser } from "@clerk/nextjs";
import { useEffect } from "react";
import { getUserByEmail } from "../actions/user-actions";
import { useUserStore } from "@/store/user-store";
import LandingHeader from "./_components/header";

export default function Home() {
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
  };

  return (
    <main className="">
      <LandingHeader />
    </main>
  );
}
