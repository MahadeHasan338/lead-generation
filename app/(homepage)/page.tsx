import Hero from "./components/Hero";
import Curves from "./components/Curves";
import Services from "./components/Services";
import AboutAgency from "./components/AboutAgency";
import AboutMe from "./components/AboutMe";
import Testimonials from "./components/Testimonials";
import Investigation from "./components/Investigation";
import MaximitePotential from "./components/MaximitePotential";
import Qualification from "./components/Qualification";

const Home = async () => {
  return (
    <>
      
      <Hero />
      <Curves />
      <Services />
      <AboutAgency />
      <AboutMe />
      <Testimonials />
      <Investigation />
      <MaximitePotential />
      <Qualification />
    </>
  );
};

export default Home;
