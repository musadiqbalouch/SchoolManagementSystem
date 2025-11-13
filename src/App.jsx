import React, { useEffect, useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SideBar from "./LoginCriteria/SideBar/SideBar";
import Navbar from "./LoginCriteria/Navbar/Navbar";
import Dashbaord from "./views/DashBoard";
import Exam from "./views/MarkAttendance";
import Setting from "./views/Setting";
import Student from "./views/Student/Index";
import TeacherPage from "./views/Teacher";
import Announcement from "./views/Announcement/index";
import StudentForm from "./views/Student/StudentForm";
import LogintoAccount from "./LoginCriteria/LogintoAccount/LogintoAccount";
import ChoosePassword from "./LoginCriteria/ChoosePassword/ChoosePassword";
import ChooseStaff from "./LoginCriteria/ChooseStaff/ChooseStaff";
import TeacherForm from "./views/Teacher/TeacherForm";
import LandingPage from "./Components/LandingPage/LandingPage";
import SchoolAccount from "./LoginCriteria/SchoolAccount/SchoolAccount";
import TeachersData from "./views/Teacher/TeachersData";
import StudentData from "./views/Student/StudentData";
import Studentinterface from "./Studentsinterface/Studentinterface";
import TeacherSubjectList from "./Studentsinterface/RegisterSubjects";
// import RegisteredStudents from "./views/TeacherStudents/RegisteredStudents";
import RegisteredStudents from "./views/TeacherStudents/RegisteredStudents";
import ViewAssignments from "./views/Teacher/ViewAssignments";
import StudentSubject from "./Studentsinterface/StudentSubject";
import AdminView from "./views/Announcement/AdminView";
import AttendanceModal from "./views/Student/AttendanceModal";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(
    localStorage.getItem("isLoggedIn") === "true"
  );
  useEffect(() => {
    localStorage.setItem("isLoggedIn", isLoggedIn);
  }, [isLoggedIn]);

  const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));

  return (
    <BrowserRouter>
      <div className=" desktop:flex desktop:w-full  flex w-full">
        {/* Sidebar  side bar  */}
        {isLoggedIn && (
          <div className=" desktop:w-fit  w-fit">
            <SideBar />
          </div>
        )}
        <div className=" desktop:w-full w-full ">
          {isLoggedIn && (
            <div>
              <Navbar setIsLoggedIn={setIsLoggedIn} />
            </div>
          )}
          {/* routes  */}
          <div className="desktop:w-full  w-full ">
            <ToastContainer />
            <>
              {/* if user is loggedin */}
              <Routes>
                {isLoggedIn ? (
                  <>
                    <Route
                      path="/"
                      element={
                        loggedInUser ? <Dashbaord /> : <Studentinterface />
                      }
                    />
                    <Route
                      path="/teacher"
                      element={
                        loggedInUser ? <TeacherPage /> : <TeacherSubjectList />
                      }
                    />
                    <Route
                      path="/student&classes"
                      element={
                        loggedInUser && loggedInUser.userName === "admin" ? (
                          <Student isLoggedIn={isLoggedIn} />
                        ) : (
                          <RegisteredStudents />
                        )
                      }
                    />
                    <Route path="//announcement" element={<Announcement />} />
                    <Route path="/assignment" element={<Setting />} />
                    <Route path="/exam" element={<Exam />} />
                    <Route path="/studentForm" element={<StudentForm />} />
                    <Route path="/teacherform" element={<TeacherForm />} />
                    <Route path="/teachersdata" element={<TeachersData />} />
                    <Route path="/studentData" element={<StudentData />} />

                    <Route
                      path="/registredSubjects"
                      element={<StudentSubject />}
                    />
                    <Route
                      path="/studentsAssignments"
                      element={<ViewAssignments />}
                    />
                    <Route path="/ViewAnnouncement" element={<AdminView />} />
                    <Route path="*" element={<Dashbaord />} />
                  </>
                ) : (
                  //  </div>
                  // if user in not logged in
                  <>
                    <Route path="/" element={<LandingPage />} />
                    <Route
                      path="/choosePassword"
                      element={<ChoosePassword />}
                    />
                    <Route path="/createAccount" element={<SchoolAccount />} />
                    <Route
                      path="/loginaccount"
                      element={<LogintoAccount setIsLoggedIn={setIsLoggedIn} />}
                    />
                    <Route path="/choosestaff" element={<ChooseStaff />} />
                    <Route path="*" element={<LandingPage />} />
                  </>
                )}
              </Routes>
            </>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
