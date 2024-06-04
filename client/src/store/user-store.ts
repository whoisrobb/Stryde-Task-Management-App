import { User } from "@/lib/types";
import { create } from "zustand";

type UserStore = {
    userData: User | null;
    setUser: (user: User) => void;
    removeUser: () => void
};

export const useUserStore = create<UserStore>((set) => ({
    userData: null,
    setUser: (user) => {
        set({ userData: user })
    },
    removeUser: () => {
        set({ userData: null })
    }
}));