import { Request, Response } from "express";
import db from "../db";
import { CardTable } from "../db/schema";


// CREATE NEW CARD
export const createCard = async (req: Request, res: Response) => {
    try {
        const { listId } = req.params;
        const { name } = req.body;

        const card = await db.insert(CardTable)
            .values({
                name: name,
                listId: listId
            })
            .returning()

            res.status(201).json(card[0])

    } catch (err) {
        res.status(500).json(err)
    }
};