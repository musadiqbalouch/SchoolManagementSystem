// StudentPanel.jsx
import React, { useEffect, useState } from "react";
import Paginatation from "../Common/Paginatation/Paginatation";

const StudentAssigment = () => {
  const [task, setTask] = useState([]);
  const [selected, setSelected] = useState(null);
  const [submittedList, setSubmittedList] = useState([]);

  const [currentPage, setCurrentPage] = useState(1);
  const [dataPerPage, setDataPerPage] = useState(1);

  const lastPostIndex = currentPage * dataPerPage;
  const firstPostIndex = lastPostIndex - dataPerPage;
  // const currentAssigment=filteredAssignments.slice(firstPostIndex,lastPostIndex)

  let submittedAssignments =
    JSON.parse(localStorage.getItem("submittedAssighment")) || [];

  const studentAssignments =
    JSON.parse(localStorage.getItem("studentAsignment")) || [];

  const RegistredStudent =
    JSON.parse(localStorage.getItem("registredStudent")) || [];

  const loggedInStudent =
    JSON.parse(localStorage.getItem("loggedInStudent")) || {};

  const currentStudent = RegistredStudent.find(
    (std) => std.studentid === loggedInStudent.registeredStudentId
  );
  // console.log("🚀 ~ StudentAssigment ~ currentStudent:", currentStudent);

  const filteredAssignments = studentAssignments.filter(
    (std) =>
      std.teacherID === currentStudent?.teacherid &&
      currentStudent.subjects.includes(std.subject)
  );

  const currentAssigment = filteredAssignments.slice(
    firstPostIndex,
    lastPostIndex
  );

  // console.log(filteredAssignments);

  // Match assignment from student's teacher
  // const matchedAssignment = studentAssignments.filter((assi) =>
  //   assi.data.some((dta) => dta.teacherId === loggedInStudent?.teacherid)
  // );

  const handleTextareaChange = (e, index) => {
    const newTasks = [...task];
    newTasks[index] = e.target.value;
    setTask(newTasks);
  };

  const studentAssignmentSubmit = (index) => {
    const matchedAssignment = filteredAssignments[index];
    const submittedAssigment = {
      studentName: loggedInStudent.registeredStudentName,
      studentId: loggedInStudent.registeredStudentId,
      teacherId: matchedAssignment.teacherID,
      // subject: filteredAssignments.subject,
      assigmentsubmitted: task[index],
      isSubmitted: true,
      subject: matchedAssignment.subject,
      work: matchedAssignment.work,
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
    <div className="flex flex-col gap-4 max-w-4xl mx-auto mt10">
      {currentAssigment?.length > 0 ? (
        currentAssigment?.map((matched, index) => (
          <>
            <div
              key={index}
              className="w-full bg-blue-50 text-blue-900 rounded-xl border border-blue-200 p-5 space-y-3 shadow-sm hover:shadow-md transition-all"
            >
              <h1 className="text-xl font-semibold text-blue-800">
                New Assignment #{index + 1}
              </h1>
              <h2>{matched.subject}</h2>

              <p className="text-gray-800 bg-white rounded-lg p-3 border border-blue-100 shadow-inner">
                {matched.work}
              </p>

              <textarea
                className="w-full min-h-[100px] bg-white text-gray-800 placeholder-gray-500 rounded-lg p-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 resize-y"
                placeholder="Enter your answer..."
                value={task[index] || ""}
                onChange={(e) => handleTextareaChange(e, index)}
              ></textarea>

              <button
                onClick={() => studentAssignmentSubmit(index)}
                className={`w-full ${
                  selected === index ? "bg-green-600" : "bg-blue-600"
                } hover:bg-blue-700 text-white  font-medium py-2 rounded-lg transition duration-200 cursor-pointer`}
              >
                {selected === true ? "Submitted" : "Submit"}
              </button>
            </div>
            <Paginatation
              totalPages={studentAssignments.length}
              postPerPage={dataPerPage}
              setCurrentPage={setCurrentPage}
              currentPage={currentPage}
            />
          </>
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
