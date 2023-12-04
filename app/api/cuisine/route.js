import connectedDB from "@/libs/mongodb";
import Cuisine from "@/models/cuisine";
import { NextResponse } from "next/server";

export async function POST(request) {
  const { name, restaurants } = await request.json();

  await connectedDB();
  await Cuisine.create({
    name,
    restaurants,
  });

  return NextResponse.json(
    { message: "Cuisine is created.." },
    { status: 201 }
  );
}

export async function GET() {
  await connectedDB();
  const cuisines = await Cuisine.find();
  return NextResponse.json({ cuisines });
}
