import dynamic from "next/dynamic";
import Hero from "./components/Hero";

const Home = async () => {
  return (
    <>
      <div className="h-[102px] lg:h-[95px]"></div>
      <Hero />
    </>
  );
};

export default Home;
