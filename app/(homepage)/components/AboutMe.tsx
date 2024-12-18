import { didact_gothic } from "@/app/fonts";
import Link from "next/link";

const AboutMe = async () => {
  return (
    <>
      <h2
        className={`${didact_gothic.className} flex items-center justify-center text-center text-[25px] sm:text-3xl font-semibold leading-8 sm:leading-10 mt-5 xl:mb-14`}
      >
        ‘WE PRACTICE WHAT WE PREACH’
      </h2>
      <div className="xl:bg-about-bg bg-fixed bg-right-top xl:pt-20 pb-10 xl:pb-32 relative">
        <div className="default-container -z-10">
          <div className="flex flex-col justify-center items-center xl:flex-row gap-y-10 xl:gap-y-0 xl:gap-x-10">
            <div className="basis-1/2 text-center xl:text-left">
              <h2
                className={`${didact_gothic.className} text-[25px] sm:text-3xl font-semibold leading-8 sm:leading-10`}
              >
                Shahriar Sarker
              </h2>
              <h3 className="text-xl font-semibold py-7">
                Pioneer of DATA PEAK Leads & the mastermind of Lead Generation
              </h3>
              <p className="default-text-style pb-5">
                Hey! Welcome “DATA PEAK, ” the best platform on which to get
                dependable outcomes. I heartily believe our team is qualified
                enough to present the best possible Leads for all sorts of
                brands & businesses.
                <span className="font-bold">GROW your business</span>.
              </p>
              <p className="default-text-style pb-5">
                Get ready to make a window-shop our verified reviews, client
                testimonials or case studies. Let us know your mind & enjoy the
                best support to gain qualified leads.
              </p>
              <p className="default-text-style pb-10">
                Well, you’ve come to the right place! Browse our video, and then
                let’s have a 10–minute Discovery Call to discuss what’s on your
                mind.
              </p>
              <Link href="/contact">
                <button className="button-primary">Contact Us</button>
              </Link>
            </div>

            <div className="basis-1/2"></div>
          </div>
        </div>

        <div className="custom-shape-divider-bottom-1708621578 -mb-2">
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
    </>
  );
};

export default AboutMe;
