import React, { useEffect, useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SideBar from "./Components/SideBar/SideBar";
import Navbar from "./Components/Navbar/Navbar";
import Dashbaord from "./views/DashBoard";
import Exam from "./views/Exam";
import Setting from "./views/Setting";
import Student from "./views/Student/Index";
import TeacherPage from "./views/Teacher";
import Billing from "./views/Billing";
import StudentForm from "./views/Student/StudentForm";
import LogintoAccount from "./Components/LogintoAccount/LogintoAccount";
import ChoosePassword from "./Components/ChoosePassword/ChoosePassword";
import SchoolAccount from "./Components/SchoolAccount/SchoolAccount";
import ChooseStaff from "./Components/ChooseStaff/ChooseStaff";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  useEffect(() => {
    console.log("is logged in ", isLoggedIn);
  }, [isLoggedIn]);
  return (
    <BrowserRouter>
      <div className="flex gap-10 flexcol w-full bgred-400 ">
        {/* Sidebar  side bar  */}
        {isLoggedIn && (
          <div className="w-fit px10">
            <SideBar />
          </div>
        )}
        <div className="flex flex-col m-auto container  ">
          {isLoggedIn && (
            <div>
              <Navbar />
            </div>
          )}
          {/* routes  */}
          <div className="w-full">
            <>
              {/* if user is loggedin */}
              <Routes>
                {isLoggedIn ? (
                  <>
                    <Route path="/" element={<Dashbaord />} />
                    <Route path="/teacher" element={<TeacherPage />} />
                    <Route path="/student&classes" element={<Student />} />
                    <Route path="/billing" element={<Billing />} />
                    <Route path="/setting" element={<Setting />} />
                    <Route path="/exam" element={<Exam />} />
                    <Route path="/studentForm" element={<StudentForm />} />
                  </>
                ) : (
                  //  </div>
                  // if user in not logged in
                  <>
                    <Route path="/" element={<SchoolAccount />} />
                    <Route
                      path="/choosePassword"
                      element={<ChoosePassword />}
                    />
                    <Route
                      path="/loginaccount"
                      element={<LogintoAccount setIsLoggedIn={setIsLoggedIn} />}
                    />
                    <Route path="/choosestaff" element={<ChooseStaff />} />
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
