import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config(); // Load .env file

const dbConnection = async () => {
  try {
    // Replace <PASSWORD> dynamically
    const DB = process.env.DB_URL.replace('<PASSWORD>', process.env.DATABASE_PASSWORD);

    // Connect to MongoDB
    await mongoose.connect(DB, {
      dbName: "job_portal",
      useNewUrlParser: true, // Ensure proper parsing
      useUnifiedTopology: true // For stable connection
    });

    console.log("✅ MongoDB connected successfully");
  } catch (error) {
    console.error("❌ MongoDB connection failed:", error.message);
    process.exit(1); // Exit on failure
  }
};

export default dbConnection;
