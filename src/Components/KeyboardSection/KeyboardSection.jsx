import React from "react";
import keyboard from "../../assets/keyboard.png";

const KeyboardSection = () => {
  return (
    <div className="flex flex-col laptop:flex-row items-center justify-center laptop:gap-20 gap-10  tablet:gap-6 desktop:gap-28">
      {/* Image */}
      <img
        className="object-cover h-60 w-120  laptop:h-72 laptop:w-130 laptop-lg:h-80 laptop-lg:w-145 tablet:h-48 tablet:w-90   desktop:h-96 desktop:w-150"
        src={keyboard}
        alt="keyboard"
      />

      {/* Text Section */}
      <div className="w-110 p-5 text-center laptop:text-left  laptop:w-100 tablet:w-80   desktop:w-[550px] desktop:p-8">
        <h1 className="w-full laptop:w-60 text-2xl font-semibold  laptop:text-xl laptop-lg:text-3xl laptop-lg:w-70  tablet:text-lg  desktop:text-4xl desktop:w-full">
          Interesting option from customer
        </h1>

        <p className="w-full laptop:w-90 laptop-lg:w-110  laptop-lg:text-base py-2 px-1 text-[#667085]  laptop:text-sm tablet:text-xs desktop:text-lg desktop:leading-7 desktop:w-full">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget id arcu
          mauris sed augue volutpat tortor. Condimentum facilisis aenean elit
          sed mattis porttitor duis ornare justo.
        </p>

        <button
          className="bg-[#1777F7] text-white font-medium px-6 py-1 rounded-md mt-5 cursor-pointer laptop:px-5
         laptop:py-[6px] laptop:text-sm laptop-lg:text-lg tablet:px-4 tablet:py-[4px] tablet:text-xs  desktop:px-8 desktop:py-3 desktop:text-base"
        >
          Choose
        </button>
      </div>
    </div>
  );
};

export default KeyboardSection;
