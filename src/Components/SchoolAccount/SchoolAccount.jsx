import React from "react";
import Button from "../../Common/Button/Button";
import LoginHeading from "../../Common/LoginHeading/LoginHeading";
import Input from "../../Common/Input/Input";

const SchoolAccount = () => {
  return (
    <div className="items-center bg-amber-50 content-center justify-center flex  w-full min-h-screen">
      <div className="container m-auto flex flex-col items-center justify-center content-center   ">
        <LoginHeading heading={"  Welcome, create your school account"} />
        <form className="bg-white flex flex-col gap-3 items-center  justify-center h-100 w-95 p-10 rounded-md mt-10 ">
          <h1 className="w-70 text-center text-gray-500 text-lg p-3 font-semibold">
            It is our great pleasure to have you on board!
          </h1>
          <Input placeholder={"Enter the name of admin"} type={"text"} />
          <Input placeholder={"Enter the name of school"} type={"text"} />
          <Input placeholder={"Enter the school email"} type={"email"} />

          <Button />
          <p className="p-2 text-gray-500">
            Already have an account?{" "}
            <span className="text-blue-500 font-bold">Sign up</span>
          </p>
        </form>
      </div>
    </div>
  );
};

export default SchoolAccount;
