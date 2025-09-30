import React from "react";
import integration from "../../assets/integrartion.png";

const CreateTask = () => {
  return (
    <div className="flex flex-row items-center justify-center gap-20 p-10 laptop:flex-row laptop:gap-10 laptop:p-6 desktop:gap-15">
      {/* Left side images */}
      <div className="grid grid-cols-2 gap-5 laptop:gap-3 ">
        <img
          className="h-50 w-55 object-cover laptop:h-32 laptop:w-36 desktop:h-60 desktop:w-65 "
          src={integration}
          alt=""
        />
        <img
          className="h-50 w-55 object-cover -rotate-12 laptop:h-32 laptop:w-36 desktop:h-60 desktop:w-65"
          src={integration}
          alt=""
        />
        <img
          className="h-50 w-55 object-cover laptop:h-32 laptop:w-36 desktop:h-60 desktop:w-65 "
          src={integration}
          alt=""
        />
        <img
          className="h-50 w-55 object-cover laptop:h-32 laptop:w-36 desktop:h-60 desktop:w-65"
          src={integration}
          alt=""
        />
      </div>

      {/* Right side content */}
      <div className="bgred-400 w-100 p-5 border-2 border-[#AAAAAA80] rounded-xl flex flex-col gap-3 laptop:wfull laptop:p-4 desktop:w-135">
        <h4 className="text-xl font-semibold laptop:text-lg  desktop:text-3xl ">
          Create your task
        </h4>

        <p className="text-[#BDBDBD] font-medium px-4 text-xs py-2 laptop:px-2 laptop:text-[11px] laptop:leading-4  desktop:text-lg desktop:leading-5">
          Statisdaa is a school management solution that offers a personalized
          portal to each type of user, ensuring that your institution is always
          engaged with teachers, students, and their parents
        </p>

        <div className="border-2 border-[#AAAAAA80] py-2 px-2 rounded-sm font-medium laptop:py-1 laptop:px-2 laptop:text-sm  desktop:text-2xl">
          <h4>Create your task</h4>
        </div>
        <div className="border-2 border-[#AAAAAA80] py-2 px-2 rounded-sm font-medium laptop:py-1 laptop:px-2 laptop:text-sm desktop:text-2xl">
          <h4>Create your task</h4>
        </div>

        <div className="bg-[#1777F7] px-3 py-2 rounded-xl text-white laptop:px-2 laptop:py-2">
          <h4 className="text-base font-medium laptop:text-sm desktop:text-2xl">
            Manage the task easily and clearly
          </h4>
          <p className="text-xs p-3 laptop:text-[11px] laptop:p-2 laptop:leading-4 desktop:text-lg desktop:leading-5">
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
