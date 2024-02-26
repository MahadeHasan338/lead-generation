import Link from "next/link";
import { MdEmail } from "react-icons/md";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";

export default function Footer() {
  const mapWrapperStyle: any = {
    position: "relative",
    width: "100%",
    height: "0",
    paddingBottom: "56.25%",
  };
  const mapStyle: any = {
    position: "absolute",
    top: "0",
    left: "0",
    width: "100%",
    height: "100%",
    border: "0",
  };

  return (
    <footer>
      <div className="bg-black">
        <div className="default-container py-10 md:py-20 grid grid-cols-1 space-y-10 md:grid-cols-3 md:gap-x-10 md:space-y-0">
          <div className="flex flex-col space-y-4 text-white">
            <Link href="#aboutAgency">Why Pearl Lemon Leads</Link>
            <Link href="#testimonial">Client Testimonials</Link>
            <Link href="#">Contact Us</Link>
          </div>

          <div style={mapWrapperStyle}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d116833.83187878219!2d90.33728799397399!3d23.78097572837469!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8b087026b81%3A0x8fa563bbdd5904c2!2sDhaka!5e0!3m2!1sen!2sbd!4v1708937545597!5m2!1sen!2sbd"
              width="100%"
              height="100%"
              style={mapStyle}
              loading="lazy"
            ></iframe>
          </div>

          <div className="flex flex-col space-y-4 text-white md:justify-self-end">
            <p className="font-semibold">Company Address:</p>
            <div>
              <p className="mb-1">Pearl Lemon Leads Ltd.</p>
              <p>International House,</p>
            </div>
            <div>
              <p className="mb-1">24 Holborn Viaduct</p>
              <p className="mb-1">London, EC1A 2BN</p>
              <p className="mb-1">United Kingdom</p>
            </div>
            <p className="font-semibold">Company Address:</p>
            <div>
              <p className="mb-1">Mobile: +44 207 183 3436</p>
              <p>Email: info@pearllemongroup.com</p>
            </div>
          </div>
        </div>

        <div className="default-container text-white text-center pb-10 md:pb-20">
          <span className="inline-block h-[1px] w-full bg-white rounded-3xl mb-8 md:mb-10" />
          <p className="mb-10">
            © All Rights Reserved <span className="mx-2">|</span> Company
            Number: 10411490 <span className="mx-2">|</span> VAT Number: 252
            7124 23
          </p>
          <div className="flex items-center justify-center space-x-8">
            <Link href="#">
              <MdEmail className="h-8 w-8 text-white" />
            </Link>
            <Link href="#">
              <FaFacebookF className="h-8 w-8 text-white" />
            </Link>
            <Link href="#">
              <FaTwitter className="h-8 w-8 text-white" />
            </Link>
            <Link href="#">
              <FaLinkedinIn className="h-8 w-8 text-white" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
