import mongoose from "mongoose";

const CuisineSchema = new mongoose.Schema(
  {
    name: String,
    restaurants: [{ type: mongoose.Schema.Types.ObjectId, ref: "Restaurant" }],
  },
  { timestamps: true }
);

const Cuisine =
  mongoose.models.Cuisine || mongoose.model("Cuisine", CuisineSchema);

export default Cuisine;
