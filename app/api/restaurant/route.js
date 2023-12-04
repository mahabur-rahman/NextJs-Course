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

// export async function GET() {
//   await connectedDB();
//   const restaurants = await Restaurant.find();
//   return NextResponse.json({ restaurants });
// }

export async function GET() {
  try {
    await connectedDB();
    const restaurants = await Restaurant.find().populate("locationId");
    return NextResponse.json({ restaurants });
  } catch (error) {
    console.error("Error fetching restaurants:", error);
    return NextResponse.json(
      { error: "Failed to fetch restaurants" },
      { status: 500 }
    );
  }
}
