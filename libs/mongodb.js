import mongoose from "mongoose";

const connectedDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("connected to MongoDB");
  } catch (err) {
    console.log(err);
  }
};

export default connectedDB;
