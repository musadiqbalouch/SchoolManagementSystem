import React, { useEffect, useState } from "react";
import SearchBar from "../../Common/SearchBar/SearchBar";
import { MdDelete } from "react-icons/md";
import { MdEdit } from "react-icons/md";
import Dataheader from "../../Common/Dataheader/Dataheader";
// import TeacherModal from "../../Common/Modal/Teachersmodal";
import { GrView } from "react-icons/gr";
import TeacherDetail from "./TeacherDetail";
import Modal from "../../Common/Modal/Modal";
import TeacherEditform from "./TeacherEditform";

const TeachersData = ({
  teacherData,
  settTeacherData,
  search,
  currentPost,
  firstPostIndex,
}) => {
  const [showModal, setShowModal] = useState(false);
  const [teacherDetail, setTeacherDetail] = useState(false);
  const [editItem, setEditItem] = useState(null);

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

  const detail = () => {
    setTeacherDetail(true);
  };

  const editList = (id) => {
    const updateItem = [...teacherData];
    setEditItem(updateItem[id]);
  };

  return (
    <div
      className={`p-0 w-full laptop:h-80  laptop-lg:h-100 m-auto flex flex-col gap-3 mt-3 `}
    >
      <Dataheader title={"Teacher ID"} />
      <table className="w-full border-separate border-spacing-y-2 ">
        <tbody>
          {currentPost
            .filter((teacher) => {
              return search.toLowerCase() === ""
                ? teacher
                : teacher.teacherName.toLowerCase().includes(search) ||
                    teacher.teacherEmail.toLowerCase().includes(search);
            })
            .map((teacher, id) => (
              <tr
                className={`${
                  id % 2 === 0 ? `bg-[#EBF6FF80]` : ``
                } border shadow-md laptop-lg:text-sm laptop:text-sm  laptop-lg:h-10 border-[#FFFFFF] rounded-md overflow-hidden `}
                key={id}
              >
                <td className=" laptop:w-40  laptop-lg:w-48 laptop-lg:pl-2 text-center desktop:w-50">
                  {teacher.teacherName}
                </td>
                <td className=" laptop:w-23  laptop-lg:w-20 laptop-lg:pl-2 text-center desktop:w-22 ">
                  {teacher.teacherNumber}
                </td>
                <td className=" laptop:w-50  laptop-lg:w-65 laptop-lg:pl-2 text-center desktop:w-67">
                  {teacher.teacherEmail}
                </td>
                <td className=" laptop:w-19  laptop-lg:w-25 laptop-lg:pl-2 text-center desktop:w-27 ">
                  {teacher.teacherClassName}
                </td>
                <td className=" laptop:w-19  laptop-lg:w-25 laptop-lg:pl-2 text-center  desktop:w-27 ">
                  {teacher.teacherGender}
                </td>
                <td
                  onClick={toggleModal}
                  className=" laptop:w-16  laptop-lg:w-25 laptop-lg:pl-2 text-center align-middle desktop:w-27"
                >
                  <MdEdit
                    onClick={() => editList(firstPostIndex + id)}
                    className="cursor-pointer laptop:h-6 laptop:w-8 text-blue-500 inline-block laptop-lg:h-7 laptop-lg:w-10 desktop:h-9 desktop:w-12 "
                  />
                </td>
                <td className=" laptop:w-16  laptop-lg:w-25 laptop-lg:pl-2 text-center align-middle desktop:w-27">
                  <MdDelete
                    className="cursor-pointer laptop:h-6 laptop:w-8 text-red-500 laptop-lg:h-7  laptop-lg:w-10 inline-block desktop:h-9 desktop:w-12 "
                    onClick={() => handleDelete(firstPostIndex + id)}
                  />
                </td>
                <td
                  onClick={detail}
                  className="cursor-pointer laptop:w-19 laptop-lg:w-25 laptop-lg:pl-2 text-center align-middle desktop:w-27"
                >
                  <GrView
                    onClick={() => editList(firstPostIndex + id)}
                    className="laptop:h-6 laptop:w-8 text-[#1F9B1B] inline-block laptop-lg:h-5 laptop-lg:w-8 desktop:h-9 desktop:w-12"
                  />
                </td>
              </tr>
            ))}
        </tbody>
      </table>
      {showModal && (
        <Modal>
          <TeacherEditform
            editItem={editItem}
            settTeacherData={settTeacherData}
            teacherData={teacherData}
            showModal={showModal}
            setShowModal={setShowModal}
          />
        </Modal>
      )}
      {teacherDetail && (
        <Modal>
          <TeacherDetail
            editItem={editItem}
            setTeacherDetail={setTeacherDetail}
          />
        </Modal>
      )}
    </div>
  );
};

export default TeachersData;
