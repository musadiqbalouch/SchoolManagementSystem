import React from "react";

const LoginHeading = ({ heading }) => {
  return (
    <div>
      <h1 className="text-gray-600 text-2xl font-semibold  w-170 text-center laptop-lg:text-4xl desktop:text-4xl  ">
        {heading}
      </h1>
    </div>
  );
};

export default LoginHeading;
