import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const DBConnection = async() =>{
    const MONGODB_URI = process.env.MONGODB_URL;
    try {
        await mongoose.connect(MONGODB_URI);
        console.log("Connected to MongoDB");
    } catch (error) {
        console.log("Error connecting to MongoDB", error.message);
    }
};

export default DBConnection;