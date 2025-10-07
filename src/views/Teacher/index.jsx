import React, { useEffect, useState } from "react";
import LoginHeading from "../../Common/LoginHeading/LoginHeading";
import SupportBtn from "../../Common/SupportBtn/SupportBtn";
import AddTeacherSection from "../../Common/AddUserOption/AddUserOption";
import SearchBar from "../../Common/SearchBar/SearchBar";
import { Link } from "react-router-dom";
import TeachersData from "./TeachersData";
import AddUserOption from "../../Common/AddUserOption/AddUserOption";

const TeacherPage = () => {
  let [data, setData] = useState(
    JSON.parse(localStorage.getItem("teacher")) || []
  );
  // const [searchTerm, setSearchTerm] = useState("");
  useEffect(() => {
    let items = JSON.parse(localStorage.getItem("teacher")) || [];
    setData(items);
  }, []);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div className="container m-auto relative flex flex-col items-center  w-full  ease-in duration-200">
      <Link to={"/teacherform"}>
        <AddUserOption
          TeachersData={data}
          user="Teacher"
          addUser="Add Teacher"
        />
      </Link>

      <SearchBar placeholder={"Search for a teachers by name or email"} />
      {data.length === 0 ? (
        <div
          className="bg-[#FCFAFA]  laptop:m-3 mr-25 h-85  laptop:h-75 laptop-lg:w-233 laptop-lg:h-100  laptop:w-177 w-230 bgred-400 
          mt-10 flex flex-col items-center justify-center m-auto text-center desktop:w-235 desktop:h-100  "
        >
          <div>
            <LoginHeading heading="No Teachers at this time" />
            <h3 className="text-sm text-[#4F4F4F] laptop-lg:text-xl  desktop:text-2xl ">
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
