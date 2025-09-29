import React from "react";
import keyboard from "../../assets/keyboard.png";

const KeyboardSection = () => {
  return (
    <div className="flex flex-col laptop:flex-row items-center justify-center laptop:gap-20 gap-10">
      <img className="object-cover h-60 w-120" src={keyboard} alt="keyboard" />
      <div className="w-110 p-5 text-center laptop:text-left">
        <h1 className="w-full laptop:w-60 text-2xl font-semibold">
          Interesting option from customer
        </h1>
        <p className="w-full laptop:w-90 py-2 px-1 text-[#667085]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget id arcu
          mauris sed augue volutpat tortor. Condimentum facilisis aenean elit
          sed mattis porttitor duis ornare justo.
        </p>
        <button className="bg-[#1777F7] text-white font-medium px-6 py-1 rounded-md mt-5 cursor-pointer">
          Choose
        </button>
      </div>
    </div>
  );
};

export default KeyboardSection;
