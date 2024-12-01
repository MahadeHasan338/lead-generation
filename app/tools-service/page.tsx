import HalfMoonCurve from "@/app/components/HalfMoonCurve";
import image1 from "@/public/tools-service/1.jpg";
import image2 from "@/public/tools-service/2.jpg";
import image3 from "@/public/tools-service/3.jpg";
import Image from "next/image";

const Contact = async () => {
  return (
    <>
      <div className="pt-[102px] lg:pt-[95px]"></div>
      <HalfMoonCurve
        heading="Unlock Your Business Potential with Tailored Solutions"
        showOnMobile
      />

      <div className="default-container xl:my-20 mb-16 mt-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-between items-center">
          <div className="flex flex-col items-center gap-y-3">
            <Image src={image1} alt="service" className="rounded-[20px]" />
            <p className="text-lg font-semibold px-4 text-center">
              Linkedin Sales Navigator Premium Subscriptions
            </p>
            <p className="text-3xl font-bold">30$</p>
          </div>
          <div className="flex flex-col items-center gap-y-3">
            <Image src={image2} alt="service" className="rounded-[20px]" />
            <p className="text-lg font-semibold px-4 text-center">
              Linkedin Sales Navigator Premium Subscriptions
            </p>
            <p className="text-3xl font-bold">85$</p>
          </div>
          <div className="flex flex-col items-center gap-y-3">
            <Image src={image3} alt="service" className="rounded-[20px]" />
            <p className="text-lg font-semibold px-4 text-center">
              Linkedin Sales Navigator Premium Subscriptions
            </p>
            <p className="text-3xl font-bold">170$</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
