import mongoose from "mongoose";

const PRICE_ENUM = {
  CHEAP: "CHEAP",
  REGULAR: "REGULAR",
  EXPENSIVE: "EXPENSIVE",
};

const restaurantSchema = new mongoose.Schema(
  {
    name: String,
    mainImage: String,
    images: [String],
    description: String,
    openTime: String,
    closeTime: String,
    slug: {
      type: String,
      unique: true,
    },
    price: {
      type: String,
      enum: Object.values(PRICE_ENUM),
      default: PRICE_ENUM.REGULAR,
    },
    items: [{ type: mongoose.Schema.Types.ObjectId, ref: "Item" }],
    locationId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Location",
    },
    cuisineId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Cuisine",
    },
  },
  { timestamps: true }
);

const Restaurant =
  mongoose.models.Restaurant || mongoose.model("Restaurant", restaurantSchema);

export default Restaurant;
