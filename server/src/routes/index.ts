import express from "express";
const router = express.Router();
import { saveOrUpdateUser } from "../controllers/user";

// CREATE OR UPDATE USER
router.post('/users/save', saveOrUpdateUser);


export default router;