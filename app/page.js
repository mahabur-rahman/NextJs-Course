
import Search from "@/app/components/Search";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="p-12">
        <h1 className="text-center fw-bold text-3xl">Home page</h1>
        <h3>Search Here : </h3>
        <Search />
      </div>
      {/* details page */}
      <Link href="/restaurant/pizza">
        <div className="max-w-md mx-auto bg-white shadow-md rounded-md overflow-hidden">
          <div className="p-4">
            <h2 className="text-xl font-bold mb-2">Card Title</h2>
            <p className="text-gray-600">
              This is a simple card example created using Tailwind CSS in
              Next.js.
            </p>
          </div>
          <div className="bg-gray-100 px-4 py-2">
            <a href="#" className="text-blue-500 font-semibold">
              Read More
            </a>
          </div>
        </div>
      </Link>
    </>
  );
}
