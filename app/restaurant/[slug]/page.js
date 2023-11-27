import Link from 'next/link'

export default function RestaurantItems() {
  return (
    <div>
      <Link href="/restaurant/pizza" className="bg-slate-200 mx-2">Overview</Link>
      <Link href="/restaurant/pizza/menu" className="bg-slate-200 mx-2">Menu</Link>
      <div>
      <h1>restaurant details page</h1>
      <p>lorem ipsum dolor sit.lorem ipsum dolor sit.lorem ipsum dolor sit.lorem ipsum dolor sit.lorem ipsum dolor sit.lorem ipsum dolor sit.lorem ipsum dolor sit.lorem ipsum dolor sit.lorem ipsum dolor sit.</p>
      </div>
    </div>
  )
}
