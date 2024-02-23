import dynamic from "next/dynamic";
import Hero from "./components/Hero";
import Curves from "./components/Curves";
import Services from "./components/Services";

const Home = async () => {
  return (
    <>
      <div className="h-[102px] lg:h-[95px]"></div>
      <Hero />
      <Curves />
      <Services />
    </>
  );
};

export default Home;
