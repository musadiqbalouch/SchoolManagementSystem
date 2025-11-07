import React, { useState } from "react";

const TeacherSubjectList = () => {
  const teacher = JSON.parse(localStorage.getItem("teacher")) || [];
  const loggedInStudent = JSON.parse(localStorage.getItem("loggedInStudent"));

  const [selectedTeacherId, setSelectedTeacherId] = useState("");
  const [selectSubject, setSelectSubject] = useState([]);

  const handleSubjectClick = (tch, subject) => {
    // Jab student subject pe click kare to teacher bhi select ho jaye
    setSelectedTeacherId(tch.id);
    setSelectSubject((prev) => {
      if (prev.includes(subject)) {
        return prev.filter((s) => s !== subject);
      } else {
        return [...prev, subject];
      }
    });
  };

  const registredStudent = () => {
    let allStudents =
      JSON.parse(localStorage.getItem("registredStudent")) || [];

    const newStudent = {
      studentid: loggedInStudent.registeredStudentId,
      studentName: loggedInStudent.registeredStudentName,
      teacherid: selectedTeacherId,
      teacherName: teacher.find((t) => t.id === selectedTeacherId)?.teacherName,
      subjects: selectSubject,
    };

    // Dekho pehle se ye student exist karta hai ya nahi
    const sameStudent = allStudents.find(
      (s) => s.studentid === newStudent.studentid
    );

    if (sameStudent) {
      // if subect are alrady selected add new subjct for that students
      sameStudent.subjects = [...sameStudent.subjects, ...newStudent.subjects];
    } else {
      // if not then add students for new student
      allStudents.push(newStudent);
    }
    if (newStudent.subjects.length > 5) {
      alert("you can regsiter morw then 5 subjects");
    }

    localStorage.setItem("registredStudent", JSON.stringify(allStudents));

    setSelectSubject([]);
    setSelectedTeacherId("");
  };
  let allStudents = JSON.parse(localStorage.getItem("registredStudent")) || [];

  let registredSubjects = allStudents.find(
    (std) =>
      std.studentid === loggedInStudent.registeredStudentId &&
      std.studentName === loggedInStudent.registeredStudentName
  );
  console.log("🚀 ~ registredStudent ~ registredSubjects:", registredSubjects);
  return (
    <div className="flex flex-wrap gap-6 justify-center w-full items-center py-6">
      {teacher.map((tch, index) => (
        <div
          key={index}
          className={`flex flex-col items-center justify-between border rounded-xl shadow-md p-5 transition-all duration-200 hover:shadow-lg w-[260px] laptop:w-[300px] ${
            selectedTeacherId === tch.id
              ? "border-blue-500 bg-blue-50"
              : "border-gray-400 bg-white"
          }`}
        >
          <h1 className="text-lg font-semibold text-gray-800">Teacher Name</h1>
          <h1 className="text-base font-medium text-gray-700 mb-3">
            {tch.teacherName}
          </h1>

          <h2 className="text-base font-semibold text-gray-800 mb-2">
            Teacher Subjects
          </h2>

          <div className="flex flex-wrap justify-center gap-2 mb-4">
            {tch.teacherSubjects.map((sub, idx) => (
              <div
                key={idx}
                className={`${
                  selectedTeacherId === tch.id && selectSubject.includes(sub)
                    ? "border border-[#509CDB] rounded-lg bg-blue-500 text-white px-3 py-1 font-medium text-sm cursor-pointer"
                    : "border border-gray-400 rounded-lg bg-gray-100 px-3 py-1 text-gray-700 text-sm cursor-pointer hover:bg-gray-200"
                }`}
                onClick={() => handleSubjectClick(tch, sub)}
              >
                {sub}
              </div>
            ))}
          </div>

          <button
            className="bg-[#509CDB] text-white px-4 py-1 rounded-md font-medium border border-gray-400 
                       hover:bg-[#3b8ac4] transition-all"
            onClick={registredStudent}
          >
            Register
          </button>
        </div>
      ))}
      <div className="flex flex-col w-full bg-red-300 items-center justify-center gap-2">
        <h1 className="text-xl">Student Name </h1>
        <h1 className="text-lg">{registredSubjects.studentName}</h1>
        <h1 className="text-xl">Teacher Name </h1>
        <h3 className="text-lg">{registredSubjects.teacherName}</h3>
        <h3 className="text-xl">Subjects Register by You </h3>
        <h3 className="text-lg">{registredSubjects.subjects}</h3>
      </div>
    </div>
  );
};

export default TeacherSubjectList;
