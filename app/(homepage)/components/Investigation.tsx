import Image from "next/image";
import { didact_gothic } from "@/app/fonts";
import img1 from "@/public/investigation/1.png";
import img2 from "@/public/investigation/2.png";
import img3 from "@/public/investigation/3.png";
import img4 from "@/public/investigation/4.png";

const Investigation = async () => {
  return (
    <>
      {/* part one */}
      <div className="bg-[#F4F4F4] py-20 xl:py-32 relative">
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
          <div className="flex flex-col justify-center items-center xl:flex-row gap-y-10 xl:gap-y-0 xl:gap-x-28">
            <div className="basis-1/2 order-2 px-10 lg:px-20 xl:px-0">
              <Image src={img1} priority alt="agency"></Image>
            </div>

            <div className="order-1 basis-1/2 text-center xl:text-left">
              <h2
                className={`${didact_gothic.className} text-[25px] sm:text-3xl font-semibold leading-8 sm:leading-10`}
              >
                Investing In Our Lead Generation Agency In London Is The Right
                Thing To Do
              </h2>
              <p className="default-text-style py-[15px]">
                Investing in a lead generation agency can be a game-changer for
                businesses looking to grow and succeed. You might have tried
                Google Ads at some point, but maybe it just didn’t work out for
                you.
              </p>
              <p className="default-text-style pb-[15px]">
                Our lead generation agency in London offers a range of services
                designed to help businesses reach their full potential. Whether
                you’re looking to increase sales, acquire new customers, or
                improve your marketing strategies, we have the expertise and
                resources to help you achieve your goals.
              </p>
            </div>
          </div>
        </div>

        <div className="custom-shape-divider-bottom-1708786721">
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

      {/* part two */}
      <div className="bg-white py-20 xl:py-20 relative">
        <div className="default-container">
          <div className="flex flex-col justify-center items-center xl:flex-row gap-y-10 xl:gap-y-0 xl:gap-x-28">
            <div className="basis-1/2 order-1 px-10 lg:px-20 xl:px-0">
              <Image src={img2} priority alt="agency"></Image>
            </div>

            <div className="order-2 basis-1/2 text-center xl:text-left">
              <h2
                className={`${didact_gothic.className} text-[25px] sm:text-3xl font-semibold leading-8 sm:leading-10`}
              >
                Investing In Our Lead Generation Agency In London Is The Right
                Thing To Do
              </h2>
              <p className="default-text-style py-[15px]">
                Investing in a lead generation agency can be a game-changer for
                businesses looking to grow and succeed. You might have tried
                Google Ads at some point, but maybe it just didn’t work out for
                you.
              </p>
              <p className="default-text-style pb-[15px]">
                Our lead generation agency in London offers a range of services
                designed to help businesses reach their full potential. Whether
                you’re looking to increase sales, acquire new customers, or
                improve your marketing strategies, we have the expertise and
                resources to help you achieve your goals.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* part three */}
      <div className="bg-[#f4f4f4] py-20 xl:py-32 relative">
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
          <div className="flex flex-col justify-center items-center xl:flex-row gap-y-10 xl:gap-y-0 xl:gap-x-28">
            <div className="basis-1/2 order-2 px-10 lg:px-20 xl:px-0">
              <Image src={img3} priority alt="agency"></Image>
            </div>

            <div className="order-1 basis-1/2 text-center xl:text-left">
              <h2
                className={`${didact_gothic.className} text-[25px] sm:text-3xl font-semibold leading-8 sm:leading-10`}
              >
                Investing In Our Lead Generation Agency In London Is The Right
                Thing To Do
              </h2>
              <p className="default-text-style py-[15px]">
                Investing in a lead generation agency can be a game-changer for
                businesses looking to grow and succeed. You might have tried
                Google Ads at some point, but maybe it just didn’t work out for
                you.
              </p>
              <p className="default-text-style pb-[15px]">
                Our lead generation agency in London offers a range of services
                designed to help businesses reach their full potential. Whether
                you’re looking to increase sales, acquire new customers, or
                improve your marketing strategies, we have the expertise and
                resources to help you achieve your goals.
              </p>
            </div>
          </div>
        </div>

        <div className="custom-shape-divider-bottom-1708786721">
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

      {/* part four */}
      <div className="bg-white py-20 xl:py-20 relative">
        <div className="default-container">
          <div className="flex flex-col justify-center items-center xl:flex-row gap-y-10 xl:gap-y-0 xl:gap-x-28">
            <div className="basis-1/2 order-1 px-10 lg:px-20 xl:px-0">
              <Image src={img4} priority alt="agency"></Image>
            </div>

            <div className="order-2 basis-1/2 text-center xl:text-left">
              <h2
                className={`${didact_gothic.className} text-[25px] sm:text-3xl font-semibold leading-8 sm:leading-10`}
              >
                Investing In Our Lead Generation Agency In London Is The Right
                Thing To Do
              </h2>
              <p className="default-text-style py-[15px]">
                Investing in a lead generation agency can be a game-changer for
                businesses looking to grow and succeed. You might have tried
                Google Ads at some point, but maybe it just didn’t work out for
                you.
              </p>
              <p className="default-text-style pb-[15px]">
                Our lead generation agency in London offers a range of services
                designed to help businesses reach their full potential. Whether
                you’re looking to increase sales, acquire new customers, or
                improve your marketing strategies, we have the expertise and
                resources to help you achieve your goals.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Investigation;
