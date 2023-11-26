import express from "express";
const router = express.Router();
import { protect } from "./../middleware/authMiddleware.js";

import {
  authUser,
  registerUser,
  logoutUser,
  getUserById,
  updateUserProfile,
} from "./../controllers/userControllers.js";

router.route("/").post(registerUser);
router.route("/:id").get(getUserById);
router.post("/login", authUser);
router.post("/logout", logoutUser);
router.route("/profile").put(protect, updateUserProfile);

export default router;
