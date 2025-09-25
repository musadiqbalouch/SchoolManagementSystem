import React from "react";
import { FaSearch } from "react-icons/fa";
const SearchBar = () => {
  return (
    <div className="flex items-center justify-center gap-4 container m-auto ">
      <select className="px-3 py-2">
        <option>Add Filter</option>
      </select>
      <div className="relative ">
        <FaSearch className="absolute h-6 w-7 left-2 top-3 object-cover text-[#4F4F4F] " />
        <input
          className="w-230 py-3 textcenter px-13 bg-[#FCFAFA]"
          type="text"
          placeholder="Search for a student by name or email"
        />
      </div>
    </div>
  );
};

export default SearchBar;
