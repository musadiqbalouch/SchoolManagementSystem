import React, { useEffect, useState } from "react";
import { ImCross } from "react-icons/im";
import { HiOutlinePlusCircle } from "react-icons/hi2";
import { CgSlack } from "react-icons/cg";
import { useFormik } from "formik";
import * as Yup from "yup";

const StudentModal = ({ setModal, editItem, studentData, setStudentData }) => {
  const teaherDataSchema = Yup.object().shape({
    editName: Yup.string()
      .min(4, "name must be 4 character")
      .matches(/^[A-Za-z\s]+$/, "Invalid user name")
      .required("name  is required"),
    editClass: Yup.string().required("please select an option"),
    editGenger: Yup.string().required("please select an option"),
    editEmail: Yup.string()
      .email("invalid email format")
      .required("email is required"),
    editPassword: Yup.string().required("please enter a number"),
    editNumber: Yup.string()
      .min(8, "password must be atleast 8 charaters")
      .required("password is required"),
  });
  const formik = useFormik({
    initialValues: {
      editName: editItem.studentName,
      editClass: editItem.studentClass,
      editGenger: editItem.studentGender,
      editEmail: editItem.studentEmail,
      editPassword: editItem.studentPassword,
      editNumber: editItem.studentNumber,
    },
    validationSchema: teaherDataSchema,
    onSubmit: (value) => {
      const editdata = {
        id: editItem.id,
        studentName: value.editName,
        studentClass: value.editClass,
        studentGender: value.editGenger,
        studentEmail: value.editEmail,
        studentPassword: value.editPassword,
        studentNumber: value.editNumber,
      };

      const updatedStudents = studentData.map((student) =>
        student.id === editdata.id ? editdata : student
      );
      localStorage.setItem("students", JSON.stringify(updatedStudents));
      setStudentData(updatedStudents);
      setModal(false);
    },
  });

  return (
    <div>
      <div className="fixed inset-0 z-50 flex items-center justify-center   text-start">
        <div className="absolute inset-0 bg-black/40 backdrop-blur-sm "></div>

        {/* Modal content */}
        <div className="relative z-10  laptop:w-[550px] laptop:p-5 laptop-lg:w-[750px] bg-white text-black rounded-2xl shadow-lg laptop:p2 laptop-lg:p-6">
          <ImCross
            onClick={() => setModal(false)}
            className="absolute right-4 top-4 h-5 w-5 cursor-pointer text-gray-700"
          />
          <div className="bg-white border border-gray-400 rounded-xl shadow-md p-10 mx-auto mt-10 max-w-4xl">
            <div className="text-gray-700 mb-6">
              <h1 className="text-3xl font-bold mb-2">Add Student</h1>
              <div className="flex gap-6 font-medium text-gray-500">
                <h2 className="cursor-pointer hover:text-gray-700">Manually</h2>
                <h2 className="cursor-pointer hover:text-gray-700">
                  Import CSV
                </h2>
              </div>
            </div>

            <form
              onSubmit={formik.handleSubmit}
              className="grid grid-cols-1 laptop:grid-cols-2 laptop-lg:grid-cols-2 desktop:grid-cols-2 laptop-lg:gap-2 gap-6 text-gray-700"
            >
              <label className="flex flex-col font-medium">
                Name
                <input
                  name="editName"
                  value={formik.values.editName}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  type="text"
                  className="border border-gray-400 rounded-md px-3 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-gray-500"
                  placeholder=""
                />
                {formik.touched.editName && formik.errors.editName ? (
                  <p className=" text-red-400 font-medium">
                    {formik.errors.editName}
                  </p>
                ) : (
                  ""
                )}
              </label>

              <label className="flex flex-col font-medium">
                Class
                <select
                  name="editClass"
                  onChange={formik.handleChange}
                  value={formik.values.editClass}
                  onBlur={formik.handleBlur}
                  className="border border-gray-400 rounded-md px-3 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-gray-500"
                >
                  <option>9th</option>
                  <option>10th</option>
                  <option>First Year</option>
                  <option>Second Year</option>
                </select>
                {formik.touched.editClass && formik.errors.editClass ? (
                  <p className=" text-red-400 font-medium">
                    {formik.errors.editClass}
                  </p>
                ) : (
                  ""
                )}
              </label>

              <label className="flex flex-col font-medium">
                Gender
                <select
                  name="editGenger"
                  value={formik.values.editGenger}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  className="border border-gray-400 rounded-md px-3 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-gray-500"
                >
                  <option>Male</option>
                  <option>Female</option>
                </select>
                {formik.touched.editGenger && formik.errors.editGenger ? (
                  <p className=" text-red-400 font-medium">
                    {formik.errors.editGenger}
                  </p>
                ) : (
                  ""
                )}
              </label>

              <label className="flex flex-col font-medium">
                Email
                <input
                  name="editEmail"
                  type="email"
                  value={formik.values.editEmail}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  className="border border-gray-400 rounded-md px-3 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-gray-500"
                  placeholder=""
                />
                {formik.touched.editEmail && formik.errors.editEmail ? (
                  <p className=" text-red-400 font-medium">
                    {formik.errors.editEmail}
                  </p>
                ) : (
                  ""
                )}
              </label>

              <label className="flex flex-col font-medium">
                Phone Number
                <input
                  name="editNumber"
                  value={formik.values.editNumber}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  type="number"
                  className="border border-gray-400 rounded-md px-3 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-gray-500"
                  placeholder=""
                />
                {formik.touched.editNumber && formik.errors.editNumber ? (
                  <p className=" text-red-400 font-medium">
                    {formik.errors.editNumber}
                  </p>
                ) : (
                  ""
                )}
              </label>

              <label className="flex flex-col font-medium">
                Password
                <input
                  name="editPassword"
                  value={formik.values.editPassword}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  type="password"
                  className="border border-gray-400 rounded-md px-3 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-gray-500"
                  placeholder=""
                />
                {formik.touched.editPassword && formik.errors.editPassword ? (
                  <p className=" text-red-400 font-medium">
                    {formik.errors.editPassword}
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
                  Save Edit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentModal;
