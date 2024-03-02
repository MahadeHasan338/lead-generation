import Image from "next/image";
import HalfMoonCurve from "@/app/components/HalfMoonCurve";
import contact from "@/public/contact.png";
import Link from "next/link";
import { MdEmail } from "react-icons/md";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";

const Contact = async () => {
  return (
    <>
      <HalfMoonCurve
        headingBold="Get"
        heading="In Touch!"
        subHeading="Is Your Sales Team Hungry For More Qualified Leads? Let’s Chat!"
        showOnMobile
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
            <div className="flex items-center justify-center xl:justify-start space-x-4 my-1 xl:mb-5">
              <Link href="#">
                <MdEmail className="h-8 w-8 text-[#c36]" />
              </Link>
              <Link href="#">
                <FaFacebookF className="h-8 w-8 text-[#c36]" />
              </Link>
              <Link href="#">
                <FaTwitter className="h-8 w-8 text-[#c36]" />
              </Link>
              <Link href="#">
                <FaLinkedinIn className="h-8 w-8 text-[#c36]" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
