"use server";

import { CardInputProps } from "@/components/forms/create-card";
import { serverUrl } from "@/lib/utils";
import { revalidatePath } from "next/cache";


// CREATE NEW CARD
export const createCard = async (formData: CardInputProps) => {
    try {
        const { listId } = formData;
        const response = await fetch(`${serverUrl}/cards/save/${listId}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        })
        if (response.ok) {
            const data = await response.json();
            revalidatePath("/workspace/board/[boardId]/page")
            return data;
        } else {
            return 'Something went wrong!'
        }
    } catch (err) {
        console.error(err);
    }
};