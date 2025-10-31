// TeacherPanel.jsx
import React, { useState } from "react";

const TeacherAsignAssignment = ({ loggedInTeacher }) => {
  const [assignment, setAssignment] = useState("");

  const students = JSON.parse(localStorage.getItem("students")) || [];
  const submittedAssignments =
    JSON.parse(localStorage.getItem("submittedAssighment")) || [];

  // Filter assignments submitted to this teacher
  const filteredAssignments = submittedAssignments.filter(
    (detail) => detail.teacherId === loggedInTeacher?.id
  );

  // Assign homework
  const submitAssignment = () => {
    const same = students.filter((std) => std.teacherId === loggedInTeacher.id);
    const homeWork = JSON.parse(localStorage.getItem("studentAsignment")) || [];

    const assi = {
      data: same,
      work: assignment,
      isSubmitted: false,
    };
    homeWork.push(assi);

    localStorage.setItem("studentAsignment", JSON.stringify(homeWork));
    setAssignment("");
  };

  return (
    <div className="flex flex-col gap-8 max-w-5xl mx-auto">
      {/* Assignment Form */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
        <h1 className="text-2xl font-semibold text-gray-800 mb-4">
          Assign Homework / Assignment
        </h1>
        <textarea
          value={assignment}
          onChange={(e) => setAssignment(e.target.value)}
          className="w-full h-32 border border-gray-300 rounded-lg p-3 text-gray-700 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400 resize-none"
          placeholder="Write assignment details here..."
        ></textarea>
        <button
          onClick={submitAssignment}
          className="mt-4 w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg font-medium transition-all"
        >
          Assign
        </button>
      </div>

      {/* Submitted Assignments */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">
          Submitted Assignments
        </h2>

        {filteredAssignments.length > 0 ? (
          <div className="space-y-4">
            {filteredAssignments.map((fil, index) => (
              <div
                key={index}
                className="border border-gray-100 rounded-lg p-4 bg-gray-50 hover:bg-gray-100 transition-all"
              >
                <h1 className="font-medium text-gray-900">{fil.studentName}</h1>
                <p className="text-gray-700 text-sm mt-1">
                  {fil.assigmentsubmitted}
                </p>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-gray-500 text-center py-3">No submissions yet.</p>
        )}
      </div>
    </div>
  );
};

export default TeacherAsignAssignment;
