import express from "express";
const router = express.Router();
import { getAllUsers, getUserByEmail, saveOrUpdateUser } from "../controllers/user";

// GET ALL USERS
router.get('/users', getAllUsers);

// GET ALL USERS
router.get('/users/:email', getUserByEmail);

// CREATE OR UPDATE USER
router.post('/users/save', saveOrUpdateUser);

export default router;