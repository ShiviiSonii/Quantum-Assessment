import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("MongoDB connected");
  } catch (error) {
    console.error("Error while connecting to MongoDB:", error);
    process.exit(1);
  }
};

export default connectDB;