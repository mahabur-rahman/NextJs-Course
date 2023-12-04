import Image from "next/image";

const RestaurantCard = ({ restaurant }) => {
  return (
    <div className="flex">
      <Image
        src={restaurant.mainImage}
        title={"restaurant"}
        alt=""
        width="300"
        height="300"
      />
    </div>
  );
};

export default RestaurantCard;
