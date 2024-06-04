import express from "express";
const router = express.Router();
import { getAllUsers, saveOrUpdateUser } from "../controllers/user";

// GET ALL USERS
router.get('/users', getAllUsers);

// CREATE OR UPDATE USER
router.post('/users/save', saveOrUpdateUser);

export default router;