"use server";

import { BoardInputProps } from "@/components/forms/create-board";
import { serverUrl } from "@/lib/utils";
import { revalidatePath } from "next/cache";


// FETCH USER'S BOARDS
export const fetchUserBoards = async (userId: string) => {
    try {
        const response = await fetch(`${serverUrl}/boards/${userId}`)
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

// CREATE NEW BOARD
export const createBoard = async (formData: BoardInputProps) => {
    try {
        const response = await fetch(`${serverUrl}/boards/save`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        })
        if (response.ok) {
            const data = await response.json();
            revalidatePath("/workspace/[userId]/page")
            return data;
        } else {
            return 'Something went wrong!'
        }
    } catch (err) {
        console.error(err);
    }
};