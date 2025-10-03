import React, { useEffect, useState } from "react";
import AddUserOption from "../../Common/AddUserOption/AddUserOption";
import SearchBar from "../../Common/SearchBar/SearchBar";
import LoginHeading from "../../Common/LoginHeading/LoginHeading";
import SupportBtn from "../../Common/SupportBtn/SupportBtn";
import NoNotification from "../../assets/nonotification.png";
import { Link } from "react-router-dom";
import StudentData from "./StudentData";
const Student = () => {
  let [data, setData] = useState(
    JSON.parse(localStorage.getItem("students")) || []
  );

  useEffect(() => {
    let items = JSON.parse(localStorage.getItem("students")) || [];
    setData(items);
  }, []);
  return (
    <div className=" m-auto relative flex flex-col items-center justify-center w-full ">
      <Link to={"/studentForm"}>
        <AddUserOption user={"Students"} addUser={"Add Students"} />
      </Link>
      <SearchBar placeholder={"Search for a student by name or email"} />
      {data.length === 0 ? (
        <div
          className="bg-[#FCFAFA]  laptop:mr-0 laptop:m-3 mr-25 h-85 laptop:h-75 
             laptop-lg:w-234 laptop-lg:h-100 laptop:w-172 
             mt-10 flex flex-col items-center justify-center m-auto text-center gap-4 
             desktop:w-235 desktop:h-100"
        >
          <img
            src={NoNotification}
            alt="No Students"
            className="h-60 w-75 object-cover 
               laptop:h-45 laptop:w-60 
               laptop-lg:h-60 laptop-lg:w-70 
               desktop:h-80 desktop:w-100"
          />
          <LoginHeading heading="No Students at this time" />
          <h3 className="text-lg text-[#4F4F4F] laptop-lg:text-xl desktop:text-2xl">
            Students will appear here after they enroll in your school.
          </h3>
          <SupportBtn />
        </div>
      ) : (
        <StudentData studentData={data} setStudentData={setData} />
      )}
    </div>
  );
};

export default Student;
