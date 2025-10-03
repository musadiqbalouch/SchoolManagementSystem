import React from "react";
// import { FaBell } from "react-icons/fa";
import { FaRegBell } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";

const Navbar = ({ setIsLoggedIn }) => {
  const location = useLocation();
  const pathname = location.pathname;
  console.log(pathname);
  return (
    <>
      {pathname === "/" ? (
        <div className="bg-[#FCFAFA] w-full  ">
          <div className="flex flex-col laptop:flex-row h-auto laptop:px-10  laptop:h-25 items-center laptop:items-end laptop:pb-5 container m-auto desktop:h-30">
            <div className="flex flex-col items-center laptop:mb4 px-3  ">
              <p className="text-sm text-[#424242] font-medium px-10 laptop:px-6  laptop:w-130  text-center laptop:text-left laptop-lg:text-base laptop-lg:w-180  desktop:text-xl desktop:w-190  ">
                Learn how to launch faster <br /> watch our webinar for tips
                from our experts and get a limited time offer.
              </p>
            </div>
            <div className="flex items-center justify-center">
              <FaRegBell
                className="textwhite object-cover h-7 w-12
          laptop:ml-6 laptop-lg:h-8 laptop-lg:w-13 laptop-lg:ml-30 desktop:ml-25
          desktop:h-10 desktop:w-15"
              />
              <Link
                to="/"
                className="bg-[#509CDB] text-white text-base h-8 text-center px-5 rounded-lg   mt-3 laptop:mt-0 laptop:h-8 
             laptop:text-base  cursor-pointer py-1 font-medium
             laptop-lg:text-base  laptop-lg:py-1 laptop-lg:h-8  desktop:py-1.5 desktop:h-10 desktop:text-lg desktop:text-center desktop:w-30  desktop:ml-5"
                onClick={() => setIsLoggedIn(false)}
              >
                Logout
              </Link>
            </div>
          </div>
        </div>
      ) : (
        <div className="w-full  h-20 flex items-center justify-end-safe pr-10 container m-auto">
          <FaRegBell
            className="textwhite object-cover h-7 w-12
          laptop:ml-6 laptop-lg:h-8 laptop-lg:w-13 laptop-lg:ml-30 desktop:ml-25
          desktop:h-10 desktop:w-15"
          />
          <Link
            to="/"
            className=" text-black text-base h-8 text-center px-5 rounded-lg   mt-3 laptop:mt-0 laptop:h-8 
             laptop:text-base  cursor-pointer py-1 font-medium
             laptop-lg:text-base  laptop-lg:py-1 laptop-lg:h-8  desktop:py-1.5 desktop:h-10 desktop:text-lg desktop:text-center desktop:w-30  desktop:ml-5"
            onClick={() => setIsLoggedIn(false)}
          >
            Logout
          </Link>
        </div>
      )}
    </>
  );
};

export default Navbar;
