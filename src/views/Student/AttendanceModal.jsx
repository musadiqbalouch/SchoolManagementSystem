import React from "react";

const AttendanceModal = ({
  setAttendance,
  attvalue,
  currentPost,
  setStudentData,
}) => {
  const handleAttendane = (status) => {
    const today = new Date().toLocaleDateString();
    let allStudent = [...currentPost];
    let index = allStudent.findIndex(
      (std) => std.studentId === attvalue.studentId
    );
    allStudent[index].attendance.push({ date: today, status: status });
    localStorage.setItem("students", JSON.stringify(allStudent));
    setStudentData(allStudent);
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 w-96 flex flex-col items-center text-center">
      <h2 className="text-2xl font-semibold text-gray-800 mb-3">
        Mark Attendance
      </h2>

      <h3 className="text-lg font-medium text-blue-600 mb-4">
        {attvalue.studentName}
      </h3>

      <div className="flex flex-col items-center gap-4 w-full">
        <select
          className="w-3/4 p-2 border border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          onChange={(e) => handleAttendane(e.target.value)}
          // defaultValue={"Absent"}
        >
          <option>Select</option>
          <option value="Present">Present</option>
          <option value="Absent">Absent</option>
        </select>

        <div className="flex justify-center gap-3 mt-2">
          <button
            onClick={() => setAttendance(false)}
            className="bg-blue-600 text-white px-5 py-2 rounded-md hover:bg-blue-700 transition"
          >
            Save
          </button>
          <button
            onClick={() => setAttendance(false)}
            className="bg-gray-400 text-white px-5 py-2 rounded-md hover:bg-gray-500 transition"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default AttendanceModal;
