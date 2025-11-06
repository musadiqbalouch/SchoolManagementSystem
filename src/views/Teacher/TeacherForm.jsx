import React, { useState } from "react";
import { HiOutlinePlusCircle } from "react-icons/hi2";
import { useNavigate } from "react-router-dom";
import { Formik, useFormik } from "formik";
import * as Yup from "yup";
import { IoMdEye } from "react-icons/io";

const TeacherForm = () => {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const Subject = [
    "Mathematics",
    "Science",
    "English",
    "Physics",
    "Chemistry",
    "Biology",
    "History",
    "Computer Science",
  ];
  // const [selectSubject, setSelectSubject] = useState([]);

  const toggleSubject = (subject) => {
    const selected = formik.values.selectSubject;
    const updatedSubject = selected.includes(subject)
      ? selected.filter((s) => s !== subject)
      : [...selected, subject];

    formik.setFieldValue("selectSubject", updatedSubject);
  };

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
    // className: Yup.string().required("please select an option"),
    selectSubject: Yup.array()
      .required("please select a subject")
      .max(5, "maximum 5 subjects can be selected")
      .min(3, "Select atleast three subject"),
  });

  const formik = useFormik({
    initialValues: {
      designation: "",
      name: "",
      email: "",
      password: "",
      number: "",
      gender: "",
      selectSubject: [],
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
        teacherSubjects: value.selectSubject,
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
          <label className="font-semibold relative">Password</label>
          <span>
            <IoMdEye
              onClick={togglePasswordVisibility}
              className="absolute  h-4 laptop:mt-4 laptop:ml-42  laptop-lg:mt-4  laptop-lg:ml-57 desktop:mt-4 w-10 cursor-pointer text-gray-500"
            />
          </span>
          <input
            name="password"
            type={showPassword ? "text" : "password"}
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
            type="  "
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
        <div className="laptop:col-span-3 laptop-lg:col-span-3 desktop:col-span-3">
          <label className="font-semibold block mb-2">Select Subjects</label>
          <div className="grid grid-cols-2 laptop:grid-cols-3 laptop-lg:grid-cols-4 desktop:grid-cols-4 gap-3">
            {Subject.map((sub, index) => {
              const isSelected = formik.values.selectSubject.includes(sub);
              return (
                <div
                  key={index}
                  onClick={() => toggleSubject(sub)}
                  onBlur={formik.handleBlur}
                  className={`cursor-pointer border rounded-lg text-center py-2 px-3 font-medium transition-all duration-200 ${
                    isSelected
                      ? "bg-blue-500 text-white border-blue-600 shadow-md scale-105"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200 border-gray-300"
                  }`}
                >
                  {sub}
                </div>
              );
            })}
          </div>
          {formik.touched.selectSubject && formik.errors.selectSubject ? (
            <p className="text-red-400 font-medium mt-2">
              {formik.errors.selectSubject}
            </p>
          ) : null}
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
            className="cursor-pointer px-8 py-2 rounded-md font-semibold text-black bg-gray-300 border border-gray-400 hover:bg-gray-400"
          >
            Add Teacher
          </button>
        </div>
      </form>
    </div>
  );
};

export default TeacherForm;
