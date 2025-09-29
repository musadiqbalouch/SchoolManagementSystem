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
    <div className="flex flex-col items-center justify-center w-full container m-auto py-15 laptop:py-10 tablet:py-6">
      <div className="w-100 items-center text-center justify-center p-2 gap-3 flex flex-col">
        <h2 className="text-3xl font-semibold text-[#1777F7] laptop:text-2xl tablet:text-xl">
          Pick up the best plan
        </h2>
        <p className="text-[#667085] font-medium laptop:text-sm tablet:text-xs laptop:max-w-[600px] tablet:max-w-[400px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus odio
          pellentesque pellentesque a. Amet ut lobortis pellentesque a, luctus
          maecenas.
        </p>
      </div>
      <div className="flex gap-4 mt-6 laptop:gap-3 laptop:mt-4 tablet:gap-2 tablet:mt-3">
        {cards.map((card, index) => (
          <div
            key={index}
            className="w-fit border-[#FFFFFF] p-5 rounded-md py-5 shadow-md border-2 flex flex-col gap-3 laptop:p-4 laptop:gap-2 tablet:p-3 tablet:gap-2"
          >
            <h2 className="text-[#1777F7] bg-[#EDF5FF] w-fit px-2 py-1 rounded-md font-semibold backdrop-blur-2xl mb-2 laptop:text-sm tablet:text-xs">
              {card.title}
            </h2>
            <p className="text-[#667085] leading-tight mt-3 mb-5 w-70 laptop:text-sm tablet:text-xs laptop:mt-2 laptop:mb-3 tablet:mt-1 tablet:mb-2">
              {card.description}
            </p>
            <h2 className="text-3xl font-semibold laptop:text-2xl tablet:text-xl">
              {card.payment}
              <span className="text-sm text-[#667085] laptop:text-xs tablet:text-[11px]">
                /Month
              </span>
            </h2>
            <div className="mt-5 mb-5 laptop:mt-3 laptop:mb-3 tablet:mt-2 tablet:mb-2">
              <p className="flex text-[#667085] laptop:text-sm tablet:text-xs">
                <FaRegSquareCheck className="mt-1 mr-1 text-[#1777F7] laptop:h-3 laptop:w-3 tablet:h-2 tablet:w-2" />
                {card.p1}
              </p>
              <p className="flex text-[#667085] laptop:text-sm tablet:text-xs">
                <FaRegSquareCheck className="mt-1 mr-1 text-[#1777F7] laptop:h-3 laptop:w-3 tablet:h-2 tablet:w-2" />
                {card.p2}
              </p>
              <p className="flex text-[#667085] laptop:text-sm tablet:text-xs">
                <FaRegSquareCheck className="mt-1 mr-1 text-[#1777F7] laptop:h-3 laptop:w-3 tablet:h-2 tablet:w-2" />
                {card.p3}
              </p>
            </div>
            <button className="w-full bg-[#1777F7] py-1 rounded-md cursor-pointer laptop:py-[6px] tablet:py-[4px] laptop:text-sm tablet:text-xs">
              Choose
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cards;
