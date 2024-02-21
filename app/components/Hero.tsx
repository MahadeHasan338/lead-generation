import Image from "next/image";
import hero from "@/public/hero.png";
import { didact_gothic } from "@/app/fonts";

const Hero = () => {
  return (
    <section id="home" className="default-container mt-2">
      <div className="grid grid-cols-1 xl:grid-cols-2 space-y-14 xl:space-x-[30px] text-center xl:text-left xl:items-center pb-20">
        <div
          className={`${didact_gothic.className} flex flex-col space-y-5 xl:space-y-8`}
        >
          <h1 className="hidden xl:block text-[70px] font-normal leading-[85px]">
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
        <Image src={hero} alt="hero"></Image>
      </div>

      {/* <div className="custom-shape-divider-bottom-1708545494">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            className="shape-fill"
          ></path>
        </svg>
      </div> */}
    </section>
  );
};

export default Hero;
