import React from "react";
import customerphoto from "../../assets/customerphoto.png";

const OptionFromCustomer = () => {
  return (
    <div className="flex flex-col items-center p-10">
      <div className="flex flex-col laptop:flex-row gap-6 laptop:gap-20 items-center laptop:items-start justify-center text-center laptop:text-left">
        <h1 className="w-full laptop:w-70 text-3xl font-semibold p-2">
          Interesting option from customer
        </h1>
        <p className="w-full laptop:w-80 text-[#667085] p-2 font-semibold">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus odio
          pellentesque pellentesque a. Amet
        </p>
      </div>
      <div className="w-full laptop:w-250 bg-[#0B0641] flex flex-col laptop:flex-row items-center justify-center p-5 rounded-2xl mt-10 gap-10 laptop:gap-20 text-center laptop:text-left">
        <img
          className="h-60 w-full laptop:h-70 laptop:w-100 object-cover rounded-2xl"
          src={customerphoto}
          alt=""
        />
        <div className="w-full laptop:w-fit p-5 flex flex-col gap-3">
          <h2 className="text-[#1777F7] bg-[#EDF5FF] w-fit px-2 py-1 rounded-md font-semibold backdrop-blur-2xl mb-2 cursor-pointer m-auto laptop:m-0">
            Standard
          </h2>
          <p className="text-white leading-tight mt-3 mb-5 w-full laptop:w-70">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus odio
            pellentesque pellentesque a. Amet
          </p>
          <h2 className="text-3xl font-semibold text-white">
            $15
            <span className="text-sm text-white">/Month</span>
          </h2>
          <button className="w-full bg-[#1777F7] py-1 rounded-md mt-5 cursor-pointer">
            Choose
          </button>
        </div>
      </div>
    </div>
  );
};

export default OptionFromCustomer;
