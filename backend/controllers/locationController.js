import mongoose from "mongoose";
import asyncHandler from "../middleware/asyncHandler.js";
import { Location, Review } from "./../models/locationModel.js";
import User from "../models/userModel.js";

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

// @desc    Add a location
// @route   POST /api/locations
// @access  Private
const addLocation = asyncHandler(async (req, res) => {
  const {
    name,
    county,
    lng,
    lat,
    img,
    description,
    parking,
    disabledAccess,
    food,
    toilets,
    reviews, // Assuming this field contains reviews data
  } = req.body;

  const reviewObjects = reviews.map((review) => ({
    ...review,
    user: req.user._id, // Assuming you associate reviews with the logged-in user
    username: req.user.username,
  }));

  // Create reviews separately
  const createdReviews = await Review.create(reviewObjects);

  // Extract the IDs of the created reviews
  const reviewIds = createdReviews.map((review) => review._id);

  // Create the location and associate the reviews' IDs (ratings)
  const location = new Location({
    user: req.user._id,
    username: req.user.username,
    name,
    county,
    lng,
    lat,
    img,
    description,
    parking,
    disabledAccess,
    food,
    toilets,
    ratings: reviewIds, // Associate the reviews' IDs with the location's ratings
  });

  const createdLocation = await location.save();

  // Add to created locations array
  await User.findByIdAndUpdate(
    req.user._id,
    { $push: { createdLocations: createdLocation._id } },
    { new: true }
  );

  res.status(201).json(createdLocation);
});

// @desc    Get saved locations
// @route   GET /api/locations/saved
// @access  Private
const getSavedLocations = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user._id).populate("createdLocations");

  if (!user) {
    throw new Error("User not found");
    return [];
  }

  const savedLocations = user.createdLocations;
  res.status(200).json(savedLocations);
});

// @desc    Add a location
// @route   POST /api/locations/:id
// @access  Private
// const addFavourite = asyncHandler(async (req, res) => {
const addFavourite = asyncHandler(async (req, res) => {
  const { locationId } = req.body;
  const userId = req.user._id; // Assuming you have the user ID in req.user

  try {
    if (!locationId) {
      res.status(400).json({ message: "Invalid locationId" });
      return;
    }

    const updatedUser = await User.findByIdAndUpdate(
      userId,
      { $addToSet: { favourites: locationId } }, // Use $addToSet to avoid duplicates
      { new: true }
    );

    if (!updatedUser) {
      res.status(404).json({ message: "User not found" });
      return;
    }

    res
      .status(200)
      .json({ message: "Location added to favourites", updatedUser });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
});

// @desc    Remove a location from favourites
// @route   DELETE /api/locations/:id
// @access  Private
const removeFavourite = asyncHandler(async (req, res) => {
  const { locationId } = req.body;
  const userId = req.user._id; // Assuming you have the user ID in req.user

  try {
    if (!locationId) {
      throw new Error("Invalid locationId", 400);
    }

    const updatedUser = await User.findByIdAndUpdate(
      userId,
      { $pull: { favourites: locationId } }, // Use $pull to remove the location
      { new: true }
    );

    if (!updatedUser) {
      throw new Error("No user found", 404);
    }

    res.status(200).json(updatedUser);
  } catch (error) {
    throw new Error(error);
  }
});

// @desc    Get favourite locations
// @route   GET /api/locations/favourites
// @access  Private
const getFavouriteLocations = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user._id).populate("favourites");

  if (!user) {
    throw new Error("User not found");
    return [];
  }

  const savedLocations = user.favourites;
  res.status(200).json(savedLocations);
});

// @desc    Delete saved location
// @route   GET /api/locations/:id
// @access  Private
const deleteLocation = asyncHandler(async (req, res) => {
  const locationId = req.params.id;

  const location = await Location.findById(locationId);

  if (location) {
    // Delete the location
    await Location.deleteOne({ _id: locationId });

    // Remove the reference to the location from createdLocations in the User model
    await User.findByIdAndUpdate(
      req.user._id,
      { $pull: { createdLocations: locationId } },
      { new: true }
    );

    res.json({ message: "Location removed" });
  } else {
    res.status(404);
    throw new Error("Location not found");
  }
});

export {
  getLocations,
  getLocationById,
  addLocation,
  addFavourite,
  getSavedLocations,
  getFavouriteLocations,
  deleteLocation,
  removeFavourite,
};
