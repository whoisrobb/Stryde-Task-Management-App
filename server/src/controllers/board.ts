import { Request, Response } from "express";
import db from "../db";
import { BoardTable } from "../db/schema";
import { eq } from "drizzle-orm";


// GET USER'S BOARDS
export const getUserBoards = async (req: Request, res: Response) => {
    try {
        const { userId } = req.params;
        const boards = await db.query.BoardTable.findMany({ where: eq(BoardTable.userId, userId) });
        res.status(200).json(boards);
    } catch (err) {
        res.status(500).json(err)
    }
}

// CREATE BOARD
export const createBoard = async (req: Request, res: Response) => {
    try {
        const { name, description, userId } = req.body;

        const board = await db.insert(BoardTable)
            .values({
                name: name,
                description: description,
                userId: userId
            })
            .returning();

            res.status(201).json(board);
    } catch (err) {
        res.status(500).json(err)
    }
};

// FETCH SINGLE BOARD
export const fetchSingleBoard = async (req: Request, res: Response) => {
    try {
        const { boardId } = req.params;

        const board = await db.query.BoardTable.findFirst({
            where: eq(BoardTable.boardId, boardId)
        });

        res.status(200).json(board);
    } catch (err) {
        res.status(500).json(err)
    }
};