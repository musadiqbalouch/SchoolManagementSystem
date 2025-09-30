import React from "react";
import { IoIosContact } from "react-icons/io";
import HoldingPhonee from "../../assets/holdingphone.png";

const HoldingPhone = () => {
  return (
    <div
      className="flex flex-row w-full p-10 items-center justify-center m-auto content-center gap-40 mt-5 
                 laptop:p-6 laptop:gap-20 laptop:mt-3 
                 tablet:p-4 tablet:gap-10 tablet:mt-2 
                 desktop:p-14 desktop:gap-48 desktop:mt-8"
    >
      {/* Left Text Section */}
      <div
        className="w-100 flex flex-col gap-7 p-5 
                   laptop:gap-5 laptop:p-3 laptop:w-110 laptop:ml-15 
                   tablet:gap-3 tablet:p-2  
                   desktop:gap-10 desktop:p-8 desktop:w-140"
      >
        <h2
          className="text-2xl font-semibold 
                     laptop:text-xl tablet:text-lg 
                     desktop:text-4xl"
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </h2>

        <p
          className="text-sm text-[#667085] leading-tight 
                     laptop:text-xs laptop:leading-5 
                     tablet:text-[11px] tablet:leading-4 
                     desktop:text-lg desktop:leading-7"
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus odio
          pellentesque pellentesque a. Amet ut lobortis pellentesque a, luctus
          maecenas. <br /> <br /> Feugiat sed enim vitae viverra cras tristique
          eu. Pellentesque bibendum volutpat metus, dictum.
        </p>

        <div className="flex gap-4 items-center laptop:gap-3 tablet:gap-2 desktop:gap-6">
          <IoIosContact
            className="text-[#667085] h-10 w-10 
                       laptop:h-8 laptop:w-8 
                       tablet:h-6 tablet:w-6 
                       desktop:h-14 desktop:w-14"
          />
          <div>
            <h2
              className="text-2xl font-semibold 
                         laptop:text-xl tablet:text-lg 
                         desktop:text-3xl"
            >
              80,000K
            </h2>
            <p
              className="text-[#667085] text-sm leading-tight 
                         laptop:text-xs laptop:leading-4 
                         tablet:text-[11px] tablet:leading-4 
                         desktop:text-lg desktop:leading-6"
            >
              Lorem ipsum dolor sit amet,
              <br /> consectetur adipiscing elit.
            </p>
          </div>
        </div>
      </div>

      {/* Right Image Section */}
      <div className="w-2/4 flex justify-center">
        <img
          className="h-125 w-105 object-cover 
                     laptop:h-96 laptop:w-80 
                     tablet:h-72 tablet:w-60 
                     desktop:h-[500px] desktop:w-[400px]"
          src={HoldingPhonee}
          alt=""
        />
      </div>
    </div>
  );
};

export default HoldingPhone;
