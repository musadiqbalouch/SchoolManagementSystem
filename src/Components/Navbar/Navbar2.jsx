import logo from "../../assets/statisdalogo.png";
import heroSectionimage from "../../assets/heroSectionimage.png";
import { Link } from "react-router-dom";

const Navbar2 = () => {
  return (
    <div className="bg-[#100F57] max-h-[110vh] flex flex-col w-full items-center overflow-visible">
      {/* Navbar */}
      <div className="flex items-center justify-evenly p-5 container m-auto laptop:p-3">
        {/* Logo */}
        <div>
          <img
            className="h-6 w-25 object-cover laptop:h-4 laptop:w-20"
            src={logo}
            alt="Logo"
          />
        </div>

        {/* Menu */}
        <div className="text-white flex flex-row gap-10 cursor-pointer laptop:gap-4 laptop:text-sm">
          <h2>Home</h2>
          <h2>Pricing</h2>
          <h2>Use cases</h2>
          <h2>Location</h2>
          <h2>FAQ</h2>
          <h2>Company</h2>
        </div>

        {/* Login Button */}
        <div>
          <Link
            to={"/loginaccount"}
            className="text-white bg-[#0A92DD] px-4 py-1 rounded-xl font-semibold laptop:px-3 laptop:py-0.5 laptop:text-sm"
          >
            Login
          </Link>
        </div>
      </div>

      {/* Hero Section */}
      <div className="flex flex-col items-center justify-center gap-3 text-center">
        <h3 className="text-[#D89925] mt-10 mb-4 border border-[#FFFFFF] w-fit px-3 py-1 backdrop-blur-2xl font-semibold rounded-2xl laptop:text-xs">
          Get your free consultation now
        </h3>
        <h2 className="text-4xl font-semibold text-white w-full text-center laptop:text-2xl laptop:max-w-[600px]">
          Manage your team easily with task man
        </h2>
        <p className="text-white font-normal w-full text-center p-2 laptop:text-sm laptop:max-w-[500px]">
          Statisdaa is a school management solution that offers a personalized
          portal to each type of user,
        </p>
        <button className="text-white bg-[#0A92DD] px-4 py-2 rounded-3xl font-semibold cursor-pointer laptop:px-3 laptop:py-1 laptop:text-sm">
          Get started
        </button>
      </div>

      {/* Hero Image */}
      <img
        className="object-cover h-140 w-200 m-10 rounded-2xl laptop:h-60 laptop:w-96"
        src={heroSectionimage}
        alt="Hero Section"
      />
    </div>
  );
};

export default Navbar2;
