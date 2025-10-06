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
    <div className="wfull p-0 m-auto flex flex-col gap-3">
      {/* Header Row */}
      <Dataheader title={"Student ID"} />
      {/* Data Rows */}
      <div className=" m-auto">
        {studentData.map((student, index) => (
          <div
            key={index}
            className="flex font  medium w-full text-base bgwhite py-2 px2 gap-5 shadow-md border rounded-md border-[#FFFFFF] 
  laptop:text-sm laptop:px-2 laptop:gap-3 laptop-lg:gap-4 laptop-lg:text-base laptop-lg:px-5 desktop:text-xl desktop:px-5"
          >
            <h2 className="laptop:w-40  laptop-lg:w-40 desktop:w-45">
              {student.studentName}
            </h2>
            <h2 className="laptop:w-25  laptop-lg:w-30 desktop:w-30">
              {student.studentNumber}
            </h2>
            <h2 className="laptop:w-55  laptop-lg:w-82 desktop:w-85">
              {student.studentEmail}
            </h2>
            <h2 className="laptop:w-20  laptop-lg:w-28 desktop:w-30 ">
              {student.studentClass}
            </h2>
            <h2 className="laptop:w-15  laptop-lg:w-30 desktop:w-30">
              {student.studentGender}
            </h2>
            <MdEdit className=" laptop:h-8 laptop:w-10 laptop-lg:w-13 laptop-lg:h-8 desktop:w-17 desktop:h-10  text-[#509CDB] cursor-pointer" />
            <MdDelete
              onClick={() => handleDelete(index)}
              className=" text-red-500 laptop:h-8 laptop:w-10 laptop-lg:w-16 laptop-lg:h-8 desktop:w-16 desktop:h-10    cursor-pointer"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default StudentData;
