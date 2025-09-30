import React from "react";

const Footer = () => {
  const details = [
    {
      title: "Lorem ipsum dolor",
      home: "Home",
      pricing: "Pricing",
      usecase: "Use cases",
      locationn: "Location",
      faq: "FAQ",
      company: "Company",
    },
    {
      title: "Lorem ipsum dolor",
      home: "Home",
      pricing: "Pricing",
      usecase: "Use cases",
      locationn: "Location",
      faq: "FAQ",
      company: "Company",
    },
    {
      title: "Lorem ipsum dolor",
      home: "Home",
      pricing: "Pricing",
      usecase: "Use cases",
      locationn: "Location",
      faq: "FAQ",
      company: "Company",
    },
  ];

  return (
    <div
      className="w-full bg-[#100F57] flex flex-col laptop:flex-row items-center laptop:items-start justify-center gap-10 p-10 
                    laptop:gap-16 desktop:gap-24 desktop:p-20"
    >
      {/* Left Section */}
      <div className="p-15 flex flex-col laptop:flex-row laptop:gap-12 desktop:gap-20">
        {details.map((detail, index) => (
          <div
            className="text-white flex flex-col items-center laptop:items-start justify-center p-5 gap-2 laptop:p-3 desktop:gap-3"
            key={index}
          >
            <h1 className="text-xl laptop:text-base font-semibold laptop:w-35 desktop:text-2xl">
              {detail.title}
            </h1>
            <h4 className="laptop:text-base desktop:text-lg">{detail.home}</h4>
            <h4 className="laptop:text-base desktop:text-lg">
              {detail.pricing}
            </h4>
            <h4 className="laptop:text-base desktop:text-lg">
              {detail.usecase}
            </h4>
            <h4 className="laptop:text-base desktop:text-lg">
              {detail.locationn}
            </h4>
            <h4 className="laptop:text-base desktop:text-lg">{detail.faq}</h4>
            <h4 className="laptop:text-base desktop:text-lg">
              {detail.company}
            </h4>
          </div>
        ))}
      </div>

      {/* Right Section */}
      <div
        className="flex flex-col items-center laptop:items-start text-center laptop:text-left laptop:mt-10 
                      desktop:mt-14 desktop:gap-6"
      >
        <h2 className="text-white text-lg laptop:text-xl desktop:text-2xl font-semibold">
          Lorem ipsum dolor
        </h2>

        <h4 className="text-white my-7 laptop:my-4 desktop:my-5 laptop:text-base desktop:text-lg">
          Home
        </h4>

        {/* Call to Action */}
        <div
          className="flex bg-white gap-5 px-3 py-2 items-center rounded-xl 
                        laptop:w-90 laptop:gap-3 laptop:px-2 
                        desktop:w-[500px] desktop:gap-5 desktop:px-5 desktop:py-3"
        >
          <h3 className="font-semibold text-sm laptop:text-base desktop:text-lg">
            Get your free consultation now
          </h3>
          <button
            className="bg-[#0A92DD] p-2 rounded-3xl cursor-pointer 
                             laptop:text-sm laptop:p-0 laptop:h-8 laptop:w-25 laptop:rounded-sm laptop:px-1 
                             desktop:h-12 desktop:w-40 desktop:text-base desktop:rounded-lg"
          >
            Get Started
          </button>
        </div>

        {/* Privacy Links */}
        <div className="text-white flex gap-5 mt-8 laptop:mt-4 desktop:gap-10 desktop:mt-6">
          <h3 className="laptop:text-sm desktop:text-lg">Privacy</h3>
          <h3 className="laptop:text-sm desktop:text-lg">Security</h3>
          <h3 className="laptop:text-sm desktop:text-lg">Terms</h3>
        </div>

        <h2 className="text-white mt-5 text-sm laptop:text-base desktop:text-lg">
          @2022 School management. Copyright and all rights reserved.
        </h2>
      </div>
    </div>
  );
};

export default Footer;
