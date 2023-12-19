"use client";

import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";

const SearchBar = () => {
  const [inputValue, setInputValue] = useState("");
  const router = useRouter();

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    router.push(`/search`);
  };

  return (
    <form onSubmit={handleSearch}>
      <input
        type="text"
        className="border border-1"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Enter city name..."
      />
      <button type="submit">Lets Go</button>
    </form>
  );
};

export default SearchBar;
