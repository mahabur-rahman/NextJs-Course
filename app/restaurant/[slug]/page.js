import RestaurantSlugPage from "@/app/components/RestaurantSlugPage";
import Link from "next/link";
import axios from "axios";

const getRestaurantBySlug = async (slug) => {
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

export default async function RestaurantItems({ params }) {
  const { slug } = params;
  const restaurant = await getRestaurantBySlug(slug);

  console.log(restaurant);

  return (
    <div>
      <Link href="/restaurant/pizza" className="bg-slate-200 mx-2">
        Overview
      </Link>
      <Link href="/restaurant/pizza/menu" className="bg-slate-200 mx-2">
        Menu
      </Link>
      <div>
        <RestaurantSlugPage />
      </div>
    </div>
  );
}
