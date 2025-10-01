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
    <div className="flex flex-col items-center justify-center w-full container m-auto py-15  laptop:py-10 tablet:py-6 desktop:py-20">
      {/* Heading Section */}
      <div className="w-100 items-center text-center justify-center p-2 gap-3 flex flex-col  laptop-lg:w-180">
        <h2 className="text-3xl font-semibold text-[#1777F7]  laptop:text-2xl laptop-lg:text-4xl tablet:text-xl desktop:text-4xl">
          Pick up the best plan
        </h2>
        <p className="text-[#667085] font-medium laptop:text-sm  laptop-lg:text-xl laptop-lg:max-w-[650]   laptop:max-w-[600px] tablet:max-w-[400px]   desktop:text-lg desktop:max-w-[750px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus odio
          pellentesque pellentesque a. Amet ut lobortis pellentesque a, luctus
          maecenas.
        </p>
      </div>

      {/* Cards Section */}
      <div className="flex gap-4 mt-6  laptop:gap-3 laptop:mt-4    desktop:gap-8 desktop:mt-10">
        {cards.map((card, index) => (
          <div
            key={index}
            className="w-fit border-[#FFFFFF] p-5 rounded-md py-5 shadow-md border-2 flex flex-col gap-3  laptop:p-4 laptop:gap-2 tablet:p-3 tablet:gap-2  desktop:p-8 desktop:gap-4"
          >
            {/* Title */}
            <h2
              className="text-[#1777F7] bg-[#EDF5FF] w-fit px-2 py-1 rounded-md font-semibold backdrop-blur-2xl mb-2 
             laptop:text-sm laptop-lg:text-lg  desktop:text-base"
            >
              {card.title}
            </h2>

            {/* Description */}
            <p
              className="text-[#667085] leading-tight mt-3 mb-5 w-70   laptop:text-sm tablet:text-xs laptop:mt-2 
            laptop:mb-3  laptop-lg:text-base   desktop:text-base desktop:mt-4 desktop:mb-6"
            >
              {card.description}
            </p>

            {/* Payment */}
            <h2 className="text-3xl font-semibold  laptop:text-2xl  laptop-lg:text-3xl  desktop:text-4xl">
              {card.payment}
              <span className="text-sm text-[#667085] laptop:text-xs laptop-lg:text-base tablet:text-[11px]  desktop:text-base">
                /Month
              </span>
            </h2>

            {/* Features */}
            <div className="mt-5 mb-5  laptop:mt-3 laptop:mb-3  laptop-lg:p-5  desktop:mt-6 desktop:mb-6">
              <p className="flex text-[#667085] laptop:text-sm laptop-lg:text-base  desktop:text-base">
                <FaRegSquareCheck className="mt-1 mr-1 text-[#1777F7] laptop:h-3 laptop:w-3 laptop-lg:h-5 laptop-lg:w-5 desktop:h-5 desktop:w-5" />
                {card.p1}
              </p>
              <p className="flex text-[#667085] laptop:text-sm laptop-lg:text-base  desktop:text-base">
                <FaRegSquareCheck className="mt-1 mr-1 text-[#1777F7] laptop:h-3 laptop:w-3 laptop-lg:h-5 laptop-lg:w-5 desktop:h-5 desktop:w-5" />
                {card.p2}
              </p>
              <p className="flex text-[#667085]  laptop:text-sm laptop-lg:text-base tablet:text-xs  desktop:text-base">
                <FaRegSquareCheck className="mt-1 mr-1 text-[#1777F7] laptop:h-3 laptop:w-3 laptop-lg:h-5 laptop-lg:w-5  desktop:h-5 desktop:w-5" />
                {card.p3}
              </p>
            </div>

            {/* Button */}
            <button className="w-full bg-[#1777F7] py-1 rounded-md cursor-pointer laptop:py-[6px] laptop-lg:text-lg laptop-lg:font-semibold laptop:text-base tablet:text-xs   desktop:py-3 desktop:text-base">
              Choose
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cards;
