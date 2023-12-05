import connectedDB from "@/libs/mongodb";
import Restaurant from "@/models/restaurant";
import { NextResponse } from "next/server";
import Location from "@/models/location";
import Cuisine from "@/models/cuisine";

export async function GET(request, { params }) {
  const { slug } = params;

  await connectedDB();

  const restaurant = await Restaurant.findOne({ slug: slug })
    .populate("locationId")
    .populate("cuisineId");
  return NextResponse.json({ restaurant }, { status: 200 });
}
