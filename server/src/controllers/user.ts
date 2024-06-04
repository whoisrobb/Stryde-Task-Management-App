import { Request, Response } from "express";
import db from "../db";
import { UserTable } from "../db/schema";
import { eq } from "drizzle-orm";
import { clientUrl } from "../lib/utils";


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

        const savedUser = await db.query
            .UserTable
            .findFirst({
                where: eq(UserTable.email, email)
            })

        const redirectUrl = `${clientUrl}/workspace/${savedUser?.userId}`;
        res.setHeader('Location', redirectUrl);
        
        res.status(201).json(savedUser);

    } catch (err) {
        res.status(500).json({ message: err })
    }
};

// GET USER BY EMAIL
export const getUserByEmail = async (req: Request, res: Response) => {
    try {
        const { email } = req.params;
        const user = await db.query
            .UserTable
            .findFirst({
                where: eq(UserTable.email, email)
            })

        res.status(200).json(user);
    } catch (err) {
        res.status(500).json(err);
    }
};