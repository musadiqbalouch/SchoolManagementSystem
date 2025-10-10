import React, { useState } from "react";
import { ImCross } from "react-icons/im";
import { HiOutlinePlusCircle } from "react-icons/hi2";
import e from "express";

const TeacherModal = ({ setShowModal, editItem }) => {
  const [editDesignation, setEditDesignation] = useState(
    editItem.teacherDesignation
  );
  const [editName, setEditName] = useState(editItem.teacherName);
  const [editEmail, setEditEmail] = useState(editItem.teacherEmail);
  const [editPassword, setEditPassword] = useState(editItem.teacherPassword);
  const [editNumber, setEditNumber] = useState(editItem.teacherNumber);
  const [editGender, setEditGender] = useState(editItem.teacherGender);
  const [editClass, setEditClass] = useState(editItem.teacherClassName);
  const [editSubject, setEditSubject] = useState(editItem.teacherSubject);

  console.log(editItem);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center   text-start">
      <div className={`  absolute inset-0 bg-black opacity-50 `}></div>

      {/* Modal content */}
      <div className="relative z-10  laptop:w-[550px] laptop-lg:w-[750px] bg-white text-black rounded-2xl shadow-lg laptop:p2 laptop-lg:p-6">
        <ImCross
          onClick={() => setShowModal(false)}
          className="absolute right-4 top-4 h-5 w-5 cursor-pointer text-gray-700"
        />
        <div
          className="bg-white border border-gray-400 rounded-xl shadow-md laptop:mx-10 laptop:p-3  laptop-lg:px-10 laptop-lg:m-auto laptop-lg:mt-10 laptop-lg:py-5
    mx-auto mt-10 max-w-4xl desktop:m-auto desktop:mt-10 ease-in duration-300 "
        >
          <div className="text-gray-700 mb-6">
            <h1 className="text-2xl font-bold mb-2">Add Teacher</h1>
            <div className="flex gap-6 font-medium text-gray-500">
              <h2 className="cursor-pointer hover:text-gray-700">Manually</h2>
              <h2 className="cursor-pointer hover:text-gray-700">Import CSV</h2>
            </div>
          </div>
          <form className="grid grid-cols-1 laptop:grid-cols-3 laptop-lg:grid-cols-3 desktop:grid-cols-3 gap-4 text-gray-700">
            <div>
              <label className="font-semibold">Designation</label>
              <input
                value={editDesignation}
                onChange={(e) => setEditDesignation(e.target.value)}
                type="text"
                className="w-full mt-1 border border-gray-400 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-gray-400"
                // placeholder="e.g. Senior Teacher"
              />
            </div>

            <div>
              <label className="font-semibold">Name</label>
              <input
                value={editName}
                // onChange={(e) => setEditName(e.target.value)}
                type="text"
                className="w-full mt-1 border border-gray-400 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-gray-400"
                // placeholder="e.g. Arfin Nasir"
              />
            </div>

            <div>
              <label className="font-semibold">Email</label>
              <input
                value={editEmail}
                // onChange={(e) => setEditEmail(e.target.value)}
                type="email"
                className="w-full mt-1 border border-gray-400 rounded-md px-3 py-2  focus:ring-gray-400"
                // placeholder="e.gArfinNasir@gmail.com"
              />
            </div>

            <div>
              <label className="font-semibold">Password</label>
              <input
                value={editPassword}
                // onChange={(e) => setEditPassword(e.target.value)}
                type="password"
                className="w-full mt-1 border border-gray-400 rounded-md px-3 py-2     focus:ring-gray-400"
                // placeholder="Enter password"
              />
            </div>

            <div>
              <label className="font-semibold">Phone Number</label>
              <input
                value={editNumber}
                // onChange={(e) => editNumber(e.target.value)}
                type="number"
                className="w-full mt-1 border border-gray-400 rounded-md px-3 py-2  focus:ring-gray-400"
                // placeholder="03xxxxxxxxx"
              />
            </div>

            <div>
              <label className="font-semibold">Gender</label>
              <select
                value={editGender}
                // onChange={(e) => setEditGender(e.target.value)}
                className="w-full mt-1 border border-gray-400 rounded-md px-3 py-2  focus:ring-gray-400"
              >
                <option>Male</option>
                <option>Female</option>
              </select>
            </div>

            <div>
              <label className="font-semibold">Class</label>
              <select
                value={editClass}
                // onChange={(e) => setEditClass(e.target.value)}
                className="w-full mt-1 border border-gray-400 rounded-md px-3 py-2 focus:outline-none "
              >
                <option>9th</option>
                <option>10th</option>
                <option>First Year</option>
                <option>Inter</option>
              </select>
            </div>

            <div>
              <label className="font-semibold">Subject</label>
              <select
                value={editSubject}
                // onChange={(e) => setEditSubject(e.target.value)}
                className="w-full mt-1 border border-gray-400 rounded-md px-3 py-2 focus:outline-none "
              >
                <option>Science</option>
                <option>Physics</option>
                <option>English</option>
                <option>Math</option>
              </select>
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
                type="submit"
                className="px-8 py-2 rounded-md font-semibold text-black bg-gray-300 border border-gray-400 hover:bg-gray-400"
              >
                Save Edit
              </button>
            </div>
          </form>
        </div>
        ;
      </div>
    </div>
  );
};

export default TeacherModal;
