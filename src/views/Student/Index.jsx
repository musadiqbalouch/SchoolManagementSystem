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
    <div className="container m-auto relative flex flex-col items-center justify-center w-full bgyellow-400">
      <Link to={"/studentForm"}>
        <AddUserOption user={"Students"} addUser={"Add Students"} />
      </Link>
      <SearchBar />
      {data.length === 0 ? (
        <div className="bg-[#FCFAFA] mr-25 h-85 w-230 mt-10 flex flex-col items-center justify-center m-auto text-center gap-4">
          <img
            src={NoNotification}
            alt="No Students"
            className="h-60 w-75 object-cover "
          />
          <LoginHeading heading="No Students at this time" />
          <h3 className="text-lg">
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
