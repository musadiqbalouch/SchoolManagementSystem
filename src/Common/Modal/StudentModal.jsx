import React, { useEffect, useState } from "react";
import { ImCross } from "react-icons/im";
import { HiOutlinePlusCircle } from "react-icons/hi2";
import { CgSlack } from "react-icons/cg";

const StudentModal = ({ setModal, editItem }) => {
  const [editName, setEditName] = useState(editItem.studentName);
  const [editClass, setEditClass] = useState(editItem.studentClass);
  const [editGenger, setEditGender] = useState(editItem.studentGender);
  const [editEmail, setEditEmail] = useState(editItem.studentEmail);
  const [editPassword, setEditPassword] = useState(editItem.studentPassword);
  const [editNumber, setEditNumber] = useState(editItem.studentNumber);

  // let items = JSON.parse(localStorage.getItem("students")) || [];

  const [items, setItems] = useState(
    JSON.parse(localStorage.getItem("students")) || []
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    const editdata = {
      id: editItem.id,
      studentName: editName,
      studentClass: editClass,
      studentGender: editGenger,
      studentEmail: editEmail,
      studentPassword: editPassword,
      studentNumber: editNumber,
    };

    const updatedStudents = items.map((student) =>
      student.id === editdata.id ? editdata : student
    );
    let data = localStorage.setItem(
      "students",
      JSON.stringify(updatedStudents)
    );
    setItems(data);
    setModal(false);
  };
  useEffect(() => {}, [items]);
  return (
    <div>
      <div className="fixed inset-0 z-50 flex items-center justify-center   text-start">
        <div className="absolute inset-0 bg-black opacity-50 "></div>

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
              onSubmit={handleSubmit}
              className="grid grid-cols-1 laptop:grid-cols-2 laptop-lg:grid-cols-2 desktop:grid-cols-2 gap-6 text-gray-700"
            >
              <label className="flex flex-col font-medium">
                Name
                <input
                  value={editName}
                  onChange={(e) => setEditName(e.target.value)}
                  type="text"
                  className="border border-gray-400 rounded-md px-3 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-gray-500"
                  placeholder=""
                />
              </label>

              <label className="flex flex-col font-medium">
                Class
                <select
                  onChange={(e) => setEditClass(e.target.value)}
                  value={editClass}
                  className="border border-gray-400 rounded-md px-3 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-gray-500"
                >
                  <option>9th</option>
                  <option>10th</option>
                  <option>First Year</option>
                  <option>Second Year</option>
                </select>
              </label>

              <label className="flex flex-col font-medium">
                Gender
                <select
                  value={editGenger}
                  onChange={(e) => setEditGender(e.target.value)}
                  className="border border-gray-400 rounded-md px-3 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-gray-500"
                >
                  <option>Male</option>
                  <option>Female</option>
                </select>
              </label>

              <label className="flex flex-col font-medium">
                Email
                <input
                  type="email"
                  value={editEmail}
                  onChange={(e) => setEditEmail(e.target.value)}
                  className="border border-gray-400 rounded-md px-3 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-gray-500"
                  placeholder=""
                />
              </label>

              <label className="flex flex-col font-medium">
                Phone Number
                <input
                  value={editNumber}
                  onChange={(e) => setEditNumber(e.target.value)}
                  type="number"
                  className="border border-gray-400 rounded-md px-3 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-gray-500"
                  placeholder=""
                />
              </label>

              <label className="flex flex-col font-medium">
                Password
                <input
                  value={editPassword}
                  onChange={(e) => setEditPassword(e.target.value)}
                  type="password"
                  className="border border-gray-400 rounded-md px-3 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-gray-500"
                  placeholder=""
                />
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
