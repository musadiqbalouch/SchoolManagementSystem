import React from "react";
import { ImCross } from "react-icons/im";
import { HiOutlinePlusCircle } from "react-icons/hi2";

const StudentModal = ({ setModal }) => {
  return (
    <div>
      <div className="fixed inset-0 z-50 flex items-center justify-center   text-start">
        <div className="absolute inset-0 bg-black opacity-50 "></div>

        {/* Modal content */}
        <div className="relative z-10  laptop:w-[550px] laptop-lg:w-[750px] bg-white text-black rounded-2xl shadow-lg laptop:p2 laptop-lg:p-6">
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

            <form className="grid grid-cols-1 laptop:grid-cols-2 laptop-lg:grid-cols-2 desktop:grid-cols-2 gap-6 text-gray-700">
              <label className="flex flex-col font-medium">
                Name
                <input
                  type="text"
                  className="border border-gray-400 rounded-md px-3 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-gray-500"
                  placeholder="Enter full name"
                />
              </label>

              <label className="flex flex-col font-medium">
                Class
                <select className="border border-gray-400 rounded-md px-3 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-gray-500">
                  <option value="">Select class</option>
                  <option>9th</option>
                  <option>10th</option>
                  <option>First Year</option>
                  <option>Second Year</option>
                </select>
              </label>

              <label className="flex flex-col font-medium">
                Gender
                <select className="border border-gray-400 rounded-md px-3 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-gray-500">
                  <option value="">Select gender</option>
                  <option>Male</option>
                  <option>Female</option>
                </select>
              </label>

              <label className="flex flex-col font-medium">
                Email
                <input
                  type="email"
                  className="border border-gray-400 rounded-md px-3 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-gray-500"
                  placeholder="Enter email"
                />
              </label>

              <label className="flex flex-col font-medium">
                Phone Number
                <input
                  type="number"
                  className="border border-gray-400 rounded-md px-3 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-gray-500"
                  placeholder="03XXXXXXXXX"
                />
              </label>

              <label className="flex flex-col font-medium">
                Password
                <input
                  type="password"
                  className="border border-gray-400 rounded-md px-3 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-gray-500"
                  placeholder="Create password"
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
                  Add Student
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
