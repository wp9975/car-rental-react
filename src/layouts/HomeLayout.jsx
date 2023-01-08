import React from "react";
import Faq from "../components/Home/Faq";
import Offer from "../components/Home/Offer";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navigation/Navbar";
import PricingTabs from "../components/Home/PricingTabs";
import Hero from "../components/Home/Hero";
import Contact from "../components/Home/Contact";

const HomeLayout = () => {
  return (
    <div className="">
      <Navbar />
      <Hero />
      <div className="mx-2">
        <Offer />
        <PricingTabs />
        <Faq />
        <Contact />
      </div>

      <Footer />
    </div>
  );
};

export default HomeLayout;
