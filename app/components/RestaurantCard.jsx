import Image from "next/image";
import Link from "next/link";

const RestaurantCard = ({ restaurant }) => {
  return (
    <Link
      href={`/restaurant/${restaurant.slug}`}
      className="bg-slate-200 py-12"
    >
      <Image
        src={restaurant.mainImage}
        title={"restaurant"}
        alt=""
        width="300"
        height="300"
      />
      <p>Name: {restaurant.name}</p>
      <p>Open: {restaurant.openTime}</p>
      <p>Close : {restaurant.closeTime}</p>
      <p>Price: {restaurant.price}</p>
      <p>Slug : {restaurant.slug}</p>
      <p>Location : {restaurant.locationId.name}</p>
    </Link>
  );
};

export default RestaurantCard;
