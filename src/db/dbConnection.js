import mongoose from "mongoose";

export default async function connectDB() {
  try {
    mongoose.connect(process.env.MONGODB_URI);
    const connection = mongoose.connection;
    connection.on("connected", () => {
      console.log(`mongoDB connected`);
    });
    connection.on("error", (error) => {
      console.log("connection error", error);
      process.exit();
    });
  } catch (error) {
    console.log(error);
  }
} 
