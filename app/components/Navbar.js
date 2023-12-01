import Link from "next/link";

const Navbar = () => {
  return (
    <div className="w-full">
      <nav className="text-white p-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center">
            <span className="font-semibold text-lg text-black">OpenTable</span>
          </Link>
          <div className="flex items-center space-x-4">
            <button className="bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-md">
              Sign In
            </button>
            <button className="bg-white text-blue-500 hover:text-blue-600 px-4 py-2 border border-blue-500 rounded-md">
              Sign Up
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
