import User from "@/src/models/user.model";
import { NextResponse } from "next/server";
import bcryptjs from "bcryptjs"
import connectDB from "@/src/db/dbConnection";
connectDB()
export async function POST(request) {
    const reqBody = await request.json();
    const { username, email, password  } = reqBody;
    console.log("reqBody: ", reqBody);
  
    // check if user already exist we have built in method fineone() in mongoose
    const user = await User.findOne({ email });
    if (user) {
      return NextResponse.json({ message: "user already exist" }, { status: 409 });
    }
    // if user does not exist create user and store password after encypytion using bcrypt
    const salt = await bcryptjs.genSalt(10);
    const hashPassword = await bcryptjs.hash(password, salt);
    // after hashing the password store user into database
  
    const newUser = new User({
      username,
      email,
      password: hashPassword,
    });
    const savedUser = await newUser.save();
  
    return NextResponse.json(
      { message: "user saved successfully" },
      { status: 201 }
    );
  }
  