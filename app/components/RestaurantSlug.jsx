import Image from "next/image";

const RestaurantSlug = ({ restaurant }) => {
  return (
    <>
      <h2 className="text-6xl">
        Item of Restaurant : {restaurant.restaurant.slug}
      </h2>

      <div className="bg-red-50 p-24">
        <Image
          src={restaurant.restaurant.mainImage}
          width="1000"
          height="200"
          alt=""
        />

        <p>Id: {restaurant.restaurant._id}</p>
        <p>Name: {restaurant.restaurant.name}</p>
        <p>Open: {restaurant.restaurant.openTime}</p>
        <p>Close: {restaurant.restaurant.closeTime}</p>
        <p>Price: {restaurant.restaurant.price}</p>
        <p>Location: {restaurant.restaurant.locationId.name}</p>
        <p>Cuisine: {restaurant.restaurant.cuisineId.name}</p>
        <div>
          <h3 className="text-5xl fw-bold">All Image: </h3>
          {restaurant?.restaurant?.images?.map((image) => (
            <div key={image} className="flex w-full">
              <Image src={image} width="200" height="200" alt="" />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default RestaurantSlug;
