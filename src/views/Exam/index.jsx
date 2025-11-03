import React, { useState } from "react";
import Paginatation from "../../Common/Paginatation/Paginatation";

const Exam = () => {
  const students = JSON.parse(localStorage.getItem("students")) || [];
  const teacher = JSON.parse(localStorage.getItem("loggedInUser")) || [];

  const [marks, setMarks] = useState([]);
  const filter = students.filter((std) => std.teacherId === teacher.id);

  const [currentPage, setCurrentPage] = useState(1);
  const [studentPerPage, setStudentPerPage] = useState(4);

  const lastPostIndex = currentPage * studentPerPage;
  const firstPostIndex = lastPostIndex - studentPerPage;
  const currentPost = filter.slice(firstPostIndex, lastPostIndex);

  const markss = (e, index) => {
    const newMarks = [...marks];
    newMarks[index] = e.target.value;
    setMarks(newMarks);
  };

  const updateMarks = (index) => {
    let addMarks = students.find(
      (s) => s.studentEmail === filter[index].studentEmail
    );

    addMarks.marks = marks[index] || "0";
    if (addMarks.marks >= 90) {
      addMarks.grade = "A+";
    } else if (addMarks.marks >= 85) {
      addMarks.grade = "A";
    } else if (addMarks.marks >= 80) {
      addMarks.grade = "B+";
    } else if (addMarks.marks >= 75) {
      addMarks.grade = "B";
    } else if (addMarks.marks >= 70) {
      addMarks.grade = "C+";
    } else if (addMarks.marks >= 65) {
      addMarks.grade = "C";
    } else if (addMarks.marks >= 60) {
      addMarks.grade = "D+";
    } else if (addMarks.marks >= 50) {
      addMarks.grade = "D";
    } else {
      addMarks.grade = "F";
    }
    localStorage.setItem("students", JSON.stringify(students));
    setMarks([]);
  };
  return (
    <div className=" bg-[#1B2A55] flex flex-col items-center justify-center p-6">
      {teacher ? (
        <>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 w-full max-w-6xl">
            {currentPost.map((student, index) => (
              <div
                key={index}
                className="bg-[#f8fafc] rounded-xl border border-[#27426B]/30 shadow-md hover:shadow-lg transition-all duration-300 p-5 space-y-3"
              >
                <div>
                  <h1 className="text-xl font-semibold text-[#152259]">
                    {student.studentName}
                  </h1>
                  <p className="text-gray-700 font-medium">
                    Class: {student.studentClass}
                  </p>
                  <p className="text-gray-600 text-sm">
                    {student.studentEmail}
                  </p>
                </div>

                <div className="flex items-center gap-3 mt-2">
                  <input
                    className="flex-1 border-2 border-[#152259]/30 rounded-md px-2 py-1 placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-[#152259] transition-all"
                    type="number"
                    value={marks[firstPostIndex + index] || ""}
                    onChange={(e) => markss(e, firstPostIndex + index)}
                    placeholder="Add Marks"
                  />
                  <button
                    className="bg-[#152259] hover:bg-[#1f2f68] text-white font-medium px-3 py-1 rounded-md transition-all duration-200"
                    onClick={() => updateMarks(firstPostIndex + index)}
                  >
                    Add
                  </button>
                </div>
              </div>
            ))}
          </div>
          {filter.length > 4 ? (
            <Paginatation
              totalPages={filter.length}
              postPerPage={studentPerPage}
              setCurrentPage={setCurrentPage}
              currentPage={currentPage}
            />
          ) : (
            ""
          )}
        </>
      ) : (
        ""
      )}
    </div>
  );
};

export default Exam;
