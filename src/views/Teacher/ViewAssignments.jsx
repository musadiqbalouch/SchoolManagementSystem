import React, { useState } from "react";
import Paginatation from "../../Common/Paginatation/Paginatation";
import { Link } from "react-router-dom";

const ViewAssignments = () => {
  const loggedInTeacher =
    JSON.parse(localStorage.getItem("loggedInUser")) || [];

  const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser")) || [];
  const submittedAssignments =
    JSON.parse(localStorage.getItem("submittedAssighment")) || [];

  const [currentPage, setCurrentPage] = useState(1);
  const [dataPerPage, setDataPerPage] = useState(5);

  const lastPostIndex = currentPage * dataPerPage;
  const firstPostIndex = lastPostIndex - dataPerPage;

  const filteredAssignments = submittedAssignments.filter(
    (id) => id.teacherId === loggedInTeacher?.id
  );

  let teacher = JSON.parse(localStorage.getItem("teacher")) || [];
  const filteredTeacher = teacher.find(
    (tch) =>
      tch.id === loggedInUser.id && tch.teacherName === loggedInUser.userName
  );
  const currentPost = filteredAssignments.slice(firstPostIndex, lastPostIndex);

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 max-w-5xl mx-auto mt-10">
      <h2 className="text-2xl font-semibold text-gray-800 mb-6 border-b border-gray-200 pb-2">
        Submitted Assignments
      </h2>

      {currentPost.length > 0 ? (
        <div className="space-y-5">
          {currentPost.map((fil, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-xl p-5 bg-gray-50 hover:bg-gray-100 shadow-sm transition-all duration-200"
            >
              <h1 className="font-semibold text-gray-900 text-lg mb-1">
                {fil.studentName.charAt(0).toUpperCase() +
                  fil.studentName.slice(1).toLowerCase()}
              </h1>
              <h2 className="text-gray-700 text-sm mb-1">
                <span className="font-medium text-gray-800">Subject:</span>{" "}
                {fil.subject}
              </h2>
              <p className="text-gray-800 text-sm mb-2">
                <span className="font-medium text-gray-900">Question:</span>{" "}
                {fil.work}
              </p>
              <p className="text-gray-700 text-sm">
                <span className="font-medium text-gray-900">Answer:</span>{" "}
                {fil.assigmentsubmitted}
              </p>
            </div>
          ))}

          <div className="pt-4">
            <Paginatation
              totalPages={filteredAssignments.length}
              postPerPage={dataPerPage}
              setCurrentPage={setCurrentPage}
              currentPage={currentPage}
            />
          </div>
        </div>
      ) : (
        <p className="text-gray-500 text-center py-6 text-base">
          No submissions yet.
        </p>
      )}

      <div className="flex justify-end mt-6">
        <Link
          to={"/assignment"}
          className="bg-[#2671B1] hover:bg-[#1f5f96] text-white py-2 px-5 rounded-lg font-medium transition-all duration-200"
        >
          ← Back
        </Link>
      </div>
    </div>
  );
};

export default ViewAssignments;
