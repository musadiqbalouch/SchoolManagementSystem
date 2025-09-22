import React from "react";
import LoginHeading from "../../Common/LoginHeading/LoginHeading";
import SupportBtn from "../../Common/SupportBtn/SupportBtn";
import AddTeacherSection from "../../Common/AddUserOption/AddUserOption";
import SearchBar from "../../Common/SearchBar/SearchBar";
import { Link } from "react-router-dom";
const TeacherPage = () => {
  return (
    <div>
      <Link to={"/teacherform"}>
        <AddTeacherSection user={"Teacher"} addUser={"Add Teacher"} />
      </Link>
      <SearchBar />
      <div className="bg[#FCFAFA] mr-8  h-80 w-230 bg-[#FCFAFA] mt-10 flex flex-col items-center content-center justify-center m-auto ">
        <LoginHeading heading={"No Teachers at this time"} />
        <h3 className="text-lg">
          Teachers will appear here after they enroll in your school.{" "}
        </h3>
        <SupportBtn />
      </div>
    </div>
  );
};

export default TeacherPage;
