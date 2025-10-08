import React, { useEffect, useState } from "react";
import { MdDelete, MdEdit } from "react-icons/md";
import Dataheader from "../../Common/Dataheader/Dataheader";
import StudentModal from "../../Common/Modal/StudentModal";

const StudentData = ({ studentData, setStudentData, search }) => {
  const handleDelete = (index) => {
    let items = JSON.parse(localStorage.getItem("students")) || [];
    items.splice(index, 1);
    localStorage.setItem("students", JSON.stringify(items));
    setStudentData(items);
  };

  useEffect(() => {
    setStudentData(JSON.parse(localStorage.getItem("students")) || []);
  }, []);
  const [modal, setModal] = useState(false);

  const handleModal = () => {
    setModal(true);
  };
  return (
    <div className={`p-0 w-full m-auto flex flex-col gap-3 mt-3 `}>
      <Dataheader title={"Student ID"} />

      <table className="w-full border-separate border-spacing-y-2">
        <tbody>
          {studentData
            .filter((student) => {
              return search.toLowerCase() === ""
                ? student
                : student.studentName.toLowerCase().includes(search) ||
                    student.studentEmail.toLowerCase().includes(search);
            })
            .map((student, index) => (
              <tr
                className={`${index % 2 === 0 ? `bg-[#EBF6FF80]` : ``} border shadow-md laptop-lg:text-sm laptop:text-sm laptop-lg:h-10 border-[#FFFFFF] rounded-md overflow-hidden`}
                key={index}
              >
                <td className="laptop:w-42 laptop-lg:w-48 laptop-lg:pl-2 text-center desktop:w-50">
                  {student.studentName}
                </td>
                <td className="laptop:w-25 laptop-lg:w-20 laptop-lg:pl-2 text-center desktop:w-22">
                  {student.studentNumber}
                </td>
                <td className="laptop:w-60 laptop-lg:w-65 laptop-lg:pl-2 text-center desktop:w-67">
                  {student.studentEmail}
                </td>
                <td className="laptop:w-20 laptop-lg:w-25 laptop-lg:pl-2 text-center desktop:w-27">
                  {student.studentClass}
                </td>
                <td className="laptop:w-20 laptop-lg:w-25 laptop-lg:pl-2 text-center desktop:w-27">
                  {student.studentGender}
                </td>
                <td
                  onClick={handleModal}
                  className="cursor-pointer laptop:w-20 laptop-lg:w-25 laptop-lg:pl-2 text-center align-middle desktop:w-27"
                >
                  <MdEdit className="laptop:h-6 laptop:w-8 text-blue-500 inline-block laptop-lg:h-7 laptop-lg:w-10 desktop:h-9 desktop:w-12" />
                  {/* {modal && <StudentModal setModal={setModal} />} */}
                </td>
                <td className=" cursor-pointer laptop:w-20 laptop-lg:w-25 laptop-lg:pl-2 text-center align-middle desktop:w-27">
                  <MdDelete
                    onClick={() => handleDelete(index)}
                    className="laptop:h-6 laptop:w-8 text-red-500 laptop-lg:h-7 laptop-lg:w-10 inline-block desktop:h-9 desktop:w-12"
                  />
                </td>
              </tr>
            ))}
        </tbody>
      </table>
      {modal && <StudentModal setModal={setModal} />}
    </div>
  );
};

export default StudentData;
