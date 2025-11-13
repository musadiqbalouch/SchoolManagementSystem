// TeacherPanel.jsx
import React, { useState } from "react";
import Paginatation from "../../Common/Paginatation/Paginatation";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

const TeacherAsignAssignment = ({ loggedInTeacher }) => {
  const [assignment, setAssignment] = useState("");
  const [subjectAssignment, setSubjectAssignment] = useState("");

  const handleSubjctChange = (e) => {
    setSubjectAssignment(e.target.value);
  };

  // const students = JSON.parse(localStorage.getItem("students")) || [];
  const submittedAssignments =
    JSON.parse(localStorage.getItem("submittedAssighment")) || [];

  // filtering student for teacher
  const RegistredStudent =
    JSON.parse(localStorage.getItem("registredStudent")) || [];
  const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser")) || [];

  const sss = RegistredStudent.filter(
    (std) =>
      std.teacherid === loggedInUser.id &&
      std.teacherName === loggedInUser.userName
  );
  // console.log("🚀 ~ TeacherAsignAssignment ~ sss:", sss);

  // Filter assignments submitted to this teacher
  const filteredAssignments = submittedAssignments.filter(
    (id) => id.teacherId === loggedInTeacher?.id
  );

  // Assign homework
  const submitAssignment = () => {
    const homeWork = JSON.parse(localStorage.getItem("studentAsignment")) || [];

    const assi = {
      teacherID: loggedInTeacher.id,
      subject: subjectAssignment,
      work: assignment,
      isSubmitted: false,
    };
    homeWork.push(assi);
    console.log(assi);
    localStorage.setItem("studentAsignment", JSON.stringify(homeWork));
    toast.success("Assignment Uploaded Succesfully");
    setAssignment("");
  };

  let teacher = JSON.parse(localStorage.getItem("teacher")) || [];
  const filteredTeacher = teacher.find(
    (tch) =>
      tch.id === loggedInUser.id && tch.teacherName === loggedInUser.userName
  );
  // const currentPost = filteredAssignments.slice(firstPostIndex, lastPostIndex);

  return (
    <div className="flex flex-col gap-4 max-w-5xl mx-auto">
      {/* Assignment Form */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-4">
        <h1 className="text-2xl font-semibold text-gray-800 mb-2">
          Assign Homework / Assignment
        </h1>
        <select
          value={subjectAssignment}
          onChange={handleSubjctChange}
          // onChange={handleSubjctChange}
          name=""
          id=""
        >
          <option value="Select Subject">Select Subject</option>
          {filteredTeacher?.teacherSubjects?.map((sub, index) => (
            <option key={index} value={sub}>
              {sub}
            </option>
          ))}
        </select>

        <textarea
          value={assignment}
          onChange={(e) => setAssignment(e.target.value)}
          className="w-full h-32 border border-gray-300 rounded-lg p-3 text-gray-700 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400 resize-none"
          placeholder="Write assignment details here..."
        ></textarea>

        <button
          onClick={submitAssignment}
          className="mt-1 w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg font-medium transition-all"
        >
          Assign
        </button>
      </div>
      <Link
        className="bg-[#2671B1] w-fit py-1 px-2 text-white rounded-lg font-medium cursor-pointer"
        to={"/studentsAssignments"}
      >
        view Assignments
      </Link>
      {/* Submitted Assignments */}
    </div>
  );
};

export default TeacherAsignAssignment;
