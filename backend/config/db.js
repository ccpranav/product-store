import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(`Database connected: ${conn.connection.host}`);
  } catch (e) {
    console.error(`Error: ${e.message}`);
    process.exit(1);
  }
};
