import React from "react";
import { FaBell } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = ({ setIsLoggedIn }) => {
  return (
    <div className="bg-[#FCFAFA] w-full">
      <div className="flex flex-col laptop:flex-row h-auto laptop:h-25 items-center laptop:items-end px-5 container m-auto desktop:h-30">
        <div className="flex flex-col laptop:flex-row items-center laptop:items-end mb-5 laptop:mb-4 px-3 w-full">
          <p className="text-base font-semibold px-10 laptop:px-6  laptop:w-143 text-center laptop:text-left  desktop:text-xl desktop:w-180  ">
            Learn how to launch faster <br /> watch our webinar for tips from
            our experts and get a limited time offer.
          </p>
          <FaBell className="mt-3 textwhite object-cover h-7 w-12 laptop:ml-6 desktop:ml-25 desktop:h-10 desktop:w-15" />
          <Link
            to="/"
            className="bg-[#509CDB] h-8 text-center px-5 rounded-xl mt-3 laptop:mt-0 laptop:ml3 cursor-pointer py-1 font-medium  desktop:h-10 desktop:w-30 text-xl desktop:ml-5"
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
