import React from "react";
import Button from "../../Common/Button/Button";
import LoginHeading from "../../Common/LoginHeading/LoginHeading";
import Input from "../../Common/Input/Input";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { Formik, useFormik } from "formik";
import * as Yup from "yup";
import { CgSlack } from "react-icons/cg";

const SchoolAccount = () => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  // const data = JSON.parse(localStorage.getItem("user")) || [];

  // let same = data.filter((dta) => dta.email === "test@gmail.com");
  // console.log("🚀 ~ SchoolAccount ~ same:", same);

  const navigate = useNavigate();
  const signupSchema = Yup.object().shape({
    adminName: Yup.string()
      .min(4, "name must be 4 character")
      .matches(/^[A-Za-z\s]+$/, "Invalid user name")
      .required("name  is required"),
    schoolName: Yup.string()
      .matches(/^[A-Za-z\s]+$/, "Invalid user name")
      .required("Invalid Name"),
    schoolEmail: Yup.string()
      .email("invalid email format")
      .required("email is required"),
    schoolPassword: Yup.string()
      .min(8, "password must be atleast 8 charaters")
      .required("password is required"),
  });
  const formik = useFormik({
    initialValues: {
      adminName: "",
      schoolName: "",
      schoolEmail: "",
      schoolPassword: "",
    },
    validationSchema: signupSchema,
    onSubmit: (value) => {
      const data = JSON.parse(localStorage.getItem("user")) || [];

      const newUser = {
        teacherId: data.length + 1,
        name: value.adminName,
        school: value.schoolName,
        email: value.schoolEmail,
        password: value.schoolPassword,
      };

      let same = data.find((dta) => dta.email === newUser.email);
      if (same) {
        {
          formik.setFieldError("schoolEmail", "Email is already registered");
        }
      } else {
        data.push(newUser);
        localStorage.setItem("user", JSON.stringify(data));
        navigate("/loginaccount");
        formik.resetForm();
      }
    },
  });

  return (
    <div className="items-center bg-amber-50 content-center justify-center flex  w-full min-h-screen">
      <div className="container m-auto flex flex-col items-center justify-center content-center   ">
        <LoginHeading heading={"  Welcome, create your school account"} />
        <form
          onSubmit={formik.handleSubmit}
          className="bg-white flex flex-col gap-1 items-center  justify-center h-fit w-95  px-10 py-2 rounded-md mt-10 "
        >
          <h1 className="w-70 text-center text-gray-500 text-lg p-3 font-semibold">
            It is our great pleasure to have you on board!
          </h1>
          <Input
            placeholder={"Enter the name of admin"}
            type={"text"}
            name={"adminName"}
            value={formik.values.adminName}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.adminName && formik.errors.adminName ? (
            <p className=" text-red-400 font-medium">
              {formik.errors.adminName}
            </p>
          ) : (
            ""
          )}
          <Input
            placeholder={"Enter the name of school"}
            type={"text"}
            name={"schoolName"}
            value={formik.values.schoolName}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.schoolName && formik.errors.schoolName ? (
            <p className=" text-red-400 font-medium">
              {formik.errors.schoolName}
            </p>
          ) : (
            ""
          )}
          <Input
            placeholder={"Enter the school email"}
            type={"email"}
            name={"schoolEmail"}
            value={formik.values.schoolEmail}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.schoolEmail && formik.errors.schoolEmail ? (
            <p className=" text-red-400 font-medium">
              {formik.errors.schoolEmail}
            </p>
          ) : (
            ""
          )}
          <Input
            placeholder={"Choose a password"}
            type={showPassword ? " text" : "password"}
            togglePasswordVisibility={togglePasswordVisibility}
            name={"schoolPassword"}
            value={formik.values.schoolPassword}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.schoolPassword && formik.errors.schoolPassword ? (
            <p className=" text-red-400 font-medium">
              {formik.errors.schoolPassword}
            </p>
          ) : (
            ""
          )}
          <Button type={"submit"} />
          <p className="p-2 text-gray-500">
            Already have an account?
            <Link to={"/loginaccount"} className="text-blue-500 font-bold">
              Login
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default SchoolAccount;
