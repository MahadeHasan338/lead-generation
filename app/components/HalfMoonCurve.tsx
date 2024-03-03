import { didact_gothic } from "@/app/fonts";

const HalfMoonCurve = async ({
  headingBold,
  heading,
  subHeading,
  showOnMobile,
}: any) => {
  return (
    <>
      <div className={`h-20 !bg-[#FFF6D1] text-black pb-3 relative`}></div>
      <div className="relative">
        <div className={`!bg-[#FFF6D1] text-black pb-3 relative`}>
          <div className="absolute -top-16 md:-top-5 left-0 right-0 mx-auto z-10">
            <h1
              className={`${didact_gothic.className} text-[40px] md:text-[60px] leading-[60px] md:leading-[70px] mb-3 text-center px-3`}
            >
              <span className="font-semibold">{headingBold}</span> {heading}
            </h1>

            <p
              className={`${
                !showOnMobile ? "hidden sm:block" : "block"
              } text-[22px] font-medium leading-8 text-paragraph text-center px-5 md:px-20`}
            >
              {subHeading}
            </p>
          </div>
        </div>
        <div className="h-[150px] md:h-[245px]"></div>
        <div className={`custom-shape-divider-top-1709056917`}>
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M0,0V7.23C0,65.52,268.63,112.77,600,112.77S1200,65.52,1200,7.23V0Z"
              className="shape-fill"
            ></path>
          </svg>
        </div>
      </div>
    </>
  );
};

export default HalfMoonCurve;
