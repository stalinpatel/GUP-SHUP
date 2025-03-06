import { login } from "../controllers/user.controller.js";
import express from "express";
const router = express.Router();

router.get("/login", login);

export default router;
