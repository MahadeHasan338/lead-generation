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
    title: "Network Expansion",
    description:
      "We will connect you with more of your target audience, industry influencers and referral partners.",
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
    title: "Engaging Content",
    description:
      "We will ensure that valuable content is consistently shared with your target market.",
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
        <path d="M396.8 352h22.4c6.4 0 12.8-6.4 12.8-12.8V108.8c0-6.4-6.4-12.8-12.8-12.8h-22.4c-6.4 0-12.8 6.4-12.8 12.8v230.4c0 6.4 6.4 12.8 12.8 12.8zm-192 0h22.4c6.4 0 12.8-6.4 12.8-12.8V140.8c0-6.4-6.4-12.8-12.8-12.8h-22.4c-6.4 0-12.8 6.4-12.8 12.8v198.4c0 6.4 6.4 12.8 12.8 12.8zm96 0h22.4c6.4 0 12.8-6.4 12.8-12.8V204.8c0-6.4-6.4-12.8-12.8-12.8h-22.4c-6.4 0-12.8 6.4-12.8 12.8v134.4c0 6.4 6.4 12.8 12.8 12.8zM496 400H48V80c0-8.84-7.16-16-16-16H16C7.16 64 0 71.16 0 80v336c0 17.67 14.33 32 32 32h464c8.84 0 16-7.16 16-16v-16c0-8.84-7.16-16-16-16zm-387.2-48h22.4c6.4 0 12.8-6.4 12.8-12.8v-70.4c0-6.4-6.4-12.8-12.8-12.8h-22.4c-6.4 0-12.8 6.4-12.8 12.8v70.4c0 6.4 6.4 12.8 12.8 12.8z"></path>
      </svg>
    ),
    title: "Profile Optimisation",
    description:
      "We’ll ensure that your key employees have a strong, conversion-focused Linkedin profile.",
  },
];

const LinkedinLeadGeneration = async () => {
  return (
    <>
      <HalfMoonCurve
        headingBold="LinkedIn"
        heading="Lead Generation"
        subHeading="Reach Out To 600 Qualified Prospects Per MONTH With Our Linkedin Lead Generation Services"
        showOnMobile={false}
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
              LinkedIn is a thriving platform filled with regular users — 500
              million+ of them. That’s a HUGE source of high-quality leads
              waiting to be nurtured.
            </p>
            <p className="default-text-style pb-[15px]">
              As one of the leading LinkedIn Lead Generation companies in the
              UK, we’ll capture those leads, for you to turn into new sources of
              business and revenue.
            </p>
            <p className="default-text-style pb-[15px]">
              Alternatively, drop me a line in social media below and I’ll get
              back to you ASAP!
            </p>
          </div>
        </div>
      </div>

      {/* services */}
      <div className="bg-service-bg bg-[left_top_2rem] xl:bg-[left_top_4rem] bg-no-repeat bg-service-size">
        <div className="default-container text-center w-full h-full pt-16 pb-5 xl:py-28">
          <div className="flex flex-col space-y-6 mb-16">
            <h2
              className={`${didact_gothic.className} text-[25px] sm:text-3xl font-semibold leading-8 sm:leading-10 w-[97%] xl:80%`}
            >
              Our LinkedIn Lead Generation Services
            </h2>
            <p className="default-text-style">
              We help amazing companies to <strong>attract</strong> more of
              their ideal clients using LinkedIn. Our B2B Lead Generation
              service has been carefully designed to build your online presence
              whilst also accurately reflecting your brand and positioning you
              as a trusted leader in your industry.
            </p>
          </div>

          <Cards data={services} />
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
                We Are A B2B Lead Generation Company
              </h2>
              <p className="default-text-style py-[15px]">
                Every day, people are doing real business on LinkedIn. Whilst
                many companies have a presence on LinkedIn, they are not
                leveraging the full potential of the powerful platform.
              </p>
              <p className="default-text-style pb-[15px]">
                It’s not just about forming connections – it’s about building
                viable relationships, and closing deals that are mutually
                beneficial. Our Linkedin lead generation experts can help you
                ensure you are connecting with and talking to your ideal
                prospects.
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
                Multi-Channel Lead Generation Approach
              </h2>
              <p className="default-text-style py-[15px]">
                As a full-service lead generation agency, we are able to tailor
                our LinkedIn Lead generation services to your business goals.
              </p>
              <p className="default-text-style pb-[15px]">
                This may involve us integrating our cold calling, cold email and
                appointment setting offering with our LinkedIn lead generation
                services to deliver maximum value.
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
                We Practice What We Preach
              </h2>
              <p className="default-text-style py-[15px]">
                Every day we reach out to over 500 people on LinkedIn to
                generate actual leads with high conversion rates. Our bespoke
                Lead Generation strategy of combining cold emailing, messaging,
                appointment setting and many more provide results which you
                signed up for!
              </p>
              <p className="default-text-style pb-[15px]">
                We don’t commit to performing to the bare minimum but go the
                extra mile, which makes us stand apart from all other lead
                generation service providers.
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
                We Are Recognised As Leaders In The LinkedIn Lead Generation
                Space
              </h2>
              <p className="default-text-style py-[15px]">
                LinkedIn Lead Generation has played a HUGE part in building up
                The Pearl Lemon Group (PLG)! We were featured in this SEMrush
                article in which Deepak Shukla explains how he generated $18,000
                worth of proposals using LinkedIn within 3 months. We’ve also
                shared our thoughts on LinkedIn articles on the LinkedInformed
                podcast hosted by Mark Williams.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LinkedinLeadGeneration;
