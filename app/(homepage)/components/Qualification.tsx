import Image from "next/image";
import { didact_gothic } from "@/app/fonts";
import qualification from "@/public/qualification.png";

const Qualification = () => {
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
                Investing In Our Lead Generation Agency In London Is The Right
                Thing To Do
              </h2>
              <p className="text-lg font-normal text-paragraph py-[15px]">
                Failure to generate a consistent stream of qualified leads is
                the #1 reason small businesses struggle to scale up.
              </p>
              <p className="text-lg font-normal text-paragraph pb-[15px]">
                When you outsource your B2B lead generation to us, we will take
                away the task of creating interest and generating leads from
                your sales team so they can do, what they do best, convert leads
                into sales.
              </p>
              <p className="text-lg font-normal text-paragraph pb-[15px]">
                It’s time to move on from spending countless hours and resources
                on strategies that only give you disappointing results. And if
                you’re looking for a more effective and efficient way to
                generate leads, our lead generation company is the answer.
              </p>
              <p className="text-lg font-normal text-paragraph mb-12">
                Lead generation is one of our specialities, and our team of
                experts has the knowledge and expertise needed to assist you. To
                help businesses generate high-quality leads and reach their
                target audiences, we use proven strategies and cutting-edge
                technology.
              </p>

              <button className="button-primary !bg-[#59BA41] !text-white">
                Book a call
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Qualification;
