import HalfMoonCurve from "@/app/components/HalfMoonCurve";
import { didact_gothic } from "@/app/fonts";
import contact from "@/public/contact.png";
import img1 from "@/public/leads/1.png";
import img2 from "@/public/leads/2.png";
import img3 from "@/public/leads/3.png";
import img4 from "@/public/leads/4.png";
import Image from "next/image";

const Page = () => {
  return (
    <>
      <div className="pt-[102px] lg:pt-[95px]"></div>
      <HalfMoonCurve
        heading="Convert Emails into Returns."
        subHeading="Hit your desired audience with DATA PEAK, the #1 email marketing platform. It's an easy and efficient way to grow the highest opens, clicks, and sales."
        showOnMobile={false}
      />

      <div className="default-container xl:my-20 mb-16 mt-5">
        <div className="flex flex-col justify-center items-center xl:flex-row gap-y-10 xl:gap-y-0 xl:gap-x-5">
          <div className="basis-1/2 order-2">
            <Image src={contact} priority alt="agency"></Image>
          </div>

          <div className="order-1 xl:order-2 basis-1/2 text-center xl:text-left">
            <p className="default-text-style py-[15px]">
              Email marketing secured the topmost outcome on your investment.
              These powerful digital marketing tools will boost your brand
              smarter revenue fast. More than 3.9 billion global users
              communicate via email. Hence, don&apos;t miss this golden chance
              to present your brand with perfect customers. Enlist DATA PEAK,
              your most trusted email marketing agency partner, and let us set
              up your brand&apos;s best-match email campaign.
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
                Straight to the Inbox: The Power of Effective Email Marketing
              </h2>
              <p className="text-xl font-semibold opacity-80 py-7">
                Flexible design-
              </p>
              <p className="default-text-style">
                Any plain text, connect files, graphics, and whatever best fits
                you can send.
              </p>
              <p className="text-xl font-semibold opacity-80 py-7">
                Cost-effective solution-
              </p>
              <p className="default-text-style">
                This marketing method needs a small budget and no printing,
                advertisements, or media room charges.
              </p>
              <p className="text-xl font-semibold opacity-80 py-7">
                Scalable & Shareable
              </p>
              <p className="default-text-style pb-[15px]">
                Email marketing may be applicable for both short and large
                target lists to enhance credibility via speech or viral
                marketing.
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
                Trust DATA PEAK to command your Email Marketing tactics
              </h2>
              <p className="default-text-style py-[15px]">
                We believe in transparency. We will update you on progress & a-z
                regarding email marketing campaigns.
              </p>
              <p className="default-text-style pb-[15px]">
                We realize the authenticity of email marketing, offering
                excellent content and impressive visuals.
              </p>
              <p className="default-text-style pb-[15px]">
                We emphasize data-driven strategies & continuous innovation.
              </p>
              <p className="default-text-style pb-[15px]">
                We trace elements like opens, clicks, bounces, turning and more.
              </p>
              <p className="default-text-style pb-[15px]">
                Our success results touch over 150+ global clients of extensive
                industries, we ensure world-class solutions for all our clients.
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
                The services that boost our email marketing efficiency-
              </h2>
              <p className="default-text-style py-[15px]">
                At DATA PEAK, we provide comprehensive email marketing services
                to reach your business goals like as-
              </p>

              <ul className="ml-16 mt-10 text-center md:text-left">
                <li className="default-text-style list-disc">
                  Inspect the client’s marketing aim and object.
                </li>
                <li className="default-text-style list-disc">
                  Evaluate the client’s target audiences & current
                  opportunities.
                </li>
                <li className="default-text-style list-disc">Lead scoring</li>
                <li className="default-text-style list-disc">
                  Matches perfect strategies to reach your dream goals.
                </li>
                <li className="default-text-style list-disc">
                  Develop instructive & promotional emails.
                </li>
                <li className="default-text-style list-disc">
                  Campaign and template reviews.
                </li>
                <li className="default-text-style list-disc">
                  List building and segmentation.
                </li>
                <li className="default-text-style list-disc">
                  Implementing campaigns and monitoring.
                </li>
                <li className="default-text-style list-disc">
                  Reporting and analysis to make data-driven decisions.
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
                Meet Your New Partners: How we elevate your success?
              </h2>
              <p className="default-text-style py-[15px]">
                We introduced ourselves to a chain of professional and
                experienced teams. At once, we can execute huge campaign-making
                plans and control data over all your marketing systems. Our
                expertise is capable of applying the marketing cloud of your
                choice to create combined, cross-channel marketing campaigns.
              </p>
              <p className="default-text-style py-[15px]">
                Further, you’re welcome to enjoy best-driving results with our
                email marketing best practice. However, if you demand particular
                segments, explore the latest messaging or more, our team will
                support you at every step.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
