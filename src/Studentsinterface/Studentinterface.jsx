import React, { useState } from "react";

const Studentinterface = () => {
  let [num, setNum] = useState(0);
  let totalDays = 30;

  let studentLoggedIn =
    JSON.parse(localStorage.getItem("loggedInStudent")) || [];
  let student = JSON.parse(localStorage.getItem("students")) || [];
  let studentAsignment =
    JSON.parse(localStorage.getItem("studentAsignment")) || [];

  let xxx = student.find(
    (std) => std.studentId === studentLoggedIn.registeredStudentId
  );

  // const items = teacher.find((tch) => tch.id === xxx.teacherId);
  let details = xxx.attendance.map((att) => att.status);

  // filtering only present
  let presentCount = details.filter((status) => status === "Present").length;
  // calculating percentage
  let avg = Math.floor((presentCount / totalDays) * 100);

  const matchedAssignment = studentAsignment.find((assi) =>
    assi.data.some((dta) => dta.teacherId === studentLoggedIn.teacherid)
  );

  // agar mila to uska homework print karo
  if (matchedAssignment) {
    console.log("🚀 ~ Homework:", matchedAssignment.work);
  } else {
    console.log("No homework found for this student.");
  }

  return (
    <div className=" bg-gray-50 font-sans">
      {/* ===== Top Bar ===== */}
      <header className="bg-white shadow-sm px-6 py-4 flex justify-between items-center">
        <h1 className="text-xl font-semibold text-gray-800">
          Welcome back,{" "}
          <span className="text-indigo-600">
            {studentLoggedIn.registeredStudentName}
          </span>{" "}
          👋
        </h1>
        <div className="flex items-center gap-4">
          <button className="relative p-2 rounded-full bg-gray-100 hover:bg-gray-200">
            🔔
            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs w-4 h-4 rounded-full flex items-center justify-center">
              2
            </span>
          </button>
          <div className="flex items-center bg-gray-100 px-3 py-1 rounded-full">
            {/* <div className="h-8 w-8 rounded-full bg-indigo-200 flex items-center justify-center text-indigo-700 font-semibold mr-2">
              AK
            </div> */}
            <div>
              <p className="text-sm font-medium text-gray-700">
                {studentLoggedIn.registeredStudentName}
              </p>
              <p className="text-xs text-gray-500">{xxx.studentClass}</p>
            </div>
          </div>
        </div>
      </header>

      {/* ===== Main Content (Row Layout) ===== */}
      <main className="max-w-7xl mx-auto p-6 flex flex-col lg:flex-row gap-6">
        {/* ===== Left: Summary Cards ===== */}
        <section className="flex-1 flex flex-col justify-between gap-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-4">
            <div className="bg-[#777C6D] p-4 rounded-2xl shadow-sm">
              <p className="text-white text-sm">Attendance</p>
              <h3 className="text-2xl font-semibold text-white mt-1">{avg}%</h3>
              <p className="text-xs text-white mt-1">This month</p>
            </div>
            <div className="bg-[#777C6D] p-4 rounded-2xl shadow-sm">
              <p className="text-white text-sm">Average Grade</p>
              <h3 className="text-2xl font-semibold text-white">B+</h3>
              <p className="text-xs text-white mt-1">Current term</p>
            </div>
            <div className="bg-[#777C6D] p-4 rounded-2xl shadow-sm">
              <p className="text-white text-sm">Pending Assignments</p>
              <h3 className="text-2xl font-semibold text-white mt-1">3</h3>
              <p className="text-xs text-white mt-1">Due this week</p>
            </div>
            <div className="bg-[#777C6D] p-4 rounded-2xl shadow-sm">
              <p className="text-white text-sm">Upcoming Exams</p>
              <h3 className="text-2xl font-semibold text-white mt-1">1</h3>
              <p className="text-xs text-white mt-1">Next Monday</p>
            </div>
          </div>

          {/* ===== Today’s Schedule ===== */}
          <div className="bg-white p-5 rounded-2xl shadow-sm">
            <div className="flex justify-between items-center mb-3">
              <h2 className="text-lg font-medium text-gray-800">
                Today's Schedule
              </h2>
              <p className="text-sm text-indigo-600 cursor-pointer">
                View full timetable
              </p>
            </div>
            <table className="w-full text-left border-t border-gray-100">
              <thead>
                <tr className="text-gray-400 text-xs uppercase">
                  <th className="py-2">Time</th>
                  <th className="py-2">Subject</th>
                  <th className="py-2">Teacher</th>
                  <th className="py-2">Room</th>
                </tr>
              </thead>
              <tbody className="text-sm text-gray-700">
                <tr className="border-t">
                  <td className="py-2">8:00 - 8:45</td>
                  <td>Mathematics</td>
                  <td>Mr. Ahmed</td>
                  <td>R-101</td>
                </tr>
                <tr className="border-t">
                  <td className="py-2">8:50 - 9:35</td>
                  <td>Physics</td>
                  <td>Mrs. Noor</td>
                  <td>R-102</td>
                </tr>
                <tr className="border-t">
                  <td className="py-2">9:45 - 10:30</td>
                  <td>English</td>
                  <td>Ms. Iqra</td>
                  <td>R-201</td>
                </tr>
                <tr className="border-t">
                  <td className="py-2">10:45 - 11:30</td>
                  <td>Computer</td>
                  <td>Mr. Bilal</td>
                  <td>Lab-1</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* ===== Right: Notifications ===== */}
        <aside className="w-full lg:w-1/3 flex flex-col gap-6">
          <div className="bg-white p-5 rounded-2xl shadow-sm">
            <h2 className="text-lg font-medium text-gray-800 mb-3">
              Recent Notifications
            </h2>
            <ul className="space-y-3 text-sm text-gray-700">
              <li className="border-b pb-2">
                📢 Math quiz on Friday (Chapter 5)
                <p className="text-xs text-gray-400">2 hours ago</p>
              </li>
              <li className="border-b pb-2">
                📝 New assignment uploaded: History Project
                <p className="text-xs text-gray-400">1 day ago</p>
              </li>
              <li>
                🏫 Parent-Teacher Meeting on 20 Nov (Main Hall)
                <p className="text-xs text-gray-400">3 days ago</p>
              </li>
            </ul>
          </div>
        </aside>
        <div>{matchedAssignment ? matchedAssignment.work : ""}</div>
      </main>
    </div>
  );
};

export default Studentinterface;
