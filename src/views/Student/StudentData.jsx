import React, { useEffect, useState } from "react";
import SearchBar from "../../Common/SearchBar/SearchBar";
import { MdDelete } from "react-icons/md";
import { MdEdit } from "react-icons/md";

const StudentData = ({ studentData, setStudentData }) => {
  // const [studentData, setStudentData] = useState([]);

  const handleDelete = (index) => {
    let items = JSON.parse(localStorage.getItem("students")) || [];
    items.splice(index, 1);
    localStorage.setItem("students", JSON.stringify(items));
    setStudentData(items);
  };

  useEffect(() => {
    setStudentData(JSON.parse(localStorage.getItem("students")) || []);
  }, []);
  return (
    <div className="p-2 container m-auto flex flex-col gap-3">
      <div
        className="flex font-semibold laptop:text-base text-lg w-fit bg-gray-200 py-2 px-12 gap-5 mt-5 
    shadow-sm border rounded-md laptop:px-2 desktop:text-2xl desktop:px-5 desktop:w-full "
      >
        <h2 className="w-35 laptop:w-25 desktop:w-40">Name</h2>
        <h2 className="w-35 laptop:w-25 desktop:w-30">Student ID</h2>
        <h2 className="w-70 laptop:w-50 desktop:w-80">Email address</h2>
        <h2 className="w-35 laptop:w-25 desktop:w-30">Class</h2>
        <h2 className="w-20 laptop:w-15 desktop:w-30">Gender</h2>
        <h2 className="w-10 desktop:w-15">Edit</h2>
        <h2 className="w-10 desktop:w-20">Delete</h2>
      </div>

      {studentData.map((student, index) => (
        <div
          className="flex font-medium w-fit px-12 text-base bgwhite py-2 gap-5 shadow-md border rounded-md border-[#FFFFFF] 
      laptop:text-sm laptop:px-2 desktop:text-xl desktop:px-5"
          key={index}
        >
          <h2 className="w-35 laptop:w-25 desktop:w-40">
            {student.studentName}
          </h2>
          <h2 className="w-35 laptop:w-25 desktop:w-30">
            {student.studentNumber}
          </h2>
          <h2 className="w-70 laptop:w-50 desktop:w-80">
            {student.studentEmail}
          </h2>
          <h2 className="w-35 laptop:w-25 desktop:w-30">
            {student.studentClass}
          </h2>
          <h2 className="w-25 laptop:w-15 desktop:w-30">
            {student.studentGender}
          </h2>
          <MdEdit className="h-8 w-10 laptop:h-7 laptop:w-8 laptop:m-1 desktop:w-15 desktop:h-10 text-[#509CDB] cursor-pointer" />
          <MdDelete
            onClick={() => handleDelete(index)}
            className="h-8 w-10 text-red-500 laptop:h-7 laptop:w-8 laptop:m-1 desktop:w-15 desktop:h-10 cursor-pointer"
          />
        </div>
      ))}
    </div>
  );
};

export default StudentData;
