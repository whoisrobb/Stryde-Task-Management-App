"use server";

import { ListInputProps } from "@/components/forms/create-list";
import { serverUrl } from "@/lib/utils";
import { revalidatePath } from "next/cache";

export const fetchFilteredLists = async (searchParams: string | string[] | undefined, boardId: string) => {
    try {
        const response = await fetch(`${serverUrl}/lists/${boardId}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(searchParams),
    });
    if (response.ok) {
        const data = await response.json();
        return data;
    } else {
        return 'Something went wrong!';
    }
    } catch (err) {
        console.error(err);
    }
};

// CREATE NEW LIST
export const createList = async (formData: ListInputProps) => {
    try {
        const { boardId } = formData;
        const response = await fetch(`${serverUrl}/lists/save/${boardId}`, {
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