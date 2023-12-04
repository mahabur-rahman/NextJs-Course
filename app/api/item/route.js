import connectedDB from "@/libs/mongodb";
import Item from "@/models/item";
import { NextResponse } from "next/server";

export async function POST(request) {
  const { name, price, description, restaurantId } = await request.json();

  await connectedDB();
  await Item.create({
    name,
    price,
    description,
    restaurantId,
  });

  return NextResponse.json(
    { message: "Cuisine is created.." },
    { status: 201 }
  );
}

export async function GET() {
  await connectedDB();
  const items = await Item.find();
  return NextResponse.json({ items });
}
