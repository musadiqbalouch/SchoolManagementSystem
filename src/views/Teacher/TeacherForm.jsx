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
    <div className="flex flex-col mauto items-start justify-start m-5  bg-white border-2 border-gray-500 rounded-md  p-10  laptop:p-5 laptop:m-2 ">
      <div className="flex flex-col gap-3 text-gray-500 px-10  laptop:px-7 ">
        <h1 className="text-3xl font-semibold desktop:text-4xl ">
          Add Teacher
        </h1>
        <div className="flex gap-5 text-base font-semibold  justify-start items-center desktop:text-2xl ">
          <h2>Manually</h2>
          <h2>Import CSV</h2>
        </div>
      </div>
      <form
        onSubmit={handleSubmit}
        className="flex flex-row h-fit flex-wrap gap-4 px-8 py-2  text-gray-500 mt-3  items-centre  justify-start content-center laptop:gap-2 
        desktop:gap-5 "
      >
        <label className="flex flex-col desktop:text-xl desktop:font-semibold">
          Designation
          <input
            type="text"
            name=""
            id=""
            className="border-2 py-1 px-2 rounded-md border-gray-500 w-100 lap laptop:w-70 desktop:w-100 desktop:h-12 "
            value={designation}
            onChange={(e) => setDesignation(e.target.value)}
          />
        </label>
        <label className="flex flex-col desktop:text-xl desktop:font-semibold ">
          Name
          <input
            className="border-2 py-1 px-2 rounded-md border-gray-500 w-100 laptop:w-70 desktop:w-115 desktop:h-12 "
            type="text"
            name=""
            id=""
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <label className="flex flex-col w-70 laptop:w-65 desktop:text-xl desktop:font-semibold desktop:w-100  ">
          Email address
          <input
            type="email"
            className="border-2 py-1 px-2 rounded-md border-gray-500 desktop:h-12"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <select
          id="class"
          className="border-2  h-9 w-45 mt-5 px-2 py-0 rounded-md border-gray-500 desktop:text-xl desktop:font-semibold desktop:h-13 desktop:w-55 "
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
          className="border-2  h-9 w-45 mt-5 px-2 py-0 rounded-md border-gray-500 desktop:text-xl desktop:font-semibold  desktop:h-13 desktop:w-55"
          value={gender}
          onChange={(e) => setGender(e.target.value)}
        >
          <option>Gender</option>
          <option>Male</option>
          <option>Female</option>
        </select>
        <label className="flex flex-col desktop:text-xl desktop:font-semibold">
          Password
          <input
            type="password"
            className="border-2 py-1 px-2 rounded-md border-gray-500 w-70  desktop:h-12 desktop:w-100"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <label className="flex flex-col w-50 desktop:text-xl desktop:font-semibold">
          Phone Number
          <input
            type="number"
            name=""
            id=""
            className="border-2 py-1 px-2 rounded-md border-gray-500 w-70  desktop:h-12  desktop:w-115"
            value={number}
            onChange={(e) => setNumber(e.target.value)}
          />
        </label>
        <select
          className="border-2  h-9 w7 mt-5 px-2 py-0 rounded-md border-gray-500 w-full desktop:text-xl desktop:font-semibold  desktop:h-12 "
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
        >
          <option>Subject</option>
          <option>Science</option>
          <option>Physics</option>
          <option>English</option>
          <option>Math</option>
        </select>

        <span className="flex gap-2 items-center  desktop:text-xl desktop:font-semibold">
          <HiOutlinePlusCircle className="h-7 w-6 desktop:w-12 desktop:h-10" />
          Add another
        </span>

        <button
          // disabled={validatation}
          onClick={teacherData}
          className="text-center bg-gray-500 text-black px-4 py-1 rounded-md font-semibold wfull desktop:text-xl desktop:font-semibold"
        >
          Add Teacher
        </button>
      </form>
    </div>
  );
};

export default TeacherForm;
