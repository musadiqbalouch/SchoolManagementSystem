import React, { useState } from "react";
import { HiOutlinePlusCircle } from "react-icons/hi2";
import { useNavigate } from "react-router-dom";
import { Formik, useFormik } from "formik";
import * as Yup from "yup";

const StudentForm = () => {
  const teaherFormSchema = Yup.object().shape({
    name: Yup.string()
      .min(4, "name must be 4 character")
      .matches(/^[A-Za-z\s]+$/, "Invalid user name")
      .required("name  is required"),
    className: Yup.string().required("please select an option"),
    gender: Yup.string().required("please select an option"),
    email: Yup.string()
      .email("invalid email format")
      .required("email is required"),
    number: Yup.string()
      .min(8, "password must be atleast 8 charaters")
      .required("password is required"),
    password: Yup.string().required("please enter a number"),
  });
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      name: "",
      className: "",
      gender: "",
      email: "",
      number: "",
      password: "",
    },
    validationSchema: teaherFormSchema,
    onSubmit: (value) => {
      const data = JSON.parse(localStorage.getItem("students")) || [];
      const student = {
        studentName: value.name,
        studentClass: value.className,
        studentGender: value.gender,
        studentEmail: value.email,
        studentNumber: value.number,
        studentPassword: value.password,
        // teacherId: teacher.teacherId,
      };
      // console.log(student.teacherId);
      // console.log(student.studentName);
      data.push(student);
      localStorage.setItem("students", JSON.stringify(data));
      formik.resetForm();
      navigate("/student&classes");
    },
  });

  return (
    <div className="bg-white border border-gray-400 rounded-xl shadow-md p-10 mx-auto mt-10 max-w-4xl">
      <div className="text-gray-700 mb-6">
        <h1 className="text-3xl font-bold mb-2">Add Student</h1>
        <div className="flex gap-6 font-medium text-gray-500">
          <h2 className="cursor-pointer hover:text-gray-700">Manually</h2>
          <h2 className="cursor-pointer hover:text-gray-700">Import CSV</h2>
        </div>
      </div>

      <form
        onSubmit={formik.handleSubmit}
        className="grid grid-cols-1 laptop:grid-cols-2 laptop-lg:grid-cols-2 desktop:grid-cols-2 laptop-lg:gap-2  gap-6 text-gray-700"
      >
        <label className="flex flex-col font-medium">
          Name
          <input
            name="name"
            type="text"
            value={formik.values.name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className="border border-gray-400 rounded-md px-3 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-gray-500"
            placeholder="Enter full name"
          />
          {formik.touched.name && formik.errors.name ? (
            <p className=" text-red-400 font-medium">{formik.errors.name}</p>
          ) : (
            ""
          )}
        </label>

        <label className="flex flex-col font-medium">
          Class
          <select
            name="className"
            value={formik.values.className}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className="border border-gray-400 rounded-md px-3 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-gray-500"
          >
            <option value="">Select class</option>
            <option>9th</option>
            <option>10th</option>
            <option>First Year</option>
            <option>Second Year</option>
          </select>
          {formik.touched.className && formik.errors.className ? (
            <p className=" text-red-400 font-medium">
              {formik.errors.className}
            </p>
          ) : (
            ""
          )}
        </label>

        <label className="flex flex-col font-medium">
          Gender
          <select
            name="gender"
            value={formik.values.gender}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className="border border-gray-400 rounded-md px-3 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-gray-500"
          >
            <option value="">Select gender</option>
            <option>Male</option>
            <option>Female</option>
          </select>
          {formik.touched.gender && formik.errors.gender ? (
            <p className=" text-red-400 font-medium">{formik.errors.gender}</p>
          ) : (
            ""
          )}
        </label>

        <label className="flex flex-col font-medium">
          Email
          <input
            name="email"
            type="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className="border border-gray-400 rounded-md px-3 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-gray-500"
            placeholder="Enter email"
          />
          {formik.touched.email && formik.errors.email ? (
            <p className=" text-red-400 font-medium">{formik.errors.email}</p>
          ) : (
            ""
          )}
        </label>

        <label className="flex flex-col font-medium">
          Phone Number
          <input
            name="number"
            type="number"
            value={formik.values.number}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className="border border-gray-400 rounded-md px-3 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-gray-500"
            placeholder="03XXXXXXXXX"
          />
          {formik.touched.number && formik.errors.number ? (
            <p className=" text-red-400 font-medium">{formik.errors.number}</p>
          ) : (
            ""
          )}
        </label>

        <label className="flex flex-col font-medium">
          Password
          <input
            name="password"
            type="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className="border border-gray-400 rounded-md px-3 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-gray-500"
            placeholder="Create password"
          />
          {formik.touched.password && formik.errors.password ? (
            <p className=" text-red-400 font-medium">
              {formik.errors.password}
            </p>
          ) : (
            ""
          )}
        </label>

        <div className="col-span-1 laptop:col-span-2 laptop-lg:col-span-2 desktop:col-span-2 flex justify-between items-center mt-3">
          <span className="flex items-center gap-2 text-gray-600 font-medium hover:text-gray-800 cursor-pointer">
            <HiOutlinePlusCircle className="w-6 h-6" />
            Add another
          </span>

          <button
            type="submit"
            className="px-6 py-2 rounded-md font-semibold bg-gray-700 text-white hover:bg-gray-800 transition-all"
          >
            Add Student
          </button>
        </div>
      </form>
    </div>
  );
};

export default StudentForm;
