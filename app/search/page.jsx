import axios from "axios";
import RestaurantCard from "../components/RestaurantCard";

const getRestaurants = async () => {
  try {
    const res = await axios.get(
      "http://localhost:3000/api/restaurant?city=Gulshan",
      {
        cache: "no-store",
      }
    );

    if (res.status !== 200) {
      throw new Error("Failed to fetch restaurants");
    }

    return res.data;
  } catch (error) {
    console.log("Error loading restaurants: ", error);
    return [];
  }
};

export default async function Search() {
  const { restaurants } = await getRestaurants();

  return (
    <>
      {restaurants?.map((restaurant) => (
        <RestaurantCard key={restaurant._id} restaurant={restaurant} />
      ))}
    </>
  );
}
