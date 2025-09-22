import React from "react";
import LoginHeading from "../../Common/LoginHeading/LoginHeading";
import Button from "../../Common/Button/Button";

const ChooseStaff = () => {
  return (
    <div className="items-center content-center justify-center flex  w-full min-h-screen bg-amber-50">
      <div className="container m-auto flex flex-col items-center justify-center content-center  ">
        <LoginHeading heading={"Udemy school, Choose your staffs"} />
        <form className="bg-white flex flex-col gap-3 items-center  justify-center h-70 w-100 p-10 rounded-md mt-10 ">
          <select
            name=""
            id=""
            className="border-3 px-5 py-2  font-medium border-gray-200 rounded-md w-full"
          >
            <option value="">Number of staff</option>
          </select>
          <select
            name=""
            id=""
            className="border-3 px-5 py-2  font-medium border-gray-200 rounded-md w-full"
          >
            <option value="">School address</option>
          </select>
          <Button />
          <p className="font-bold text-gray-500">
            Must be at least 8 characters.
          </p>
        </form>
      </div>
    </div>
  );
};

export default ChooseStaff;
