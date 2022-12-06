import express from "express";
import { login, register } from "../controllers/authcontroller.js";

const router = express.Router()

router.get('/register',register)
router.post('/login',login)

export default router