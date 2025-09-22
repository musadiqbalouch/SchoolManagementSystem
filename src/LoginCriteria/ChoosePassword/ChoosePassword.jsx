import React from "react";
// import LoginHeading from "../SchoolAccount/LoginHeading/LoginHeading";
import LoginHeading from "../../Common/LoginHeading/LoginHeading";
import Input from "../../Common/Input/Input";
import Button from "../../Common/Button/Button";
import ValidatationPoints from "../../Common/ValidatationPoints/ValidatationPoints";
import { AiFillCheckCircle } from "react-icons/ai";
import { FaDotCircle } from "react-icons/fa";
import { Link } from "react-router-dom";

const ChoosePassword = () => {
  return (
    <div className="items-center content-center justify-center flex  w-full min-h-screen bg-amber-50">
      <div className="container m-auto flex flex-col items-center justify-center content-center  ">
        <LoginHeading heading={"Udemy school, Choose your password"} />
        <form className="bg-white flex flex-col gap-3 itemscenter  justify-center h-100 w-95 p-10 rounded-md mt-10">
          <h3 className="font-bold text-gray-500 ">Choose a password</h3>
          <Input placeholder={"Choose a password"} type={"password"} />
          <h3 className="font-bold text-gray-500">Confirm Password</h3>
          <Input placeholder={"Choose a password"} type={"password"} />
          <p className="font-bold text-gray-500">
            Must be at least 8 characters.
          </p>
          <Link to={"/choosestaff"}>
            <Button />
          </Link>
        </form>
        <ValidatationPoints iconCheck={<AiFillCheckCircle />} />
      </div>
    </div>
  );
};

export default ChoosePassword;
