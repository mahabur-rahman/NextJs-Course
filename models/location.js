import mongoose, { Schema } from "mongoose";

const LocationSchema = new Schema(
  {
    name: String,
    restaurants: [{ type: mongoose.Schema.Types.ObjectId, ref: "Restaurant" }],
  },
  { timestamps: true }
);

const Location =
  mongoose.models.Location || mongoose.model("Location", LocationSchema);

export default Location;
