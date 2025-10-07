import React, { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
const SearchBar = ({ placeholder }) => {
  return (
    <div className="flex items-center justify-center gap-4 container  m-auto w-full laptop:px2  laptop-lg:px-8  ">
      <select className="px-6  text-[#C4C4C4] py-2 laptop-lg:text-sm laptop-lg:font-semibold desktop:text-xl desktop:font-semibold ">
        <option className=" ">Add Filter</option>
      </select>
      <div className="relative w-full  mx-5 ">
        <FaSearch className="absolute laptop:h-5 laptop:w-5 laptop-lg:h-5 laptop-lg:w-5 left-2 top-3 object-cover text-[#4F4F4F] " />
        <input
          className=" w-full py-3  textcenter px-13 bg-[#FCFAFA] lap  laptop-lg:text-sm font-medium  desktop:text-xl "
          type="text"
          placeholder={placeholder}
        />
      </div>
    </div>
  );
};

export default SearchBar;
