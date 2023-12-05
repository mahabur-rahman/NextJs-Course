import connectedDB from "@/libs/mongodb";
import Restaurant from "@/models/restaurant";
import Location from "@/models/location";
import { NextResponse } from "next/server";

export async function GET(request, { params }) {
  const { slug } = params;

  await connectedDB();

  const restaurant = await Restaurant.findOne({ slug: slug });
  return NextResponse.json({ restaurant }, { status: 200 });
}
