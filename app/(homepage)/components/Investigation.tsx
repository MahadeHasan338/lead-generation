import Image from "next/image";
import { didact_gothic } from "@/app/fonts";
import img1 from "@/public/investigation/1.png";

const Investigation = () => {
  return (
    <div className="bg-[#F4F4F4] py-20 xl:py-32 relative">
      <div className="custom-shape-divider-top-1708621683">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
            className="shape-fill"
          ></path>
        </svg>
      </div>

      <div className="default-container">
        <div className="flex flex-col justify-center items-center xl:flex-row gap-y-10 xl:gap-y-0 xl:gap-x-28">
          <div className="basis-1/2 order-2">
            <Image src={img1} priority alt="agency"></Image>
          </div>

          <div className="order-1 basis-1/2 text-center xl:text-left">
            <h2
              className={`${didact_gothic.className} text-[25px] sm:text-3xl font-semibold leading-8 sm:leading-10`}
            >
              The Lead Generation Agency That Transforms Businesses With Quality
              Leads That Convert
            </h2>
            <p className="text-lg font-normal text-paragraph py-[15px]">
              Lead Generation is what we do. We live and breathe to generate
              leads. Connecting people is in our blood. We are a full-service UK
              lead gen agency ready to go to work for you!
            </p>
            <p className="text-lg font-normal italic text-paragraph pb-[15px]">
              Want to maximise your reach?
            </p>
            <p className="text-lg font-normal italic text-paragraph pb-[15px]">
              Need to convert more prospects?
            </p>
            <p className="text-lg font-normal italic text-paragraph pb-[15px]">
              Badly want to drive growth?
            </p>
            <p className="text-lg font-normal text-paragraph pb-10">
              We’re the lead generation agency you’re looking for. Unlike other
              lead generation companies in London, we have a unique approach to
              lead gen. We build relationships with your leads, offer a wide
              range of services, and have highly experienced professionals who
              are not just lead-generating experts but also digital marketers
              and sales mentors.
            </p>
            <button className="button-primary !font-semibold">
              Contact Us
            </button>
          </div>
        </div>
      </div>

      <div className="custom-shape-divider-bottom-1708773692">
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
      </div>
    </div>
  );
};

export default Investigation;
