import React from "react";

const TeacherDetail = ({ setTeacherDetail, editItem }) => {
  return (
    <div>
      <div className="fixed inset-0 z-50 flex items-center justify-center">
        <div className="absolute inset-0 bg-black/40 backdrop-blur-sm"></div>

        {/* detail of user */}
        <div className="relative z-10 bg-white rounded-2xl shadow-2xl p-8 w-[90%] max-w-[550px] animate-fadeIn">
          {/* Header Section */}
          <div className="flex flex-col items-center text-center space-y-1">
            <h3 className="text-sm text-gray-400 font-medium ">
              ID:{editItem.id}
            </h3>
            <h2 className="text-2xl font-semibold text-gray-800">
              {editItem.teacherName}
            </h2>
            <p className="text-gray-500 text-sm mt-1">Teacher Profile</p>
          </div>

          {/* Divider */}
          <div className="h-[2px] bg-gray-200 my-5"></div>

          {/* Details Grid */}
          <div className="grid grid-cols-2  laptop-lg:gap-x-8  laptop-lg:gap-y-4 text-gray-800">
            <div>
              <p className="text-gray-500 text-sm">Designation</p>
              <h4 className="font-medium text-base">
                {editItem.teacherDesignation}
              </h4>
            </div>
            <div>
              <p className="text-gray-500 text-sm">Email</p>
              <h4 className="font-medium text-base break-all">
                {editItem.teacherEmail}
              </h4>
            </div>
            <div>
              <p className="text-gray-500 text-sm">Gender</p>
              <h4 className="font-medium text-base">
                {editItem.teacherGender}
              </h4>
            </div>
            <div>
              <p className="text-gray-500 text-sm">Phone Number</p>
              <h4 className="font-medium text-base">
                {editItem.teacherNumber}
              </h4>
            </div>
            <div>
              <p className="text-gray-500 text-sm">Class</p>
              <h4 className="font-medium text-base">
                {editItem.teacherClassName}
              </h4>
            </div>
            <div>
              <p className="text-gray-500 text-sm">Subject</p>
              <h4 className="font-medium text-base">
                {editItem.teacherSubject}
              </h4>
            </div>
          </div>

          {/* Footer (optional) */}
          <div className="mt-6 flex justify-end">
            <button
              onClick={() => setTeacherDetail(false)}
              className=" cursor-pointer px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeacherDetail;
