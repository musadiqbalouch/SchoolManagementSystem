import React from "react";
import integration from "../../assets/integrartion.png";

const CreateTask = () => {
  return (
    <div className="flex flex-row items-center justify-center p5 gap-20 p-10">
      <div className=" grid grid-cols-2 gap-5">
        <img className="h-50 w-55 object-cover" src={integration} alt="" />
        <img
          className="h-50 w-55 object-cover -rotate-12"
          src={integration}
          alt=""
        />
        <img className="h-50 w-55 object-cover" src={integration} alt="" />
        <img className="h-50 w-55 object-cover" src={integration} alt="" />
      </div>
      <div className="bgred-400 w-100 p-5  border-2 border-[#AAAAAA80] rounded-xl flex flex-col gap-1 ">
        <h4 className="text-xl font-semibold ">Create your task</h4>
        <p className="text-[#BDBDBD] font-medium px-4 text-xs py-2">
          Statisdaa is a school management solution that offers a personalized
          portal to each type of user, ensuring that your institution is always
          engaged with teachers, students, and their parents
        </p>
        <div className="border-2 border-[#AAAAAA80] py-2 px-2 rounded-sm font-medium ">
          <h4 className="g">Create your task</h4>
        </div>
        <div className="border-2 border-[#AAAAAA80] py-2 px-2 rounded-sm font-medium ">
          <h4>Create your task</h4>
        </div>
        <div className="bg-[#1777F7] px-3 py-2 rounded-xl text-white ">
          <h4 className="text-base  font-medium">
            Manage the task easily and clearly
          </h4>
          <p className="text-xs p-3">
            Statisdaa increases communication between all stakeholders:
            students, teachers, parents and administrative staff, with a
            dedicated web portal for any type of end-user. Keeping your students
            and parents engaged with the academic process is a crucial factor in
            each student’s success.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CreateTask;
