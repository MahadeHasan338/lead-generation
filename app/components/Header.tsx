"use client";
import logo from "@/public/logo.png";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { CgClose, CgMenuRight } from "react-icons/cg";
import { FaAngleDown } from "react-icons/fa";

export default function Header() {
  const [navCollapse, setNavCollapse] = useState(true);
  const [scroll, setScroll] = useState(false);
  const [activeMenu, setActiveMenu] = useState<any>({});

  // Define menus and submenus
  const menus = [
    {
      id: 1,
      title: "Who We Serve",
      submenu: [
        {
          id: 1,
          title: "Linkedin Lead Generation",
          link: "/linkedin-lead-generation",
        },
        { id: 2, title: "B2B Lead Generation", link: "/b2b-lead-generation" },
        { id: 3, title: "Email Marketing", link: "/email-marketing" },
      ],
    },
    {
      id: 2,
      title: "Why Us",
      submenu: [
        { title: "Why Data Peak", link: "/why-data-peak" },
        { title: "Testimonial & Reviews", link: "/testimonials" },
      ],
    },
    {
      id: 3,
      title: "Tools Services",
      link: "#",
    },
    {
      id: 4,
      title: "Contact Us",
      link: "/contact",
    },
  ];

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

  return (
    <header
      className={`backdrop-filter backdrop-blur-lg ${
        scroll ? "border-b bg-white bg-opacity-40" : "border-b-0"
      } border-gray-200 z-[9999] min-w-full flex flex-col fixed`}
    >
      {/* Desktop Navbar */}
      <nav className="nav-container hidden lg:flex items-center justify-between">
        <Link href="/">
          <Image src={logo} alt="logo" width={300} height={75} priority />
        </Link>
        <ul className="flex items-center gap-8 xl:gap-12 mr-3">
          {menus.map((menu, index) => (
            <li key={index} className="group relative">
              <Link
                href={menu.submenu ? "#" : menu.link}
                className="hover:text-light-yellow transition-all duration-500 text-lg font-medium capitalize flex items-center space-x-2"
              >
                <span>{menu.title}</span>
                {menu.submenu && menu.submenu.length > 0 && (
                  <FaAngleDown className="mt-[5px] text-md" />
                )}
              </Link>
              {menu.submenu && menu.submenu.length > 0 && (
                <ul className="py-2 px-4 shadow-sm invisible opacity-0 group-hover:visible group-hover:opacity-100 absolute top-9 left-0 transition-all duration-500 flex flex-col space-y-1 bg-white">
                  {menu.submenu.map((subItem, subIndex) => (
                    <li key={subIndex}>
                      <Link
                        href={subItem.link}
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
      <nav className="font-bold pl-2 pr-3 py-4 flex lg:hidden items-center justify-between">
        <Link href="/">
          <Image src={logo} alt="logo" width={225} height={70} priority />
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
              {menus.map((menu, index) => (
                <li key={index} className="text-lg font-medium capitalize">
                  <div
                    onClick={() => {
                      if (menu.submenu) {
                        toggleDropdown(menu?.title);
                      } else {
                        setNavCollapse(true);
                      }
                    }}
                  >
                    <Link
                      href={menu.submenu ? "#" : menu.link}
                      className="hover:text-light-yellow transition-all duration-500 text-lg font-medium capitalize flex items-center space-x-2"
                    >
                      <span>{menu.title}</span>
                      {menu.submenu && menu.submenu.length > 0 && (
                        <FaAngleDown className="mt-[2px] text-md" />
                      )}
                    </Link>
                  </div>

                  {menu?.submenu && menu?.submenu?.length > 0 && (
                    <ul
                      className="list-none text-black flex flex-col"
                      style={{
                        maxHeight: activeMenu[menu.title] ? "300px" : "0",
                        overflow: "hidden",
                        transition: "max-height 0.5s ease-in-out",
                      }}
                    >
                      {menu.submenu.map((item, index) => (
                        <div key={index}>
                          <span className="mt-5"></span>
                          <li key={index}>
                            <Link
                              href={item.link}
                              className="text-lg font-medium capitalize"
                              onClick={() => setNavCollapse(true)}
                            >
                              {item.title}
                            </Link>
                          </li>
                        </div>
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
