import Link from "next/link";

export default function RestaurantMenu({ params }) {
  const { slug } = params;

  return (
    <div>
      <h1>Menu Page</h1>
      <Link href="/restaurant/pizza" className="bg-slate-200 mx-2">
        Overview
      </Link>
      <Link href="/restaurant/pizza/menu" className="bg-slate-200 mx-2">
        Menu
      </Link>
    </div>
  );
}
