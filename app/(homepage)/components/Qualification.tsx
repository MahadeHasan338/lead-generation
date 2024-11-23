import Image from "next/image";
import { didact_gothic } from "@/app/fonts";
import qualification from "@/public/qualification.png";

const Qualification = async () => {
  return (
    <>
      <div className="bg-white py-20 xl:py-32 relative">
        <div className="default-container">
          <div className="flex flex-col justify-center items-center xl:flex-row gap-y-10 xl:gap-y-0 xl:gap-x-28">
            <div className="basis-1/2 order-2 lg:px-10">
              <Image src={qualification} priority alt="agency"></Image>
            </div>

            <div className="order-1 basis-1/2 text-center xl:text-left">
              <h2
                className={`${didact_gothic.className} text-[25px] sm:text-3xl font-semibold leading-8 sm:leading-10`}
              >
                Enclose more deals-greater lead management twitch here.
              </h2>
              <p className="default-text-style py-[15px]">
                Let&apos;s set up more conversations and reach out to
                multi-channel outbound action.
              </p>
              <p className="default-text-style pb-[15px]">
                Directly we create leads from a LinkedIn search or any LinkedIn
                profile. We go with LinkedIn Basic or Sales Navigator. In the
                case of email marketing our robust algorithm will reach lost
                email addresses generating leads automatically.
              </p>
              <p className="default-text-style pb-[15px]">
                Google Chrome extension (you can change it) is our main browser
                for online lead origination. We realize your brand is
                extraordinary, so we permit you to choose a customized business
                field overlap.
              </p>
              <p className="default-text-style mb-12">
                Our B2B lead gen & FB page product review also create leads by
                applying a dynamic, innovative approach.
              </p>

              <button className="button-primary !bg-[#59BA41] !text-white">
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Qualification;
