import connectDB from "@/src/db/dbConnection";
import { NextResponse } from "next/server";

connectDB();

export async function GET(request) {
  try {
    // const reqBody = await request.json();
    return NextResponse.json({ message: "hi there!" }, { status: 201 });
  } catch (error) {
    console.log(error);
  }
}
