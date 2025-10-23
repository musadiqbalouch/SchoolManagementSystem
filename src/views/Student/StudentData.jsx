import React, { useEffect, useState } from "react";
import { MdDelete, MdEdit } from "react-icons/md";
import Dataheader from "../../Common/Dataheader/Dataheader";
import StudentDetail from "./StudentDetail";
import { GrView } from "react-icons/gr";
import Modal from "../../Common/Modal/Modal";
import StudentEditForm from "./StudentEditForm";
import DeleteStudent from "./DeleteStudent";
import AttendanceModal from "./AttendanceModal";

const StudentData = ({
  studentData,
  setStudentData,
  search,
  currentPost,
  firstPostIndex,
}) => {
  const [showModal, setShowModal] = useState(false);
  const [studentDetail, setStudentDetail] = useState(false);
  const [editItem, setEditItem] = useState(null);
  const [confirmDelete, setConfirmDelete] = useState(false);

  const [attendance, setAttendance] = useState(false);
  const [attvalue, setAttValue] = useState(null);

  // console.log(studentData);
  const toggleModal = () => {
    setShowModal(true);
  };

  const handleDelete = (index) => {
    let students = JSON.parse(localStorage.getItem("students")) || [];
    students.splice(index, 1);
    localStorage.setItem("students", JSON.stringify(students));
    setStudentData(students);
    setConfirmDelete(false);
  };

  useEffect(() => {
    setStudentData(JSON.parse(localStorage.getItem("students")) || []);
  }, []);

  const detail = () => {
    setStudentDetail(true);
  };

  const editList = (id) => {
    const updateItem = [...studentData];
    setEditItem(updateItem[id]);
  };

  let att = (id) => {
    const updateItem = [...studentData];
    setAttValue(updateItem[id]);
    setAttendance(true);
  };
  // console.log(attvalue);

  return (
    <div
      className={`p-0 w-full laptop:h-80 laptop-lg:h-100 m-auto flex flex-col gap-3 mt-3`}
    >
      <Dataheader title={"Student ID"} />

      <table className="w-full border-separate border-spacing-y-2">
        <tbody>
          {currentPost
            .filter((student) => {
              return search.toLowerCase() === ""
                ? student
                : student.studentName.toLowerCase().includes(search) ||
                    student.studentEmail.toLowerCase().includes(search);
            })
            .map((student, id) => (
              <tr
                key={id}
                className={`${
                  id % 2 === 0 ? `bg-[#EBF6FF80]` : ``
                } border shadow-md laptop-lg:text-sm laptop:text-sm laptop-lg:h-10 border-[#FFFFFF] rounded-md overflow-hidden`}
              >
                <td className="laptop:w-40 laptop-lg:w-48 laptop-lg:pl-2 text-center desktop:w-50">
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

                {/* Edit */}
                <td
                  onClick={toggleModal}
                  className="laptop:w-16 laptop-lg:w-25 laptop-lg:pl-2 text-center align-middle desktop:w-27"
                >
                  <MdEdit
                    onClick={() => editList(firstPostIndex + id)}
                    className="cursor-pointer laptop:h-6 laptop:w-8 text-blue-500 inline-block laptop-lg:h-7 laptop-lg:w-10 desktop:h-9 desktop:w-12"
                  />
                </td>

                {/* Delete */}
                <td className="laptop:w-16 laptop-lg:w-25 laptop-lg:pl-2 text-center align-middle desktop:w-27">
                  <MdDelete
                    onClick={() =>
                      setConfirmDelete(
                        () => () => handleDelete(firstPostIndex + id)
                      )
                    }
                    className="cursor-pointer laptop:h-6 laptop:w-8 text-red-500 laptop-lg:h-7 laptop-lg:w-10 inline-block desktop:h-9 desktop:w-12"
                  />
                </td>

                {/* View */}
                <td
                  onClick={detail}
                  className="cursor-pointer laptop:w-19 laptop-lg:w-25 laptop-lg:pl-2 text-center align-middle desktop:w-27"
                >
                  <GrView
                    onClick={() => editList(firstPostIndex + id)}
                    className="laptop:h-6 laptop:w-8 text-[#1F9B1B] inline-block laptop-lg:h-5 laptop-lg:w-8 desktop:h-9 desktop:w-12"
                  />
                </td>
                <td onClick={() => att(firstPostIndex + id)}>
                  {student.attendance ? student.attendance : "absent"}
                </td>
              </tr>
            ))}
        </tbody>
      </table>

      {showModal && (
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
            editItem={editItem}
            setStudentDetail={setStudentDetail}
          />
        </Modal>
      )}

      {confirmDelete && (
        <Modal>
          <DeleteStudent
            setConfirmDelete={setConfirmDelete}
            confirmDelete={confirmDelete}
          />
        </Modal>
      )}
      {attendance && (
        <Modal>
          <AttendanceModal
            setAttendance={setAttendance}
            attvalue={attvalue}
            currentPost={currentPost}
            setStudentData={setStudentData}
          />
        </Modal>
      )}
    </div>
  );
};

export default StudentData;
