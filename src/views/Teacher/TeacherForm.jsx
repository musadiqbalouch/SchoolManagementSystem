import React, { useState } from "react";
import { HiOutlinePlusCircle } from "react-icons/hi2";
import { useNavigate } from "react-router-dom";
const TeacherForm = () => {
  const navigate = useNavigate();
  const teacherData = () => {
    navigate("/teacher");
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    let teachers = {
      teacherdesignation: designation,
      teacherName: name,
      teacherEmail: email,
      teacherPassword: password,
      teacherNumber: number,
      teacherGender: gender,
      teacherClassname: className,
      teacherSubject: subject,
    };

    let data = JSON.parse(localStorage.getItem("teacher")) || [];
    data.push(teachers);
    console.log(data);
    localStorage.setItem("teacher", JSON.stringify(data));
    console.log(data);
    setDesignation("");
    setName("");
    setEmail("");
    setPassword("");
    setNumber("");
    setGender("");
    setClassName("");
    setSubject("");
  };
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [number, setNumber] = useState("");
  const [gender, setGender] = useState("");
  const [className, setClassName] = useState("");
  const [subject, setSubject] = useState("");
  const [designation, setDesignation] = useState("");

  // let validatation =
  //   name === "" ||
  //   email === "" ||
  //   password === "" ||
  //   number === "" ||
  //   gender === "" ||
  //   className === "" ||
  //   subject === "" ||
  //   designation === "";

  return (
    <div className="flex items-center justify-center bg-[#FCFAFA] desktop:mt-10  p4">
      <div className="flex flex-col w-full max-w-4xl bg-white border-2 border-gray-500 rounded-md p-10 laptop:p-5 laptop:m-2 mx-auto">
        <div className="flex flex-col gap-3 text-gray-500 px-10 laptop:px-7">
          <h1 className="text-3xl font-semibold laptop-lg:text-3xl desktop:text-4xl">
            Add Teacher
          </h1>
          <div className="flex gap-5 text-base font-semibold justify-start items-center laptop-lg:text-xl desktop:text-2xl">
            <h2>Manually</h2>
            <h2>Import CSV</h2>
          </div>
        </div>
        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 laptop:grid-cols-3 gap-4 px-8 py2 text-gray-500 mt-3 items-center justify-start laptop:gap-3 desktop:gap-4"
        >
          <label className="flex flex-col laptop-lg:text-lg laptop-lg:font-semibold desktop:text-xl desktop:font-semibold">
            Designation
            <input
              type="text"
              className="border-2 py-1 px-2 rounded-md border-gray-500 w-full laptop:h-9 laptop-lg:h-12 desktop:h-12"
              value={designation}
              onChange={(e) => setDesignation(e.target.value)}
            />
          </label>
          <label className="flex flex-col laptop-lg:text-lg laptop-lg:font-semibold desktop:text-xl desktop:font-semibold">
            Name
            <input
              className="border-2 py-1 px-2 rounded-md border-gray-500 w-full laptop:h-9 laptop-lg:h-12 desktop:h-12"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </label>
          <label className="flex flex-col laptop-lg:text-lg laptop-lg:font-semibold desktop:text-xl desktop:font-semibold">
            Email address
            <input
              type="email"
              className="border-2 py-1 px-2 rounded-md border-gray-500 w-full laptop:h-9 laptop-lg:h-12 desktop:h-12"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
          <label className="flex flex-col laptop-lg:text-lg laptop-lg:font-semibold desktop:text-xl desktop:font-semibold">
            Password
            <input
              type="password"
              className="border-2 py-1 px-2 rounded-md border-gray-500 w-full laptop:h-9 laptop-lg:h-12 desktop:h-12"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
          <select
            id="class"
            className="border-2 h-9 px-2 py-0 rounded-md border-gray-500 w-full mt-5 laptop:h-9 laptop-lg:h-12 laptop-lg:mt-7 desktop:h-12 desktop:mt-7 laptop-lg:text-lg laptop-lg:font-semibold desktop:text-xl desktop:font-semibold"
            value={className}
            onChange={(e) => setClassName(e.target.value)}
          >
            <option>Class</option>
            <option>9th</option>
            <option>10th</option>
            <option>firstYear</option>
            <option>Inter</option>
          </select>
          <select
            id="gender"
            className="border-2 h-9 px-2 py-0 rounded-md border-gray-500 w-full mt-5 laptop:h-9 laptop-lg:h-12 laptop-lg:mt-7 desktop:h-12 desktop:mt-7 laptop-lg:text-lg laptop-lg:font-semibold desktop:text-xl desktop:font-semibold"
            value={gender}
            onChange={(e) => setGender(e.target.value)}
          >
            <option>Gender</option>
            <option>Male</option>
            <option>Female</option>
          </select>
          <label className="flex flex-col laptop-lg:text-lg laptop-lg:font-semibold desktop:text-xl desktop:font-semibold">
            Phone Number
            <input
              type="number"
              className="border-2 py-1 px-2 rounded-md border-gray-500 w-full laptop:h-9 laptop-lg:h-12 desktop:h-12"
              value={number}
              onChange={(e) => setNumber(e.target.value)}
            />
          </label>
          <select
            className="border-2 h-9 px-2 py-0 rounded-md border-gray-500 w-full mt-5 laptop:h-9 laptop-lg:h-12 laptop-lg:mt-7 desktop:h-12 desktop:mt-7 laptop-lg:text-lg laptop-lg:font-semibold desktop:text-xl desktop:font-semibold"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
          >
            <option>Subject</option>
            <option>Science</option>
            <option>Physics</option>
            <option>English</option>
            <option>Math</option>
          </select>
          <span className="flex gap-2 laptop:mt-5 items-center laptop-lg:text-xl laptop-lg:font-semibold desktop:text-xl desktop:font-semibold">
            <HiOutlinePlusCircle className="h-7 w-6 laptop-lg:h-10 laptop-lg:w-10 desktop:h-10 desktop:w-10" />
            Add another
          </span>
          <button
            onClick={teacherData}
            className="text-center bg-gray-500 text-black px-4 py-1 rounded-md font-semibold laptop-lg:text-lg laptop-lg:font-semibold desktop:text-xl desktop:font-semibold"
          >
            Add Teacher
          </button>
        </form>
      </div>
    </div>
  );
};

export default TeacherForm;
