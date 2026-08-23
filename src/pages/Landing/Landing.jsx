import Navbar from "../../components/layout/Navbar/Navbar";
import Hero from "../../components/landing/Hero/Hero";
import Features from "../../components/landing/Features/Features";
import Roadmap from "../../components/landing/Roadmap/Roadmap";
import LandingInfo from "../../components/landing/LandingInfo/LandingInfo";
import Footer from "../../components/layout/Footer/Footer";

function Landing() {
  return (
    <>
      <Navbar />
      <Hero />
      <Features />
      <Roadmap />
      <LandingInfo />
      <Footer />
    </>
  );
}

export default Landing;