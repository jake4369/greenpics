import express from "express";
const router = express.Router();
import { protect } from "./../middleware/authMiddleware.js";

import {
  authUser,
  registerUser,
  logoutUser,
  getUserById,
} from "./../controllers/userControllers.js";

router.route("/").post(registerUser);
router.route("/:id").get(protect, getUserById);
router.post("/login", authUser);
router.post("/logout", logoutUser);

export default router;
