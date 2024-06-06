import { Request, Response } from "express"
import db from "../db";
import { ListTable } from "../db/schema";
import { asc, desc, eq } from "drizzle-orm";


// GET BOARD'S FILTERED LISTS
export const fetchFilteredLists = async (req: Request, res: Response) => {
    try {
        const { order, orderBy } = req.body;
        const { boardId } = req.params;

        const lists = await db.query
            .ListTable
            .findMany({
                where: eq(ListTable.boardId, boardId),
                with: {
                    cards: true
                },
                orderBy: [
                    orderBy == "date"
                        ?
                        order == "asc"
                            ? asc(ListTable.createdAt)
                            : desc(ListTable.createdAt)
                        :
                        order == "asc"
                            ? asc(ListTable.position)
                            : desc(ListTable.position)
                ]
            });            

            res.status(200).json(lists)
    } catch (err) {
        res.status(500).json(err)
    }
}

// CREATE NEW LIST
export const createList = async (req: Request, res: Response) => {
    try {
        const { boardId } = req.params;
        const { name } = req.body;

        const list = await db.insert(ListTable)
            .values({
                name: name,
                boardId: boardId
            })
            .returning()

            res.status(201).json(list)

    } catch (err) {
        res.status(500).json(err)
    }
};