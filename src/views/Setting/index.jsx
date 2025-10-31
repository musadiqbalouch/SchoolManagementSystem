// Index.jsx
import React from "react";
import TeacherAsignAssignment from "../Teacher/TeacherAsignAssignment";
import StudentAssigment from "../../Studentsinterface/StudentAssigment";

const Index = () => {
  const loggedInTeacher =
    JSON.parse(localStorage.getItem("loggedInUser")) || null;
  const loggedInStudent =
    JSON.parse(localStorage.getItem("loggedInStudent")) || null;

  return (
    <div className="p-8 bg-gray-100 w-full">
      {loggedInTeacher?.userName === "admin" ? (
        ""
      ) : loggedInTeacher ? (
        <TeacherAsignAssignment loggedInTeacher={loggedInTeacher} />
      ) : loggedInStudent ? (
        <StudentAssigment loggedInStudent={loggedInStudent} />
      ) : (
        <p className="text-center text-gray-600">Please log in to continue.</p>
      )}
    </div>
  );
};

export default Index;
