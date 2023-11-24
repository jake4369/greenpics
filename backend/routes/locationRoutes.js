import express from "express";
const router = express.Router();

import {
  getLocations,
  getLocationById,
} from "./../controllers/locationController.js";

router.route("/").get(getLocations);

router.route("/:id").get(getLocationById);

export default router;
