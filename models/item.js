import mongoose, { Schema } from "mongoose";

const ItemSchema = new Schema(
  {
    name: String,
    price: String,
    description: String,
    restaurantId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Restaurant",
    },
  },
  { timestamps: true }
);

const Item = mongoose.models.Item || mongoose.model("Item", ItemSchema);

export default Item;
