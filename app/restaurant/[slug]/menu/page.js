import Link from "next/link";
import axios from "axios";
import Image from "next/image";

const fetchRestaurantBySlugItem = async (slug) => {
  try {
    const res = await axios.get(
      `http://localhost:3000/api/restaurant/${slug}`,
      {
        cache: "no-store",
      }
    );

    if (res.status !== 200) {
      throw new Error("Failed to fetch restaurant by slug");
    }

    return res.data;
  } catch (error) {
    console.log("Error loading restaurants: ", error.message);
    return {};
  }
};

export default async function RestaurantMenu({ params }) {
  const { slug } = params;
  const { restaurant } = await fetchRestaurantBySlugItem(slug);

  return (
    <div>
      <h1>Menu Page</h1>
      <Link href={`/restaurant/${slug}`} className="bg-slate-200 mx-2">
        Overview
      </Link>
      <Link href={`/restaurant/${slug}/menu`} className="bg-slate-200 mx-2">
        Menu
      </Link>

      <h2 className="text-6xl">Item of Restaurant : {restaurant.slug}</h2>

      <div className="bg-red-50 p-24">
        <Image src={restaurant.mainImage} width="1000" height="200" alt="" />

        <p>Id: {restaurant._id}</p>
        <p>Name: {restaurant.name}</p>
        <p>Open: {restaurant.openTime}</p>
        <p>Close: {restaurant.closeTime}</p>
        <p>Price: {restaurant.price}</p>
        <p>Location: {restaurant.locationId.name}</p>
        <p>Cuisine: {restaurant.cuisineId.name}</p>
        <div>
          <h3 className="text-5xl fw-bold">All Image: </h3>
          {restaurant?.images?.map((image) => (
            <div key={image} className="flex w-full">
              <Image src={image} width="200" height="200" alt="" />
            </div>
          ))}
        </div>
        <div>
          <h3 className="text-5xl fw-bold">All Items: </h3>
          {restaurant?.items?.map((item) => (
            <div key={item} className="w-full bg-blue-50 p-24">
              <p>Item name : {item.name}</p>
              <p>Item price : {item.price}</p>
              <p>Item description : {item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
