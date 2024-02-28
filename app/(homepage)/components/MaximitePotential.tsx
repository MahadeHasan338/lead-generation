import { didact_gothic } from "@/app/fonts";

const potentials = [
  {
    id: 1,
    icon: (
      <svg
        aria-hidden="true"
        className="fill-primary h-11 w-11"
        viewBox="0 0 640 512"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M519.2 127.9l-47.6-47.6A56.252 56.252 0 0 0 432 64H205.2c-14.8 0-29.1 5.9-39.6 16.3L118 127.9H0v255.7h64c17.6 0 31.8-14.2 31.9-31.7h9.1l84.6 76.4c30.9 25.1 73.8 25.7 105.6 3.8 12.5 10.8 26 15.9 41.1 15.9 18.2 0 35.3-7.4 48.8-24 22.1 8.7 48.2 2.6 64-16.8l26.2-32.3c5.6-6.9 9.1-14.8 10.9-23h57.9c.1 17.5 14.4 31.7 31.9 31.7h64V127.9H519.2zM48 351.6c-8.8 0-16-7.2-16-16s7.2-16 16-16 16 7.2 16 16c0 8.9-7.2 16-16 16zm390-6.9l-26.1 32.2c-2.8 3.4-7.8 4-11.3 1.2l-23.9-19.4-30 36.5c-6 7.3-15 4.8-18 2.4l-36.8-31.5-15.6 19.2c-13.9 17.1-39.2 19.7-55.3 6.6l-97.3-88H96V175.8h41.9l61.7-61.6c2-.8 3.7-1.5 5.7-2.3H262l-38.7 35.5c-29.4 26.9-31.1 72.3-4.4 101.3 14.8 16.2 61.2 41.2 101.5 4.4l8.2-7.5 108.2 87.8c3.4 2.8 3.9 7.9 1.2 11.3zm106-40.8h-69.2c-2.3-2.8-4.9-5.4-7.7-7.7l-102.7-83.4 12.5-11.4c6.5-6 7-16.1 1-22.6L367 167.1c-6-6.5-16.1-6.9-22.6-1l-55.2 50.6c-9.5 8.7-25.7 9.4-34.6 0-9.3-9.9-8.5-25.1 1.2-33.9l65.6-60.1c7.4-6.8 17-10.5 27-10.5l83.7-.2c2.1 0 4.1.8 5.5 2.3l61.7 61.6H544v128zm48 47.7c-8.8 0-16-7.2-16-16s7.2-16 16-16 16 7.2 16 16c0 8.9-7.2 16-16 16z"></path>
      </svg>
    ),
    title: "Better Sales Opportunities",
    description:
      "Our lead generation service helps identify and engage with potential customers, expanding your pool of prospects and increasing sales opportunities.",
  },
  {
    id: 2,
    icon: (
      <svg
        aria-hidden="true"
        className="fill-primary h-11 w-11"
        viewBox="0 0 640 512"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4zm323-128.4l-27.8-28.1c-4.6-4.7-12.1-4.7-16.8-.1l-104.8 104-45.5-45.8c-4.6-4.7-12.1-4.7-16.8-.1l-28.1 27.9c-4.7 4.6-4.7 12.1-.1 16.8l81.7 82.3c4.6 4.7 12.1 4.7 16.8.1l141.3-140.2c4.6-4.7 4.7-12.2.1-16.8z"></path>
      </svg>
    ),
    title: "Targeted Market Reach",
    description:
      "Our skilled and seasoned copywriters have a proven track record of crafting cold email copy that gets RESULTS.",
  },
  {
    id: 3,
    icon: (
      <svg
        aria-hidden="true"
        className="fill-primary h-11 w-11"
        viewBox="0 0 488 512"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"></path>
      </svg>
    ),
    title: "Cost-Effective Marketing",
    description:
      "You might think that lead generation is pricey, but social media marketing needs bigger budgets, like Facebook Ads or Pinterest Ads. With lead generation, you will have a cost-effective marketing campaign that works",
  },
  {
    id: 4,
    icon: (
      <svg
        aria-hidden="true"
        className="fill-primary h-11 w-11ar-chart-bar"
        viewBox="0 0 512 512"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M396.8 352h22.4c6.4 0 12.8-6.4 12.8-12.8V108.8c0-6.4-6.4-12.8-12.8-12.8h-22.4c-6.4 0-12.8 6.4-12.8 12.8v230.4c0 6.4 6.4 12.8 12.8 12.8zm-192 0h22.4c6.4 0 12.8-6.4 12.8-12.8V140.8c0-6.4-6.4-12.8-12.8-12.8h-22.4c-6.4 0-12.8 6.4-12.8 12.8v198.4c0 6.4 6.4 12.8 12.8 12.8zm96 0h22.4c6.4 0 12.8-6.4 12.8-12.8V204.8c0-6.4-6.4-12.8-12.8-12.8h-22.4c-6.4 0-12.8 6.4-12.8 12.8v134.4c0 6.4 6.4 12.8 12.8 12.8zM496 400H48V80c0-8.84-7.16-16-16-16H16C7.16 64 0 71.16 0 80v336c0 17.67 14.33 32 32 32h464c8.84 0 16-7.16 16-16v-16c0-8.84-7.16-16-16-16zm-387.2-48h22.4c6.4 0 12.8-6.4 12.8-12.8v-70.4c0-6.4-6.4-12.8-12.8-12.8h-22.4c-6.4 0-12.8 6.4-12.8 12.8v70.4c0 6.4 6.4 12.8 12.8 12.8z"></path>
      </svg>
    ),
    title: "Enhanced Conversion Rates",
    description:
      "We analyse data from various sources like Google Analytics, social media platforms, and online research to build a strategy that gets qualified leads and improves conversion rates.",
  },

  {
    id: 5,
    icon: (
      <svg
        aria-hidden="true"
        className="fill-primary h-11 w-11"
        viewBox="0 0 576 512"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M160 448c-25.6 0-51.2-22.4-64-32-64-44.8-83.2-60.8-96-70.4V480c0 17.67 14.33 32 32 32h256c17.67 0 32-14.33 32-32V345.6c-12.8 9.6-32 25.6-96 70.4-12.8 9.6-38.4 32-64 32zm128-192H32c-17.67 0-32 14.33-32 32v16c25.6 19.2 22.4 19.2 115.2 86.4 9.6 6.4 28.8 25.6 44.8 25.6s35.2-19.2 44.8-22.4c92.8-67.2 89.6-67.2 115.2-86.4V288c0-17.67-14.33-32-32-32zm256-96H224c-17.67 0-32 14.33-32 32v32h96c33.21 0 60.59 25.42 63.71 57.82l.29-.22V416h192c17.67 0 32-14.33 32-32V192c0-17.67-14.33-32-32-32zm-32 128h-64v-64h64v64zm-352-96c0-35.29 28.71-64 64-64h224V32c0-17.67-14.33-32-32-32H96C78.33 0 64 14.33 64 32v192h96v-32z"></path>
      </svg>
    ),
    title: "Focus On Other Things",
    description:
      "Our B2B lead generation agency helps streamline the sales process and reduces the time spent finding and nurturing leads, freeing up time for other tasks.",
  },
  {
    id: 6,
    icon: (
      <svg
        aria-hidden="true"
        className="fill-primary h-11 w-11ital"
        viewBox="0 0 448 512"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M128 244v-40c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v40c0 6.627-5.373 12-12 12h-40c-6.627 0-12-5.373-12-12zm140 12h40c6.627 0 12-5.373 12-12v-40c0-6.627-5.373-12-12-12h-40c-6.627 0-12 5.373-12 12v40c0 6.627 5.373 12 12 12zm-76 84v-40c0-6.627-5.373-12-12-12h-40c-6.627 0-12 5.373-12 12v40c0 6.627 5.373 12 12 12h40c6.627 0 12-5.373 12-12zm76 12h40c6.627 0 12-5.373 12-12v-40c0-6.627-5.373-12-12-12h-40c-6.627 0-12 5.373-12 12v40c0 6.627 5.373 12 12 12zm180 124v36H0v-36c0-6.627 5.373-12 12-12h19.5V85.035C31.5 73.418 42.245 64 55.5 64H144V24c0-13.255 10.745-24 24-24h112c13.255 0 24 10.745 24 24v40h88.5c13.255 0 24 9.418 24 21.035V464H436c6.627 0 12 5.373 12 12zM79.5 463H192v-67c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v67h112.5V112H304v24c0 13.255-10.745 24-24 24H168c-13.255 0-24-10.745-24-24v-24H79.5v351zM266 64h-26V38a6 6 0 0 0-6-6h-20a6 6 0 0 0-6 6v26h-26a6 6 0 0 0-6 6v20a6 6 0 0 0 6 6h26v26a6 6 0 0 0 6 6h20a6 6 0 0 0 6-6V96h26a6 6 0 0 0 6-6V70a6 6 0 0 0-6-6z"></path>
      </svg>
    ),
    title: "All-In-One Agency",
    description:
      "We're not like any other lead generation agencies out there because we're also part of a bigger digital marketing agency called Pearl Lemon Group",
  },
];

