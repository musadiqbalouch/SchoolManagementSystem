import React from "react";
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

function App() {
  return (
    <BrowserRouter>
      <div className="flex gap-4 w-full bgred-400">
        {/* Sidebar  side bar  */}
        <div className="">
          <SideBar />
        </div>
        <div className="flex flex-col  ">
          <div>
            {/* navbar  */}
            <Navbar />
          </div>
          {/* routes  */}
          <div className="w-full">
            <Routes>
              <Route path="/" element={<Dashbaord />} />
              <Route path="/teacher" element={<TeacherPage />} />
              <Route path="/student&classes" element={<Student />} />
              <Route path="/billing" element={<Billing />} />
              <Route path="/setting" element={<Setting />} />
              <Route path="/exam" element={<Exam />} />
              <Route path="/studentForm" element={<StudentForm />} />
            </Routes>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
