import React from "react";
// import Form from "../../Common/Form/Form";
import { HiOutlinePlusCircle } from "react-icons/hi2";
const TeacherForm = () => {
  return (
    <div className="flex flex-col mauto items-start justify-start m-5  bg-white border-2 border-gray-500 rounded-md p-10">
      <div className="flex flex-col gap-3 text-gray-500 px-10 relative">
        <h1 className="text-3xl font-semibold ">Add Student</h1>
        <div className="flex gap-5 text-base font-semibold  justify-start items-center ">
          <h2>Manually</h2>
          <h2>Import CSV</h2>
        </div>
        <label className="flex flex-col absolute left-120">
          Designation
          <input
            type="text"
            name=""
            id=""
            className="border-2 py-1 px-2 rounded-md border-gray-500 w-60"
          />
        </label>
      </div>
      <form className="flex flex-row h-fit flex-wrap gap-4 bg-purple-200 px-8 py-2  text-gray-500 mt-3  items-centre  justify-start content-center">
        <label className="flex flex-col ">
          Name
          <input
            className="border-2 py-1 px-2 rounded-md border-gray-500 w-160"
            type="text"
            name=""
            id=""
          />
        </label>
        <label className="flex flex-col w-70">
          Email address
          <input
            type="email"
            className="border-2 py-1 px-2 rounded-md border-gray-500 "
          />
        </label>
        <select
          id="class"
          className="border-2  h-9 w-45 mt-5 px-2 py-0 rounded-md border-gray-500 "
        >
          <option>Class</option>
        </select>
        <select
          id="gender"
          className="border-2  h-9 w-45 mt-5 px-2 py-0 rounded-md border-gray-500"
        >
          <option>Gender</option>
          <option>Male</option>
          <option>Female</option>
        </select>
        <label className="flex flex-col">
          Password
          <input
            type="password"
            className="border-2 py-1 px-2 rounded-md border-gray-500 w-70"
          />
        </label>
        <label className="flex flex-col w-50">
          Phone Number
          <input
            type="number"
            name=""
            id=""
            className="border-2 py-1 px-2 rounded-md border-gray-500 w-70"
          />
        </label>
        <select className="border-2  h-9 w7 mt-5 px-2 py-0 rounded-md border-gray-500 w-full">
          <option value="">Subject</option>
          <option value="">Science</option>
          <option value="">Physics</option>
          <option value="">English</option>
          <option value="">Math</option>
        </select>

        <span className="flex gap-2 items-center">
          <HiOutlinePlusCircle className="h-7 w-6 " />
          Add another
        </span>

        <button className="text-center bg-gray-500 text-black px-4 py-1 rounded-md font-semibold wfull">
          Add Teacher
        </button>
      </form>
    </div>
  );
};

export default TeacherForm;
