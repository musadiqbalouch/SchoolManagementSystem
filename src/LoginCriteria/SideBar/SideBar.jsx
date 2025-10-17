import React from "react";
import udamyIcon from "../../assets/UdamyIon.png";
import { NavLink, useLocation } from "react-router-dom";
import { HiHome } from "react-icons/hi";
import {
  PiChalkboardTeacherBold,
  PiStudentBold,
  PiBankBold,
} from "react-icons/pi";
import { IoSettings } from "react-icons/io5";
import { GiNewspaper } from "react-icons/gi";

const SideBar = () => {
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
      title: "Student/classes",
    },
    {
      path: "/billing",
      image: <PiBankBold />,
      title: "Billing",
    },
    {
      path: "/setting",
      image: <IoSettings />,
      title: "Setting and profile",
    },
    {
      path: "/exam",
      image: <GiNewspaper />,
      title: "Exam",
    },
  ];
  return (
    <div className="bg-[#152259] h-screen  flex flex-col px-8 py2 laptop:w-55 laptop-lg:w-65  laptop:px-5  desktop:w-70  ">
      <div className="flex flex-col m-auto items-center justify-center p-5">
        <img
          className="h-13 w-15 object-cover rounded-[50%] "
          src={udamyIcon}
          alt=""
        />
        <h2 className="text-white font-medium mt-2 w-35  text-sm text-center laptop-lg:text-lg laptop-lg:w-45 desktop:text-lg desktop:w-45 ">
          Udemy Inter. school
        </h2>
      </div>
      <div>
        {udamyDashboard.map((board, index) => (
          <NavLink
            to={board.path}
            key={index}
            className={({ isActive }) =>
              isActive
                ? "flex flex-row gap-2 m-auto items-center justify-start text-sm px-3 py-1 ease-in duration-300 rounded-lg w-45 laptop-lg:w45  bg-[#509CDB] cursor-pointer desktop:w-45 desktop:text-lg "
                : " flex flex-row gap-2 m-auto items-center justify-start text-sm desktop:text-lg px-3 py-3 w-45 laptop-lg:w45  bgred-400 cursor-pointer  "
            }
          >
            <span className="object-cover h-6 w-6 text-white mt-2  desktop:h-8 desktop:w-8 desktop:mt-3">
              {board.image}
            </span>
            <h3 className="text-white font-medium ">{board.title}</h3>
          </NavLink>
        ))}
      </div>
      <div
        className="flex flex-row gap-2 m-auto items-center justify-center text-sm
           px-3 py-3 w-40 laptop:w-full  h-46 cursor-pointer "
      >
        <PiBankBold className="object-cover h-5 w-5 text-white mt-2 gap-2" />
        <h3 className="text-white font-medium laptop-lg:text-sm  desktop:text-lg ">
          Features
        </h3>
        <span className="text-black bg-[#B9D7F1] px-2 py1 rounded-3xl laptop-lg:text-sm laptop-lg:px-3 desktop:text-lg desktop:px-3 desktop:text-center ">
          New
        </span>
      </div>
    </div>
  );
};

export default SideBar;
