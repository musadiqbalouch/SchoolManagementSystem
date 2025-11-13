import React from "react";
import udamyIcon from "../../assets/UdamyIon.png";
import { NavLink, useLocation } from "react-router-dom";
import { HiHome } from "react-icons/hi";
import {
  PiChalkboardTeacherBold,
  PiStudentBold,
  PiBankBold,
} from "react-icons/pi";
import { GiNewspaper } from "react-icons/gi";
import { LuNotebookPen } from "react-icons/lu";
import { TfiAnnouncement } from "react-icons/tfi";

const SideBar = () => {
  const loggedInStudent = JSON.parse(localStorage.getItem("loggedInStudent"));
  const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
  // console.log("🚀 ~ SideBar ~ loggedInUser:", loggedInUser);

  const udamyDashboard = [
    {
      path: "/",
      image: <HiHome />,
      title: "Dashboard",
    },
    {
      path: "/teacher",
      image: <PiChalkboardTeacherBold />,
      title: "Teacher",
    },
    {
      path: "/student&classes",
      image: <PiStudentBold />,
      title: "Student",
    },
    {
      path: "/assignment",
      image: <LuNotebookPen />,
      title: "Assigment",
    },
    {
      path: "/exam",
      image: <GiNewspaper />,
      title: "Mark Attendance",
    },
    {
      path: "/announcement",
      image: <TfiAnnouncement />,
      title: "Announcement",
    },
  ];
  // const updateTitle = udamyDashboard.map((item, index) => {
  //   if (loggedInUser && loggedInUser.userName === "admin") {
  //     index[2].title === "students";
  //   } else {
  //     index[2].title === "registred STUDENT";
  //   }
  // });
  return (
    <div className="bg-[#152259] h-screen flex flex-col items-center laptop:w-55 laptop-lg:w-65 laptop:px-5 desktop:w-70">
      {/* Top Logo Section */}
      <div className="flex flex-col items-center justify-center mt-10">
        <img
          className="h-13 w-15 object-cover rounded-full"
          src={udamyIcon}
          alt="Udemy Logo"
        />
        <h2 className="text-white font-medium mt-2 text-center text-sm laptop-lg:text-lg desktop:text-lg">
          Udemy Inter. school
        </h2>
        {/* Title ke neeche 10px ka gap */}
        <div className="mt-[10px] w-full"></div>
      </div>

      {/* Dashboard Links Section */}
      <div className="flex flex-col gap-5 mt-10 flexgrow justify-center w-full">
        {udamyDashboard.map((board, index) => (
          <NavLink
            to={board.path}
            key={index}
            className={({ isActive }) => {
              // Conditional visibility based on user role
              if (loggedInStudent && index === 2) return "hidden";
              if (
                !loggedInStudent &&
                loggedInUser?.userName !== "admin" &&
                index === 1
              )
                return "hidden";
              if (
                loggedInUser?.userName === "admin" &&
                (index === 3 || index === 4)
              )
                return "hidden";
              if (loggedInStudent && index === 4) return "hidden";

              return isActive
                ? "flex flex-row  gap-2 items-center justify-start text-sm px-3 py-1 rounded-lg w-45 laptop-lg:w45 bg-[#509CDB] cursor-pointer desktop:text-lg m-auto"
                : "flex flex-row  gap-2 items-center justify-start text-sm px-3 py-3 w-45 laptop-lg:w45 cursor-pointer desktop:text-lg m-auto";
            }}
          >
            <span className="h-6 w-6 text-white desktop:h-8 desktop:w-8">
              {board.image}
            </span>
            <h3 className="text-white font-medium">{board.title}</h3>
          </NavLink>
        ))}
      </div>

      {/* Features button is commented out, layout intact */}
      {/*
      <div className="flex flex-row gap-2 m-auto items-center justify-center text-sm px-3 py-3 w-40 laptop:w-full h-46 cursor-pointer">
        <PiBankBold className="h-5 w-5 text-white mt-2" />
        <h3 className="text-white font-medium laptop-lg:text-sm desktop:text-lg">Features</h3>
        <span className="text-black bg-[#B9D7F1] px-2 py-1 rounded-3xl laptop-lg:text-sm laptop-lg:px-3 desktop:text-lg desktop:px-3 desktop:text-center">New</span>
      </div>
      */}
    </div>
  );
};

export default SideBar;
