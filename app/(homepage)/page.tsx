import Hero from "./components/Hero";
import Curves from "./components/Curves";
import Services from "./components/Services";
import AboutAgency from "./components/AboutAgency";
import AboutMe from "./components/AboutMe";
import Testimonials from "../components/Testimonials";
import Investigation from "./components/Investigation";
import MaximitePotential from "./components/MaximitePotential";
import Qualification from "./components/Qualification";
import WhatsAppButton from "../components/WhatsAppButton";

const Home = async () => {
  const phoneNumber = "+8801704262772";
  const message = "Hello Pearl Lemon Leads!";
  return (
    <>
      <div className="h-[102px] lg:h-[95px]"></div>
      <Hero />
      <Curves />
      <Services />
      <AboutAgency />
      <AboutMe />
      <Testimonials />
      <Investigation />
      <MaximitePotential />
      <Qualification />
      <div className="fixed right-5 bottom-5">
        <WhatsAppButton phoneNumber={phoneNumber} message={message} />
      </div>
    </>
  );
};

export default Home;
