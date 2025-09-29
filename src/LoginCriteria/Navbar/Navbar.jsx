import React from "react";
import { FaBell } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = ({ setIsLoggedIn }) => {
  return (
    <div className="bg-[#FCFAFA] w-full">
      <div className="flex flex-col laptop:flex-row h-auto laptop:h-25 items-center laptop:items-end px-5 container m-auto">
        <div className="flex flex-col laptop:flex-row items-center laptop:items-end mb-5 laptop:mb-0 px-3 w-full">
          <p className="text-base font-semibold px-10 laptop:bg-amber-500 laptop:w-155 text-center laptop:text-left">
            Learn how to launch faster <br /> watch our webinar for tips from
            our experts and get a limited time offer.
          </p>
          <FaBell className="mt-3 textwhite object-cover h-7 w-12 laptop:ml-10" />
          <Link
            to="/"
            className="bg-[#509CDB] h-8 text-center px-5 rounded-xl mt-3 laptop:mt-0 laptop:ml-3 cursor-pointer py-1 font-medium"
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
