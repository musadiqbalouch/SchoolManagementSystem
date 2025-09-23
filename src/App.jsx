import React, { useEffect, useState } from "react";
import "./App.css";
// import Navbar2 from "./Components/Navbar/Navbar2";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SideBar from "./LoginCriteria/SideBar/SideBar";
import Navbar from "./LoginCriteria/Navbar/Navbar";
import Dashbaord from "./views/DashBoard";
import Exam from "./views/Exam";
import Setting from "./views/Setting";
import Student from "./views/Student/Index";
import TeacherPage from "./views/Teacher";
import Billing from "./views/Billing";
import StudentForm from "./views/Student/StudentForm";
import LogintoAccount from "./LoginCriteria/LogintoAccount/LogintoAccount";
import ChoosePassword from "./LoginCriteria/ChoosePassword/ChoosePassword";
import SchoolAccount from "./LoginCriteria/SchoolAccount/SchoolAccount";
import ChooseStaff from "./LoginCriteria/ChooseStaff/ChooseStaff";
import TeacherForm from "./views/Teacher/TeacherForm";
import Navbar2 from "./Components/Navbar/Navbar2";
import TrustedbyCompany from "./Components/TrustedbyCompany/TrustedbyCompany";
import CreateTask from "./Components/CreateTask/CreateTask";
import HoldingPhone from "./Components/HoldingPhoneSection/HoldingPhone";
import Cards from "./Components/Cards/Cards";
import OptionFromCustomer from "./Components/OptionFromCustomer/OptionFromCustomer";
import KeyboardSection from "./Components/KeyboardSection/KeyboardSection";
import Footer from "./Common/Footer/Footer";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  useEffect(() => {
    console.log("is logged in ", isLoggedIn);
  }, [isLoggedIn]);

  return (
    <BrowserRouter>
      <div className="flex   w-full bgred-400 ">
        {/* Sidebar  side bar  */}
        {isLoggedIn && (
          <div className="w-fit">
            <SideBar />
          </div>
        )}
        <div className="flex flex-col m-auto mt-0 container  ">
          {isLoggedIn && (
            <div>
              <Navbar setIsLoggedIn={setIsLoggedIn} />
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
                    <Route path="/teacherform" element={<TeacherForm />} />
                  </>
                ) : (
                  //  </div>
                  // if user in not logged in
                  <>
                    <Route path="/" element={<TrustedbyCompany />} />
                    <Route
                      path="/choosePassword"
                      element={<ChoosePassword />}
                    />
                    <Route
                      path="/loginaccount"
                      element={<LogintoAccount setIsLoggedIn={setIsLoggedIn} />}
                    />
                    <Route path="/choosestaff" element={<ChooseStaff />} />
                    <Route path="/loginAcount" element={<LogintoAccount />} />
                  </>
                )}
              </Routes>
            </>
          </div>
        </div>
      </div>
      <Navbar2 />
      {/* <TrustedbyCompany /> */}
      <CreateTask />
      <HoldingPhone />
      <Cards />
      <OptionFromCustomer />
      <KeyboardSection />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
