import React, { useEffect } from "react";
import SearchBar from "../../Common/SearchBar/SearchBar";
import { MdDelete } from "react-icons/md";
import { MdEdit } from "react-icons/md";

const StudentData = () => {
  let studentData = JSON.parse(localStorage.getItem("students")) || [];

  const handleDelete = (index) => {
    let items = JSON.parse(localStorage.getItem("students")) || [];
    items.splice(index, 1);
    localStorage.setItem("students", JSON.stringify(items));
  };
  useEffect(() => {}, [handleDelete]);

  return (
    <div className="p-2 container m-auto flex flex-col gap-3">
      <SearchBar />
      <div className="flex font-semibold text-lg bg-gray-200 py-2 px-2 gap-5 mt-5 shadow-sm border rounded-md">
        <h2 className="w-35">Name</h2>
        <h2 className="w-35">Student ID</h2>
        <h2 className="w-35">Email address</h2>
        <h2 className="w-70">Class</h2>
        <h2 className="w-20">Gender</h2>
        <h2 className="w-10">Edit</h2>
        <h2 className="w-10">Delete</h2>
      </div>
      {studentData.map((student, index) => (
        <div
          className="flex font-medium text-base bgwhite py-2 px-2 gap-5 shadow-md border rounded-md border-[#FFFFFF]"
          key={index}
        >
          <h2 className="w-35">{student.studentName}</h2>
          <h2 className="w-35">{student.studentNumber}</h2>
          <h2 className="w-70">{student.studentEmail}</h2>
          <h2 className="w-35">{student.studentClass}</h2>
          <h2 className="w-25">{student.studentGender}</h2>
          <MdEdit className="h-8 w-10 text-[#509CDB]" />
          <MdDelete
            onClick={() => handleDelete(index)}
            className="h-8 w-10 text-red-500"
          />
        </div>
      ))}
    </div>
  );
};

export default StudentData;
