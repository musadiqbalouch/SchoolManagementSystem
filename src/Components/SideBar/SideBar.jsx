import React from "react";
import udamyIcon from "../../assets/UdamyIon.png";
import { Link } from "react-router-dom";
import { HiHome } from "react-icons/hi";
import { PiChalkboardTeacherBold } from "react-icons/pi";
import { PiStudentBold } from "react-icons/pi";
import { PiBankBold } from "react-icons/pi";
import { IoSettings } from "react-icons/io5";
import { GiNewspaper } from "react-icons/gi";
const SideBar = ({}) => {
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
    <div className="wfit bg-[#152259] flex flex-col px-8 py2 ">
      <div className="flex flex-col m-auto items-center justify-center p-5">
        <img
          className="h-13 w-15 object-cover rounded-[50%] "
          src={udamyIcon}
          alt=""
        />
        <h2 className="text-white font-medium mt-2 w-35 text-sm text-center ">
          Udemy Inter. school
        </h2>
      </div>
      {udamyDashboard.map((board, index) => (
        <Link
          to={board.path}
          key={index}
          className="flex flex-row gap-2 m-auto items-center justify-start text-sm
           px-3 py-3 w-40  bgred-400 cursor-pointer"
        >
          <span className="object-cover h-6 w-6 text-white mt-2">
            {board.image}
          </span>

          <h3 className="text-white font-medium ">{board.title}</h3>
        </Link>
      ))}
      <div
        className="flex flex-row gap-2 m-auto items-center justify-start text-sm
           px-3 py-3 w-40  bgred-400 h-46 cursor-pointer "
      >
        <PiBankBold className="object-cover h-6 w-6 text-white mt-2 gap-2" />
        <h3 className="text-white font-medium">Features</h3>
        <span className="text-black bg-[#B9D7F1] px-2 py1 rounded-3xl ">
          New
        </span>
      </div>
    </div>
  );
};

export default SideBar;
