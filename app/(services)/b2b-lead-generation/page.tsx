import Cards from "@/app/components/Cards";
import { didact_gothic } from "@/app/fonts";
import img1 from "@/public/leads/1.png";
import img2 from "@/public/leads/2.png";
import img3 from "@/public/leads/3.png";
import img4 from "@/public/leads/4.png";
import Image from "next/image";
import HalfMoonCurve from "../../components/HalfMoonCurve";

const services = [
  {
    id: 1,
    icon: (
      <svg
        aria-hidden="true"
        className="fill-primary h-11 w-11"
        viewBox="0 0 640 512"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M640 264v-16c0-8.84-7.16-16-16-16H344v-40h72c17.67 0 32-14.33 32-32V32c0-17.67-14.33-32-32-32H224c-17.67 0-32 14.33-32 32v128c0 17.67 14.33 32 32 32h72v40H16c-8.84 0-16 7.16-16 16v16c0 8.84 7.16 16 16 16h104v40H64c-17.67 0-32 14.33-32 32v128c0 17.67 14.33 32 32 32h160c17.67 0 32-14.33 32-32V352c0-17.67-14.33-32-32-32h-56v-40h304v40h-56c-17.67 0-32 14.33-32 32v128c0 17.67 14.33 32 32 32h160c17.67 0 32-14.33 32-32V352c0-17.67-14.33-32-32-32h-56v-40h104c8.84 0 16-7.16 16-16zM256 128V64h128v64H256zm-64 320H96v-64h96v64zm352 0h-96v-64h96v64z"></path>
      </svg>
    ),
    title: "Appointment setting",
    description:
      "Our most popular service is an exclusive B2B appointment setting, with top lead-to-deal possibilities, opens up a new potential window within weeks.",
  },
  {
    id: 2,
    icon: (
      <svg
        aria-hidden="true"
        className="fill-primary h-11 w-11"
        viewBox="0 0 512 512"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M352 96c0-53.02-42.98-96-96-96s-96 42.98-96 96 42.98 96 96 96 96-42.98 96-96zM233.59 241.1c-59.33-36.32-155.43-46.3-203.79-49.05C13.55 191.13 0 203.51 0 219.14v222.8c0 14.33 11.59 26.28 26.49 27.05 43.66 2.29 131.99 10.68 193.04 41.43 9.37 4.72 20.48-1.71 20.48-11.87V252.56c-.01-4.67-2.32-8.95-6.42-11.46zm248.61-49.05c-48.35 2.74-144.46 12.73-203.78 49.05-4.1 2.51-6.41 6.96-6.41 11.63v245.79c0 10.19 11.14 16.63 20.54 11.9 61.04-30.72 149.32-39.11 192.97-41.4 14.9-.78 26.49-12.73 26.49-27.06V219.14c-.01-15.63-13.56-28.01-29.81-27.09z"></path>
      </svg>
    ),
    title: "LinkedIn lead generation",
    description:
      "We assist in levelling your sales by enhancing your brand image and content to reach your targeted leads directly.",
  },
  {
    id: 3,
    icon: (
      <svg
        aria-hidden="true"
        className="fill-primary h-11 w-11"
        viewBox="0 0 512 512"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M352 96c0-53.02-42.98-96-96-96s-96 42.98-96 96 42.98 96 96 96 96-42.98 96-96zM233.59 241.1c-59.33-36.32-155.43-46.3-203.79-49.05C13.55 191.13 0 203.51 0 219.14v222.8c0 14.33 11.59 26.28 26.49 27.05 43.66 2.29 131.99 10.68 193.04 41.43 9.37 4.72 20.48-1.71 20.48-11.87V252.56c-.01-4.67-2.32-8.95-6.42-11.46zm248.61-49.05c-48.35 2.74-144.46 12.73-203.78 49.05-4.1 2.51-6.41 6.96-6.41 11.63v245.79c0 10.19 11.14 16.63 20.54 11.9 61.04-30.72 149.32-39.11 192.97-41.4 14.9-.78 26.49-12.73 26.49-27.06V219.14c-.01-15.63-13.56-28.01-29.81-27.09z"></path>
      </svg>
    ),
    title: "Cold email outreach",
    description:
      "We allow you to boost personalized engagement via email to get high-profile leads, ensuring high security for your new clients.",
  },
];

