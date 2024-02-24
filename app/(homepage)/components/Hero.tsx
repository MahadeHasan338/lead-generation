import Image from "next/image";
import { didact_gothic } from "@/app/fonts";
import hero from "@/public/hero.png";

const Hero = () => {
  return (
    <section id="home" className="default-container mt-2">
      <div className="grid grid-cols-1 xl:grid-cols-2 xl:items-center space-y-14 xl:space-x-[30px] text-center xl:text-left  pb-16">
        <div
          className={`${didact_gothic.className} flex flex-col space-y-5 xl:space-y-8 mt-5 md:mt-10 xl:mt-20 `}
        >
          <h1 className="hidden xl:block text-[70px] font-normal leading-[85px] ">
            We&apos;ll <span className="font-bold">Book</span> You 20 <br />{" "}
            Calls In <span className="font-bold">30 Days</span>
          </h1>

          <h1 className="xl:hidden text-[40px] md:text-[50px] md:px-5 lg:px-0 font-normal leading-[60px]">
            We&apos;ll <span className="font-bold">Book</span> You 20 Calls In
            <span className="font-bold"> 30 Days</span>
          </h1>
          <h3 className="text-xl font-semibold">
            <span className="font-black">Award-Winning BD</span> Lead Generation
            Agency In London.
          </h3>
          <h3 className="text-xl font-semibold">(Just Give Us 6 Months)</h3>
          <div className="inline-block">
            <button className="button-primary">Book a call now!</button>
          </div>
        </div>
        <div className="text-center xl:text-right">
          <Image
            className="inline-block"
            src={hero}
            priority
            alt="hero"
          ></Image>
        </div>
      </div>
    </section>
  );
};

export default Hero;
