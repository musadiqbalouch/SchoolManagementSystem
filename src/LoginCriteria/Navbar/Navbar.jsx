import React from "react";
// import { FaBell } from "react-icons/fa";
import { FaRegBell } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Navbar = ({ setIsLoggedIn }) => {
  const location = useLocation();
  const pathname = location.pathname;

  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("loggedInUser");
    setIsLoggedIn(false);
    navigate("/");
  };
  return (
    <>
      {pathname === "/" ? (
        <div className="bg-[#FCFAFA] w-full ease-in duration-300  ">
          <div className="flex flex-col laptop:flex-row h-auto laptop:px-10 ease-in duration-300  laptop:h-25 items-center laptop:items-end justify-evenly laptop:pb-5 container m-auto desktop:h-30">
            <div className="flex flex-col items-center laptop:mb4 px3  ">
              <p className="text-sm text-[#424242] font-medium w-fit text-center laptop:text-left laptop-lg:text-base desktop:text-xl">
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
        <div className="w-full  h-14 flex items-center  justify-end-safe pr-10 container m-auto ease-in duration-300 ">
          <FaRegBell
            className="textwhite object-cover h-7 w-10
          laptop:ml-6 laptop-lg:h-7 laptop-lg:w-10 laptop-lg:ml-30 desktop:ml-25
          desktop:h-10 desktop:w-15"
          />
          <Link
            to="/"
            className=" text-black text-base h-8 text-center px-5 rounded-lg   mt-3 laptop:mt-0 laptop:h-8 
             laptop:text-base  cursor-pointer hover:bg-[#509CDB] ease-in duration-200 hover:text-white py-1 font-medium
             laptop-lg:text-base  laptop-lg:py-1 laptop-lg:h-8  desktop:py-1.5 desktop:h-10 desktop:text-lg desktop:text-center desktop:w-30  desktop:ml-5"
            onClick={handleLogout}
          >
            Logout
          </Link>
        </div>
      )}
    </>
  );
};

export default Navbar;
