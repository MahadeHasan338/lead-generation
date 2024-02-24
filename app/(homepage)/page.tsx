import Hero from "./components/Hero";
import Curves from "./components/Curves";
import Services from "./components/Services";
import AboutAgency from "./components/AboutAgency";
import AboutMe from "./components/AboutMe";
import Testimonials from "./components/Testimonials";
import Investigation from "./components/Investigation";

const Home = async () => {
  return (
    <>
      <div className="h-[102px] lg:h-[95px]"></div>
      <Hero />
      <Curves />
      <Services />
      <AboutAgency />
      <AboutMe />
      <Testimonials />
    </>
  );
};

export default Home;
