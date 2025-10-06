import React from "react";

const Dataheader = ({ title }) => {
  return (
    <div
      className="flex font-semibold laptop:text-base   text-lg w-full  bg-white py-2 gap-5 mt-5 m-auto
      shadow-sm border laptop:gap-3 rounded-md laptop:px-2 laptop-lg:gap-4 laptop-lg:text-lg laptop-lg:px-5  desktop:text-xl desktop:px-5 "
    >
      <h2 className=" laptop:w-40  laptop-lg:w-40 desktop:w-45">Name</h2>
      <h2 className="laptop:w-25  laptop-lg:w-30 desktop:w-30">{title}</h2>
      <h2 className="laptop:w-55  laptop-lg:w-82 desktop:w-85">
        Email address
      </h2>
      <h2 className="laptop:w-20  laptop-lg:w-28 desktop:w-30">Class</h2>
      <h2 className="laptop:w-15  laptop-lg:w-30 desktop:w-30">Gender</h2>
      <h2 className="laptop:w-10 laptop-lg:w-13  desktop:w-17">Edit</h2>
      <h2 className="laptop:w-13 laptop-lg:w-16 desktop:w-20">Delete</h2>
    </div>
  );
};

export default Dataheader;
