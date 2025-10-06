import React, { useEffect, useState } from "react";
import SearchBar from "../../Common/SearchBar/SearchBar";
import { MdDelete } from "react-icons/md";
import { MdEdit } from "react-icons/md";
import Modal from "../../Common/Modal/Modal";
import Dataheader from "../../Common/Dataheader/Dataheader";

const TeachersData = ({ teacherData, settTeacherData }) => {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(true);
  };

  // const [teacherData, settTeacherData] = useState([]);
  const handleDelete = (index) => {
    let items = JSON.parse(localStorage.getItem("teacher")) || [];
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
        className={`p-0  m-auto flex flex-col gap-3 ${
          showModal === true ? " opacity-50" : ""
        }`}
      >
        <Dataheader title={"Teaher ID"} />
        <div className="mx2 m-auto">
          {teacherData.map((teacher, index) => (
            <div
              key={index}
              className="flex font medium w-full text-base bgwhite py-2 px2 gap-5 shadow-md border rounded-md border-[#FFFFFF] 
  laptop:text-sm laptop:px-2 laptop:gap-3 laptop-lg:gap-4 laptop-lg:text-base laptop-lg:px-5 desktop:text-xl desktop:px-5"
            >
              <h2 className="laptop:w-40 laptop:bg-blue500 laptop-lg:w-40 desktop:w-45 ">
                {teacher.teacherName}
              </h2>
              <h2 className="laptop:w-25 laptop:bg-blue500 laptop-lg:w-30 desktop:w-30">
                {teacher.teacherNumber}
              </h2>
              <h2 className="laptop:w-55 laptop:bg-blue500 laptop-lg:w-82 desktop:w-85">
                {teacher.teacherEmail}
              </h2>
              <h2 className="laptop:w-20 laptop:bg-blue500 laptop-lg:w-28 desktop:w-30">
                {teacher.teacherClassname}
              </h2>
              <h2 className="laptop:w-15 laptop:bg-blue500 laptop-lg:w-30 desktop:w-30">
                {teacher.teacherGender}
              </h2>
              <MdEdit
                onClick={toggleModal}
                className="laptop:h-8 laptop:w-10 laptop:m-1 laptop-lg:w-13 laptop-lg:h-8 desktop:w-17 desktop:h-10 text-[#509CDB] cursor-pointer"
              />
              <MdDelete
                onClick={() => handleDelete(index)}
                className="text-red-500 laptop:h-8 laptop:w-10 laptop-lg:w-16 laptop-lg:h-8 desktop:w-16 desktop:h-10 cursor-pointer"
              />
            </div>
          ))}
        </div>
        {/* {showModal && <Modal setShowModal={setShowModal} />} */}
      </div>
      <div className="container m-auto ">
        {showModal && <Modal setShowModal={setShowModal} />}
      </div>
    </>
  );
};

export default TeachersData;
