import React, { useState } from "react";

const StudentDetail = ({ setStudentDetail, editItem, studentData }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Dark, blurred background */}
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm"></div>

      {/* Modal content */}
      <div className="relative z-10 bg-white rounded-2xl shadow-2xl p-8 w-[90%] max-w-[550px] animate-fadeIn">
        {/* Close Button */}

        {/* Header Section */}
        <div className="flex flex-col items-center text-center space-y-1">
          <h3 className="text-sm text-gray-400 font-medium ">
            ID: {editItem.id}
          </h3>
          <h2 className="text-2xl font-semibold text-gray-800">
            {editItem.studentName}
          </h2>
          <p className="text-gray-500 text-sm mt-1">Student Profile</p>
        </div>

        {/* Divider */}
        <div className="h-[2px] bg-gray-200 my-5"></div>

        {/* Details Grid */}
        <div className="grid grid-cols-2  laptop-lg:gap-x-8  laptop-lg:gap-y-4 text-gray-800">
          <div>
            <p className="text-gray-500 text-sm">Gender</p>
            <h4 className="font-medium text-base">{editItem.studentGender}</h4>
          </div>
          <div>
            <p className="text-gray-500 text-sm">Email</p>
            <h4 className="font-medium text-base break-all">
              {editItem.studentEmail}
            </h4>
          </div>
          <div>
            <p className="text-gray-500 text-sm">Phone Number</p>
            <h4 className="font-medium text-base">{editItem.studentNumber}</h4>
          </div>
          <div>
            <p className="text-gray-500 text-sm">Class</p>
            <h4 className="font-medium text-base">{editItem.studentClass}</h4>
          </div>
        </div>

        {/* Footer (optional) */}
        <div className="mt-6 flex justify-end">
          <button
            onClick={() => setStudentDetail(false)}
            className="px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default StudentDetail;
