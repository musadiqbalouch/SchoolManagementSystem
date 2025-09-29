import React, { useEffect, useState } from "react";
import LoginHeading from "../../Common/LoginHeading/LoginHeading";
import SupportBtn from "../../Common/SupportBtn/SupportBtn";
import AddTeacherSection from "../../Common/AddUserOption/AddUserOption";
import SearchBar from "../../Common/SearchBar/SearchBar";
import { Link } from "react-router-dom";
import TeachersData from "./TeachersData";

const TeacherPage = () => {
  let [data, setData] = useState(
    JSON.parse(localStorage.getItem("teacher")) || []
  );

  useEffect(() => {
    let items = JSON.parse(localStorage.getItem("teacher")) || [];
    setData(items);
  }, []);

  return (
    <div className="container m-auto relative flex flex-col items-center justify-center w-full bgyellow-400">
      <Link to={"/teacherform"}>
        <AddTeacherSection user="Teacher" addUser="Add Teacher" />
      </Link>

      <SearchBar />
      {data.length === 0 ? (
        <div className="bg-[#FCFAFA] mr-25 h-85 w-230 bgred-400   mt-10 flex flex-col items-center justify-center m-auto text-center">
          <div>
            <LoginHeading heading="No Teachers at this time" />
            <h3 className="text-lg">
              Teachers will appear here after they enroll in your school.
            </h3>
            <SupportBtn />
          </div>
        </div>
      ) : (
        <TeachersData teacherData={data} settTeacherData={setData} />
      )}
    </div>
  );
};

export default TeacherPage;
