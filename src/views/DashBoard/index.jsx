import React from "react";
import LoginHeading from "../../Common/LoginHeading/LoginHeading";
import admin from "../../assets/admin.png";
import addClass from "../../assets/addClass.png";
import addStudent from "../../assets/addStudent.png";
import SupportBtn from "../../Common/SupportBtn/SupportBtn";

const DashboardPage = () => {
  const items = [
    {
      image: admin,
      title: "Add other admins",
      paragraph:
        " Create rich course content and coaching products for your students. When you give them a pricing plan, they’ll appear on your site!",
    },
    {
      image: addClass,
      title: "Add classes",
      paragraph:
        " Create rich course content and coaching products for your students. When you give them a pricing plan, they’ll appear on your site!",
    },
    {
      image: addStudent,
      title: "Add students",
      paragraph:
        " Create rich course content and coaching products for your students. When you give them a pricing plan, they’ll appear on your site!",
    },
  ];

  return (
    <div className="flex flex-col items-center content-center relative container m-auto">
      <div className="h-30 bgpurple-500 text-[#4F4F4F] font-semibold px-45 flex flex-col gap-3 mt-5 py-5">
        <h1 className="text-3xl  ">Welcome to your dashboard, Udemy school</h1>
        <h3 className="text-2xl mx-15">Uyo/school/@teachable.com</h3>
      </div>
      {items.map((item) => (
        <div className="flex items-center w-fit py-2 px-5 bgamber-400 gap-4 text-[#4F4F4F] mt-5">
          <img className="mb-7 object-cover" src={item.image} alt="" />
          <div>
            <h2 className="text-2xl font-semibold">{item.title}</h2>
            <p>
              Create rich course content and coaching products for your
              students.
              <br /> When you give them a pricing plan, they’ll appear on your
              site!
            </p>
          </div>
        </div>
      ))}
      <SupportBtn />
    </div>
  );
};

export default DashboardPage;
