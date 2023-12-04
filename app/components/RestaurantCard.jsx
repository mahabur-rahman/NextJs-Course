import Image from "next/image";

const RestaurantCard = ({ restaurant }) => {
  return (
    <div className="flex justify-around items-center">
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
