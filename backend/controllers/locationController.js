import asyncHandler from "../middleware/asyncHandler.js";
import Location from "./../models/locationModel.js";

// @desc    Fetch all locations
// @route   GET /api/products
// @access  Public
const getLocations = asyncHandler(async (req, res) => {
  const locations = await Location.find({});
  res.json(locations);
});

// @desc    Fetch all locations
// @route   GET /api/products/:id
// @access  Public
const getLocationById = asyncHandler(async (req, res) => {
  const location = await Location.findById(req.params.id);

  if (location) {
    return res.status(200).json(location);
  } else {
    res.status(404);
    throw new Error("Location not found");
  }
});

export { getLocations, getLocationById };
