import React from "react";
import { FaRegSquareCheck } from "react-icons/fa6";

const Cards = () => {
  const cards = [
    {
      title: "Standard",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus odio pellentesque pellentesque a. Amet",
      payment: " $15 ",
      p1: "For 1-10 people in a team",
      p2: "For 1-10 people in a team",
      p3: "For 1-10 people in a team",
    },
    {
      title: "Standard",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus odio pellentesque pellentesque a. Amet",
      payment: " $15 ",
      p1: "For 1-10 people in a team",
      p2: "For 1-10 people in a team",
      p3: "For 1-10 people in a team",
    },
    {
      title: "Standard",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus odio pellentesque pellentesque a. Amet",
      payment: " $15 ",
      p1: "For 1-10 people in a team",
      p2: "For 1-10 people in a team",
      p3: "For 1-10 people in a team",
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center  w-full container m-auto py-15">
      <div className="w-100 bgred-500 items-center text-center justify-center p-2 gap-3 flex flex-col">
        <h2 className="text-3xl font-semibold  text-[#1777F7] ">
          Pick up the best plan
        </h2>
        <p className="text-[#667085] font-medium ">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus odio
          pellentesque pellentesque a. Amet ut lobortis pellentesque a, luctus
          maecenas.
        </p>
      </div>
      <div className="flex gap-2 mt-2">
        {cards.map((card, index) => (
          <div
            key={index}
            className="w-fit border-[#FFFFFF] p-5 rounded-md py-5  shadow-md border-2 flex flex-col gap-3 "
          >
            <h2 className="text-[#1777F7] bg-[#EDF5FF] w-fit px-2 py-1 rounded-md font-semibold backdrop-blur-2xl mb-2">
              {card.title}
            </h2>
            <p className="text-[#667085] leading-tight mt-3 mb-5  w-70">
              {card.description}
            </p>
            <h2 className="text-3xl font-semibold ">
              {card.payment}{" "}
              <span className="text-sm text-[#667085] ">/Month</span>
            </h2>
            <div className="mt-5 mb-5 ">
              <p className="flex  text-[#667085]">
                <FaRegSquareCheck className="mt-1 mr-1 text-[#1777F7] " />{" "}
                {card.p1}
              </p>
              <p className="flex  text-[#667085]">
                <FaRegSquareCheck className="mt-1 mr-1  text-[#1777F7]" />{" "}
                {card.p2}
              </p>
              <p className="flex  text-[#667085]">
                <FaRegSquareCheck className="mt-1 mr-1  text-[#1777F7]" />{" "}
                {card.p3}
              </p>
            </div>
            <button className="w-full bg-[#1777F7] py-1 rounded-md cursor-pointer">
              Choose
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cards;
