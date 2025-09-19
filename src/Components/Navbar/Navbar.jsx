import React from "react";
import { FaBell } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className="w-full bg-[#FCFAFA] px-10 ">
      <div className="flex  flex-row h-25 bgamber-500  items-end px-5   ">
        <div className="flex mb-5 px-7 wfull">
          <p className="text-base font-semibold  px-10  ml-15 w-170">
            Learn how to launch faster <br /> watch our webinar for tips from
            our experts and get a limited time offer.
          </p>
          <FaBell className="mt-3 textwhite object-cover h-7 w-12 ml-10 " />
          <button className="bg-[#509CDB] h-8 text-center px-5 rounded-xl mt-3 ml-3">
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
