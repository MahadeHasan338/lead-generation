import Image from "next/image";
import React from "react";
import HalfMoonCurve from "@/app/components/HalfMoonCurve";
import contact from "@/public/contact.png";

const Page = () => {
  return (
    <>
      <div className="pt-[102px] lg:pt-[95px]"></div>
      <HalfMoonCurve
        headingBold="Facebook"
        heading="Product Review"
        subHeading="Is Your Sales Team Hungry For More Qualified Leads? Let’s Chat!"
        showOnMobile={false}
      />

      <div className="default-container xl:my-20 mb-16 mt-5">
        <div className="flex flex-col justify-center items-center xl:flex-row gap-y-10 xl:gap-y-0 xl:gap-x-5">
          <div className="basis-1/2 order-2">
            <Image src={contact} priority alt="agency"></Image>
          </div>

          <div className="order-1 xl:order-2 basis-1/2 text-center xl:text-left">
            <p className="default-text-style py-[15px]">
              Hey! We’re Business Development Team here!
            </p>
            <p className="default-text-style pb-[15px]">
              Feel free to reach out to us directly on:{" "}
              <strong className="font-semibold text-[#c36]">
                <a href="tel:1234567890">1234567890</a>
              </strong>{" "}
              or{" "}
              <strong className="font-semibold text-[#c36]">
                <a href="mailto:example@example.com">example@email.com</a>
              </strong>{" "}
              at a time that is convenient for you!
            </p>
            <p className="default-text-style pb-[15px]">
              Alternatively, drop me a line in social media below and I’ll get
              back to you ASAP!
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
