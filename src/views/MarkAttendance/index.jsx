import React, { useState } from "react";
import Paginatation from "../../Common/Paginatation/Paginatation";

const Exam = () => {
  const loggedInTeacher = JSON.parse(localStorage.getItem("loggedInUser"));

  const [present, setPresent] = useState("");
  const [absent, setAbsent] = useState("");

  const RegistredStudent =
    JSON.parse(localStorage.getItem("registredStudent")) || [];

  const filtredStudent = RegistredStudent.filter(
    (register) =>
      register.teacherid === loggedInTeacher.id &&
      register.teacherName === loggedInTeacher.userName
  );
  const handlePresent = (studentID, studentName, studentSubject) => {
    console.log(studentID);
    console.log(studentName);
    console.log(studentSubject);
  };

  const handleAbsent = (studentID, studentName, studentSubject) => {
    console.log(studentID);
    console.log(studentName);
    console.log(studentSubject);
  };
  return (
    <div className=" bg-[#1B2A55] gap-2 flex flex-col items-center justify-center p-6">
      {filtredStudent.map((student, index) => (
        <div
          key={index}
          className="bg-white flex flex-col gap-2 px-2 rounded-md items-center justify-center"
        >
          <div>
            <h1 className="font-medium text-xl">{student.studentName}</h1>
          </div>
          <div>
            <h2>
              {student.subjects.map((sub, index) => (
                <div
                  className="flex flex-row gap-2 items-center justify-center py-2"
                  key={index}
                >
                  <h2 className="font-medium w-40">{sub}</h2>
                  <button
                    onClick={() =>
                      handlePresent(student.studentName, student.studentid, sub)
                    }
                    className="bg-[#509CDB] rounded-md px-2 text-white font-medium"
                  >
                    Present
                  </button>
                  <button
                    onClick={() =>
                      handleAbsent(student.studentName, student.studentid, sub)
                    }
                    className="bg-red-500 px-2 rounded-md text-white font-medium"
                  >
                    Absent
                  </button>
                </div>
              ))}
            </h2>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Exam;
