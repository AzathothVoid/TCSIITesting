import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/defendo");
    console.log("DB Connection Successful!");
  } catch (error) {
    console.error("Error connecting to database:", error);
  }
};
