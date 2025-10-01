import React from "react";
import { FaHeadphones } from "react-icons/fa";

const SupportBtn = () => {
  return (
    <div className="container m-auto ">
      <button
        className="bg-[#152259]  laptop:right-2 laptop:top-90 absolute top-100 right-25 py-3 items-center justify-center 
       px-4 gap-2  rounded-3xl text-white text-base font-medium flex laptop-lg:text-xl laptop-lg:right-26 laptop-lg:top-100  desktop:right-30 desktop:top-110 desktop:text-xl "
      >
        <FaHeadphones /> Support
      </button>
    </div>
  );
};

export default SupportBtn;
