import React from "react";
import customerphoto from "../../assets/customerphoto.png";

const OptionFromCustomer = () => {
  return (
    <div className="flex flex-col items-center p-10 laptop:p-6 tablet:p-4 desktop:p-16">
      <div className="flex flex-col laptop:flex-row laptop-lg:gap-60 gap-6 laptop:gap-20 items-center laptop:items-start justify-center text-center laptop:text-left">
        <h1 className="w-full laptop:w-70 text-3xl font-semibold p-2  laptop:text-2xl laptop-lg:text-3xl tablet:text-xl  desktop:text-4xl desktop:w-80">
          Interesting option from customer
        </h1>
        <p className="w-full laptop:w-80 text-[#667085] p-2 font-semibold laptop:text-sm laptop-lg:text-lg laptop-lg:w-100  tablet:text-xs   desktop:text-lg desktop:w-[500px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus odio
          pellentesque pellentesque a. Amet
        </p>
      </div>
      <div
        className="w-full laptop:w-250 bg-[#0B0641] flex flex-col laptop:flex-row items-center justify-center
       laptop-lg:w-270 p-5 rounded-2xl mt-10 gap-10 laptop:gap-20 text-center laptop:text-left  desktop:p-12 desktop:gap-20 desktop:w-280"
      >
        <img
          className="h-60 w-full laptop:h-70 laptop:w-100 laptop-lg:h-80 laptop-lg:w-120 object-cover rounded-2xl  tablet:h-48 tablet:w-72  desktop:h-96 desktop:w-120"
          src={customerphoto}
          alt="Customer"
        />

        <div className="w-full laptop:w-fit p-5 flex flex-col gap-3 laptop:p-4 tablet:p-2 desktop:p-8 desktop:gap-5">
          <h2
            className="text-[#1777F7] bg-[#EDF5FF] w-fit px-2 py-1 rounded-md font-semibold backdrop-blur-2xl mb-2 
            cursor-pointer  m-auto laptop:m-0   laptop:text-sm   laptop-lg:text-lg  desktop:text-base"
          >
            Standard
          </h2>

          <p
            className="text-white leading-tight mt-3 mb-5 w-full laptop:w-70 laptop:text-sm tablet:text-xs laptop:mt-2 laptop:mb-3 
         laptop-lg:text-base desktop:text-lg desktop:mt-4 desktop:mb-6 desktop:w-80"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus odio
            pellentesque pellentesque a. Amet
          </p>

          <h2 className="text-3xl font-semibold text-white  laptop:text-2xl laptop-lg:text-3xl desktop:text-4xl">
            $15
            <span className="text-sm text-white= laptop:text-xs  laptop-lg:text-base desktop:text-base">
              /Month
            </span>
          </h2>

          <button className="w-full bg-[#1777F7] py-1 rounded-md mt-5 cursor-pointer  laptop:py-[6px]  laptop:text-sm laptop-lg:text-lg laptop-lg:font-semibold tablet:text-xs  desktop:py-3 desktop:text-base">
            Choose
          </button>
        </div>
      </div>
    </div>
  );
};

export default OptionFromCustomer;
