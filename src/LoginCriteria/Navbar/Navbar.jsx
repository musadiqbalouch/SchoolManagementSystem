import React from "react";
import { FaBell } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = ({ setIsLoggedIn }) => {
  return (
    <div className="bg-[#FCFAFA] w-full  ">
      <div className="flex flex-col laptop:flex-row h-auto  laptop:h-25 items-center laptop:items-end px10 container m-auto desktop:h-30">
        <div className="flex flex-col  bg-red-600 items-center laptop:mb4 px-3 ">
          <p className="text-base font-semibold px-10 laptop:px-6  laptop:w-143  text-center laptop:text-left laptop-lg:text-lg laptop-lg:w-180  desktop:text-xl desktop:w-190  ">
            Learn how to launch faster <br /> watch our webinar for tips from
            our experts and get a limited time offer.
          </p>
        </div>
        <div className="flex items-center justify-center  w-full">
          <FaBell className="mt-3 textwhite  object-cover h-7 w-12 laptop:ml-6 laptop-lg:h-8 laptop-lg:w-13 laptop-lg:ml-30 desktop:ml-25 desktop:h-10 desktop:w-15" />
          <Link
            to="/"
            className="bg-[#509CDB] h-8 text-center px-5 rounded-xl mt-3 laptop:mt-0 laptop:h-8  laptop:text-base  cursor-pointer py-1 font-medium
             laptop-lg:text-lg laptop-lg:py-0 laptop-lg:h-10  desktop:py-1.5 desktop:text-center desktop:w-30 text-xl desktop:ml-5"
            onClick={() => setIsLoggedIn(false)}
          >
            Logout
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
