import connectedDB from "@/libs/mongodb";
import Restaurant from "@/models/restaurant";
import Location from "@/models/location";
import { NextResponse } from "next/server";
import url from "url";

// create restaurant
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

// ######### find all restaurants and populate location info #########

// URL: http://localhost:3000/api/restaurant | http://localhost:3000/api/restaurant?city=Dhaka

// export async function GET(req, res) {
//   try {
//     await connectedDB();

//     const restaurants = await Restaurant.find().populate("locationId");
//     return NextResponse.json({ restaurants });
//   } catch (error) {
//     console.error("Error fetching restaurants:", error);
//     return NextResponse.json(
//       { error: "Failed to fetch restaurants" },
//       { status: 500 }
//     );
//   }
// }

export async function GET(req, res) {
  try {
    await connectedDB();

    // Extract the query string directly from the request object
    const parsedUrl = url.parse(req.url, true);
    const city =
      parsedUrl.query && parsedUrl.query.city ? parsedUrl.query.city : null;

    let restaurants;
    if (city) {
      const location = await Location.findOne({ name: city });

      if (location) {
        restaurants = await Restaurant.find({
          locationId: location._id,
        }).populate("locationId");
      } else {
        restaurants = [];
      }
    } else {
      restaurants = await Restaurant.find().populate("locationId");
    }

    return NextResponse.json({ restaurants });
  } catch (error) {
    console.error("Error fetching restaurants:", error);
    return NextResponse.json(
      { error: "Failed to fetch restaurants" },
      { status: 500 }
    );
  }
}
