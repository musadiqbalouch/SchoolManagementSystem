import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { IoMdEye } from "react-icons/io";
import { toast } from "react-toastify";

const TeacherEditform = ({
  editItem,
  teacherData,
  settTeacherData,
  setShowModal,
}) => {
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

  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = () => setShowPassword(!showPassword);

  const toggleSubject = (subject) => {
    const selected = formik.values.editteacherSubjects;
    const updatedSubject = selected.includes(subject)
      ? selected.filter((s) => s !== subject)
      : [...selected, subject];
    formik.setFieldValue("editteacherSubjects", updatedSubject);
  };

  const tacherFormSchema = Yup.object().shape({
    editDesignation: Yup.string()
      .min(4, "Minimum 4 characters required")
      .matches(/^[A-Za-z\s]+$/, "Invalid designation name")
      .required("Designation is required"),
    editName: Yup.string()
      .min(4, "Minimum 4 characters required")
      .matches(/^[A-Za-z\s]+$/, "Invalid name format")
      .required("Name is required"),
    editEmail: Yup.string()
      .email("Invalid email format")
      .required("Email is required"),
    editPassword: Yup.string()
      .min(8, "Password must be at least 8 characters")
      .required("Password is required"),
    editNumber: Yup.number().required("Number is required"),
    editGender: Yup.string().required("Please select gender"),
    editteacherSubjects: Yup.array()
      .required("Please select subjects")
      .max(5, "Maximum 5 subjects can be selected")
      .min(3, "Select at least 3 subjects"),
  });

  const formik = useFormik({
    initialValues: {
      editDesignation: editItem.teacherDesignation,
      editName: editItem.teacherName,
      editEmail: editItem.teacherEmail,
      editPassword: editItem.teacherPassword,
      editNumber: editItem.teacherNumber,
      editGender: editItem.teacherGender,
      editteacherSubjects: editItem.teacherSubjects,
    },
    validationSchema: tacherFormSchema,
    onSubmit: (values) => {
      const updatedTeacher = {
        id: editItem.id,
        teacherDesignation: values.editDesignation,
        teacherName: values.editName,
        teacherEmail: values.editEmail,
        teacherPassword: values.editPassword,
        teacherNumber: values.editNumber,
        teacherGender: values.editGender,
        teacherSubjects: values.editteacherSubjects,
      };

      const updateTeacherList = teacherData.map((teacher) =>
        teacher.id === updatedTeacher.id ? updatedTeacher : teacher
      );
      localStorage.setItem("teacher", JSON.stringify(updateTeacherList));
      toast.success("Teacher Edit Succesfully");
      settTeacherData(updateTeacherList);
      setShowModal(false);
    },
  });

  return (
    <div className="relative z-10 laptop:w-[550px] laptop-lg:w-[750px] bg-white text-black rounded-2xl shadow-lg laptop:p-4 laptop-lg:p-6">
      <div className="bg-white border border-gray-400 rounded-xl shadow-md mx-auto mt-4 max-w-4xl laptop:p-4 laptop-lg:p-6 ease-in duration-300">
        <div className="text-gray-700 mb-6">
          <h1 className="text-2xl font-bold mb-2">Edit Teacher</h1>
          <div className="flex gap-6 font-medium text-gray-500">
            <h2 className="cursor-pointer hover:text-gray-700">Manually</h2>
            <h2 className="cursor-pointer hover:text-gray-700">Import CSV</h2>
          </div>
        </div>

        <form
          onSubmit={formik.handleSubmit}
          className="grid grid-cols-1 laptop:grid-cols-3 gap-5 text-gray-700"
        >
          {/* Designation */}
          <div>
            <label className="font-semibold">Designation</label>
            <input
              name="editDesignation"
              value={formik.values.editDesignation}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              type="text"
              className="w-full mt-1 border border-gray-400 rounded-md px-3 py-2 focus:ring-2 focus:ring-gray-400 focus:outline-none"
            />
            {formik.touched.editDesignation &&
              formik.errors.editDesignation && (
                <p className="text-red-400 font-medium text-sm mt-1">
                  {formik.errors.editDesignation}
                </p>
              )}
          </div>

          {/* Name */}
          <div>
            <label className="font-semibold">Name</label>
            <input
              name="editName"
              value={formik.values.editName}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              type="text"
              className="w-full mt-1 border border-gray-400 rounded-md px-3 py-2 focus:ring-2 focus:ring-gray-400 focus:outline-none"
            />
            {formik.touched.editName && formik.errors.editName && (
              <p className="text-red-400 font-medium text-sm mt-1">
                {formik.errors.editName}
              </p>
            )}
          </div>

          {/* Email */}
          <div>
            <label className="font-semibold">Email</label>
            <input
              name="editEmail"
              value={formik.values.editEmail}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              type="email"
              className="w-full mt-1 border border-gray-400 rounded-md px-3 py-2 focus:ring-2 focus:ring-gray-400 focus:outline-none"
            />
            {formik.touched.editEmail && formik.errors.editEmail && (
              <p className="text-red-400 font-medium text-sm mt-1">
                {formik.errors.editEmail}
              </p>
            )}
          </div>

          {/* Password */}
          <div className="relative">
            <label className="font-semibold">Password</label>
            <IoMdEye
              onClick={togglePasswordVisibility}
              className="absolute right-3 top-9 w-5 h-5 text-gray-500 cursor-pointer"
            />
            <input
              name="editPassword"
              value={formik.values.editPassword}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              type={showPassword ? "text" : "password"}
              className="w-full mt-1 border border-gray-400 rounded-md px-3 py-2 focus:ring-2 focus:ring-gray-400 focus:outline-none"
            />
            {formik.touched.editPassword && formik.errors.editPassword && (
              <p className="text-red-400 font-medium text-sm mt-1">
                {formik.errors.editPassword}
              </p>
            )}
          </div>

          {/* Phone */}
          <div>
            <label className="font-semibold">Phone Number</label>
            <input
              name="editNumber"
              value={formik.values.editNumber}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              type="number"
              className="w-full mt-1 border border-gray-400 rounded-md px-3 py-2 focus:ring-2 focus:ring-gray-400 focus:outline-none"
            />
            {formik.touched.editNumber && formik.errors.editNumber && (
              <p className="text-red-400 font-medium text-sm mt-1">
                {formik.errors.editNumber}
              </p>
            )}
          </div>

          {/* Gender */}
          <div>
            <label className="font-semibold">Gender</label>
            <select
              name="editGender"
              value={formik.values.editGender}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="w-full mt-1 border border-gray-400 rounded-md px-3 py-2 focus:ring-2 focus:ring-gray-400 focus:outline-none"
            >
              <option>Male</option>
              <option>Female</option>
            </select>
            {formik.touched.editGender && formik.errors.editGender && (
              <p className="text-red-400 font-medium text-sm mt-1">
                {formik.errors.editGender}
              </p>
            )}
          </div>

          {/* Subjects */}
          <div className="laptop:col-span-3 mt-3">
            <label className="font-semibold block mb-2">Select Subjects</label>
            <div className="flex flex-wrap gap-3">
              {Subject.map((sub, index) => {
                const isSelected =
                  formik.values.editteacherSubjects.includes(sub);
                return (
                  <div
                    key={index}
                    onClick={() => toggleSubject(sub)}
                    className={`cursor-pointer border rounded-lg text-center py-2 px-4 font-medium transition-all duration-200 ${
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
            {formik.touched.editteacherSubjects &&
              formik.errors.editteacherSubjects && (
                <p className="text-red-400 font-medium text-sm mt-2">
                  {formik.errors.editteacherSubjects}
                </p>
              )}
          </div>

          {/* Buttons */}
          <div className="laptop:col-span-3 flex justify-between items-center mt-6">
            <button
              onClick={() => setShowModal(false)}
              type="button"
              className="px-6 py-2 text-white bg-gray-700 hover:bg-gray-800 rounded-lg transition-all text-sm font-medium"
            >
              Close
            </button>
            <button
              type="submit"
              className="px-8 py-2 rounded-md font-semibold text-white bg-blue-600 hover:bg-blue-700 transition-all"
            >
              Save Edit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default TeacherEditform;
