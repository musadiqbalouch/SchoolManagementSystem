import React, { useEffect, useState } from "react";
import { MdDelete, MdEdit } from "react-icons/md";
import Dataheader from "../../Common/Dataheader/Dataheader";
import StudentModal from "../../Common/Modal/StudentModal";
import StudentDetail from "./StudentDetail";
import { GrView } from "react-icons/gr";

const StudentData = ({ studentData, setStudentData, search }) => {
  const handleDelete = (index) => {
    let items = JSON.parse(localStorage.getItem("students")) || [];
    items.splice(index, 1);
    localStorage.setItem("students", JSON.stringify(items));
    setStudentData(items);
  };

  // edit item state
  const [editItem, setEditItem] = useState(null);

  useEffect(() => {
    setStudentData(JSON.parse(localStorage.getItem("students")) || []);
  }, []);

  // editdata modal
  const [modal, setModal] = useState(false);
  // userdetailmodal
  // edit modal
  const handleModal = () => {
    setModal(true);
  };

  const [studentDetail, setStudentDetail] = useState(false);
  // userdetailmodal
  const Detail = () => {
    setStudentDetail(true);
  };

  const editlist = (id) => {
    const updateItem = [...studentData];
    setEditItem(updateItem[id]);
  };
  return (
    <div className={`p-0 w-full m-auto flex flex-col gap-3 mt-3 `}>
      <Dataheader title={"Student ID"} />

      <table className="w-full border-separate border-spacing-y-2">
        <tbody>
          {/* filtering data */}
          {studentData
            .filter((student) => {
              return search.toLowerCase() === ""
                ? student
                : student.studentName.toLowerCase().includes(search) ||
                    student.studentEmail.toLowerCase().includes(search);
            })
            .map((student, id) => (
              <tr
                className={`${
                  id % 2 === 0 ? `bg-[#EBF6FF80]` : ``
                } border shadow-md laptop-lg:text-sm laptop:text-sm laptop-lg:h-10 border-[#FFFFFF] rounded-md overflow-hidden`}
                key={id}
              >
                <td
                  // onClick={() => editlist(id)}
                  className="laptop:w-40 cursor-pointer laptop-lg:w-48 laptop-lg:pl-2 text-center desktop:w-50"
                >
                  {student.studentName}
                </td>
                <td className="laptop:w-23 laptop-lg:w-20 laptop-lg:pl-2 text-center desktop:w-22">
                  {student.studentNumber}
                </td>
                <td className="laptop:w-50 laptop-lg:w-65 laptop-lg:pl-2 text-center desktop:w-67">
                  {student.studentEmail}
                </td>
                <td className="laptop:w-19 laptop-lg:w-25 laptop-lg:pl-2 text-center desktop:w-27">
                  {student.studentClass}
                </td>
                <td className="laptop:w-19 laptop-lg:w-25 laptop-lg:pl-2 text-center desktop:w-27">
                  {student.studentGender}
                </td>
                <td
                  onClick={handleModal}
                  className="cursor-pointer laptop:w-16 laptop-lg:w-25 laptop-lg:pl-2 text-center align-middle desktop:w-27"
                >
                  <MdEdit
                    onClick={() => editlist(id)}
                    className="laptop:h-6 laptop:w-8 text-blue-500 inline-block laptop-lg:h-7 laptop-lg:w-10 desktop:h-9 desktop:w-12"
                  />
                  {/* {modal && <StudentModal setModal={setModal} />} */}
                </td>
                <td className=" cursor-pointer laptop:w-16 laptop-lg:w-25 laptop-lg:pl-2 text-center align-middle desktop:w-27">
                  <MdDelete
                    onClick={() => handleDelete(id)}
                    className=" laptop:h-6 laptop:w-8 text-red-500 laptop-lg:h-7 laptop-lg:w-10 inline-block desktop:h-9 desktop:w-12"
                  />
                </td>
                <td
                  onClick={Detail}
                  className="cursor-pointer laptop:w-19 laptop-lg:w-25 laptop-lg:pl-2 text-center align-middle desktop:w-27"
                >
                  <GrView
                    onClick={() => editlist(id)}
                    className="laptop:h-6 laptop:w-8 text-[#1F9B1B] inline-block laptop-lg:h-5 laptop-lg:w-8 desktop:h-9 desktop:w-12"
                  />
                </td>
              </tr>
            ))}
        </tbody>
      </table>
      {modal && (
        <StudentModal
          editItem={editItem}
          setModal={setModal}
          studentData={studentData}
          setStudentData={setStudentData}
        />
      )}
      {studentDetail && (
        <StudentDetail
          setStudentDetail={setStudentDetail}
          editItem={editItem}
        />
      )}
    </div>
  );
};

export default StudentData;
