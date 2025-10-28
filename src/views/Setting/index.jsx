import React, { useState } from "react";
import { CgNametag } from "react-icons/cg";

const index = () => {
  const [assignment, setAssignment] = useState("");
  const loggedInTeacher = JSON.parse(localStorage.getItem("loggedInUser"));
  const student = JSON.parse(localStorage.getItem("students"));

  // let same = student.filter((std) => std.teacherId === loggedInTeacher.id);
  const submitAssigment = () => {
    let same = student.filter((std) => std.teacherId === loggedInTeacher.id);
    let homeWork = JSON.parse(localStorage.getItem("studentAsignment")) || [];
    console.log("🚀 ~ submitAssigment ~ homeWork:", homeWork);

    const assi = {
      data: same,
      work: assignment,
    };
    homeWork.push(assi);
    setAssignment("");
    localStorage.setItem("studentAsignment", JSON.stringify(homeWork));
  };

  return (
    <div>
      <div className="p-6 bg-gray-50 min-h-screen">
        <h1 className="text-2xl font-bold text-gray-800 mb-6">
          Assign Homework / Assignment
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          <div className="bg-white shadow-md rounded-lg p-5 border border-gray-200 flex flex-col justify-between">
            {/* Assignment Input Section */}
            <div>
              <textarea
                value={assignment}
                className="w-full border border-gray-300 rounded-md p-2 text-sm focus:outline-none focus:ring focus:ring-blue-200"
                placeholder="Write assignment details here..."
                onChange={(e) => setAssignment(e.target.value)}
              ></textarea>

              <button
                onClick={submitAssigment}
                className="mt-3 w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-md text-sm font-medium transition-all"
              >
                Assign
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
