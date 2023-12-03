import connectedDB from "@/libs/mongodb";
import Restaurant from "@/models/restaurant";
import { NextResponse } from "next/server";

export async function POST(request) {
  const {
    name,
    mainImage,
    images,
    openTime,
    closeTime,
    slug,
    price,
    items,
    locationId,
    cuisineId,
  } = await request.json();
  await connectedDB();

  await Restaurant.create({
    name,
    mainImage,
    images,
    openTime,
    closeTime,
    slug,
    price,
    items,
    locationId,
    cuisineId,
  });
  return NextResponse.json({ message: "Restaurant Created" }, { status: 201 });
}

export async function GET() {
  await connectedDB();
  const restaurants = await Restaurant.find();
  return NextResponse.json({ restaurants });
}
