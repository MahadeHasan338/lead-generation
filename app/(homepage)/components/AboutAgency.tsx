import Link from "next/link";
import Image from "next/image";
import { didact_gothic } from "@/app/fonts";
import agency from "@/public/agency-bg.webp";

const AboutAgency = async () => {
  return (
    <div className="bg-[#F4F4F4] py-20 xl:py-32 relative" id="aboutAgency">
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
        <div className="flex flex-col justify-center items-center xl:flex-row gap-y-10 xl:gap-y-0 xl:gap-x-5">
          <div className="basis-1/2 order-2">
            <Image src={agency} priority alt="agency"></Image>
          </div>

          <div className="order-1 xl:order-2 basis-1/2 text-center xl:text-left">
            <h2
              className={`${didact_gothic.className} text-[25px] sm:text-3xl font-semibold leading-8 sm:leading-10`}
            >
              Ever-growing lead generation with 15 years of Experience.
            </h2>
            <p className="default-text-style py-[15px]">
              We’re presenting a perfect blend of skill tools & strategies-
            </p>
            <p className="default-text-style italic pb-[15px]">
              Hit your absolute customers with “DATA PEAK LEADS GENERATION”, the
              worlds largest professional network. We’ve been supporting your
              business Since 2010.
            </p>
            <p className="default-text-style italic pb-[15px]">
              We assist you in engaging with new consumers and boosting your
              market reach. We create spontaneous day-to-day operations with our
              top-class virtual & technical support services so you may pivot
              your main business.
            </p>
            <p className="default-text-style italic pb-[15px]">
              “DATA PEAK” applies the outstanding lead gen approach to build a
              strong lead with a wide range of services and mastermind
              expertise.
            </p>
            <p className="default-text-style pb-10">
              Our experienced team rates & turns revenue-generating leads into
              satisfied clients, which relates to an enhanced sales pipeline &
              clarity in all spheres.
            </p>
            <Link href="/contact">
              <button className="button-primary">Contact Us</button>
            </Link>
          </div>
        </div>
      </div>

      <div className="custom-shape-divider-bottom-1708621578">
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

export default AboutAgency;
