"use server";

import { SaveUserProps } from "@/lib/types";
import { serverUrl } from "@/lib/utils";

// CREATE NEW USER
export const saveOrUpdateUser = async (userData: SaveUserProps) => {
    try {
        console.log("running save function...")
        const response = await fetch(`${serverUrl}/users/save`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userData)
        })
        if (response.ok) {
            const data = await response.json();
            return data;
        } else {
            return 'Something went wrong!'
        }
    } catch (err) {
        console.error(err)
    }
}