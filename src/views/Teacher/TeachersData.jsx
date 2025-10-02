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
        className={`p-0  m-auto flex flex-col gap-3 ${showModal === true ? " opacity-50" : ""}`}
      >
        <Dataheader title={"Teaher ID"} />
        <div className=" m-auto">
          {teacherData?.map?.((teacher, index) => (
            <div
              className="flex font  medium w-full px-12 text-base bgwhite py-2 px2 gap-5 shadow-md border rounded-md border-[#FFFFFF] 
             laptop:text-sm laptop:px-2 laptop-lg:text-lg laptop-lg:px-4 desktop:text-xl desktop:px-5  "
              key={index}
            >
              <h2 className="w-35 laptop:w-30 laptop-lg:w-38 desktop:w-40 ">
                {teacher.teacherName}
              </h2>
              <h2 className="w-35 laptop:w-20  laptop-lg:w-28  desktop:w-30   ">
                {teacher.teacherNumber}
              </h2>
              <h2 className="w-70 laptop:w-50 laptop-lg:bg-gray-600 laptop-lg:w-80 desktop:w-80   ">
                {teacher.teacherEmail}
              </h2>
              <h2 className="w-35 laptop:w-25 laptop-lg:w-28 desktop:w-30  ">
                {teacher.teacherClassname}
              </h2>
              <h2 className="w-25   laptop:w-15 laptop-lg:w-28 desktop:w-30">
                {teacher.teacherGender}
              </h2>
              <MdEdit
                onClick={toggleModal}
                className="h-8 w-10 laptop:h-7 laptop:w-8 laptop:m-1 laptop-lg:w-13 laptop-lg:h-8 desktop:w-15 desktop:h-10  text-[#509CDB] cursor-pointer"
              />
              <MdDelete
                onClick={() => handleDelete(index)}
                className="h-8 w-10 text-red-500 laptop:h-7 laptop:w-8 laptop:m-1 laptop-lg:w-13 laptop-lg:h-8 desktop:w-15 desktop:h-10    cursor-pointer"
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
