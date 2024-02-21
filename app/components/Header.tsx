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
  const [activeMenu, setActiveMenu] = useState<any>({});

  useEffect(() => {
    const updateScroll = () => {
      window.scrollY >= 90 ? setScroll(true) : setScroll(false);
    };
    window.addEventListener("scroll", updateScroll);
    return () => window.removeEventListener("scroll", updateScroll);
  }, []);

  // Initialize activeMenu state with all submenus collapsed
  useEffect(() => {
    const initialActiveMenuState: any = {};
    menus.forEach((menu) => {
      initialActiveMenuState[menu.title] = false;
    });
    setActiveMenu(initialActiveMenuState);
  }, []);

  const toggleDropdown = (item: string) => {
    setActiveMenu((prevActiveMenu: any) => ({
      ...prevActiveMenu,
      [item]: !prevActiveMenu[item],
    }));
  };

  const transitionStyle = {
    transition: "max-height 0.5s ease-in-out",
  };

  // Define menus and submenus
  const menus = [
    {
      title: "Who We Serve",
      submenu: [
        { title: "B2B Lead Generation" },
        { title: "Linkedin Lead Generation" },
        { title: "Email Marketing" },
        { title: "Facebook Page Product Review" },
      ],
    },
    {
      title: "Tools Services",
      submenu: [
        { title: "Sales Navigator Premium Subscriptions" },
        { title: "Apollo Bulk Exports" },
      ],
    },
    {
      title: "About",
      submenu: [
        { title: "About Us" },
        { title: "Contact" },
        { title: "Testimonial" },
      ],
    },
    {
      title: "Why Us",
      submenu: [],
    },
  ];

  return (
    <header
      className={`backdrop-filter backdrop-blur-lg ${
        scroll ? "border-b bg-white bg-opacity-40" : "border-b-0"
      } border-gray-200 z-30 min-w-full flex flex-col fixed`}
    >
      {/* Desktop Navbar */}
      <nav className="default-container hidden lg:flex items-center justify-between">
        <Link href="/">
          <Image src={logo} alt="logo" width={300} height={95} priority />
        </Link>
        <ul className="flex items-center gap-8 xl:gap-12">
          {menus.map((menu, index) => (
            <li key={index} className="group relative">
              <Link
                href="#"
                className="hover:text-light-yellow transition-all duration-500 text-lg font-medium capitalize flex items-center space-x-2"
              >
                <span>{menu.title}</span>
                {menu.submenu.length > 0 && (
                  <FaAngleDown className="mt-[5px] text-md" />
                )}
              </Link>
              {menu.submenu.length > 0 && (
                <ul className="py-2 px-4 shadow-sm invisible opacity-0 group-hover:visible group-hover:opacity-100 absolute top-9 left-0 transition-all duration-500 flex flex-col space-y-1 bg-white">
                  {menu.submenu.map((subItem, subIndex) => (
                    <li key={subIndex}>
                      <Link
                        href="#"
                        className="block hover:text-light-yellow transition-colors duration-500 text-lg font-medium capitalize text-nowrap"
                      >
                        {subItem.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </nav>

      {/* Mobile navbar */}
      <nav className="font-bold p-4 flex lg:hidden items-center justify-between">
        <Link href="/" className="h-[70px] w-[225px] relative">
          <Image
            src={logo}
            alt="logo"
            layout="fill"
            objectFit="contain"
            priority
          />
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

            <ul className="flex flex-col items-start mt-5 gap-y-5">
              {menus.map((menu) => (
                <li key={menu.title} className="text-lg font-medium capitalize">
                  <div
                    className="flex items-center space-x-2 cursor-pointer transition-colors duration-500"
                    onClick={() => toggleDropdown(menu.title)}
                    style={{ color: activeMenu[menu.title] ? "#E0BC74" : "" }}
                  >
                    <span>{menu.title}</span>
                    {menu.submenu.length > 0 && (
                      <FaAngleDown
                        className={`transition-transform duration-500 mt-[5px] text-sm ${
                          activeMenu[menu.title] ? "rotate-180" : ""
                        }`}
                      />
                    )}
                  </div>

                  {menu.submenu.length > 0 && (
                    <ul
                      className="mt-5 list-none text-black flex flex-col gap-y-5"
                      style={{
                        maxHeight: activeMenu[menu.title] ? "300px" : "0",
                        overflow: "hidden",
                        transition: "max-height 0.5s ease-in-out",
                      }}
                    >
                      {menu.submenu.map((item, index) => (
                        <li key={index}>
                          <Link
                            href="#"
                            className="text-lg font-medium capitalize"
                            onClick={() => setNavCollapse(true)}
                          >
                            {item.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
