import React, { useEffect, useState } from "react";
import SearchBar from "../../Common/SearchBar/SearchBar";
import { MdDelete } from "react-icons/md";
import { MdEdit } from "react-icons/md";
import Dataheader from "../../Common/Dataheader/Dataheader";
// import UserData from "./userData";

const StudentData = ({ studentData, setStudentData }) => {
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
    <div className="p-2  w-full m-auto flex flex-col gap-3">
      {/* Header Row */}
      <Dataheader title={"Student ID"} />
      {/* Data Rows */}
      <div className="w-full m-auto">
        {studentData.map((student, index) => (
          <div
            key={index}
            className="flex  px-12 text-base bgwhite py-2 gap-5 shadow-md border rounded-md border-[#FFFFFF] 
          laptop:text-sm laptop:px-2 laptop-lg:text-lg laptop-lg:px-4 desktop:text-xl desktop:px-5"
          >
            <h2 className="w-35 laptop:w30 laptop-lg:w-36 desktop:w-40">
              {student.studentName}
            </h2>
            <h2 className="w-35 laptop:w20 laptop-lg:w-30 desktop:w-30">
              {student.studentNumber}
            </h2>
            <h2 className="w-70 laptop:w48 laptop-lg:w-80 desktop:w-80">
              {student.studentEmail}
            </h2>
            <h2 className="w-35 laptop:w25 laptop-lg:w-28 desktop:w-30">
              {student.studentClass}
            </h2>
            <h2 className="w-20 laptop:w15 laptop-lg:w-30 desktop:w-28">
              {student.studentGender}
            </h2>
            <MdEdit
              className="h8 w10 laptop:h7 laptop:w8 laptop:m-1 laptop-lg:w-13 laptop-lg:h-8 desktop:w-15 
            desktop:h-10 text-[#509CDB] cursor-pointer"
            />
            <MdDelete
              onClick={() => handleDelete(index)}
              className="h-8 w-10 text-red-500 laptop:h-7 laptop:w-8 laptop:m-1 laptop-lg:w-13 laptop-lg:h-8 desktop:w-15 desktop:h-10 cursor-pointer"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default StudentData;
