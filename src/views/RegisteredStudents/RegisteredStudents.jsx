import React from "react";

const RegisteredStudents = () => {
  const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser")) || [];
  const registredStudent =
    JSON.parse(localStorage.getItem("registredStudent")) || [];

  const filteredStudent = registredStudent.filter((registred) => {
    return (
      registred.teacherName === loggedInUser.userName &&
      registred.teacherid === loggedInUser.id
    );
  });

  return (
    <div className="w-full flex flex-col flex-wrap gap-6 justify-center items-start">
      <h1 className="text-2xl font-medium text-center w-full">
        Registered Students
      </h1>

      <div className="flex flex-row gap-2 px-2  ">
        {filteredStudent.map((student, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-start border border-gray-300 bg-white 
                     rounded-xl shadow-sm p-5 w-[240px] laptop:w-[280px]
                     transition-all duration-200 hover:shadow-md hover:scale-[1.01]"
          >
            <h1 className="text-gray-800 text-lg font-semibold mb-3 text-center">
              {student.studentName}
            </h1>

            <div className="flex flex-wrap justify-center gap-2">
              {student.subjects.map((subject, i) => (
                <span
                  key={i}
                  className="bg-[#509CDB] text-white text-sm font-medium px-3 py-1 rounded-full hover:bg-[#3b8ac4] transition-colors"
                >
                  {subject}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RegisteredStudents;
