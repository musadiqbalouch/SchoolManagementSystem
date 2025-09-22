import React from "react";
import { HiOutlinePlusCircle } from "react-icons/hi2";

const Form = ({ button }) => {
  return (
    <div>
      <form className="flex flex-row flex-wrap gap-8  p-8  text-gray-500 mt-3  items-centre  justify-start content-center">
        <label className="flex flex-col ">
          Name
          <input
            className="border-2 py-1 px-2 rounded-md border-gray-500 w-50"
            type="text"
            name=""
            id=""
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
        <label className="flex flex-col w-60">
          Email address
          <input
            type="email"
            className="border-2 py-1 px-2 rounded-md border-gray-500 "
          />
        </label>
        <label className="flex flex-col w-60">
          Phone Number
          <input
            type="number"
            name=""
            id=""
            className="border-2 py-1 px-2 rounded-md border-gray-500 w-60"
          />
        </label>
        <label className="flex flex-col">
          Password
          <input
            type="password"
            className="border-2 py-1 px-2 rounded-md border-gray-500 w-60"
          />
        </label>
        <span className="flex gap-2 items-center">
          <HiOutlinePlusCircle className="h-7 w-6 " />
          Add another
        </span>
        <button className="text-center bg-gray-500 text-black px-4 py-2 rounded-md font-semibold">
          {button}
        </button>
      </form>
    </div>
  );
};

export default Form;
