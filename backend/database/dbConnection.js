import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const dbConnection = async () => {
  try {
    // Replace <PASSWORD> dynamically
    const DB = process.env.DB_URL.replace('<PASSWORD>', encodeURIComponent(process.env.DATABASE_PASSWORD));

    await mongoose.connect(DB); // No options needed in Mongoose 6+

    console.log("✅ MongoDB connected successfully");
  } catch (error) {
    console.error("❌ MongoDB connection failed:", error.message);
    process.exit(1);
  }
};

export default dbConnection;
