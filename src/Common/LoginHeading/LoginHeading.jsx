import React from "react";

const LoginHeading = ({ heading }) => {
  return (
    <div>
      <h1 className="text-gray-600 text-4xl font-semibold  w-170 text-center  ">
        {heading}
      </h1>
    </div>
  );
};

export default LoginHeading;
