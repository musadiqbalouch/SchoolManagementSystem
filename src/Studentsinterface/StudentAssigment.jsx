// StudentPanel.jsx
import React, { useEffect, useState } from "react";

const StudentAssigment = ({ loggedInStudent }) => {
  const [task, setTask] = useState([]);
  const [selected, setSelected] = useState(null);
  const [submittedList, setSubmittedList] = useState([]);
  const studentAssignments =
    JSON.parse(localStorage.getItem("studentAsignment")) || [];
  let submittedAssignments =
    JSON.parse(localStorage.getItem("submittedAssighment")) || [];

  // Match assignment from student's teacher
  const matchedAssignment = studentAssignments.filter((assi) =>
    assi.data.some((dta) => dta.teacherId === loggedInStudent?.teacherid)
  );

  const handleTextareaChange = (e, index) => {
    const newTasks = [...task];
    newTasks[index] = e.target.value;
    setTask(newTasks);
  };

  const studentAssignmentSubmit = (index) => {
    const submittedAssigment = {
      studentName: loggedInStudent.registeredStudentName,
      studentId: loggedInStudent.registeredStudentId,
      teacherId: loggedInStudent.teacherid,
      assigmentsubmitted: task[index],
      isSubmitted: true,
    };
    if (submittedAssigment.isSubmitted === true) {
      setSelected(index);
    }

    submittedAssignments.push(submittedAssigment);
    localStorage.setItem(
      "submittedAssighment",
      JSON.stringify(submittedAssignments)
    );

    // setSelected(index);
    setTask([]);
  };

  return (
    <div className="flex flex-col gap-6 max-w-4xl mx-auto mt-10">
      {matchedAssignment.length > 0 ? (
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
              onClick={() => studentAssignmentSubmit(index)}
              className={`w-full ${
                selected === index ? "bg-green-600" : "bg-blue-600"
              } hover:bg-blue-700 text-white font-medium py-2 rounded-lg transition duration-200`}
            >
              {selected === true ? "Submitted" : "Submit"}
            </button>
          </div>
        ))
      ) : (
        <p className="text-gray-500 text-center py-3">
          No assignment available
        </p>
      )}
    </div>
  );
};

export default StudentAssigment;

// const addMarks = (marks) => {
//   if (marks >= 90) {
//     console.log("a");
//   } else if (marks >= 80) {
//     console.log("b");
//   } else if (marks >= 70) {
//     console.log("c");
//   } else if (marks >= 60) console.log("d");
//   else if (marks >= 50) {
//     console.log("e");
//   } else {
//     console.log("f");
//   }
// };
