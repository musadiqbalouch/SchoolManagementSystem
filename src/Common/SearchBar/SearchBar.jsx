import React from "react";
import { FaSearch } from "react-icons/fa";
const SearchBar = ({ placeholder }) => {
  return (
    <div className="flex items-center justify-center gap-4 container  m-auto w-full  ">
      <select className="px-6  text-[#C4C4C4] py-2 laptop-lg:text-lg laptop-lg:font-semibold desktop:text-xl desktop:font-semibold ">
        <option className=" ">Add Filter</option>
      </select>
      <div className="relative laptop:w-142 laptop-lg:w-200 desktop:w-197 mr-5 ">
        <FaSearch className="absolute h-6 w-7 left-2 top-3 object-cover text-[#4F4F4F] " />
        <input
          className=" w-full py-3  textcenter px-13 bg-[#FCFAFA] lap  laptop-lg:text-lg font-medium  desktop:text-xl "
          type="text"
          placeholder={placeholder}
        />
      </div>
    </div>
  );
};

export default SearchBar;
