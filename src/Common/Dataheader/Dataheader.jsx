import React from "react";

const Dataheader = ({ title }) => {
  return (
    <div
      className="flex font-semibold laptop:text-base   text-lg w-full  bg-gray-200 py-2 px-12 gap-5 mt-5 m-auto
      shadow-sm border rounded-md laptop:px-2 laptop-lg:text-xl laptop-lg:px-5  desktop:text-2xl desktop:px-5 "
    >
      <h2 className="w-35  laptop:w30  laptop-lg:w-34 desktop:w-40">Name</h2>
      <h2 className="w-35 laptop:w20 laptop-lg:w-30 desktop:w-30">{title}</h2>
      <h2 className="w-70 laptop:w48  laptop-lg:w-80 desktop:w-80">
        Email address
      </h2>
      <h2 className="w-35 laptop:w25 laptop-lg:w-28 desktop:w-30">Class</h2>
      <h2 className="w-20 laptop:w15 laptop-lg:w-30 desktop:w-30">Gender</h2>
      <h2 className="w-10 laptop-lg:w-13 desktop:w-15">Edit</h2>
      <h2 className="w-10 laptop-lg:w-13 desktop:w-20">Delete</h2>
    </div>
  );
};

export default Dataheader;
