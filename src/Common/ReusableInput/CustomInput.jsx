import React from "react";

const CustomInput = ({ type, placeholder, onChange, value }) => {
  return (
    <div>
      <input
        type={type}
        placeholder={placeholder}
        className={className}
        onChange={onChange}
        value={value}
      />
      ;
    </div>
  );
};

export default CustomInput;
