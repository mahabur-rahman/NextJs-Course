import Search from "@/app/components/Search";
import RestaurantCard from "./components/RestaurantCard";
import axios from "axios";

const getRestaurants = async () => {
  try {
    const res = await axios.get("http://localhost:3000/api/restaurant", {
      cache: "no-store",
    });

    if (res.status !== 200) {
      throw new Error("Failed to fetch restaurants");
    }

    return res.data; // Use res.data to get the response data directly
  } catch (error) {
    console.log("Error loading restaurants: ", error);
    return []; // Return an empty array or handle error as needed
  }
};

export default async function Home() {
  const { restaurants } = await getRestaurants();

  return (
    <>
      <div className="p-12">
        <h1 className="text-center fw-bold text-3xl">Home page</h1>
        <h3>Search Here : </h3>
        <Search />
      </div>
      {/* details page */}
      {restaurants?.map((restaurant) => (
        <RestaurantCard key={restaurant._id} restaurant={restaurant} />
      ))}
    </>
  );
}
