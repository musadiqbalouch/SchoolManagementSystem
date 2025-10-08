import React, { useEffect, useState } from "react";
import SearchBar from "../../Common/SearchBar/SearchBar";
import { MdDelete } from "react-icons/md";
import { MdEdit } from "react-icons/md";
import Dataheader from "../../Common/Dataheader/Dataheader";
import TeacherModal from "../../Common/Modal/Teachersmodal";

const TeachersData = ({ teacherData, settTeacherData, search }) => {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(true);
  };

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
    <div className={`p-0 w-full m-auto flex flex-col gap-3 mt-3 `}>
      <Dataheader title={"Teacher ID"} />
      <table className="w-full border-separate border-spacing-y-2 ">
        <tbody>
          {teacherData
            .filter((teacher) => {
              return search.toLowerCase() === ""
                ? teacher
                : teacher.teacherName.toLowerCase().includes(search) ||
                    teacher.teacherEmail.toLowerCase().includes(search);
            })
            .map((teacher, index) => (
              <tr
                className={`${index % 2 === 0 ? `bg-[#EBF6FF80]` : ``} border shadow-md laptop-lg:text-sm laptop:text-sm  laptop-lg:h-10 border-[#FFFFFF] rounded-md overflow-hidden `}
                key={index}
              >
                <td className=" laptop:w-42  laptop-lg:w-48 laptop-lg:pl-2 text-center desktop:w-50">
                  {teacher.teacherName}
                </td>
                <td className=" laptop:w-25  laptop-lg:w-20 laptop-lg:pl-2 text-center desktop:w-22 ">
                  {teacher.teacherNumber}
                </td>
                <td className=" laptop:w-60  laptop-lg:w-65 laptop-lg:pl-2 text-center desktop:w-67">
                  {teacher.teacherEmail}
                </td>
                <td className=" laptop:w-20  laptop-lg:w-25 laptop-lg:pl-2 text-center desktop:w-27 ">
                  {teacher.teacherClassName}
                </td>
                <td className=" laptop:w-20  laptop-lg:w-25 laptop-lg:pl-2 text-center  desktop:w-27 ">
                  {teacher.teacherGender}
                </td>
                <td className=" laptop:w-20  laptop-lg:w-25 laptop-lg:pl-2 text-center align-middle desktop:w-27">
                  <MdEdit
                    onClick={toggleModal}
                    className="cursor-pointer laptop:h-6 laptop:w-8 text-blue-500 inline-block laptop-lg:h-7 laptop-lg:w-10 desktop:h-9 desktop:w-12 "
                  />
                  {showModal && <TeacherModal setShowModal={setShowModal} />}
                </td>
                <td className=" laptop:w-20  laptop-lg:w-25 laptop-lg:pl-2 text-center align-middle desktop:w-27">
                  <MdDelete
                    className="cursor-pointer laptop:h-6 laptop:w-8 text-red-500 laptop-lg:h-7  laptop-lg:w-10 inline-block desktop:h-9 desktop:w-12 "
                    onClick={() => handleDelete(index)}
                  />
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default TeachersData;
