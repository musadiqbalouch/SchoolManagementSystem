import React from "react";
import company1logo from "../../assets/company1logo.png";
import company2logo from "../../assets/company2logo.png";
import company3logo from "../../assets/company3logo.png";
import company4logo from "../../assets/company4logo.png";
import company5logo from "../../assets/company5logo.png";
import company6logo from "../../assets/company6logo.png";

const TrustedbyCompany = () => {
  return (
    <div className="flex flex-col items-center justify-center m-auto w-full container p-10">
      <h1 className="text-black font-semibold text-3xl  desktop:text-4xl">
        Trusted by company like
      </h1>
      <div className="flex flex-col laptop:flex-row gap-10 laptop:gap-15 p-6 mt-5 items-center justify-center">
        <img
          className="h-8 w-8 laptop-lg:h-10 laptop-lg:w-10 desktop:h-10 desktop:w-10 "
          src={company6logo}
          alt=""
        />
        <img
          className="h-8 w-8 laptop-lg:h-10 laptop-lg:w-10 desktop:h-10 desktop:w-10 "
          src={company1logo}
          alt=""
        />
        <img
          className="h-8 w-8 laptop-lg:h-10 laptop-lg:w-10  desktop:h-10 desktop:w-10"
          src={company2logo}
          alt=""
        />
        <img
          className="h-8 w-8 laptop-lg:h-10 laptop-lg:w-10 desktop:h-10 desktop:w-10"
          src={company3logo}
          alt=""
        />
        <img
          className="h-8 w-8 laptop-lg:h-10 laptop-lg:w-10 desktop:h-10 desktop:w-10"
          src={company4logo}
          alt=""
        />
        <img
          className="h-8 w-8 laptop-lg:h-10 laptop-lg:w-10 desktop:h-10 desktop:w-10 "
          src={company5logo}
          alt=""
        />
      </div>
    </div>
  );
};

export default TrustedbyCompany;
