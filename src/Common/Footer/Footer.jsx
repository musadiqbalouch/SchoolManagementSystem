import React from "react";

const Footer = () => {
  const details = [
    {
      title: "Lorem ipsum dolor",
      home: "home",
      pricing: "pricing",
      usecase: "use cases",
      locationn: "Location",
      faq: "FAQ",
      company: "Company",
    },
    {
      title: "Lorem ipsum dolor",
      home: "home",
      pricing: "pricing",
      usecase: "use cases",
      locationn: "Location",
      faq: "FAQ",
      company: "Company",
    },
    {
      title: "Lorem ipsum dolor",
      home: "home",
      pricing: "pricing",
      usecase: "use cases",
      locationn: "Location",
      faq: "FAQ",
      company: "Company",
    },
  ];

  return (
    <div className="w-full bg-[#100F57] flex flex-col laptop:flex-row items-center laptop:items-start justify-center gap-10 p-10">
      <div className="p-15 flex flex-col laptop:flex-row">
        {details.map((detail, index) => (
          <div
            className="text-white flex flex-col items-center laptop:items-start justify-center p-5 gap-2"
            key={index}
          >
            <h1 className="text-xl">{detail.title}</h1>
            <h4>{detail.home}</h4>
            <h4>{detail.pricing}</h4>
            <h4>{detail.usecase} </h4>
            <h4>{detail.locationn}</h4>
            <h4>{detail.faq}</h4>
            <h4>{detail.company}</h4>
          </div>
        ))}
      </div>
      <div className="flex flex-col items-center laptop:items-start text-center laptop:text-left">
        <h2 className="text-white">Lorem ipsum dolor</h2>
        <h4 className="text-white my-7">Home</h4>
        <div className="flex bg-white gap-5 px-3 py-2 items-center rounded-xl">
          <h3>Get your free consultation now</h3>
          <button className="bg-[#0A92DD] p-2 rounded-3xl cursor-pointer">
            Get Started
          </button>
        </div>
        <div className="text-white flex gap-5 mt-8">
          <h3>Privacy</h3>
          <h3>Security</h3>
          <h3>Terms</h3>
        </div>
        <h2 className="text-white mt-5 text-sm laptop:text-base">
          @2022 Scholl management. Copyright and all rigts reserved.
        </h2>
      </div>
    </div>
  );
};

export default Footer;