const MaximitePotential = () => {
  return (
    <div className="bg-gradient-yellow relative">
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

      <div className="default-container text-center w-full h-full pt-16 pb-5 xl:py-28">
        <div className="flex flex-col space-y-3 mb-16">
          <h2
            className={`${didact_gothic.className} text-[25px] sm:text-3xl font-semibold leading-8 mb-3 sm:leading-10 w-[97%] xl:80%`}
          >
            Maximise Your Business Potential With Our Lead Generation Agency In
            The UK
          </h2>
          <p className="default-text-style">
            Lead generation is crucial to business growth and development. By
            identifying and engaging with high-quality leads, businesses can
            expand their reach, increase sales opportunities, and improve
            conversion rates.
          </p>
          <p className="default-text-style">
            Take a look at some of the most prominent benefits of our lead
            generation potentials here.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 xl:gap-20">
          {potentials &&
            potentials.map((potential) => (
              <div
                key={potential.id}
                className="border border-[#f7f7f7] hover:bg-[#F4F4F4] transition-all duration-300 rounded-[20px] p-10 md:p-5 lg:p-10 bg-white text-center xl:text-left"
              >
                <span className="inline-block">{potential.icon}</span>
                <h6
                  className={`${didact_gothic.className} text-[22px] font-semibold mt-10 mb-[9px]`}
                >
                  {potential.title}
                </h6>
                <p className="text-[18px] leading-[26px] text-[#333]">
                  {potential.description}
                </p>
                <button className="uppercase mt-8 text-[12px] text-[#242424] font-semibold tracking-[2px] underline underline-offset-8 decoration-primary decoration-2 hover:decoration-[#242424] hover:text-primary transition-all duration-300">
                  Learn more
                </button>
              </div>
            ))}
        </div>
      </div>

      <div className="custom-shape-divider-bottom-1708786721">
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
    </div>
  );
};

export default MaximitePotential;
