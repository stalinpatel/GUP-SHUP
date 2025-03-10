import {
  getProfile,
  login,
  register,
  logout,
} from "../controllers/user.controller.js";
import express from "express";
import { isAuthenticated } from "../middlewares/auth.middleware.js";
import { getOtherUsers } from "../controllers/user.controller.js";
const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.post("/logout", isAuthenticated, logout);
router.get("/get-profile", isAuthenticated, getProfile);
router.get("/get-other-users", isAuthenticated, getOtherUsers);

export default router;
