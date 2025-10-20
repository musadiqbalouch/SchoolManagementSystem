import React, { useEffect, useState } from "react";
import { MdDelete, MdEdit } from "react-icons/md";
import Dataheader from "../../Common/Dataheader/Dataheader";
import StudentDetail from "./StudentDetail";
import { GrView } from "react-icons/gr";
import Modal from "../../Common/Modal/Modal";
import StudentEditForm from "./StudentEditForm";
import DeleteStudent from "./DeleteStudent";

const StudentData = ({
  studentData,
  setStudentData,
  search,
  currentPost,
  firstPostIndex,
}) => {
  const [confirmDelete, setConfirmDelete] = useState(false);

  const handleDelete = (index) => {
    let students = JSON.parse(localStorage.getItem("students")) || [];
    let teacher = JSON.parse(localStorage.getItem("loggedInUser")) || [];

    const filtred = students.filter((student) => {
      return student.teacherId === teacher.id;
    });
    filtred.splice(index, 1);
    localStorage.setItem("students", JSON.stringify(filtred));
    setStudentData(filtred);
    setConfirmDelete(false);
  };

  const [editItem, setEditItem] = useState(null);

  useEffect(() => {
    setStudentData(JSON.parse(localStorage.getItem("students")) || []);
  }, []);

  // editdata modal
  const [showmodal, setShowModal] = useState(false);
  // userdetailmodal
  // edit modal
  const handleModal = () => {
    setShowModal(true);
  };

  const finalArray = currentPost.filter((student) => {
    return search.toLowerCase() === ""
      ? student
      : student.studentName.toLowerCase().includes(search) ||
          student.studentEmail.toLowerCase().includes(search);
  });

  const [studentDetail, setStudentDetail] = useState(false);
  // userdetailmodal
  const Detail = () => {
    setStudentDetail(true);
  };

  const editlist = (id) => {
    const updateItem = [...studentData];
    console.log("🚀 ~ editlist ~ updateItem:", updateItem[id]);
    setEditItem(updateItem[id]);
  };
  return (
    <div
      className={`p-0 w-full m-auto flex  laptop:h-80  laptop-lg:h-100  flex-col gap-3 mt-3 `}
    >
      <Dataheader title={"Student ID"} />

      <table className="w-full bg-red400  border-separate border-spacing-y-2">
        <tbody>
          {/* filtering data */}
          {finalArray.map((student, id) => (
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
              </td>
              <td className=" cursor-pointer laptop:w-16 laptop-lg:w-25 laptop-lg:pl-2 text-center align-middle desktop:w-27">
                <MdDelete
                  onClick={() => {
                    setConfirmDelete(
                      () => () => handleDelete(firstPostIndex + id)
                    );
                  }}
                  className=" laptop:h-6 laptop:w-8 text-red-500 laptop-lg:h-7 laptop-lg:w-10 inline-block desktop:h-9 desktop:w-12"
                />
              </td>
              <td
                onClick={Detail}
                className="cursor-pointer laptop:w-19 laptop-lg:w-25 laptop-lg:pl-2 text-center align-middle desktop:w-27"
              >
                <GrView
                  onClick={() => editlist(firstPostIndex + id)}
                  className="laptop:h-6 laptop:w-8 text-[#1F9B1B] inline-block laptop-lg:h-5 laptop-lg:w-8 desktop:h-9 desktop:w-12"
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {showmodal && (
        <Modal>
          <StudentEditForm
            editItem={editItem}
            setShowModal={setShowModal}
            studentData={studentData}
            setStudentData={setStudentData}
          />
        </Modal>
      )}
      {studentDetail && (
        <Modal>
          <StudentDetail
            setStudentDetail={setStudentDetail}
            editItem={editItem}
          />
        </Modal>
      )}
      {confirmDelete && (
        <Modal>
          <DeleteStudent
            confirmDelete={confirmDelete}
            setConfirmDelete={setConfirmDelete}
          />
        </Modal>
      )}
    </div>
  );
};

export default StudentData;
