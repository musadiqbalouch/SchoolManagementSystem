import React, { useState } from "react";
import { HiOutlinePlusCircle } from "react-icons/hi2";
import { useNavigate } from "react-router-dom";
import { Formik, useFormik } from "formik";
import * as Yup from "yup";

const TeacherForm = () => {
  const navigate = useNavigate();

  const studentFormSchema = Yup.object().shape({
    designation: Yup.string()
      .min(4, "name must be 4 character")
      .matches(/^[A-Za-z\s]+$/, "Invalid user name")
      .required("name  is required"),
    name: Yup.string()
      .min(4, "name must be 4 character")
      .matches(/^[A-Za-z\s]+$/, "Invalid user name")
      .required("name  is required"),
    email: Yup.string()
      .email("invalid email format")
      .required("email is required"),
    password: Yup.string()
      .min(8, "password must be atleast 8 charaters")
      .required("password is required"),
    number: Yup.number().required("please enter a number"),
    gender: Yup.string().required("please select an option"),
    className: Yup.string().required("please select an option"),
    subject: Yup.string().required("please select an option"),
  });

  const formik = useFormik({
    initialValues: {
      designation: "",
      name: "",
      email: "",
      password: "",
      number: "",
      gender: "",
      className: "",
      subject: "",
    },
    validationSchema: studentFormSchema,
    onSubmit: (value) => {
      const data = JSON.parse(localStorage.getItem("teacher")) || [];
      const teacher = {
        id: data.length + 1,
        teacherDesignation: value.designation,
        teacherName: value.name,
        teacherEmail: value.email,
        teacherPassword: value.password,
        teacherNumber: value.number,
        teacherGender: value.gender,
        teacherClassName: value.className,
        teacherSubject: value.subject,
      };
      data.push(teacher);
      localStorage.setItem("teacher", JSON.stringify(data));
      formik.resetForm();
      navigate("/teacher");
    },
  });

  return (
    <div
      className="bg-white border border-gray-400 rounded-xl shadow-md laptop:m-10 laptop:p-10  laptop-lg:px-10 laptop-lg:m-auto laptop-lg:mt-10 laptop-lg:py-5 
    mx-auto mt-10 max-w-4xl desktop:m-auto desktop:mt-10 "
    >
      <div className="text-gray-700 mb-6">
        <h1 className="text-3xl font-bold mb-2">Add Teacher</h1>
        <div className="flex gap-6 font-medium text-gray-500">
          <h2 className="cursor-pointer hover:text-gray-700">Manually</h2>
          <h2 className="cursor-pointer hover:text-gray-700">Import CSV</h2>
        </div>
      </div>
      <form
        onSubmit={formik.handleSubmit}
        className="grid grid-cols-1 laptop:grid-cols-3 laptop-lg:grid-cols-3 desktop:grid-cols-3 laptop-lg:gap-2 gap-4 text-gray-700"
      >
        <div>
          <label className="font-semibold">Designation</label>
          <input
            name="designation"
            type="text"
            value={formik.values.designation}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className="w-full mt-1 border border-gray-400 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-gray-400"
            placeholder="e.g. Senior Teacher"
          />
          {formik.touched.designation && formik.errors.designation ? (
            <p className=" text-red-400 font-medium">
              {formik.errors.designation}
            </p>
          ) : (
            ""
          )}
        </div>

        <div>
          <label className="font-semibold">Name</label>
          <input
            name="name"
            type="text"
            value={formik.values.name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className="w-full mt-1 border border-gray-400 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-gray-400"
            placeholder="e.g. Arfin Nasir"
          />
          {formik.touched.name && formik.errors.name ? (
            <p className=" text-red-400 font-medium">{formik.errors.name}</p>
          ) : (
            ""
          )}
        </div>

        <div>
          <label className="font-semibold">Email</label>
          <input
            name="email"
            type="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className="w-full mt-1 border border-gray-400 rounded-md px-3 py-2  focus:ring-gray-400"
            placeholder="e.gArfinNasir@gmail.com"
          />
          {formik.touched.email && formik.errors.email ? (
            <p className=" text-red-400 font-medium">{formik.errors.email}</p>
          ) : (
            ""
          )}
        </div>

        <div>
          <label className="font-semibold">Password</label>
          <input
            name="password"
            type="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className="w-full mt-1 border border-gray-400 rounded-md px-3 py-2     focus:ring-gray-400"
            placeholder="Enter password"
          />
          {formik.touched.password && formik.errors.password ? (
            <p className=" text-red-400 font-medium">
              {formik.errors.password}
            </p>
          ) : (
            ""
          )}
        </div>

        <div>
          <label className="font-semibold">Phone Number</label>
          <input
            name="number"
            type="number"
            value={formik.values.number}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className="w-full mt-1 border border-gray-400 rounded-md px-3 py-2  focus:ring-gray-400"
            placeholder="03xxxxxxxxx"
          />
          {formik.touched.number && formik.errors.number ? (
            <p className=" text-red-400 font-medium">{formik.errors.number}</p>
          ) : (
            ""
          )}
        </div>

        <div>
          <label className="font-semibold">Gender</label>
          <select
            name="gender"
            value={formik.values.gender}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className="w-full mt-1 border border-gray-400 rounded-md px-3 py-2  focus:ring-gray-400"
          >
            <option value="">Select Gender</option>
            <option>Male</option>
            <option>Female</option>
          </select>
          {formik.touched.gender && formik.errors.gender ? (
            <p className=" text-red-400 font-medium">{formik.errors.gender}</p>
          ) : (
            ""
          )}
        </div>

        <div>
          <label className="font-semibold">Class</label>
          <select
            name="className"
            value={formik.values.className}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className="w-full mt-1 border border-gray-400 rounded-md px-3 py-2 focus:outline-none "
          >
            <option value="">Select Class</option>
            <option>9th</option>
            <option>10th</option>
            <option>First Year</option>
            <option>Inter</option>
          </select>
          {formik.touched.className && formik.errors.className ? (
            <p className=" text-red-400 font-medium">
              {formik.errors.className}
            </p>
          ) : (
            ""
          )}
        </div>

        <div>
          <label className="font-semibold">Subject</label>
          <select
            name="subject"
            value={formik.values.subject}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className="w-full mt-1 border border-gray-400 rounded-md px-3 py-2 focus:outline-none "
          >
            <option value="">Select Subject</option>
            <option>Science</option>
            <option>Physics</option>
            <option>English</option>
            <option>Math</option>
          </select>
          {formik.touched.subject && formik.errors.subject ? (
            <p className=" text-red-400 font-medium">{formik.errors.subject}</p>
          ) : (
            ""
          )}
        </div>

        {/* add teacher */}
        <div className="flex items-center justify-start gap-2 mt-4 laptop:col-span-3">
          <HiOutlinePlusCircle className="text-gray-600 w-6 h-6" />
          <span className="text-gray-700 font-semibold cursor-pointer hover:underline">
            Add another
          </span>
        </div>

        <div className="laptop:col-span-3  flex justify-center">
          <button
            // disabled={validatation}
            type="submit"
            className="px-8 py-2 rounded-md font-semibold text-black bg-gray-300 border border-gray-400 hover:bg-gray-400"
          >
            Add Teacher
          </button>
        </div>
      </form>
    </div>
  );
};

export default TeacherForm;
