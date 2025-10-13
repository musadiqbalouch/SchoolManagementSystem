import React from "react";
import LoginHeading from "../../Common/LoginHeading/LoginHeading";
import Input from "../../Common/Input/Input";
import { useFormik } from "formik";
import Button from "../../Common/Button/Button";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

const LogintoAccount = ({ setIsLoggedIn }) => {
  const [validation, setValidation] = useState(true);
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      checkName: "",
      Checkpassword: "",
    },
    onSubmit: (value) => {
      let detail = JSON.parse(localStorage.getItem("user")) || [];

      let isValid = detail.some(
        (data) =>
          data.name === value.checkName && data.password === value.Checkpassword
      );
      if (isValid) {
        setIsLoggedIn(true);
        navigate("/");
        setValidation(true);
      } else {
        setValidation(false);
      }
    },
  });
  return (
    <div className="items-center content-center justify-center flex  w-full min-h-screen bg-amber-50">
      <div className="container m-auto flex flex-col items-center justify-center content-center ">
        <LoginHeading heading={"Welcome, Log into you account"} />
        <form
          onSubmit={formik.handleSubmit}
          className="bg-white flex flex-col gap-3 items-center  justify-center h-70 w-100 p-10 rounded-md mt-10 "
        >
          <h1 className="w-70 text-center text-gray-500 text-lg p-3 font-semibold">
            It is our great pleasure to have you on board!
          </h1>
          <Input
            name="checkName"
            value={formik.values.checkName}
            onChange={formik.handleChange}
            placeholder={"Enter the name of school"}
            type={"text"}
          />
          <Input
            name="Checkpassword"
            value={formik.values.Checkpassword}
            onChange={formik.handleChange}
            placeholder={"Enter Password"}
            type={"password"}
          />
          <h2
            className={`${validation ? " hidden" : " block text-red-500 font-medium"} `}
          >
            Enter right password & name{" "}
          </h2>
          <Button />
          <Link
            to={"/createAccount"}
            className="p-2 text-gray-500 cursor-pointer"
          >
            Create an account?{" "}
            <span className="text-blue-500 font-bold cursor-pointer ">
              Sign up
            </span>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default LogintoAccount;
