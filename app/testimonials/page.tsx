import { didact_gothic } from "@/app/fonts";
import React from "react";
import HalfMoonCurve from "@/app/components/HalfMoonCurve";

const testimonials = [
  {
    id: 1,
    message:
      "Very satisfied with DATA PEAK Leads Gen, their email marketing experience & talent give us a seamless experience. This is a powerful platform with a speedy & responsive working process. Overall, they’re a full-service leads gen platform ready to serve the best.",
    name: "Christine Mulvey",
  },
  {
    id: 2,
    message:
      "Awesome service. Mind-blowing consumer service. Their working system touched me highly. I appreciate their LinkedIn Lead Generation service. I especially thanked the organizer of this platform. His team organizes a system & working steps appreciable.",
    name: "Tomas Edison",
  },
  {
    id: 3,
    message:
      "Definitely, I’ll join “DATA PEAK” in my next project. This team is awesome, especially a great job offers for B2B Lead Generation.",
    name: "Rudolf-G",
  },
  {
    id: 4,
    message:
      "I suggest everyone do business with “Shahriar”. Seamless corporation. They are very responsive, skilled & overqualified. My Facebook page product review is done in a given time frame & as per demand.",
    name: "Chris Dylan",
  },
  {
    id: 5,
    message:
      "“DATA PEAK” is an exclusive Lead Generation vendors, I was surprised with the total service package. All of my demands were delivered on time, in a 100% reliable and authentic way.",
    name: "Eric Denly",
  },
  {
    id: 6,
    message:
      "The crucial parts of a successful business are best value-quality service-responsibility. Shahriar- a real organizer constantly delivering great with our publishing company with zero quality compromise.",
    name: "Jon R. Morn",
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

      <div className="bg-gradient-yellow relative">
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
