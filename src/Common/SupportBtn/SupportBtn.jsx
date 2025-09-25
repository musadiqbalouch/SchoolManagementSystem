import React from "react";
import { FaHeadphones } from "react-icons/fa";

const SupportBtn = () => {
  return (
    <div className="container m-auto ">
      <button className="bg-[#152259] absolute top-100 right-25 py-3 h10 items-center justify-center  px-4 gap-2  rounded-3xl text-white text-base font-medium flex">
        <FaHeadphones /> Support
      </button>
    </div>
  );
};

export default SupportBtn;
