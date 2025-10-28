import React, { useState } from "react";
import LoginHeading from "../../Common/LoginHeading/LoginHeading";
import Input from "../../Common/Input/Input";
import { useFormik } from "formik";
import Button from "../../Common/Button/Button";
import { Link, useNavigate } from "react-router-dom";

const LogintoAccount = ({ setIsLoggedIn }) => {
  const [validation, setValidation] = useState(true);
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      checkName: "",
      checkPassword: "",
    },
    onSubmit: (value) => {
      let registeredTeacher = JSON.parse(localStorage.getItem("teacher")) || [];
      let registeredAdmin = JSON.parse(localStorage.getItem("user")) || [];
      let registeredStudent =
        JSON.parse(localStorage.getItem("students")) || [];

      // Teacher login check
      let isValid = registeredTeacher.find(
        (data) =>
          data.teacherName === value.checkName &&
          data.teacherPassword === value.checkPassword
      );

      if (isValid) {
        let loggedIn = {
          userName: value.checkName,
          userPassword: value.checkPassword,
          id: isValid.id,
        };
        console.log("loggedin clicked");
        localStorage.setItem("loggedInUser", JSON.stringify(loggedIn));
        setIsLoggedIn(true);
        navigate("/");
        setValidation(true);
        return; // stop here
      } else {
        setValidation(false);
      }

      // Admin login check
      let adminValid =
        registeredAdmin &&
        registeredAdmin.name === value.checkName &&
        registeredAdmin.password === value.checkPassword;

      if (adminValid) {
        let loggedIn = {
          userName: value.checkName,
          userPassword: value.checkPassword,
        };

        localStorage.setItem("loggedInUser", JSON.stringify(loggedIn));
        setIsLoggedIn(true);
        navigate("/");
        setValidation(true);
        return; // stop here
      } else {
        setValidation(false);
      }

      // Student login check
      let studentValid = registeredStudent.find(
        (student) =>
          student.studentName === value.checkName &&
          student.studentPassword === value.checkPassword
      );

      if (studentValid) {
        let studentLoggedIn = {
          registeredStudentName: value.checkName,
          registeredStudentPassword: value.checkPassword,
          registeredStudentId: studentValid.studentId,
          teacherid: studentValid.teacherId,
        };

        localStorage.setItem(
          "loggedInStudent",
          JSON.stringify(studentLoggedIn)
        );
        setIsLoggedIn(true);
        navigate("/");
        setValidation(true);
        return; // stop here
      } else {
        setValidation(false);
      }
    },
  });

  return (
    <div className="items-center content-center justify-center flex w-full min-h-screen bg-amber-50">
      <div className="container m-auto flex flex-col items-center justify-center content-center ">
        <LoginHeading heading={"Welcome, Log into your account"} />
        <form
          onSubmit={formik.handleSubmit}
          className="bg-white flex flex-col gap-3 items-center justify-center h-fit w-100 p-10 rounded-md mt-10 "
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
            name="checkPassword"
            value={formik.values.checkPassword}
            onChange={formik.handleChange}
            placeholder={"Enter Password"}
            type={showPassword ? "text" : "password"}
            togglePasswordVisibility={togglePasswordVisibility}
          />
          <h2
            className={`${
              validation ? "hidden" : "block text-red-400 font-medium"
            }`}
          >
            Enter right password & name
          </h2>
          <Button type={"submit"} />
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
