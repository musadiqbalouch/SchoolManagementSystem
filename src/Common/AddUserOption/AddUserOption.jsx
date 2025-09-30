import React from "react";

const AddUserOption = ({ user, addUser }) => {
  return (
    <div className=" m-2 ">
      <div className="flex w-full bggreen-300 py-2 items-center justify-between px100 ">
        <div className="w-200 p-2 lap  laptop:w-135 desktop:w-160 ">
          <h3 className="font-semibold text-xl desktop:text-2xl ">{user}</h3>
        </div>
        <div className=" flex font-semibold  px-2 gap-2">
          <button className="bgred-400  px-2 py-2 rounded-md text-[#2671B1] text-center desktop:text-xl ">
            Export CSV
          </button>
          <button className="bg-[#2671B1]  px-2 py-2 rounded-md text-white text-center desktop:text-xl     ">
            {addUser}
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddUserOption;
