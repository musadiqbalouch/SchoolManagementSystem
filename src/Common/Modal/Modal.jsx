import React from "react";
import { ImCross } from "react-icons/im";
const Modal = ({ setShowModal }) => {
  let data = JSON.parse(localStorage.getItem("teacher")) || [];
  console.log(data);
  return (
    <div className="fixed  flex ml-60 -mt-80  ">
      <div className="w[150px] h[70px] h-80  w-150 relative bg-[#B1B5C8] rounded-2xl     ">
        <ImCross
          onClick={() => setShowModal(false)}
          className=" flex items-end justify-end absolute left-140 top-2 h-5 w-5 cursor-pointer "
        />
        <h1 className="text-center mt-4 text-2xl font-semibold">
          Edit Student Data
        </h1>
        <form className="flex flex-row flex-wrap p-2 gap-5 items-center justify-center">
          <label className="flex flex-col text-lg font-medium ">
            Name
            <input
              type="text"
              placeholder="Edit name"
              className="border-2 border-black w-50 px-2 py-1 rounded-md"
            />
          </label>
          <label className="flex flex-col w-50 text-lg font-medium">
            Email Address
            <input
              type="text"
              placeholder="Edit Email"
              className="border-2 border-black px-2 py-1 rounded-md"
            />
          </label>
          <select className="flex w-50  border-2 border-black px-2 py-1 rounded-md">
            <option>Subject</option>
            <option>Science</option>
            <option>Physics</option>
            <option>English</option>
            <option>Math</option>
          </select>
          <select className="flex w-50 border-2 border-black px-2 py-1 rounded-md">
            <option>Class</option>
            <option>9th</option>
            <option>10th</option>
            <option>firstyear</option>
            <option>secondyear</option>
          </select>
          <select className="w-50 border-2 border-black px-2 py-1 rounded-md">
            <option>Male</option>
            <option>Female</option>
          </select>
          <button className="w-95 py-1 rounded-md text-lg font-semibold bg-[#509CDB]">
            Save Edit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Modal;
