import React, { useEffect, useState } from "react";
import SearchBar from "../../Common/SearchBar/SearchBar";
import { MdDelete } from "react-icons/md";
import { MdEdit } from "react-icons/md";
import Modal from "../../Common/Modal/Modal";

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
        className={` p-2 container m-auto flex flex-col gap-3 ${showModal === true ? " opacity-50" : ""}`}
      >
        <div
          className="flex font-semibold laptop:text-base text-lg w-fit bg-gray-200 py-2 px-12 gap-5 mt-5 
        shadow-sm border rounded-md lap laptop:px-2 desktop:text-2xl desktop:px-5 desktop:w-full "
        >
          <h2 className="w-35  laptop:w-25  desktop:w-40 ">Name</h2>
          <h2 className="w-35 laptop:w-25  desktop:w-30">Subject</h2>
          <h2 className="w-35 laptop:w-25  desktop:w-30 ">Class</h2>
          <h2 className="w-70 bgpurple-400 laptop:w-50  desktop:w-80 ">
            Email address
          </h2>
          <h2 className="w-25  laptop:w-15  desktop:w-30">Gender</h2>
          <h2 className="w-10 desktop:w-15 ">Edit</h2>
          <h2 className="w-10 desktop:w-20 ">Delete</h2>
        </div>
        {teacherData?.map?.((teacher, index) => (
          <div
            className="flex font-medium w-fit px-12 text-base bgwhite py-2 px2 gap-5 shadow-md border rounded-md border-[#FFFFFF] 
             laptop:text-sm laptop:px-2 desktop:text-xl desktop:px-5  "
            key={index}
          >
            <h2 className="w-35 laptop:w-25 desktop:w-40 ">
              {teacher.teacherName}
            </h2>
            <h2 className="w-35 laptop:w-25   desktop:w-30   ">
              {teacher.teacherSubject}
            </h2>
            <h2 className="w-35 laptop:w-25  desktop:w-30  ">
              {teacher.teacherClassname}
            </h2>
            <h2 className="w-70 laptop:w-50  desktop:w-80   ">
              {teacher.teacherEmail}
            </h2>
            <h2 className="w-25   laptop:w-15  desktop:w-30">
              {teacher.teacherGender}
            </h2>
            <MdEdit
              onClick={toggleModal}
              className="h-8 w-10 laptop:h-7 laptop:w-8 laptop:m-1 desktop:w-15 desktop:h-10  text-[#509CDB] cursor-pointer"
            />
            <MdDelete
              onClick={() => handleDelete(index)}
              className="h-8 w-10 text-red-500 laptop:h-7 laptop:w-8 laptop:m-1 desktop:w-15 desktop:h-10    cursor-pointer"
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
