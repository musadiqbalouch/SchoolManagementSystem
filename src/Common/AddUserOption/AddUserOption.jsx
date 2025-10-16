import React from "react";
import { useLocation } from "react-router-dom";

const AddUserOption = ({ user, addUser, StudentData, TeachersData }) => {
  const check = TeachersData || StudentData;

  return (
    <div className="container m-auto m2 w-full ">
      {check?.length === 0 ? (
        <div className=" flex w-full bggreen-300 py-2 items-center justify-between  ">
          <div className="w-200 p-2 lap  laptop:w-112 laptop:mr-10 laptop-lg:w-165 desktop:w-160 ">
            <h3 className="font-semibold laptop:text-lg laptop-lg:text-xl desktop:text-2xl ">
              {user}
            </h3>
          </div>
          <div className=" flex font-semibold  px-2 gap-2">
            <button className="cursor-pointer bgred-400 laptop:text-base  px-2 py-2 rounded-md text-[#2671B1] text-center laptop-lg:text-lg desktop:text-xl ">
              Export CSV
            </button>
            <button className="bg-[#2671B1] cursor-pointer laptop:text-base  px-2 py-2 rounded-md text-white text-center  desktop:text-xl     ">
              {addUser}
            </button>
          </div>
        </div>
      ) : (
        <div className="bg-red500 py-2 flex laptop-lg:py-5 laptop:py-4 laptop:w-180 laptop-lg:w-230 desktop:w-240  font-semibold px-2 gap-2 mr170">
          <button className="cursor-pointer laptop:text-sm px-2 py-2 rounded-md text-[#2671B1] text-center laptop-lg:text-sm desktop:text-base">
            Export CSV
          </button>
          <button className="bg-[#2671B1] cursor-pointer laptop:text-sm laptop-lg:txt-sm px-2 py-2 rounded-md text-white text-center desktop:text-base">
            {addUser}
          </button>
        </div>
      )}
    </div>
  );
};

export default AddUserOption;
