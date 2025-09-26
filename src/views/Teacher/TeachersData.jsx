import React, { useEffect, useState } from "react";
import SearchBar from "../../Common/SearchBar/SearchBar";
import { MdDelete } from "react-icons/md";
import { MdEdit } from "react-icons/md";
import Modal from "../../Common/Modal/Modal";

const TeachersData = () => {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(true);
  };

  const [teacherData, settTeacherData] = useState([]);
  const handleDelete = (index) => {
    let items = JSON.parse(localStorage.getItem("teacher")) || [];
    console.log("item deleted");
    items.splice(index, 1);
    localStorage.setItem("teacher", JSON.stringify(items));
    settTeacherData(items);
  };

  useEffect(() => {
    settTeacherData(JSON.parse(localStorage.getItem("teacher")) || []);
  }, []);

  return (
    <>
      <div
        className={` p-2 container m-auto flex flex-col gap-3 ${showModal === true ? " opacity-50" : ""}`}
      >
        <SearchBar />
        <div className="flex font-semibold text-lg w-fit bg-gray-200 py-2 px-12 gap-5 mt-5 shadow-sm border rounded-md">
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
            className="flex font-medium w-fit px-12 text-base bgwhite py-2 px2 gap-5 shadow-md border rounded-md border-[#FFFFFF]"
            key={index}
          >
            <h2 className="w-35">{teacher.teacherName}</h2>
            <h2 className="w-35">{teacher.teacherSubject}</h2>
            <h2 className="w-35">{teacher.teacherClassname}</h2>
            <h2 className="w-70">{teacher.teacherEmail}</h2>
            <h2 className="w-25">{teacher.teacherGender}</h2>
            <MdEdit
              onClick={toggleModal}
              className="h-8 w-10 text-[#509CDB] cursor-pointer"
            />
            <MdDelete
              onClick={() => handleDelete(index)}
              className="h-8 w-10 text-red-500  cursor-pointer"
            />
          </div>
        ))}
        {/* {showModal && <Modal setShowModal={setShowModal} />} */}
      </div>
      <div className="container m-auto ">
        {showModal && <Modal setShowModal={setShowModal} />}
      </div>
    </>
  );
};

export default TeachersData;
