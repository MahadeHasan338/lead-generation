import { didact_gothic } from "@/app/fonts";
import Cards from "@/app/components/Cards";
import HalfMoonCurve from "../../components/HalfMoonCurve";
import img1 from "@/public/leads/1.png";
import img2 from "@/public/leads/2.png";
import img3 from "@/public/leads/3.png";
import img4 from "@/public/leads/4.png";
import Image from "next/image";

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
    title: "Instagram B2b Lead Generation Agency",
    description: "",
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
    title: "Tiktok B2b Agency",
    description: "",
  },
];

const B2BLeadGeneration = async () => {
  return (
    <>
      <div className="h-[102px] lg:h-[95px]"></div>
      <HalfMoonCurve
        headingBold="B2B"
        heading="Lead Generation Agency"
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
              Once you’ve outsourced your B2B lead generation to our experienced
              team here at Data Peak Leads, we will perform several activities
              to increase your brand awareness and boost your online presence,
              resulting in more qualified leads, calls and meetings.
            </p>
            <p className="default-text-style !font-bold py-[15px]">
              We’ll essentially replenish your sales funnel enabling your sales
              team to do what they do best!
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
                Our Lead Generation Solution
              </h2>
              <p className="text-xl font-semibold opacity-80 py-7">
                Your Problem
              </p>
              <p className="default-text-style">
                You need to generate more qualified B2B leads. You need a way to
                manage and urge those leads to conversion.
              </p>
              <p className="text-xl font-semibold opacity-80 py-7">
                Our Solution
              </p>
              <p className="default-text-style pb-[15px]">
                B2B lead generation from Data Peak Leads. As a leading B2B lead
                gen agency, Data Peak Leads powers lead generation campaigns for
                B2B organizations in every niche and of all sizes. Our marketing
                strategies capture the attention of prospects, improves brand
                visibility, educates buyers, and converts prospects to paying
                customers.
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
                Lead Generation Services To Increase Your Revenue
              </h2>
              <p className="default-text-style py-[15px]">
                Our clients come to us to gain traction from initial B2B lead
                generation campaigns and scale their lead generation efforts in
                an effective, measurable way.
              </p>
              <p className="default-text-style pb-[15px]">
                We combine inbound marketing methodologies with account-based
                marketing and sales development to improve outcomes from B2B
                lead generation efforts.
              </p>
              <p className="default-text-style pb-[15px]">
                We offer an important advantage over traditional lead generation
                companies in that we understand that there is no one size fits
                all lead generation strategy and that successful B2B lead
                generation campaigns need to be diverse and wide-reaching. Our
                Lead generation services reflect this.
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
                Our Approach
              </h2>
              <p className="default-text-style py-[15px]">
                We improve the results of lead generation efforts for B2B
                enterprises seeking to improve their sales pipeline. Our bespoke
                B2B lead generation strategies – each one is unique, tailored to
                meet the needs of each unique client we work with – may include
                all the following (and more)
              </p>

              <ul className="ml-16 mt-10 text-center md:text-left">
                <li className="default-text-style list-disc">
                  Inbound marketing
                </li>
                <li className="default-text-style list-disc">
                  Content marketing
                </li>
                <li className="default-text-style list-disc">Lead scoring</li>
                <li className="default-text-style list-disc">
                  Lead management
                </li>
                <li className="default-text-style list-disc">
                  Sales nurturing
                </li>
                <li className="default-text-style list-disc">
                  LinkedIn lead generation
                </li>
                <li className="default-text-style list-disc">Cold calling</li>
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
                Hire Our Team Of B2B Lead Generation Experts
              </h2>
              <p className="default-text-style py-[15px]">
                Our team is made up of a set of experienced professionals who
                each have something else to bring to the table in terms of lead
                generation expertise and we utilize all of those skills – along
                with decades of combined experience – to execute successful B2B
                lead generation strategies that respect you, the reputation of
                your company and your budget. Also, check out how we have
                generated leads for our own company via Twitter in this article
                published on SEMrush.
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
              Our B2B Lead Generation Services
            </h2>
          </div>

          <Cards data={services} />
        </div>
      </div>
    </>
  );
};

export default B2BLeadGeneration;
