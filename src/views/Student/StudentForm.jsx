import React, { useState } from "react";
import { HiOutlinePlusCircle } from "react-icons/hi2";
import { useNavigate } from "react-router-dom";

const StudentForm = () => {
  const [name, setName] = useState("");
  const [className, setClassName] = useState("");
  const [gender, setGender] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [password, setPassword] = useState("");
  const data = JSON.parse(localStorage.getItem("students")) || [];

  const navigate = useNavigate();

  const studentsData = () => {
    navigate("/student&classes");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const students = {
      id: data.length + 1,
      studentName: name,
      studentClass: className,
      studentGender: gender,
      studentEmail: email,
      studentNumber: number,
      studentPassword: password,
    };

    data.push(students);
    localStorage.setItem("students", JSON.stringify(data));

    setName("");
    setClassName("");
    setGender("");
    setEmail("");
    setNumber("");
    setPassword("");
  };
  const validatation =
    name === "" ||
    className === "" ||
    gender === "" ||
    email === "" ||
    number === "" ||
    password === "";

  return (
    <div className="bg-white border border-gray-400 rounded-xl shadow-md p-10 mx-auto mt-10 max-w-4xl">
      <div className="text-gray-700 mb-6">
        <h1 className="text-3xl font-bold mb-2">Add Student</h1>
        <div className="flex gap-6 font-medium text-gray-500">
          <h2 className="cursor-pointer hover:text-gray-700">Manually</h2>
          <h2 className="cursor-pointer hover:text-gray-700">Import CSV</h2>
        </div>
      </div>

      {/* 👇 Custom grid responsiveness only for laptop, laptop-lg, desktop */}
      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-1 laptop:grid-cols-2 laptop-lg:grid-cols-2 desktop:grid-cols-2 gap-6 text-gray-700"
      >
        <label className="flex flex-col font-medium">
          Name
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="border border-gray-400 rounded-md px-3 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-gray-500"
            placeholder="Enter full name"
          />
        </label>

        <label className="flex flex-col font-medium">
          Class
          <select
            value={className}
            onChange={(e) => setClassName(e.target.value)}
            className="border border-gray-400 rounded-md px-3 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-gray-500"
          >
            <option value="">Select class</option>
            <option>9th</option>
            <option>10th</option>
            <option>First Year</option>
            <option>Second Year</option>
          </select>
        </label>

        <label className="flex flex-col font-medium">
          Gender
          <select
            value={gender}
            onChange={(e) => setGender(e.target.value)}
            className="border border-gray-400 rounded-md px-3 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-gray-500"
          >
            <option value="">Select gender</option>
            <option>Male</option>
            <option>Female</option>
          </select>
        </label>

        <label className="flex flex-col font-medium">
          Email
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border border-gray-400 rounded-md px-3 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-gray-500"
            placeholder="Enter email"
          />
        </label>

        <label className="flex flex-col font-medium">
          Phone Number
          <input
            type="number"
            value={number}
            onChange={(e) => setNumber(e.target.value)}
            className="border border-gray-400 rounded-md px-3 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-gray-500"
            placeholder="03XXXXXXXXX"
          />
        </label>

        <label className="flex flex-col font-medium">
          Password
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="border border-gray-400 rounded-md px-3 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-gray-500"
            placeholder="Create password"
          />
        </label>

        <div className="col-span-1 laptop:col-span-2 laptop-lg:col-span-2 desktop:col-span-2 flex justify-between items-center mt-3">
          <span className="flex items-center gap-2 text-gray-600 font-medium hover:text-gray-800 cursor-pointer">
            <HiOutlinePlusCircle className="w-6 h-6" />
            Add another
          </span>

          <button
            disabled={validatation}
            type="submit"
            onClick={studentsData}
            className="px-6 py-2 rounded-md font-semibold bg-gray-700 text-white hover:bg-gray-800 transition-all"
          >
            Add Student
          </button>
        </div>
      </form>
    </div>
  );
};

export default StudentForm;
