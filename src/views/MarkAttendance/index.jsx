import React, { useState } from "react";
import Paginatation from "../../Common/Paginatation/Paginatation";
import { toast } from "react-toastify";
const Exam = () => {
  const loggedInTeacher = JSON.parse(localStorage.getItem("loggedInUser"));

  // const [present, setPresent] = useState("");
  const [msg, setMsg] = useState(false);

  const RegistredStudent =
    JSON.parse(localStorage.getItem("registredStudent")) || [];

  const filtredStudent = RegistredStudent.filter(
    (register) =>
      register.teacherid === loggedInTeacher.id &&
      register.teacherName === loggedInTeacher.userName
  );
  const handlePresent = (studentID, studentSubject) => {
    let today = new Date().toLocaleDateString();
    let student = [...filtredStudent];
    let matched = student.find((s) => s.studentid === studentID);

    if (matched) {
      if (
        matched.attendance.some(
          (att) => att.date === today && att.subject === studentSubject
        )
      ) {
        toast.error("Attendance is alrady marked");
        return; // stop if already marked
      }
      matched.attendance.push({
        date: today,
        subject: studentSubject,
        marked: "present",
      });
      setMsg(true);
      localStorage.setItem("registredStudent", JSON.stringify(student));
      toast.success("Attendance marked as Present ");
    }
  };
  const handleAbsent = (studentID, studentSubject) => {
    let today = new Date().toLocaleDateString();
    let student = [...filtredStudent];

    let matched = student.find((s) => s.studentid === studentID);

    if (matched) {
      if (
        matched.attendance.some(
          (att) => att.date === today && att.subject === studentSubject
        )
      ) {
        toast.error("Attendance is alrady marked");
        return;
      }

      matched.attendance.push({
        date: today,
        subject: studentSubject,
        marked: "Absent",
      });

      localStorage.setItem("registredStudent", JSON.stringify(student));
      toast.success("Attendance marked as Present ");
    }
  };

  return (
    <div className=" bg-[#1B2A55] gap-2 flex flex-row items-center justify-center p-6">
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
                    onClick={() => handlePresent(student.studentid, sub)}
                    className="bg-[#509CDB] rounded-md px-2 text-white font-medium"
                  >
                    Present
                  </button>
                  <button
                    onClick={() => handleAbsent(student.studentid, sub)}
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
