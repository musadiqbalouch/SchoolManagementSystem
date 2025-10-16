import React from "react";

const Paginatation = ({
  totalPages,
  postPerPage,
  setCurrentPage,
  currentPage,
}) => {
  let pages = [];

  for (let i = 1; i <= Math.ceil(totalPages / postPerPage); i++) {
    pages.push(i);
  }
  return (
    <div className=" border-1 border-black px-2 py-1 rounded-lg ">
      {pages.map((page, index) => {
        return (
          <button
            key={index}
            onClick={() => setCurrentPage(page)}
            className={`${page === currentPage ? "bg-[#2671B1] text-white border-white border-2" : " "} px-2 font-medium rounded-lg border-1 mx-0.5 cursor-pointer`}
          >
            {page}
          </button>
        );
      })}
    </div>
  );
};

export default Paginatation;
