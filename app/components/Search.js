"use client";

import Link from "next/link";

export default function Search() {
  return (
    <div>
      <form>
        <input
          type="text"
          placeholder="search..."
          style={{ width: "200px", border: "1px solid red" }}
        />
        <Link href="/search" type="button">
          Search
        </Link>
      </form>
    </div>
  );
}
