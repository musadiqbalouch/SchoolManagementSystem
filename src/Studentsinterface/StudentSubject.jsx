import React from "react";
import { Link } from "react-router-dom";

const StudentSubject = () => {
  let allStudents = JSON.parse(localStorage.getItem("registredStudent")) || [];
  let loggedInStudent = JSON.parse(localStorage.getItem("loggedInStudent"));

  let registredSubjects = allStudents.filter(
    (std) =>
      std.studentid === loggedInStudent.registeredStudentId &&
      std.studentName === loggedInStudent.registeredStudentName
  );
  return (
    <div className=" flex flex-col w-full gap-5 px-8">
      <div className="bg-[#509CDB] w-fit py-1 px-2 rounded-md text-white font-medium">
        <Link className="" to={"/teacher"}>
          View Teachers
        </Link>
      </div>
      <div>
        {registredSubjects.map((registerSubject, index) => (
          <div
            key={index}
            className="flex flex-col w-fit bg-[#152259] mx-5 rounded-xl px-15 py-2 items-center justify-center gap-3 text-white shadow-lg"
          >
            <h1 className="text-lg font-semibold border-b border-gray-400 pb-1 w-fit">
              Student Details
            </h1>

            <div className="text-center">
              <h2 className="text-base font-medium text-gray-200">Name</h2>
              <p className="text-base font-semibold">
                {registerSubject?.studentName}
              </p>
            </div>

            <div className="text-center">
              <h2 className="text-lg font-medium text-gray-200">
                Teacher Name
              </h2>
              <p className="text-base font-semibold">
                {registerSubject?.teacherName}
              </p>
            </div>

            <div className="w-full text-center mt-3">
              <h3 className="text-lg font-semibold mb-2">Registered Subjcts</h3>
              <div className="flex flex-wrap justify-center gap-3">
                {registerSubject?.subjects.map((sub, index) => (
                  <div
                    key={index}
                    className="bg-[#509CDB] text-white px-4 py-1 rounded-full font-medium text-sm shadow-md hover:bg-[#3b8ac4] transition-all"
                  >
                    {sub} {registredSubjects.teacherName}
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StudentSubject;
