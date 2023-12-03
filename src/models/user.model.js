import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: {
      type: String,
      required: [true, "Please provide the username"],
      unique: true,
    },
    email: {
      type: String,
      required: [true, "Please provide the email"],
      unique: true,
    },
    password: {
      type: String,
      required: [true, "Please provide the password"],
    },
    forgotPasswordOTP: String,
    forgotPasswordOTPExpiry: Date,
    verifyToken: String,
    verifyTokenExpiry: Date,
  });
  
  const User =  mongoose.models.User || mongoose.model("User", userSchema);
  export default User
  