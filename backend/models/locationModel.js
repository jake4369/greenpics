import mongoose from "mongoose";

const reviewSchema = mongoose.Schema(
  {
    username: { type: String, required: true },
    rating: { type: Number, required: true },
    comment: { type: String, required: true },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
  },
  {
    timestamps: true,
  }
);

const locationSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    name: {
      type: String,
      required: true,
    },
    username: {
      type: String,
    },
    county: {
      type: String,
      required: true,
    },
    lng: { type: Number, required: true, default: -4.7913 },
    lat: { type: Number, required: true, default: 54.3222 },
    numReviews: { type: Number, default: 0 },
    img: { type: String, required: true },
    description: { type: String, required: true },
    parking: { type: Boolean, required: true, default: false },
    disabledAccess: { type: Boolean, required: true, default: false },
    food: { type: Boolean, required: true, default: false },
    toilets: { type: Boolean, required: true, default: false },
    reviews: [reviewSchema],
  },
  {
    timestamps: true,
  }
);

const Location = mongoose.model("Location", locationSchema);
const Review = mongoose.model("Review", reviewSchema);

export { Review, Location };
