import React from "react";

const AttendanceModal = ({ setShowModal }) => {
  const loggedInStudent = JSON.parse(localStorage.getItem("loggedInStudent"));
  const registredStudent =
    JSON.parse(localStorage.getItem("registredStudent")) || [];

  const student = registredStudent.find(
    (std) =>
      std.studentid === loggedInStudent.registeredStudentId &&
      std.studentName === loggedInStudent.registeredStudentName
  );
  // console.log("🚀 ~ AttendanceModal ~ student:", student);
  return (
    <div className="bg-white flex flex-col items-center   justify-center py-2 px-5 rounded-md">
      <div>
        <h2 className="text-center text-xl font-medium border-b-2">
          Attendance Details
        </h2>
        <div className="flex gap-5  ">
          {student?.attendance.map((std, index) => (
            <div
              key={index}
              className="flex items-center justify-between gap-2 mt-2 mb-2 bg-[#F3F7FF] border border-[#D0E3FF] shadow-sm rounded-lg py-2 px-3 hover:bg-[#E8F1FF] transition-all duration-200"
            >
              <h3>{std.date}</h3>
              <h3>{std.subject}</h3>
              <h3
                className={`${std.marked === "present" ? "bg-green-500 px-3 rounded-sm text-white font-medium py-1   " : "bg-red-500 px-3 rounded-sm text-white font-medium py-1"}`}
              >
                {std.marked}
              </h3>
            </div>
          ))}
        </div>
      </div>
      <button
        className="bg-blue-600 px-3 text-white font-medium rounded-md py-1  mt-2 cursor-pointer"
        onClick={() => setShowModal(false)}
      >
        Close
      </button>
    </div>
  );
};

export default AttendanceModal;
