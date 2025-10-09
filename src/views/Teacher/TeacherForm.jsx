import React, { useState } from "react";
import { HiOutlinePlusCircle } from "react-icons/hi2";
import { useNavigate } from "react-router-dom";

const TeacherForm = () => {
  const navigate = useNavigate();
  const data = JSON.parse(localStorage.getItem("teacher")) || [];

  const [designation, setDesignation] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [number, setNumber] = useState("");
  const [gender, setGender] = useState("");
  const [className, setClassName] = useState("");
  const [subject, setSubject] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const teachers = {
      id: data.length + 1,
      teacherDesignation: designation,
      teacherName: name,
      teacherEmail: email,
      teacherPassword: password,
      teacherNumber: number,
      teacherGender: gender,
      teacherClassName: className,
      teacherSubject: subject,
    };

    data.push(teachers);
    localStorage.setItem("teacher", JSON.stringify(data));

    setDesignation("");
    setName("");
    setEmail("");
    setPassword("");
    setNumber("");
    setGender("");
    setClassName("");
    setSubject("");

    navigate("/teacher");
  };
  const validatation =
    designation === "" ||
    name === "" ||
    email === "" ||
    password === "" ||
    number === "" ||
    gender === "";
  className === "" || subject === "";

  return (
    <div
      className="bg-white border border-gray-400 rounded-xl shadow-md laptop:m-10 laptop:p-10  laptop-lg:px-10 laptop-lg:m-auto laptop-lg:mt-10 laptop-lg:py-5 
    mx-auto mt-10 max-w-4xl desktop:m-auto desktop:mt-10 "
    >
      <div className="text-gray-700 mb-6">
        <h1 className="text-3xl font-bold mb-2">Add Teacher</h1>
        <div className="flex gap-6 font-medium text-gray-500">
          <h2 className="cursor-pointer hover:text-gray-700">Manually</h2>
          <h2 className="cursor-pointer hover:text-gray-700">Import CSV</h2>
        </div>
      </div>
      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-1 laptop:grid-cols-3 laptop-lg:grid-cols-3 desktop:grid-cols-3 gap-4 text-gray-700"
      >
        <div>
          <label className="font-semibold">Designation</label>
          <input
            type="text"
            value={designation}
            onChange={(e) => setDesignation(e.target.value)}
            className="w-full mt-1 border border-gray-400 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-gray-400"
            placeholder="e.g. Senior Teacher"
          />
        </div>

        <div>
          <label className="font-semibold">Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full mt-1 border border-gray-400 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-gray-400"
            placeholder="e.g. Arfin Nasir"
          />
        </div>

        <div>
          <label className="font-semibold">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full mt-1 border border-gray-400 rounded-md px-3 py-2  focus:ring-gray-400"
            placeholder="e.gArfinNasir@gmail.com"
          />
        </div>

        <div>
          <label className="font-semibold">Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full mt-1 border border-gray-400 rounded-md px-3 py-2     focus:ring-gray-400"
            placeholder="Enter password"
          />
        </div>

        <div>
          <label className="font-semibold">Phone Number</label>
          <input
            type="number"
            value={number}
            onChange={(e) => setNumber(e.target.value)}
            className="w-full mt-1 border border-gray-400 rounded-md px-3 py-2  focus:ring-gray-400"
            placeholder="03xxxxxxxxx"
          />
        </div>

        <div>
          <label className="font-semibold">Gender</label>
          <select
            value={gender}
            onChange={(e) => setGender(e.target.value)}
            className="w-full mt-1 border border-gray-400 rounded-md px-3 py-2  focus:ring-gray-400"
          >
            <option value="">Select Gender</option>
            <option>Male</option>
            <option>Female</option>
          </select>
        </div>

        <div>
          <label className="font-semibold">Class</label>
          <select
            value={className}
            onChange={(e) => setClassName(e.target.value)}
            className="w-full mt-1 border border-gray-400 rounded-md px-3 py-2 focus:outline-none "
          >
            <option value="">Select Class</option>
            <option>9th</option>
            <option>10th</option>
            <option>First Year</option>
            <option>Inter</option>
          </select>
        </div>

        <div>
          <label className="font-semibold">Subject</label>
          <select
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            className="w-full mt-1 border border-gray-400 rounded-md px-3 py-2 focus:outline-none "
          >
            <option value="">Select Subject</option>
            <option>Science</option>
            <option>Physics</option>
            <option>English</option>
            <option>Math</option>
          </select>
        </div>

        {/* add teacher */}
        <div className="flex items-center justify-start gap-2 mt-4 laptop:col-span-3">
          <HiOutlinePlusCircle className="text-gray-600 w-6 h-6" />
          <span className="text-gray-700 font-semibold cursor-pointer hover:underline">
            Add another
          </span>
        </div>

        <div className="laptop:col-span-3  flex justify-center">
          <button
            disabled={validatation}
            type="submit"
            className="px-8 py-2 rounded-md font-semibold text-black bg-gray-300 border border-gray-400 hover:bg-gray-400"
          >
            Add Teacher
          </button>
        </div>
      </form>
    </div>
  );
};

export default TeacherForm;
