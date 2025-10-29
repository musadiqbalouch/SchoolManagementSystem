import React, { useState } from "react";
import { CgNametag } from "react-icons/cg";

const Index = () => {
  const [assignment, setAssignment] = useState("");
  const loggedInTeacher = JSON.parse(localStorage.getItem("loggedInUser"));
  let studentAsignment =
    JSON.parse(localStorage.getItem("studentAsignment")) || [];
  let studentLoggedIn =
    JSON.parse(localStorage.getItem("loggedInStudent")) || [];
  const student = JSON.parse(localStorage.getItem("students"));
  let submit = JSON.parse(localStorage.getItem("submittedAssighment")) || [];
  const [task, setTask] = useState([]);

  // showing student assignment to teacher
  const filteredAssigment = submit.filter(
    (detail) => detail.teacherId === loggedInTeacher?.id
  );

  const handleTextareaChange = (e, index) => {
    const newTasks = [...task];
    newTasks[index] = e.target.value;
    setTask(newTasks);
  };

  const submitAssigment = () => {
    let same = student.filter((std) => std.teacherId === loggedInTeacher?.id);
    let homeWork = JSON.parse(localStorage.getItem("studentAsignment")) || [];

    const assi = {
      data: same,
      work: assignment,
    };
    homeWork.push(assi);
    setAssignment("");
    localStorage.setItem("studentAsignment", JSON.stringify(homeWork));
  };

  let loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));

  // assigning assignment to student
  const matchedAssignment = studentAsignment.filter((assi) =>
    assi.data.some((dta) => dta.teacherId === studentLoggedIn.teacherid)
  );

  const studentAssignmentSubmit = () => {
    const submittedAssigment = {
      studentName: studentLoggedIn.registeredStudentName,
      studentId: studentLoggedIn.registeredStudentId,
      teacherId: studentLoggedIn.teacherid,
      assigmentsubmitted: task,
    };

    submit.push(submittedAssigment);
    localStorage.setItem("submittedAssighment", JSON.stringify(submit));

    setTask("");
  };

  return (
    <div className="p-8 bg-gray-100 w-full">
      {loggedInUser.userName === "admin" ? (
        "" // agar admin hai to kuch mat dikhao
      ) : loggedInUser ? (
        // ================= TEACHER VIEW =================
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
              onClick={submitAssigment}
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

            {filteredAssigment.length > 0 ? (
              <div className="space-y-4">
                {filteredAssigment.map((fil, index) => (
                  <div
                    key={index}
                    className="border border-gray-100 rounded-lg p-4 bg-gray-50 hover:bg-gray-100 transition-all"
                  >
                    <h1 className="font-medium text-gray-900">
                      {fil.studentName}
                    </h1>
                    <p className="text-gray-700 text-sm mt-1">
                      {fil.assigmentsubmitted}
                    </p>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-gray-500 text-center py-3">
                No submissions yet.
              </p>
            )}
          </div>
        </div>
      ) : (
        // ================= STUDENT VIEW =================
        <div className="flex flex-row w-full items-center justify-start gap-2 mx-auto bg-white text-gray-900 rounded-2xl shadow-md p-6 space-y-5 mt-12 border border-gray-200">
          {matchedAssignment && matchedAssignment.length > 0 ? (
            matchedAssignment.map((matched, index) => (
              <div
                key={index}
                className="w-full bg-blue-50 text-blue-900 rounded-xl border border-blue-200 p-5 space-y-3 shadow-sm hover:shadow-md transition-all"
              >
                <h1 className="text-xl font-semibold text-blue-800">
                  New Assignment #{index + 1}
                </h1>

                <p className="text-gray-800 bg-white rounded-lg p-3 border border-blue-100 shadow-inner">
                  {matched.work}
                </p>

                <textarea
                  className="w-full min-h-[100px] bg-white text-gray-800 placeholder-gray-500 rounded-lg p-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 resize-y"
                  placeholder="Enter your response..."
                  value={task[index] || ""}
                  onChange={(e) => handleTextareaChange(e, index)}
                ></textarea>

                <button
                  onClick={studentAssignmentSubmit}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 rounded-lg transition duration-200"
                >
                  Submit
                </button>
              </div>
            ))
          ) : (
            <p className="text-gray-500 text-center py-3">
              No assignment available
            </p>
          )}
        </div>
      )}
    </div>
  );
};

export default Index;
