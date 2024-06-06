"use server";

import { SearchParams } from "@/lib/types";
import { serverUrl } from "@/lib/utils";

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