const B2BLeadGeneration = async () => {
  return (
    <>
      <div className="h-[102px] lg:h-[95px]"></div>
      <HalfMoonCurve
        heading="World-class B2B Lead Generation platform."
        subHeading="Replenish Your Sales Funnel With Data Peak Lead’s B2B Lead Generation"
      />

      {/* video container */}
      <div className="default-container xl:my-20 mb-16 mt-5">
        <div className="flex flex-col justify-center items-center xl:flex-row gap-y-10 xl:gap-y-0 xl:gap-x-10">
          <div className="basis-1/2 order-2 h-full w-full">
            <div
              className="relative overflow-hidden"
              style={{ paddingTop: "56.25%", height: 0 }}
            >
              <iframe
                className="absolute top-0 left-0 w-full h-full rounded-[30px]"
                src="https://www.youtube.com/embed/ZKskqzAxEFs?si=cXc5LV3w3w63nzh_&amp;start=15"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
          </div>

          <div className="order-1 xl:order-2 basis-1/2 text-center xl:text-left">
            <p className="default-text-style py-[15px]">
              Lead volume and quality are both crucial to us. We&apos;re
              efficient in creating high-quality leads by applying the latest
              technologies and strategic solutions. We&apos;ll take less
              nurturing time to present you with actual leads and have an
              overall higher conversion rate. Your business will level the next
              by getting relevant contacts appropriate to the target
              demographic.
            </p>
            <p className="default-text-style !font-bold py-[15px]">
              Speed, specification & get a whole wave of B2B Lead.
            </p>
          </div>
        </div>
      </div>

      {/* about us */}
      {/* part one */}
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
            <div className="basis-1/2 order-2 px-10 lg:px-20 xl:px-0">
              <Image src={img1} priority alt="agency"></Image>
            </div>

            <div className="order-1 basis-1/2 text-center xl:text-left">
              <h2
                className={`${didact_gothic.className} text-[25px] sm:text-3xl font-semibold leading-8 sm:leading-10`}
              >
                Lead Generation US- Real Lead- Real Results- Real Success.
              </h2>
              <p className="text-xl font-semibold opacity-80 py-7">
                Lead Gen Experts-
              </p>
              <p className="default-text-style">
                We’re teaming up with a broad branch of lead gen experts to grow
                your business.Our US-based B2B Lead Generation Agency is
                enriched with an actual track record of providing exceptional
                regional business success stories. We’re proficient in boosting
                your brand lead flow & revenue and creating a powerful online
                presence.
              </p>
              <p className="text-xl font-semibold opacity-80 py-7">
                Market Research
              </p>
              <p className="default-text-style pb-[15px]">
                we ensure a profound realization of your hunt purchasing
                behaviour to pick them.
              </p>
            </div>
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

      {/* part two */}
      <div className="bg-white py-20 xl:py-20 relative">
        <div className="default-container">
          <div className="flex flex-col justify-center items-center xl:flex-row gap-y-10 xl:gap-y-0 xl:gap-x-28">
            <div className="basis-1/2 order-1 px-10 lg:px-20 xl:px-0">
              <Image src={img2} priority alt="agency"></Image>
            </div>

            <div className="order-2 basis-1/2 text-center xl:text-left">
              <h2
                className={`${didact_gothic.className} text-[25px] sm:text-3xl font-semibold leading-8 sm:leading-10`}
              >
                Pack fresh deals with ROI-focused lead collection-
              </h2>
              <p className="default-text-style py-[15px]">
                We’re presenting you with a results-driven process and
                industry-proven expertise which assists in forming a predictable
                & compatible sales channel. Yup! We mean it! We’re proudly
                betting on diverse industrial lead generation.
              </p>
              <p className="default-text-style pb-[15px]">
                We emphasize MQL (Marketing Qualified Leads) & BANT (Budget,
                Authority, Need, and Timing) lead generation services. Our MQLs
                mean top interest in your product by connecting our content
                publishing platform. We ensure no non-sense leads focusing on
                both BANT & MQL parameters leading your business to the top of
                the sales funnel.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* part three */}
      <div className="bg-[#f4f4f4] py-20 xl:py-32 relative">
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
            <div className="basis-1/2 order-2 px-10 lg:px-20 xl:px-0">
              <Image src={img3} priority alt="agency"></Image>
            </div>

            <div className="order-1 basis-1/2 text-center xl:text-left">
              <h2
                className={`${didact_gothic.className} text-[25px] sm:text-3xl font-semibold leading-8 sm:leading-10`}
              >
                Significant factors that turn DATA PEAK No-1 B2B Lead Generation
                platform-
              </h2>
              <p className="default-text-style py-[15px]">
                Picking the Absolutes B2B lead generation company is quite
                complex. We’ve won all the hard boundaries & serving valued
                clients sincerely. Our complete portfolio of services makes us
                the top choice in this industry. Some of these are:
              </p>

              <ul className="ml-16 mt-10 text-center md:text-left">
                <li className="default-text-style list-disc">
                  Inbound Marketing
                </li>
                <li className="default-text-style list-disc">
                  Content marketing
                </li>
                <li className="default-text-style list-disc">Lead scoring</li>
                <li className="default-text-style list-disc">
                  Content Syndication
                </li>
                <li className="default-text-style list-disc">
                  Email & Tele Marketing
                </li>
                <li className="default-text-style list-disc">
                  Programmatic Advertising
                </li>
                <li className="default-text-style list-disc">
                  Appointment-Setting
                </li>
                <li className="default-text-style list-disc">Cold calling</li>
                <li className="default-text-style list-disc">
                  Sales nurturing & more
                </li>
              </ul>
            </div>
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

      {/* part four */}
      <div className="bg-white py-20 xl:py-20 relative">
        <div className="default-container">
          <div className="flex flex-col justify-center items-center xl:flex-row gap-y-10 xl:gap-y-0 xl:gap-x-28">
            <div className="basis-1/2 order-1 px-10 lg:px-20 xl:px-0">
              <Image src={img4} priority alt="agency"></Image>
            </div>

            <div className="order-2 basis-1/2 text-center xl:text-left">
              <h2
                className={`${didact_gothic.className} text-[25px] sm:text-3xl font-semibold leading-8 sm:leading-10`}
              >
                Hire &quot;DATA PEAK&quot;, the best marketing agency for B2B
                Leads.
              </h2>
              <p className="default-text-style py-[15px]">
                We’re a professional, experienced lead generation resource to
                enhance your business&apos;s thriving with Sales Qualified
                Leads. Our B2B lead-generating specialists can create engagement
                with decision-makers, pulling your salespeople toward those
                searching to pick your services now. Our authentic, strategic,
                and targeted B2B lead generation effort is intended to assist
                your brand growth and create more leads instantly. Hire our
                trusty B2B lead generation experts’ team to have a successful
                B2B lead campaign that suits your budget best.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* services */}
      <div className="bg-service-bg bg-[left_top_2rem] xl:bg-[left_top_4rem] bg-no-repeat bg-service-size pb-10 xl:pb-0">
        <div className="default-container text-center w-full h-full pt-16 pb-5 xl:py-28">
          <div className="flex flex-col space-y-6 mb-16">
            <h2
              className={`${didact_gothic.className} text-[25px] sm:text-3xl font-semibold leading-8 sm:leading-10 w-[97%] xl:80%`}
            >
              Our B2B lead generation services win thousands of clients.
            </h2>
          </div>

          <Cards data={services} />
        </div>
      </div>
    </>
  );
};

export default B2BLeadGeneration;
