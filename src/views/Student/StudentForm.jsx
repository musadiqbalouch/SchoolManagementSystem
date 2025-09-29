import React, { useEffect, useState } from "react";
import { HiOutlinePlusCircle } from "react-icons/hi2";
import { useNavigate } from "react-router-dom";

const StudentForm = () => {
  const [name, setName] = useState("");
  const [className, SetClassName] = useState("");
  const [gender, setGender] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const studentsData = () => {
    navigate("/student&classes");
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    let students = {
      studentName: name,
      studentClass: className,
      studentGender: gender,
      studentEmail: email,
      studentNumber: number,
      studentPassword: password,
    };

    let data = JSON.parse(localStorage.getItem("students")) || [];
    data.push(students);

    localStorage.setItem("students", JSON.stringify(data));
    console.log(data);
    setName("");
    SetClassName("");
    setGender("");
    setEmail("");
    setNumber("");
    setPassword("");
  };
  // let validatation =
  //   name === "" ||
  //   className === "" ||
  //   gender === "" ||
  //   email === "" ||
  //   number === "" ||
  //   password === "";
  return (
    <div className="flex flex-col mauto items-start justify-start mt-5  bg-white border-2 border-gray-500 rounded-md p-15  container m-auto ">
      <div className="flex flex-col gap-3 text-gray-500 px-10">
        <h1 className="text-3xl font-semibold ">Add Student</h1>
        <div className="flex gap-5 text-base font-semibold  justify-start items-center ">
          <h2>Manually</h2>
          <h2>Import CSV</h2>
        </div>
      </div>
      <form
        onSubmit={handleSubmit}
        className="flex flex-row flex-wrap gap-8  p-4   text-gray-500 mt-3  items-centre  justify-start content-center"
      >
        <label className="flex flex-col ">
          Name
          <input
            className="border-2 py-1 px-2 rounded-md border-gray-500 w-50"
            type="text"
            name=""
            id=""
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <select
          id="class"
          className="border-2  h-9 w-45 mt-5 px-2 py-0 rounded-md border-gray-500 "
          value={className}
          onChange={(e) => SetClassName(e.target.value)}
        >
          <option>Class</option>
          <option>9th</option>
          <option>10th</option>
          <option>firstyear</option>
          <option>secondyear</option>
        </select>
        <select
          id="gender"
          className="border-2  h-9 w-45 mt-5 px-2 py-0 rounded-md border-gray-500"
          value={gender}
          onChange={(e) => setGender(e.target.value)}
        >
          <option>Gender</option>
          <option>Male</option>
          <option>Female</option>
        </select>
        <label className="flex flex-col w-60">
          Email address
          <input
            type="email"
            className="border-2 py-1 px-2 rounded-md border-gray-500 "
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <label className="flex flex-col w-60">
          Phone Number
          <input
            type="number"
            name=""
            id=""
            className="border-2 py-1 px-2 rounded-md border-gray-500 w-60"
            value={number}
            onChange={(e) => setNumber(e.target.value)}
          />
        </label>
        <label className="flex flex-col">
          Password
          <input
            type="password"
            className="border-2 py-1 px-2 rounded-md border-gray-500 w-60"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <span className="flex gap-2 items-center">
          <HiOutlinePlusCircle className="h-7 w-6 " />
          Add another
        </span>
        <button
          // disabled={validatation}
          onClick={studentsData}
          className="text-center bg-gray-500 text-black px-4 py-2 rounded-md font-semibold"
        >
          Add Student
        </button>
      </form>
    </div>
  );
};

export default StudentForm;
