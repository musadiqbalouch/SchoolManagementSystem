import React, { useEffect, useState } from "react";
import AddUserOption from "../../Common/AddUserOption/AddUserOption";
import SearchBar from "../../Common/SearchBar/SearchBar";
import LoginHeading from "../../Common/LoginHeading/LoginHeading";
import SupportBtn from "../../Common/SupportBtn/SupportBtn";
import NoNotification from "../../assets/nonotification.png";
import { Link } from "react-router-dom";
import StudentData from "./StudentData";
import Paginatation from "../../Common/Paginatation/Paginatation";
const Student = ({ isLoggedIn }) => {
  // filteringdata state
  const [search, setSearch] = useState("");
  let [data, setData] = useState(
    JSON.parse(localStorage.getItem("students")) || []
  );
  let teacher = JSON.parse(localStorage.getItem("loggedInUser")) || [];

  let fillteredData = data.filter((post) => post.teacherId === teacher.id);

  const [currentPage, setCurrentPage] = useState(1);
  const [dataPerPage, setDataPerPage] = useState(5);

  const lastPostIndex = currentPage * dataPerPage;
  const firstPostIndex = lastPostIndex - dataPerPage;
  const currentPost = fillteredData.slice(firstPostIndex, lastPostIndex);

  useEffect(() => {
    const totalPages = Math.ceil(fillteredData.length / dataPerPage);
    if (currentPage > totalPages && totalPages > 0) {
      setCurrentPage(1);
    }
  }, [fillteredData.length, dataPerPage, currentPage]);
  useEffect(() => {
    let items = JSON.parse(localStorage.getItem("students")) || [];
    setData(items);
  }, []);

  return (
    <div className=" container m-auto relative flex flex-col items-center justify-center w-full ">
      <Link to={"/studentForm"}>
        <AddUserOption
          StudentData={data}
          user={"Students"}
          addUser={"Add Students"}
        />
      </Link>
      <SearchBar
        setSearch={setSearch}
        placeholder={"Search for a student by name or email"}
      />
      {currentPost.length === 0 ? (
        <div
          className="bg-[#FCFAFA]  laptop:mr-0 laptop:m-3 mr-25 h-85 laptop:h-75 
             laptop-lg:w-247 laptop-lg:h-100 laptop:w-172 
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
        <>
          <StudentData
            search={search}
            currentPost={currentPost}
            studentData={fillteredData}
            setStudentData={setData}
            firstPostIndex={firstPostIndex}
          />
          {fillteredData.length > 5 ? (
            <Paginatation
              totalPages={fillteredData.length}
              postPerPage={dataPerPage}
              setCurrentPage={setCurrentPage}
              currentPage={currentPage}
            />
          ) : (
            ""
          )}
        </>
      )}
    </div>
  );
};

export default Student;
