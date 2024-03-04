import { didact_gothic } from "@/app/fonts";
import React from "react";
import HalfMoonCurve from "@/app/components/HalfMoonCurve";

const testimonials = [
  {
    id: 1,
    message:
      "Lead Generation is what we do. We live and breathe to generate leads. Connecting people is in our blood. We are a full-service UK lead gen agency ready to go to work for you!",
    name: "Vijay",
  },
  {
    id: 2,
    message:
      "Pearl Lemon are our current advisors as to the growth of Willyard Staffing and Consulting and we are 2.5 months into working with them and are also part of their private Facebook members group. The practicality of their Lead Generation advice and also implementation so far has been superb!",
    name: "Becky Willyard",
  },
  {
    id: 3,
    message:
      "Pearl Lemon have are two months into working with pixel art on our lead generation funnel and I’m really pleased to say that so far we’ve been able to close several new deals as a consequence of our work together – thanks so much guys really happy so far!",
    name: "Zuka",
  },
  {
    id: 4,
    message:
      "I'm so thankful for the results I got from Pearl Lemon. We hired Deepak Shukla and its team for b2b lead generation services and SEO services for our websites, and within 6-7 months we doubled our growth. If you are looking for an SEO company in London or UK, this is the agency for you.",
    name: "Tom A",
  },
  {
    id: 5,
    message:
      "Deepak and Pearl Lemon gave me the tools to boost my presence on LinkedIn which has led to organic and valuable interactions and ultimately potential and actual business. They have always gone above and beyond, couldn’t recommend them enough!",
    name: "Aarish Shah",
  },
  {
    id: 6,
    message:
      "Working with Deepak and PLL has been nothing short of plain sailing – I’ve known the team there for several years and they’ve been able to pass me work time and time again – highly recommend them for lead generation – I’m in web development!",
    name: "Billy Mushet",
  },
];

const Testimonial = () => {
  return (
    <>
      <div className="pt-[102px] lg:pt-[95px]"></div>
      <HalfMoonCurve
        headingBold="We Accelerate"
        heading="Digital Growth."
        subHeading="Take A Look At What Our Clients Have To Say About Our Lead Generation Services!"
        showOnMobile={false}
      />

      <div className="bg-gradient-yellow relative" id="testimonial">
        <div className="default-container text-center w-full h-full pt-4 pb-16 xl:py-20">
          <div className="flex flex-col space-y-6 mb-16">
            <h2
              className={`${didact_gothic.className} text-[25px] sm:text-3xl font-semibold leading-8 sm:leading-10 w-[97%] xl:80%`}
            >
              What They Say About Us
            </h2>
          </div>

          <div className="columns-1 md:columns-2 gap-14 px-8 lg:px-28">
            {testimonials &&
              testimonials?.map((testimonial) => (
                <div key={testimonial.id} className="text-left pb-12">
                  <p className="default-text-style pb-4">
                    {testimonial.message}
                  </p>
                  <p className="text-2xl text-paragraph">{testimonial.name}</p>
                </div>
              ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonial;
