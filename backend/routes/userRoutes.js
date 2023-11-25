import express from "express";
const router = express.Router();
import { protect, admin } from "./../middleware/authMiddleware.js";

import {
  authUser,
  registerUser,
  logoutUser,
} from "./../controllers/userControllers.js";

router.route("/").post(registerUser);
router.post("/login", authUser);
router.post("/logout", logoutUser);

export default router;
