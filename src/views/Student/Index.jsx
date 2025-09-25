import React from "react";
import AddUserOption from "../../Common/AddUserOption/AddUserOption";
import SearchBar from "../../Common/SearchBar/SearchBar";
import LoginHeading from "../../Common/LoginHeading/LoginHeading";
import SupportBtn from "../../Common/SupportBtn/SupportBtn";
import NoNotification from "../../assets/nonotification.png";
import { Link } from "react-router-dom";

const Student = () => {
  return (
    <div className="container m-auto relative ">
      <Link to={"/studentForm"}>
        <AddUserOption user={"Students"} addUser={"Add Students"} />
      </Link>
      <SearchBar />
      <div className="bg[#FCFAFA] gap-4 mr-8  h-80 w-230 bg-[#FCFAFA] mt-10 flex flex-col items-center content-center justify-center m-auto ">
        <img src={NoNotification} alt="" className="h-60 w-75 object-cover" />
        <LoginHeading heading={"No Teachers at this time"} />
        <h3 className="text-lg">
          Teachers will appear here after they enroll in your school.{" "}
        </h3>
        <SupportBtn />
      </div>
    </div>
  );
};

export default Student;
