// import React, { useState } from "react";
import logo from "../../assets/statisdalogo.png";
import heroSectionimage from "../../assets/heroSectionimage.png";
import { Link } from "react-router-dom";

const Navbar2 = () => {
  return (
    <>
      <div className="bg-[#100F57] maxh[110vh]  flex flex-col  w-full items-center overflow-visible ">
        <div className="flex items-center  justify-evenly p-5 container m-auto">
          <div>
            <img className="h-6 w-25 object-cover" src={logo} alt="" />
          </div>
          <div className="text-white flex flex-row gap-10">
            <h2>Home</h2>
            <h2>Pricing</h2>
            <h2>Use cases</h2>
            <h2>Location</h2>
            <h2>FAQ</h2>
            <h2>Company</h2>
          </div>
          <div>
            <Link
              to={"/loginAcount"}
              className="text-white bg-[#0A92DD] px-4 py-1 rounded-xl font-semibold"
            >
              Login
            </Link>
          </div>
        </div>
        <div className="flex  flex-col items-center justify-center gap-3">
          <h3 className="text-[#D89925] mt-10 mb-4  border-[#FFFFFF] border-1 w-fit px-3 py-1 backdrop-blur-2xl font-semibold rounded-2xl ">
            Get your free consultation now
          </h3>
          <h2 className="text-4xl font-semibold text-white w-100 text-center">
            Manage your team easily with task man
          </h2>
          <p className="text-white font-normal w-100 text-center p-2">
            Statisdaa is a school management solution that offers a personalized
            portal to each type of user,
          </p>
          <button className="text-white bg-[#0A92DD] px-4 py-2 rounded-3xl font-semibold">
            Get started
          </button>
        </div>
        <img
          className="object-cover h-140 w-200 m-10 rounded-2xl "
          src={heroSectionimage}
          alt=""
        />
      </div>
    </>
  );
};

export default Navbar2;
