import React from "react";
import integration from "../../assets/integrartion.png";

const CreateTask = () => {
  return (
    <div className="flex flex-row items-center justify-center p-5 gap-15 ">
      <div className=" grid grid-cols-2 gap-5">
        <img className="h-35 w-40 object-cover" src={integration} alt="" />
        <img
          className="h-35 w-40 object-cover -rotate-12"
          src={integration}
          alt=""
        />
        <img className="h-35 w-40 object-cover" src={integration} alt="" />
        <img className="h-35 w-40 object-cover" src={integration} alt="" />
      </div>
      <div className="bgred-400 w-100 p-5  border-2 border-black rounded-xl flex flex-col gap-2 ">
        <h4 className="text-xl font-semibold ">Create your task</h4>
        <p className="text-[#BDBDBD] font-medium px-4 text-sm py-2">
          Statisdaa is a school management solution that offers a personalized
          portal to each type of user, ensuring that your institution is always
          engaged with teachers, students, and their parents
        </p>
        <div className="border-2 border-black py-2 px-2 rounded-xl ">
          <h4 className="g">Create your task</h4>
        </div>
        <div className="border-2 border-black py-2 px-2 rounded-xl ">
          <h4>Create your task</h4>
        </div>
        <div className="bg-[#1777F7] px-4 py-2 rounded-xl ">
          <h4 className="text-base text-white font-medium">
            Manage the task easily and clearly
          </h4>
          <p className="text-sm ">
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
