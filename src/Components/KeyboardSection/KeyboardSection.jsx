import React from "react";
import keyboard from "../../assets/keyboard.png";

const KeyboardSection = () => {
  return (
    <div className="flex items-center justify-center gap-20">
      <img className="object-cover h-60 w-120 " src={keyboard} alt="" />
      <div className="w-110  p-5">
        <h1 className="w-60 text-2xl font-semibold">
          Interesting option from customer
        </h1>
        <p className="w-90  py-2 px-1 text-[#667085]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget id arcu
          mauris sed augue volutpat tortor. Condimentum facilisis aenean elit
          sed mattis porttitor duis ornare justo.
        </p>
        <button className="bg-[#1777F7] text-white font-medium px-6 py-1  rounded-md mt-5">
          Choose
        </button>
      </div>
    </div>
  );
};

export default KeyboardSection;
