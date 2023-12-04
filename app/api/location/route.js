import connectedDB from "@/libs/mongodb";
import Location from "@/models/location";
import { NextResponse } from "next/server";

export async function POST(request) {
  const { name, restaurants } = await request.json();

  await connectedDB();
  await Location.create({
    name,
    restaurants,
  });

  return NextResponse.json(
    { message: "Location is created.." },
    { status: 201 }
  );
}

export async function GET() {
  await connectedDB();
  const locations = await Location.find();
  return NextResponse.json({ locations });
}
