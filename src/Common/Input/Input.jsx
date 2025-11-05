import React from "react";
import { IoMdEye } from "react-icons/io";

const Input = ({
  placeholder,
  type,
  value,
  onChange,
  name,
  onBlur,
  togglePasswordVisibility,
}) => {
  return (
    <div className="relative">
      <input
        className="border-3 px-5 py-2 font-medium border-gray-200 rounded-md w-full"
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        name={name}
        onBlur={onBlur}
      />

      {/* ✅ eye icon condition sahi likhi hai */}
      {(name === "schoolPassword" || name === "checkPassword") && (
        <IoMdEye
          onClick={togglePasswordVisibility}
          className="absolute right-3 bottom-3 cursor-pointer text-gray-500"
        />
      )}
    </div>
  );
};

export default Input;
