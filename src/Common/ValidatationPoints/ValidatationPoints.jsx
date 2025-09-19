import React from "react";
import { AiFillCheckCircle } from "react-icons/ai";
import { FaDotCircle } from "react-icons/fa";

const ValidatationPoints = () => {
  return (
    <div>
      <div className="flex flex-row  mt-10 relative ">
        <AiFillCheckCircle className=" bottom-3 right-191 h-6 w-6 text-blue-400  " />
        <hr className="w-75 text-gray-500  " />
        <FaDotCircle className=" h-6 w-6 text-blue-400 font-bold  " />
        <hr className="w-75 text-gray-500 " />
        <FaDotCircle className=" h-6 w-6 text-gray-500" />
        <hr className="w-75 text-gray-500 " />
        <FaDotCircle className=" h-6 w-6 text-gray-500" />
      </div>
      <div className="flex flex-row bgred-400 w-270 justify-between px-5">
        <div className="flex flex-col items-center justify-center font-medium text-sm ">
          <h3>Your Details</h3>
          <h3 className="text-gray-500">Name and Email</h3>
        </div>
        <div className="ml1 flex flex-col items-center justify-center font-medium text-sm ">
          <h3 className="text-blue-500">Choose a password</h3>
          <h3 className="text-gray-500">Choose a secure password</h3>
        </div>
        <div className="ml5  flex flex-col items-center justify-center font-medium text-sm ">
          <h3>Invite your team </h3>
          <h3 className="text-gray-500">Start collaborating</h3>
        </div>
        <div className="-mr-14  flex flex-col items-center justify-center font-medium text-sm ">
          <h3>Upload school documents</h3>
          <h3 className="text-gray-500">For account verification</h3>
        </div>
      </div>
    </div>
  );
};

export default ValidatationPoints;
