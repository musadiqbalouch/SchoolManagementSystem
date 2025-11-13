import React, { useState } from "react";
// import RegisteredStudents from "../views/TeacherStudents/RegisteredStudents";
import StudentSubject from "./StudentSubject";
import Modal from "../Common/Modal/Modal";
import RegistrationLimitModal from "./RegistrationLimitModal";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

const RegisterSubjects = () => {
  const teacher = JSON.parse(localStorage.getItem("teacher")) || [];
  console.log("🚀 ~ RegisterSubjects ~ teacher:", teacher);
  const loggedInStudent = JSON.parse(localStorage.getItem("loggedInStudent"));

  const [showModal, setShowModal] = useState(false);

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
      attendance: [],
    };

    for (let subject of newStudent.subjects) {
      const registeForThisSubject = allStudents.filter(
        (sub) =>
          sub.teacherid === newStudent.teacherid &&
          sub.subjects.includes(subject)
      );
      if (registeForThisSubject.length >= 2) {
        setShowModal(true);
        // setTimeout(() => {
        //   setShowModal(false);
        // }, 1000);
        return;
      }
    }

    // all subjects of this student
    let totalSubjects = 0;
    for (let s of allStudents) {
      if (s.studentid === newStudent.studentid) {
        totalSubjects += s.subjects.length;
      }
    }

    //  Check total length
    if (totalSubjects + newStudent.subjects.length > 5) {
      toast.error("You cant register more then 5 subjects");
      return;
    }

    //  Check if student already registered with this teacher
    let sameStudent = allStudents.find(
      (s) =>
        s.studentid === newStudent.studentid &&
        s.teacherid === newStudent.teacherid
    );

    if (sameStudent) {
      // if subect are alrady selected add new subjct for that students
      sameStudent.subjects = [...sameStudent.subjects, ...newStudent.subjects];
    } else {
      allStudents.push(newStudent);
    }

    localStorage.setItem("registredStudent", JSON.stringify(allStudents));
    toast.success("Sucessfully registred subject");
    setSelectSubject([]);
    setSelectedTeacherId("");
  };
  // let allStudents = JSON.parse(localStorage.getItem("registredStudent")) || [];
  // allStudents.forEach((tchid) => {
  //   <div>{console.log(tch)}</div>;
  // });

  return (
    <div className="flex flex-col flex-wrap gap-6 justify-center w-full items-center py-2 container">
      <div className="flex items-start justify-self-start bg-red400 w-full px-10">
        <Link
          className="bg-[#509CDB] px-3 py-1 rounded-md text-white font-medium"
          to={"/registredSubjects"}
        >
          View Registred Subjects
        </Link>
      </div>
      <div className="flex flex-wrap gap-5 px-5">
        {teacher.map((tch, index) => (
          <div
            key={index}
            className={`flex flex-col items-center justify-between border rounded-xl shadow-md p-3 transition-all duration-200 hover:shadow-lg w-[260px] laptop:w-[300px] ${
              selectedTeacherId === tch.id
                ? "border-blue-500 bg-blue-50"
                : "border-gray-400 bg-white"
            }`}
          >
            <h1 className="text-lg font-semibold text-gray-800">
              Teacher Name
            </h1>
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
        {/* userSubjects which are registred */}
        {showModal && (
          <Modal>
            <RegistrationLimitModal setShowModal={setShowModal} />
          </Modal>
        )}
      </div>
    </div>
  );
};

export default RegisterSubjects;
