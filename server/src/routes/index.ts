import express from "express";
const router = express.Router();
import { getAllUsers, getUserByEmail, saveOrUpdateUser, updateUserdata } from "../controllers/user";
import { createBoard, fetchSingleBoard, getUserBoards } from "../controllers/board";
import { createList, fetchFilteredLists } from "../controllers/list";
import { createCard } from "../controllers/card";

// GET ALL USERS
router.get('/users', getAllUsers);

// GET ALL USERS
router.get('/users/:email', getUserByEmail);

// CREATE OR UPDATE USER
router.post('/users/save', saveOrUpdateUser);

// UPDATE USER DATA
router.put('/users/save/:userId', updateUserdata);

// GET USERS'S BOARDS
router.get('/boards/:userId', getUserBoards);

// CREATE BOARD
router.post('/boards/save', createBoard);

// FETCH SINGLE BOARD
router.get('/boards/board/:boardId', fetchSingleBoard);

// CREATE NEW LIST
router.post('/lists/save/:boardId', createList);

// FETCH FILTERED LISTS
router.post('/lists/:boardId', fetchFilteredLists);

// CREATE NEW CARD
router.post('/cards/save/:listId', createCard);


export default router;