import React from "react";
import { ImCross } from "react-icons/im";
import { useFormik } from "formik";
import * as Yup from "yup";

const TeacherEditform = ({
  editItem,
  teacherData,
  settTeacherData,
  setShowModal,
}) => {
  const tacherFormSchema = Yup.object().shape({
    editDesignation: Yup.string()
      .min(4, "name must be 4 character")
      .matches(/^[A-Za-z\s]+$/, "Invalid user name")
      .required("name  is required"),
    editName: Yup.string()
      .min(4, "name must be 4 character")
      .matches(/^[A-Za-z\s]+$/, "Invalid user name")
      .required("name  is required"),
    editEmail: Yup.string()
      .email("invalid email format")
      .required("email is required"),
    editPassword: Yup.string()
      .min(8, "password must be atleast 8 charaters")
      .required("password is required"),
    editNumber: Yup.number().required("please enter a number"),
    editGender: Yup.string().required("please select an option"),
    editClass: Yup.string().required("please select an option"),
    editSubject: Yup.string().required("please select an option"),
  });

  const formik = useFormik({
    initialValues: {
      editDesignation: editItem.teacherDesignation,
      editName: editItem.teacherName,
      editEmail: editItem.teacherEmail,
      editPassword: editItem.teacherPassword,
      editNumber: editItem.teacherNumber,
      editGender: editItem.teacherGender,
      editClass: editItem.teacherClassName,
      editSubject: editItem.teacherSubject,
    },
    validationSchema: tacherFormSchema,
    onSubmit: (value) => {
      const editData = {
        id: editItem.id,
        teacherDesignation: value.editDesignation,
        teacherName: value.editName,
        teacherEmail: value.editEmail,
        teacherPassword: value.editPassword,
        teacherNumber: value.editNumber,
        teacherGender: value.editGender,
        teacherClassName: value.editClass,
        teacherSubject: value.editSubject,
      };
      const updateTeacher = teacherData.map((teacher) =>
        teacher.id === editData.id ? editData : teacher
      );
      localStorage.setItem("teacher", JSON.stringify(updateTeacher));
      settTeacherData(updateTeacher);
      setShowModal(false);
    },
  });

  return (
    <div>
      <div className="relative z-10 laptop:w-[550px] laptop-lg:w-[750px] bg-white text-black rounded-2xl shadow-lg laptop:p-4 laptop-lg:p-6">
        <div className="bg-white border border-gray-400 rounded-xl shadow-md laptop:mx-10 laptop:p-3 laptop-lg:px-10 laptop-lg:m-auto laptop-lg:mt-10 laptop-lg:py-5 mx-auto mt-10 max-w-4xl desktop:m-auto desktop:mt-10 ease-in duration-300 ">
          <div className="text-gray-700 mb-6">
            <h1 className="text-2xl font-bold mb-2">Add Teacher</h1>
            <div className="flex gap-6 font-medium text-gray-500">
              <h2 className="cursor-pointer hover:text-gray-700">Manually</h2>
              <h2 className="cursor-pointer hover:text-gray-700">Import CSV</h2>
            </div>
          </div>

          <form
            onSubmit={formik.handleSubmit}
            className="grid grid-cols-1 laptop:grid-cols-3 laptop-lg:grid-cols-3 desktop:grid-cols-3 gap-4 text-gray-700"
          >
            <div>
              <label className="font-semibold">Designation</label>
              <input
                name="editDesignation"
                value={formik.values.editDesignation}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                type="text"
                className="w-full mt-1 border border-gray-400 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-gray-400"
              />
              {formik.touched.editDesignation &&
              formik.errors.editDesignation ? (
                <p className=" text-red-400 font-medium">
                  {formik.errors.editDesignation}
                </p>
              ) : (
                ""
              )}
            </div>

            <div>
              <label className="font-semibold">Name</label>
              <input
                name="editName"
                value={formik.values.editName}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                type="text"
                className="w-full mt-1 border border-gray-400 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-gray-400"
              />
              {formik.touched.editName && formik.errors.editName ? (
                <p className=" text-red-400 font-medium">
                  {formik.errors.editName}
                </p>
              ) : (
                ""
              )}
            </div>

            <div>
              <label className="font-semibold">Email</label>
              <input
                name="editEmail"
                value={formik.values.editEmail}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                type="email"
                className="w-full mt-1 border border-gray-400 rounded-md px-3 py-2  focus:ring-gray-400"
              />
              {formik.touched.editEmail && formik.errors.editEmail ? (
                <p className=" text-red-400 font-medium">
                  {formik.errors.editEmail}
                </p>
              ) : (
                ""
              )}
            </div>

            <div>
              <label className="font-semibold">Password</label>
              <input
                name="editPassword"
                value={formik.values.editPassword}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                type="password"
                className="w-full mt-1 border border-gray-400 rounded-md px-3 py-2     focus:ring-gray-400"
              />
              {formik.touched.editPassword && formik.errors.editPassword ? (
                <p className=" text-red-400 font-medium">
                  {formik.errors.editPassword}
                </p>
              ) : (
                ""
              )}
            </div>

            <div>
              <label className="font-semibold">Phone Number</label>
              <input
                name="editNumber"
                value={formik.values.editNumber}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                type="number"
                className="w-full mt-1 border border-gray-400 rounded-md px-3 py-2  focus:ring-gray-400"
              />
              {formik.touched.editNumber && formik.errors.editNumber ? (
                <p className=" text-red-400 font-medium">
                  {formik.errors.editNumber}
                </p>
              ) : (
                ""
              )}
            </div>

            <div>
              <label className="font-semibold">Gender</label>
              <select
                name="editGender"
                value={formik.values.editGender}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className="w-full mt-1 border border-gray-400 rounded-md px-3 py-2  focus:ring-gray-400"
              >
                <option>Male</option>
                <option>Female</option>
              </select>
              {formik.touched.editGender && formik.errors.editGender ? (
                <p className=" text-red-400 font-medium">
                  {formik.errors.editGender}
                </p>
              ) : (
                ""
              )}
            </div>

            <div>
              <label className="font-semibold">Class</label>
              <select
                name="editClass"
                value={formik.values.editClass}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className="w-full mt-1 border border-gray-400 rounded-md px-3 py-2 focus:outline-none "
              >
                <option>9th</option>
                <option>10th</option>
                <option>First Year</option>
                <option>Inter</option>
              </select>
              {formik.touched.editClass && formik.errors.editClass ? (
                <p className=" text-red-400 font-medium">
                  {formik.errors.editClass}
                </p>
              ) : (
                ""
              )}
            </div>

            <div>
              <label className="font-semibold">Subject</label>
              <select
                name="editSubject"
                value={formik.values.editSubject}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className="w-full mt-1 border border-gray-400 rounded-md px-3 py-2 focus:outline-none "
              >
                <option>Science</option>
                <option>Physics</option>
                <option>English</option>
                <option>Math</option>
              </select>
              {formik.touched.editSubject && formik.errors.editSubject ? (
                <p className=" text-red-400 font-medium">
                  {formik.errors.editSubject}
                </p>
              ) : (
                ""
              )}
            </div>

            {/* submit edit form and cancel edit form */}
            <div className="laptop:col-span-3 flex justify-between items-center mt-6">
              <button
                onClick={() => setShowModal(false)}
                type="button"
                className="cursor-pointer px-5 py-2  text-white bg-gray-700 hover:bg-gray-800 rounded-lg  transition-colors text-sm font-medium"
              >
                Close
              </button>
              <button
                type="submit"
                className=" cursor-pointer px-8 py-2 rounded-md font-semibold text-white  border border-gray-400  bg-blue-600 hover:bg-blue-700"
              >
                Save Edit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default TeacherEditform;
