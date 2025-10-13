import React from "react";

const Button = ({ type, disabled }) => {
  return (
    <div>
      <button
        className="bg-blue-500 w-75 h8 p-1 rounded-md text-white font-semibold cursor-pointer "
        type={type}
        disabled={disabled}
      >
        Next
      </button>
    </div>
  );
};

export default Button;
