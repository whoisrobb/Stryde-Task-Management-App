import { Request, Response } from "express";
import db from "../db";
import { UserTable } from "../db/schema";
import { eq } from "drizzle-orm";


// GET ALL USERS
export const getAllUsers = async (req: Request, res: Response) => {
    try {
        const users = await db.select()
                .from(UserTable)

        res.status(200).json(users);        
    } catch (err) {
        res.status(500).json({ message: err })
    }
};

// CREATE OR UPDATE USER
export const saveOrUpdateUser = async (req: Request, res: Response) => {
    try {
        const { firstName, lastName, email, avatar } = req.body;

        const user = await db.select()
            .from(UserTable)
            .where(eq(UserTable.email, email))

        if (user.length > 0) {
            await db.update(UserTable)
                .set({
                    firstName: firstName,
                    lastName: lastName,
                    email: email,
                    avatar: avatar
                })
                .where(eq(UserTable.email, email))
        } else {
            await db.insert(UserTable)
                .values({
                    firstName: firstName,
                    lastName: lastName,
                    email: email,
                    avatar: avatar
                })
        }

        const savedUser = await db.select()
            .from(UserTable)
            .where(eq(UserTable.email, email))
        
        res.status(201).json(savedUser);

    } catch (err) {
        res.status(500).json({ message: err })
    }
};