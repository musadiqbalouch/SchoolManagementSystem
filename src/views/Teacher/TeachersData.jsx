import React from "react";
import SearchBar from "../../Common/SearchBar/SearchBar";
import { MdDelete } from "react-icons/md";
import { MdEdit } from "react-icons/md";

const TeachersData = () => {
  let teacherData = JSON.parse(localStorage.getItem("teacher")) || [];

  const handleDelete = (index) => {
    let items = JSON.parse(localStorage.getItem("teacher")) || [];
    items.splice(index, 1);
    localStorage.setItem("teacher", JSON.stringify(items));
  };

  return (
    <div className="p-2 container m-auto flex flex-col gap-3">
      <SearchBar />
      <div className="flex font-semibold text-lg bg-gray-200 py-2 px-2 gap-5 mt-5 shadow-sm border rounded-md">
        <h2 className="w-35">Name</h2>
        <h2 className="w-35">Subject</h2>
        <h2 className="w-35">Class</h2>
        <h2 className="w-70 bgpurple-400">Email address</h2>
        <h2 className="w-25 bgred-300">Gender</h2>
        <h2 className="w-10">Edit</h2>
        <h2 className="w-10">Delete</h2>
      </div>
      {teacherData.map((teacher, index) => (
        <div
          className="flex font-medium text-base bgwhite py-2 px-2 gap-5 shadow-md border rounded-md border-[#FFFFFF]"
          key={index}
        >
          <h2 className="w-35">{teacher.teacherName}</h2>
          <h2 className="w-35">{teacher.teacherSubject}</h2>
          <h2 className="w-35">{teacher.teacherClassname}</h2>
          <h2 className="w-70">{teacher.teacherEmail}</h2>
          <h2 className="w-25">{teacher.teacherGender}</h2>
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

export default TeachersData;
