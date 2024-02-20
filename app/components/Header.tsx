"use client";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { CgClose, CgMenuRight } from "react-icons/cg";
import { FaAngleDown } from "react-icons/fa";
import logo from "@/public/logo.png";

export default function Header() {
  const [navCollapse, setNavCollapse] = useState(true);
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    const updateScroll = () => {
      window.scrollY >= 90 ? setScroll(true) : setScroll(false);
    };
    window.addEventListener("scroll", updateScroll);
  }, []);

  const navs = [
    "home",
    "about",
    "skills",
    "projects",
    "experience",
    "testimonials",
    "contact",
  ];

  return (
    <header
      className={`backdrop-filter backdrop-blur-lg ${
        scroll ? "border-b bg-white bg-opacity-40" : "border-b-0"
      }border-gray-200 z-30 min-w-full flex flex-col fixed`}
    >
      <nav className="lg:w-11/12 2xl:w-4/5 w-full md:px-6 2xl:px-0 mx-auto hidden lg:flex items-center justify-between">
        <Link href={"/"}>
          <div className="h-[95px] w-[300px]">
            <Image src={logo} alt="logo" priority></Image>
          </div>
        </Link>

        <ul className="flex items-center gap-12">
          <li className="group relative">
            <Link
              href="#"
              className="hover:text-[#E0BC74] transition-all duration-500 text-lg font-medium capitalize cursor-pointer flex items-center space-x-2"
            >
              <span>Who We Serve</span>
              <FaAngleDown className="mt-[5px] text-md" />
            </Link>

            <ul className="py-2 px-4 shadow-sm invisible opacity-0 group-hover:visible group-hover:opacity-100 absolute top-8 left-0 transition-all duration-500 flex flex-col space-y-1">
              <li>
                <Link
                  href="#"
                  className="hover:text-[#E0BC74] transition-colors duration-500 text-lg font-medium capitalize cursor-pointer text-nowrap"
                >
                  Who We Serve
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-[#E0BC74] transition-colors duration-500 text-lg font-medium capitalize cursor-pointer text-nowrap"
                >
                  Linkedin Lead Generation
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-[#E0BC74] transition-colors duration-500 text-lg font-medium capitalize cursor-pointer text-nowrap"
                >
                  Email Marketing
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-[#E0BC74] transition-colors duration-500 text-lg font-medium capitalize cursor-pointer text-nowrap"
                >
                  Facebook Page Product Review
                </Link>
              </li>
            </ul>
          </li>
          <li className="group relative">
            <Link
              href="#"
              className="hover:text-[#E0BC74] transition-all duration-500 text-lg font-medium capitalize cursor-pointer flex items-center space-x-2"
            >
              <span>Tools Services</span>
              <FaAngleDown className="mt-[5px] text-md" />
            </Link>

            <ul className="py-2 px-4 shadow-sm invisible opacity-0 group-hover:visible group-hover:opacity-100 absolute top-8 left-0 transition-all duration-500 flex flex-col space-y-1">
              <li>
                <Link
                  href="#"
                  className="hover:text-[#E0BC74] transition-colors duration-500 text-lg font-medium capitalize cursor-pointer text-nowrap"
                >
                  Sales Navigator Premium Subscriptions
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-[#E0BC74] transition-colors duration-500 text-lg font-medium capitalize cursor-pointer text-nowrap"
                >
                  Apollo Bulk Exports
                </Link>
              </li>
            </ul>
          </li>
          <li>
            <Link
              href="#who-we-serve"
              className="hover:text-[#E0BC74] transition-colors duration-500 text-lg font-medium capitalize cursor-pointer text-nowrap"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              href="#who-we-serve"
              className="hover:text-[#E0BC74] transition-colors duration-500 text-lg font-medium capitalize cursor-pointer text-nowrap"
            >
              Why Us
            </Link>
          </li>
        </ul>
      </nav>

      {/* mobile navbar */}
      <nav className="font-bold p-4 flex lg:hidden items-center justify-between">
        <Link href={"/"}>
          <div className="h-[70px] w-[225px]">
            <Image src={logo} alt="logo" priority></Image>
          </div>
        </Link>
        <CgMenuRight size={20} onClick={() => setNavCollapse(false)} />
      </nav>

      <div
        className={`flex min-h-screen w-screen absolute lg:hidden top-0 ${
          !navCollapse ? "right-0" : "right-[-100%]"
        } bottom-0 z-50 ease-in duration-300`}
      >
        <div
          className="w-1/4 md:w-2/4"
          onClick={() => setNavCollapse(true)}
        ></div>

        <div className="flex flex-col p-4 bg-gray-100/95 backdrop-filter backdrop-blur-sm w-3/4 md:w-2/4">
          <CgClose
            className="self-end my-2"
            size={20}
            onClick={() => setNavCollapse(true)}
          />

          <ul className="flex flex-col items-start mt-5 gap-y-8">
            <li className="group relative">
              <Link
                href="#who-we-serve"
                className="hover:text-[#E0BC74] transition-all duration-500 text-lg font-medium capitalize cursor-pointer flex items-center space-x-2"
              >
                <span>Who We Serve</span>
                <FaAngleDown className="mt-[5px] text-md" />
              </Link>

              <ul className="py-2 px-4 shadow-sm invisible opacity-0 group-hover:visible group-hover:opacity-100 absolute top-10 left-0 transition-all duration-500 flex flex-col space-y-1">
                <li>
                  <Link
                    href="#"
                    onClick={() => setNavCollapse(true)}
                    className="hover:text-[#E0BC74] transition-colors duration-500 text-lg font-medium capitalize cursor-pointer text-nowrap"
                  >
                    Who We Serve
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    onClick={() => setNavCollapse(true)}
                    className="hover:text-[#E0BC74] transition-colors duration-500 text-lg font-medium capitalize cursor-pointer text-nowrap"
                  >
                    Linkedin Lead Generation
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    onClick={() => setNavCollapse(true)}
                    className="hover:text-[#E0BC74] transition-colors duration-500 text-lg font-medium capitalize cursor-pointer text-nowrap"
                  >
                    Email Marketing
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    onClick={() => setNavCollapse(true)}
                    className="hover:text-[#E0BC74] transition-colors duration-500 text-lg font-medium capitalize cursor-pointer text-nowrap"
                  >
                    Facebook Page Product Review
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <Link
                href="#who-we-serve"
                onClick={() => setNavCollapse(true)}
                className="hover:text-[#E0BC74] transition-colors duration-500 text-lg font-medium capitalize cursor-pointer text-nowrap"
              >
                Tools Services
              </Link>
            </li>
            <li>
              <Link
                href="#who-we-serve"
                onClick={() => setNavCollapse(true)}
                className="hover:text-[#E0BC74] transition-colors duration-500 text-lg font-medium capitalize cursor-pointer text-nowrap"
              >
                Why Us
              </Link>
            </li>
            <li>
              <Link
                href="#who-we-serve"
                onClick={() => setNavCollapse(true)}
                className="hover:text-[#E0BC74] transition-colors duration-500 text-lg font-medium capitalize cursor-pointer text-nowrap"
              >
                About
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
