import { didact_gothic } from "@/app/fonts";

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

const Testimonials = async () => {
  return (
    <div className="bg-gradient-yellow relative" id="testimonial">
      <div className="default-container text-center w-full h-full pt-4 pb-16 xl:py-20">
        <div className="flex flex-col space-y-6 mb-16">
          <h2
            className={`${didact_gothic.className} text-[25px] sm:text-3xl font-semibold leading-8 sm:leading-10 w-[97%] xl:80%`}
          >
            Our client&apos;s words, our inspiration.
          </h2>
        </div>

        <div className="columns-1 md:columns-2 gap-14 px-8 lg:px-28">
          {testimonials &&
            testimonials?.map((testimonial) => (
              <div key={testimonial.id} className="text-left pb-12">
                <p className="default-text-style pb-4">{testimonial.message}</p>
                <p className="text-2xl text-paragraph">{testimonial.name}</p>
              </div>
            ))}
        </div>
      </div>

      <div className="custom-shape-divider-bottom-1708773692">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            className="shape-fill"
          ></path>
        </svg>
      </div>
    </div>
  );
};

export default Testimonials;
