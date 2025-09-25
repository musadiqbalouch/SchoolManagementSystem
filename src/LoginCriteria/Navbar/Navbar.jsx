import React from "react";
import { FaBell } from "react-icons/fa";
import { Link } from "react-router-dom";
const Navbar = ({ setIsLoggedIn }) => {
  return (
    <div className=" bg-[#FCFAFA] w-full ">
      <div className="flex  flex-row h-25 bgred-300  bgamber500  items-end px5 container m-auto   ">
        <div className="flex mb-5 px-7 wfull">
          <p className="text-base font-semibold  px-10  ml-15 w-170">
            Learn how to launch faster <br /> watch our webinar for tips from
            our experts and get a limited time offer.
          </p>
          <FaBell className="mt-3 textwhite object-cover h-7 w-12 ml-10 " />
          <Link
            to="/"
            className="bg-[#509CDB] h-8 text-center px-5 rounded-xl mt-3 ml-3 cursor-pointer py-1 font-medium"
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
