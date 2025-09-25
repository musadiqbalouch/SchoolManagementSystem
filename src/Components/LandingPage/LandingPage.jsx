import React from "react";
import Navbar2 from "../Navbar/Navbar2";
import TrustedbyCompany from "../TrustedbyCompany/TrustedbyCompany";
import CreateTask from "../CreateTask/CreateTask";
import HoldingPhone from "../HoldingPhoneSection/HoldingPhone";
import Cards from "../Cards/Cards";
import OptionFromCustomer from "../OptionFromCustomer/OptionFromCustomer";
import KeyboardSection from "../KeyboardSection/KeyboardSection";
import Footer from "../../Common/Footer/Footer";

const LandingPage = () => {
  return (
    <div>
      <Navbar2 />
      <TrustedbyCompany />
      <CreateTask />
      <HoldingPhone />
      <Cards />
      <OptionFromCustomer />
      <KeyboardSection />
      <Footer />
    </div>
  );
};

export default LandingPage;
