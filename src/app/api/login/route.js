import connectDB from "@/src/db/dbConnection";
import User from "@/src/models/user.model";
import { NextResponse } from "next/server";
import bcryptjs from "bcryptjs"
import jwt from "jsonwebtoken";

connectDB();
export async function POST(request) {
    try {
      const reqBody = await request.json();
      const { email, password } = reqBody;
      //user exist
      const user = await User.findOne({ email });
      if (!user) {
        return NextResponse.json(
          { message: "User does not exist", success: false },
          { status: 400 }
        );
      }
  
      const validPassword = await bcryptjs.compare(password, user.password);
      if (!validPassword) {
        return NextResponse.json({ message: "Wrong Password", success: false }, { status: 400 });
      }
      //create token data
  
      const tokenData = {
        id: user._id,
        username: user.username,
        email: user.email,
      };
      // create token
      const token = await jwt.sign(tokenData, "mySecret", {
        expiresIn: "1d",
      });
      const response = NextResponse.json({
        message: "login successfull",
        savedUserName: user.username,
        success: true,
      });
      response.cookies.set("token", token, { httpOnly: true });
      return response
    } catch (error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }
  }