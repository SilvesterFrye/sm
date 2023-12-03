import mongoose from "mongoose";

const DATABASE_NAME = "Task"
async function connectDB(){
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DATABASE_NAME}`)
    } catch (error) {
        console.log("MongoDB connection Error: ", error);
    }
}