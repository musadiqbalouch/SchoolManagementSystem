import React, { useState } from "react";

const TeacherSubjectList = () => {
  const teacher = JSON.parse(localStorage.getItem("teacher")) || [];
  const loggedInStudent = JSON.parse(localStorage.getItem("loggedInStudent"));

  const [teacherId, setTeacherId] = useState("");
  const [teacherName, setTeacherName] = useState("");
  const [selectSubject, setSelectSubject] = useState([]);

  const registerSubject = (itemName) => {
    setTeacherName(itemName.teacherName);
    setTeacherId(itemName.id);
  };

  const registredStudent = () => {
    const registredStudent =
      JSON.parse(localStorage.getItem("registredStudent")) || [];
    let student = {
      id: teacherId,
      teacherName: teacherName,
      subjects: selectSubject,
      studentid: loggedInStudent.registeredStudentId,
    };
    registredStudent.push(student);
    localStorage.setItem("registredStudent", JSON.stringify(registredStudent));
  };

  const selectedSubject = (subject) => {
    setSelectSubject((prev) => {
      if (prev.includes(subject)) {
        return prev.filter((s) => s !== subject);
      } else {
        return [...prev, subject];
      }
    });
  };

  return (
    <div className="flex flex-wrap gap-6 justify-center w-full items-center py-6">
      {teacher.map((tch, index) => (
        <div
          className="flex flex-col items-center justify-between border border-gray-400 rounded-xl shadow-md bg-white 
                     w-[260px] laptop:w-[300px] p-5 transition-all duration-200 hover:shadow-lg"
          key={index}
          onClick={() => registerSubject(tch)}
        >
          <h1 className="text-lg font-semibold text-gray-800">Teacher Name</h1>
          <h1 className="text-base font-medium text-gray-700 mb-3">
            {tch.teacherName}
          </h1>

          <h2 className="text-base font-semibold text-gray-800 mb-2">
            Teacher Subjects
          </h2>

          <div className="flex flex-wrap justify-center gap-2 mb-4">
            {tch.teacherSubjects.map((sub, index) => (
              <div
                className={`${selectSubject.includes(sub) ? "border border-[#509CDB] rounded-lg bg-gray-100 px-3 py-1 text-gray-700 text-sm flex-shrink-0 cursor-pointer hover:bg-gray-200 transition-all" : " border border-gray-400 rounded-lg bg-gray-100 px-3 py-1 text-gray-700 text-sm flex-shrink-0 cursor-pointer hover:bg-gray-200 transition-all"}
                `}
                // className=""
                onClick={() => selectedSubject(sub)}
                key={index}
              >
                <h2>{sub}</h2>
              </div>
            ))}
          </div>

          <button
            className="bg-[#509CDB] text-white px-4 py-2 rounded-md font-medium border border-gray-400 
                       hover:bg-[#3b8ac4] transition-all"
            onClick={registredStudent}
          >
            Register
          </button>
        </div>
      ))}
    </div>
  );
};

export default TeacherSubjectList;
