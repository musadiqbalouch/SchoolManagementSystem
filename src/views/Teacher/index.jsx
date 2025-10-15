import React, { useEffect, useState } from "react";
import LoginHeading from "../../Common/LoginHeading/LoginHeading";
import SupportBtn from "../../Common/SupportBtn/SupportBtn";
import AddTeacherSection from "../../Common/AddUserOption/AddUserOption";
import SearchBar from "../../Common/SearchBar/SearchBar";
import { Link } from "react-router-dom";
import TeachersData from "./TeachersData";
import AddUserOption from "../../Common/AddUserOption/AddUserOption";
import Paginatation from "../../Common/Paginatation/Paginatation";

const TeacherPage = () => {
  let [data, setData] = useState(
    JSON.parse(localStorage.getItem("teacher")) || []
  );

  const [currentPage, setCurrentPage] = useState(1);
  const [dataPerPage, setDataPerPage] = useState(5);

  const lastPostIndex = currentPage * dataPerPage;
  const firstPostIndex = lastPostIndex - dataPerPage;
  const currentPost = data.slice(firstPostIndex, lastPostIndex);

  const [search, setSearch] = useState("");
  useEffect(() => {
    let items = JSON.parse(localStorage.getItem("teacher")) || [];
    setData(items);
  }, []);
  return (
    <div className="container m-auto relative flex flex-col items-center  w-full  ease-in duration-200">
      <Link to={"/teacherform"}>
        <AddUserOption
          TeachersData={data}
          user="Teacher"
          addUser="Add Teachers"
        />
      </Link>

      <SearchBar
        setSearch={setSearch}
        placeholder={"Search for a teachers by name or email"}
      />
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
        <>
          <TeachersData
            search={search}
            currentPost={currentPost}
            teacherData={data}
            settTeacherData={setData}
            firstPostIndex={firstPostIndex}
          />
          <Paginatation
            totalPages={data.length}
            postPerPage={dataPerPage}
            setCurrentPage={setCurrentPage}
            currentPage={currentPage}
          />
        </>
      )}
    </div>
  );
};

export default TeacherPage;
