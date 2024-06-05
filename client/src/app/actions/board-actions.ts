"use server";

import { serverUrl } from "@/lib/utils";


// FETCH USER'S BOARDS
export const fetchUserBoards = async (userId: string) => {
    try {
        const response = await fetch(`${serverUrl}/user/boards/${userId}`)
        const data = await response.json();
        if (response.ok) {
            return data;
        } else {
            return 'Something went wrong!'
        }
    } catch (err) {
        console.error(err);
    }
};