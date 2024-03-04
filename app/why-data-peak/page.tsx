import React from "react";
import HalfMoonCurve from "@/app/components/HalfMoonCurve";

const Page = () => {
  return (
    <>
      <div className="pt-[102px] lg:pt-[95px]"></div>
      <HalfMoonCurve
        headingBold="Why Pearl Lemon Leads"
        heading="Vs Other Agencies"
        subHeading="Is Your Sales Team Hungry For More Qualified Leads? Let’s Chat!"
        showOnMobile={false}
      />
    </>
  );
};

export default Page;
