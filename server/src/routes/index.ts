import express from "express";
const router = express.Router();
import { getAllUsers, getUserByEmail, saveOrUpdateUser, updateUserdata } from "../controllers/user";

// GET ALL USERS
router.get('/users', getAllUsers);

// GET ALL USERS
router.get('/users/:email', getUserByEmail);

// CREATE OR UPDATE USER
router.post('/users/save', saveOrUpdateUser);

// UPDATE USER DATA
router.put('/users/save/:userId', updateUserdata);

export default router;