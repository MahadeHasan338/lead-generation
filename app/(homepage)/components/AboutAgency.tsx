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
              The Lead Generation Agency That Transforms Businesses With Quality
              Leads That Convert
            </h2>
            <p className="default-text-style py-[15px]">
              Lead Generation is what we do. We live and breathe to generate
              leads. Connecting people is in our blood. We are a full-service UK
              lead gen agency ready to go to work for you!
            </p>
            <p className="default-text-style italic pb-[15px]">
              Want to maximise your reach?
            </p>
            <p className="default-text-style italic pb-[15px]">
              Need to convert more prospects?
            </p>
            <p className="default-text-style italic pb-[15px]">
              Badly want to drive growth?
            </p>
            <p className="default-text-style pb-10">
              We’re the lead generation agency you’re looking for. Unlike other
              lead generation companies in London, we have a unique approach to
              lead gen. We build relationships with your leads, offer a wide
              range of services, and have highly experienced professionals who
              are not just lead-generating experts but also digital marketers
              and sales mentors.
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
