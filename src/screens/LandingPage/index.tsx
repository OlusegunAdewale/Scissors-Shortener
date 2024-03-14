import Navbar from "../../Components/Navbars/Navbar";

import "./LandingPage.css";

import HeroSection from "../../Components/LandingPage/HeroSection";
import HeroInfo from "../../Components/LandingPage/HeroInfo";
import HeroReason from "../../Components/LandingPage/HeroReason";
import HeroPricing from "../../Components/LandingPage/HeroPricing";
import HeroForm from "../../Components/LandingPage/HeroForm";

function LandingPage() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <HeroInfo />
      <HeroReason />
      <HeroPricing />
      <HeroForm />
    </>
  );
}

export default LandingPage;
