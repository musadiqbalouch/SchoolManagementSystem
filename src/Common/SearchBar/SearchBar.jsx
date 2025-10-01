import React from "react";
import { FaSearch } from "react-icons/fa";
const SearchBar = () => {
  return (
    <div className="flex items-center justify-center gap-4 container  m-auto ">
      <select className="px-3 py-2 laptop-lg:text-xl laptop-lg:font-semibold desktop:text-xl desktop:font-semibold ">
        <option className=" ">Add Filter</option>
      </select>
      <div className="relative ">
        <FaSearch className="absolute h-6 w-7 left-2 top-3 object-cover text-[#4F4F4F] " />
        <input
          className="w-200 py-3 textcenter px-13 bg-[#FCFAFA] lap laptop:w-150 laptop-lg:w-180 laptop-lg:text-xl desktop:w-200 desktop:text-2xl "
          type="text"
          placeholder="Search for a student by name or email"
        />
      </div>
    </div>
  );
};

export default SearchBar;
