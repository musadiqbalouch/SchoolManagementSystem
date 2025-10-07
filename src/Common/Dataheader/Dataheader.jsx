import React from "react";

const Dataheader = ({ title }) => {
  return (
    <table className="w-full">
      <thead className="border border-black laptop:h-10 laptop-lg:h-10 text-base">
        <tr>
          <th className="laptop:w-42 laptop-lg:w-48 laptop-lg:pl-2 desktop:w-50 font-normal">
            Name
          </th>
          <th className="laptop:w-25 laptop-lg:w-20 laptop-lg:pl-2 desktop:w-22 font-normal">
            {title}
          </th>
          <th className="laptop:w-60 laptop-lg:w-65 laptop-lg:pl-2 desktop:w-67 font-normal">
            Email address
          </th>
          <th className="laptop:w-20 laptop-lg:w-25 laptop-lg:pl-2 desktop:w-27 font-normal">
            Class
          </th>
          <th className="laptop:w-20 laptop-lg:w-25 laptop-lg:pl-2 desktop:w-27 font-normal">
            Gender
          </th>
          <th className="laptop:w-20 laptop-lg:w-25 laptop-lg:pl-2 desktop:w-27 font-normal">
            Edit
          </th>
          <th className="laptop:w-20 laptop-lg:w-25 laptop-lg:pl-2 desktop:w-27 font-normal">
            Delete
          </th>
        </tr>
      </thead>
    </table>
  );
};

export default Dataheader;
