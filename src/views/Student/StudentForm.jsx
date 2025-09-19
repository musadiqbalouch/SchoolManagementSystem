import React from "react";

const StudentForm = () => {
  return (
    <div className="flex flex-col m-auto items-start justify-start bg-white border-2 border-black p-10">
      <div className="flex flex-col gap-3 text-gray-500">
        <h1 className="text-3xl font-semibold ">Add Student</h1>
        <div className="flex gap-5 text-base font-semibold">
          <h2>Manually</h2>
          <h2>Import CSV</h2>
        </div>
      </div>
      <form className="flex flex-row flex-wrap gap-5 text-gray-500 mt-3">
        <label className="flex flex-col ">
          Name
          <input
            className="border-2 py-1 px-2  border-black"
            type="text"
            name=""
            id=""
          />
        </label>
        <select id="class" className="border border-black w-40 px-2 py-0">
          <option>Class</option>
        </select>
        {/* <select id="gender">
          <option>Gender</option>
          <option>Male</option>
          <option>Female</option>
        </select>
        <label className="flex flex-col">
          Email address
          <input type="email" />
        </label>
        <label className="flex flex-col">
          Phone Number
          <input type="number" name="" id="" />
        </label>
        <label>
          Password
          <input type="number" />
        </label> */}
      </form>
    </div>
  );
};

export default StudentForm;
