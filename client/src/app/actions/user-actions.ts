"use server";

import { UserInputProps } from "@/components/forms/user-workspace";
import { SaveUserProps } from "@/lib/types";
import { serverUrl } from "@/lib/utils";
import { auth } from "@clerk/nextjs/server";

// const { getToken } = auth();
// const token = await getToken();


// CREATE NEW USER
export const saveOrUpdateUser = async (userData: SaveUserProps) => {
    try {
        const response = await fetch(`${serverUrl}/users/save`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userData)
        })
        if (response.redirected) {
            document.location = response.url
        }
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

// GET USER BY EMAIL
export const getUserByEmail = async (email: string) => {
    try {
        const response = await fetch(`${serverUrl}/users/${email}`, {
            method: 'GET',
            // headers: {
            //     'Authorization': `Bearer ${token}`
            // }
        });
        const data = await response.json();
        return data;
    } catch (err) {
        console.error(err);
    }
};

// UPDATE USER DATA
export const updateUserData = async (userData: UserInputProps) => {
    try {
        const { userId } = userData;
        const response = await fetch(`${serverUrl}/users/save/${userId}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userData)
        })
        if (response.redirected) {
            document.location = response.url
        }
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