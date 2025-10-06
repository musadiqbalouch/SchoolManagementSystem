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
  let validatation =
    name === "" ||
    className === "" ||
    gender === "" ||
    email === "" ||
    number === "" ||
    password === "";
  return (
    <div className="flex flex-col items-start justify-start mt-5 bg-white border-2 border-gray-500 rounded-md p-10 container mx-auto laptop:p-6 laptop:max-w-4xl">
      <div className="flex flex-col gap-3 text-gray-500 px-10 laptop:px-7">
        <h1 className="text-3xl font-semibold desktop:text-4xl">Add Student</h1>
        <div className="flex gap-5 text-base font-semibold justify-start items-center desktop:text-2xl">
          <h2>Manually</h2>
          <h2>Import CSV</h2>
        </div>
      </div>

      <form
        onSubmit={handleSubmit}
        className="flex flex-row flex-wrap gap-6 px-8 py-2 text-gray-500 mt-3 items-center justify-start laptop:gap-4 desktop:gap-5"
      >
        <label className="flex flex-col desktop:text-xl desktop:font-semibold">
          Name
          <input
            className="border-2 py-1 px-2 rounded-md border-gray-500 w-100 laptop:w-70 desktop:w-115 desktop:h-12"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>

        <select
          id="class"
          className="border-2 h-9 w-45 mt-5 px-2 py-0 rounded-md border-gray-500 laptop:w-40 desktop:text-xl
           desktop:font-semibold desktop:h-12 desktop:mt-6 desktop:w-55"
          value={className}
          onChange={(e) => SetClassName(e.target.value)}
        >
          <option>Class</option>
          <option>9th</option>
          <option>10th</option>
          <option>First Year</option>
          <option>Second Year</option>
        </select>

        <select
          id="gender"
          className="border-2 h-9 w-45 mt-5 px-2 py-0 rounded-md border-gray-500 laptop:w-40 desktop:text-xl
           desktop:font-semibold desktop:mt-6 desktop:h-12 desktop:w-55"
          value={gender}
          onChange={(e) => setGender(e.target.value)}
        >
          <option>Gender</option>
          <option>Male</option>
          <option>Female</option>
        </select>

        <label className="flex flex-col w-70 desktop:text-xl desktop:font-semibold desktop:w-100">
          Email address
          <input
            type="email"
            className="border-2 py-1 px-2 rounded-md border-gray-500 desktop:h-12"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>

        <label className="flex flex-col w-70 desktop:text-xl desktop:font-semibold desktop:w-100">
          Phone Number
          <input
            type="number"
            className="border-2 py-1 px-2 rounded-md border-gray-500 desktop:h-12 desktop:w-115"
            value={number}
            onChange={(e) => setNumber(e.target.value)}
          />
        </label>

        <label className="flex flex-col w-70 desktop:text-xl desktop:font-semibold desktop:w-100">
          Password
          <input
            type="password"
            className="border-2 py-1 px-2 rounded-md border-gray-500 desktop:h-12"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>

        <span className="flex gap-2 items-center laptop:mt-5 desktop:mt-7 desktop:text-xl desktop:font-semibold">
          <HiOutlinePlusCircle className="h-7 w-6 desktop:w-12 desktop:h-10" />
          Add another
        </span>

        <button
          disabled={validatation}
          onClick={studentsData}
          className="text-center bg-gray-500 text-black desktop:mt-7 laptop:mt-5 px-4 py-2 rounded-md font-semibold laptop:px-3 desktop:text-xl cursor-pointer"
        >
          Add Student
        </button>
      </form>
    </div>
  );
};

export default StudentForm;
