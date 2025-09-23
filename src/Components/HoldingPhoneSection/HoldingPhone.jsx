import React from "react";
import { IoIosContact } from "react-icons/io";
import HoldingPhonee from "../../assets/holdingphone.png";

const HoldingPhone = () => {
  return (
    <div className="flex flex-row w-full p-10 items-center  justify-center m-auto content-center gap-40 mt-5 ">
      <div className="w-100 bgred-500 flex flex-col gap-7 p-5">
        <h2 className="text-2xl font-semibold  ">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </h2>
        <p className="text-sm text-[#667085]  leading-tight">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus odio
          pellentesque pellentesque a. Amet ut lobortis pellentesque a, luctus
          maecenas. <br /> <br /> Feugiat sed enim vitae viverra cras tristique
          eu. Pellentesque bibendum volutpat metus, dictum.
        </p>
        <div className="flex gap-4">
          <IoIosContact className="text-[#667085] h-10 w-10" />
          <div>
            <h2 className="text-2xl font-semibold ">80,000K</h2>
            <p className="text-[#667085] text-sm  leading-tight ">
              Lorem ipsum dolor sit amet,
              <br /> consectetur adipiscing elit.
            </p>
          </div>
        </div>
      </div>
      <div className="w2/4">
        <img className="h-125 w-105 object-cover" src={HoldingPhonee} alt="" />
      </div>
    </div>
  );
};

export default HoldingPhone;
