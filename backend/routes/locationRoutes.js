import express from "express";
const router = express.Router();
import { protect } from "./../middleware/authMiddleware.js";
import checkObjectId from "./../middleware/checkObjectId.js";

import {
  getLocations,
  getLocationById,
  createLocationReview,
  addLocation,
  addFavourite,
  getSavedLocations,
  getFavouriteLocations,
  deleteLocation,
  removeFavourite,
} from "./../controllers/locationController.js";

router.route("/saved").get(protect, getSavedLocations);
router.route("/favourites").get(protect, getFavouriteLocations);
router.route("/").get(getLocations).post(protect, addLocation);
router.route("/:id").get(getLocationById).delete(protect, deleteLocation);
router.route("/:id/reviews").post(protect, checkObjectId, createLocationReview);
router
  .route("/:id/favourites")
  .post(protect, addFavourite)
  .delete(protect, removeFavourite);

export default router;
