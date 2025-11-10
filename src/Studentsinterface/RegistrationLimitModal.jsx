import React from "react";

const RegistrationLimitModal = ({ setShowModal }) => {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-lg text-center max-w-md mx-auto">
      <h1 className="text-2xl font-semibold text-gray-800 mb-3">
        Limit Exceeded
      </h1>
      <p className="text-gray-600 mb-6">
        This teacher already has 5 students assigned to their class.
        <br />
        Please select another subject or teacher.
      </p>
      <button
        className=" cursor-pointer w-full bg-[#509CDB] text-white py-2 rounded-md font-medium hover:bg-[#3c88c4] transition-colors duration-200"
        onClick={() => setShowModal(false)}
      >
        OK
      </button>
    </div>
  );
};

export default RegistrationLimitModal;
