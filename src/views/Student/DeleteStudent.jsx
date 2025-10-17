import React from "react";

const DeleteStudent = ({ setConfirmDelete, confirmDelete }) => {
  return (
    <div className="bg-white h-35 py-5 px-5 flex flex-col rounded-lg gap-2">
      <h1 className="font-medium">Are you sure you want to delete?</h1>

      <button
        className="cursor-pointer px-4 py 2 rounded-md font-semibold text-white border border-gray-400 bg-blue-600 hover:bg-blue-700"
        onClick={confirmDelete}
      >
        Yes
      </button>

      <button
        className="cursor-pointer px-5 py-1 text-white bg-gray-700 hover:bg-gray-800 rounded-lg transition-colors text-sm font-medium"
        onClick={() => setConfirmDelete(false)}
      >
        No
      </button>
    </div>
  );
};

export default DeleteStudent;
