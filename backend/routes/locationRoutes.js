import express from "express";
const router = express.Router();
import { protect } from "./../middleware/authMiddleware.js";

import {
  getLocations,
  getLocationById,
  addLocation,
  addFavourite,
  getSavedLocations,
  getFavouriteLocations,
  deleteLocation,
} from "./../controllers/locationController.js";

router.route("/saved").get(protect, getSavedLocations);
router.route("/favourites").get(protect, getFavouriteLocations);
router.route("/").get(getLocations).post(protect, addLocation);
router.route("/:id").get(getLocationById).delete(protect, deleteLocation);
router.route("/:id/favourites").post(protect, addFavourite);

export default router;
