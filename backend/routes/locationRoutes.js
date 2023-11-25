import express from "express";
const router = express.Router();
import { protect } from "./../middleware/authMiddleware.js";

import {
  getLocations,
  getLocationById,
  addLocation,
  getSavedLocations,
  deleteLocation,
} from "./../controllers/locationController.js";

router.route("/saved").get(protect, getSavedLocations);
router.route("/").get(getLocations).post(protect, addLocation);
router.route("/:id").get(getLocationById).delete(protect, deleteLocation);

export default router;
