import React from "react";
// import { FaRegEyeSlash } from "react-icons/fa";

const Input = ({ placeholder, type }) => {
  return (
    <input
      className="border-3 px-5 py-2  font-medium border-gray-200 rounded-md w-full "
      type={type}
      placeholder={placeholder}
    />
  );
};

export default Input;
