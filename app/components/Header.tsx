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
  const [isOpen, setIsOpen] = useState(false);
  const [activeItem, setActiveItem] = useState<null | string>(null);

  useEffect(() => {
    const updateScroll = () => {
      window.scrollY >= 90 ? setScroll(true) : setScroll(false);
    };
    window.addEventListener("scroll", updateScroll);
  }, []);

  // Toggle the visibility of the dropdown menu
  const toggleDropdown = (item: string) => {
    setIsOpen(!isOpen);
    setActiveItem(item);
  };

  // Inline styles for the dropdown menu
  const dropdownStyle: any = {
    maxHeight: isOpen ? "300px" : "0",
    overflow: "hidden",
    transition: "max-height 0.5s ease-in-out",
    visibility: isOpen ? "visible" : "hidden",
    opacity: isOpen ? 1 : 0,
  };

  return (
    <header
      className={`backdrop-filter backdrop-blur-lg ${
        scroll ? "border-b bg-white bg-opacity-40" : "border-b-0"
      }border-gray-200 z-30 min-w-full flex flex-col fixed`}
    >
      {/* mobile navbar */}
      <nav className="font-bold p-4 flex lg:hidden items-center justify-between">
        <Link href={"/"}>
          <div className="h-[70px] w-[225px]">
            <Image src={logo} alt="logo" priority></Image>
          </div>
        </Link>
        <CgMenuRight size={20} onClick={() => setNavCollapse(false)} />

        <div
          className={`flex min-h-screen w-screen absolute lg:hidden top-0 ${
            !navCollapse ? "right-0" : "right-[-100%]"
          } bottom-0 z-50 ease-in duration-300`}
        >
          <div
            className="w-1/4 md:w-2/4"
            onClick={() => setNavCollapse(true)}
          ></div>

          <div className="flex flex-col p-4 bg-gray-100/95 backdrop-filter backdrop-blur-sm w-3/4 md:w-2/4 overflow-y-auto">
            <CgClose
              className="self-end my-2"
              size={20}
              onClick={() => setNavCollapse(true)}
            />

            <ul className="flex flex-col items-start mt-5 gap-y-8">
              <li
                className={`${
                  activeItem === "who" ? "text-light-yellow" : ""
                } select-none text-lg font-medium capitalize cursor-pointer`}
                onClick={() => toggleDropdown("who")}
              >
                <div className="flex items-center space-x-2 justify-between ">
                  <span>Who We Serve</span>
                  <FaAngleDown
                    className={`transition-transform duration-500 mt-[5px] text-md ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </div>

                <ul
                  style={dropdownStyle}
                  className="list-none text-black flex flex-col gap-y-5"
                >
                  <li className="mt-5">
                    <Link
                      href="#"
                      className="text-lg font-medium capitalize cursor-pointer "
                      onClick={() => setNavCollapse(true)}
                    >
                      B2B Lead Generation
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="text-lg font-medium capitalize cursor-pointer"
                      onClick={() => setNavCollapse(true)}
                    >
                      Linkedin Lead Generation
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="text-lg font-medium capitalize cursor-pointer"
                      onClick={() => setNavCollapse(true)}
                    >
                      Email Marketing
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="text-lg font-medium capitalize cursor-pointer"
                      onClick={() => setNavCollapse(true)}
                    >
                      Facebook Page Product Review
                    </Link>
                  </li>
                </ul>
              </li>

              <li
                className={`${
                  activeItem === "tools" ? "text-light-yellow" : ""
                } select-none text-lg font-medium capitalize cursor-pointer`}
                onClick={() => toggleDropdown("tools")}
              >
                <div className="flex items-center space-x-2 justify-between ">
                  <span>Tools Services</span>
                  <FaAngleDown
                    className={`transition-transform duration-500 mt-[5px] text-md ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </div>

                <ul
                  style={dropdownStyle}
                  className="list-none text-black flex flex-col gap-y-5"
                >
                  <li className="mt-5">
                    <Link
                      href="#"
                      className="text-lg font-medium capitalize cursor-pointer"
                      onClick={() => setNavCollapse(true)}
                    >
                      Sales Navigator Premium Subscriptions
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="text-lg font-medium capitalize cursor-pointer"
                      onClick={() => setNavCollapse(true)}
                    >
                      Apollo Bulk Exports
                    </Link>
                  </li>
                </ul>
              </li>

              <li
                className={`${
                  activeItem === "tools" ? "text-light-yellow" : ""
                } select-none text-lg font-medium capitalize cursor-pointer`}
                onClick={() => toggleDropdown("tools")}
              >
                <div className="flex items-center space-x-2 justify-between ">
                  <span>About</span>
                  <FaAngleDown
                    className={`transition-transform duration-500 mt-[5px] text-md ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </div>

                <ul
                  style={dropdownStyle}
                  className="list-none text-black flex flex-col gap-y-5"
                >
                  <li className="mt-5">
                    <Link
                      href="#"
                      className="text-lg font-medium capitalize cursor-pointer"
                      onClick={() => setNavCollapse(true)}
                    >
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="text-lg font-medium capitalize cursor-pointer"
                      onClick={() => setNavCollapse(true)}
                    >
                      Contact
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="text-lg font-medium capitalize cursor-pointer"
                      onClick={() => setNavCollapse(true)}
                    >
                      Testimonial
                    </Link>
                  </li>
                </ul>
              </li>

              <li
                className={`${
                  activeItem === "tools" ? "text-light-yellow" : ""
                } select-none text-lg font-medium capitalize cursor-pointer`}
                onClick={() => toggleDropdown("tools")}
              >
                Why Us
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
