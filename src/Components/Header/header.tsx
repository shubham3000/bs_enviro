"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { IconContext } from "react-icons";
import { RxCross1 } from "react-icons/rx";
import {
  IconChevronDown,
  IconChevronUp,
  IconDownload,
  IconMenu,
} from "@tabler/icons-react";
import { AnimatePresence, motion } from "framer-motion";

import Logo from "@/assests/Logo/Logo.png";
import LogoBlue from "@/assests/Logo/Logogreen1.png";

interface HeaderProps {
  isWhite?: boolean;
  isLogin?: boolean;
}

const Header: React.FC<HeaderProps> = ({ isWhite = true, isLogin = false }) => {
  const [sidebar, setSidebar] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState<{ [key: string]: boolean }>(
    {}
  );

  const showSidebar = () => setSidebar((prev) => !prev);

  const SidebarData = [
    { title: "Home", path: "/" },
    { title: "About Us", path: "/aboutus" },
    {
      title: "Products",
      path: "",
      subItems: [
        {
          title: "Sewage Treatment Plant (STP)",
          path: "/products/sewageTreatmentPlant",
        },
        {
          title: "Effluent Treatment Plant (ETP)",
          path: "/products/effluentTreatmentPlant",
        },
        {
          title: "Water Treatment Plant",
          path: "/products/waterTreatmentPlant",
        },
        { title: "Disinfection Unit (DU)", path: "/products/disinfectionUnit" },
        { title: "Fabricated Items (Fl)", path: "/products/fabricatedItem" },
      ],
    },
    { title: "Projects", path: "/projects" },
    // { title: "Careers", path: "/careers" },
    { title: "Contact Us", path: "/contactus" },
  ];

  const toggleDropdown = (title: string) => {
    setDropdownOpen((prev) => ({
      ...prev,
      [title]: !prev[title],
    }));
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`z-50 w-screen px-4 transition-all flex justify-center items-center ${
        isScrolled ? "fixed top-0 shadow-md" : "absolute"
      }`}
      style={{
        backgroundColor: isScrolled
          ? isWhite
            ? "#FFF"
            : "#FFF"
          : "transparent",
      }}
    >
      <div className="container">
        <IconContext.Provider value={{ color: "#fff" }}>
          <div className="flex items-center justify-between py-4">
            {/* Logo */}
            <div className="flex items-center">
              <Link href="/">
                <Image
                  src={isScrolled ? (isWhite ? LogoBlue : Logo) : Logo}
                  alt="B S Enviro Logo"
                  className="h-10 w-auto"
                />
              </Link>
            </div>

            {/* Right Side */}
            <div className="flex items-center space-x-8 py-2.5">
              <>
                <motion.div
                  className={`${
                    isScrolled
                      ? isWhite
                        ? "border-[#0195B1]"
                        : "border-[#0195B1]"
                      : "border-white"
                  } flex items-center gap-2 cursor-pointer font-semibold border-2 px-4 py-4 rounded-full transition-colors text-white `}
                  whileTap={{ scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.6 }}
                >
                  <Link
                    href="/documents/BSEnviro_Catalogue.pdf"
                    className={`${
                      isScrolled
                        ? isWhite
                          ? "text-[#0195B1]"
                          : "text-[#0195B1]"
                        : "text-white"
                    } transition-colors`}
                    target="_blank"
                  >
                    Catalogue Download
                  </Link>
                  <IconDownload
                    className={`${
                      isScrolled
                        ? isWhite
                          ? "text-[#0195B1]"
                          : "text-[#0195B1]"
                        : "text-white"
                    } transition-colors`}
                  />
                </motion.div>

                <motion.div
                  whileTap={{ scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.6 }}
                >
                  <button
                    onClick={showSidebar}
                    className={`${
                      isScrolled
                        ? isWhite
                          ? "text-[#01959A] border-[#01959A]"
                          : "text-[#01959A] border-[#01959A]"
                        : "text-white border-white"
                    } text-4xl flex justify-center items-center w-20 border-2 px-4 py-4 cursor-pointer rounded-full`}
                  >
                    <IconMenu
                      className={`${
                        isScrolled
                          ? isWhite
                            ? "text-[#0195B1]"
                            : "text-[#0195B1]"
                          : "text-white"
                      } transition-colors w-20`}
                    />
                  </button>
                </motion.div>
              </>
            </div>
          </div>

          {/* Sidebar */}
          <motion.nav
            className={`fixed top-0 left-0 h-full w-2/5 bg-[#233852] text-white transform transition-transform ${
              sidebar ? "translate-x-0" : "-translate-x-full"
            }`}
          >
            <div className="flex justify-end p-4">
              <button onClick={showSidebar}>
                <RxCross1 className="text-2xl cursor-pointer" />
              </button>
            </div>

            <motion.ul
              className="flex flex-col space-y-8 px-6"
              initial="hidden"
              animate={sidebar ? "visible" : "hidden"}
              variants={{
                      visible: {
                        opacity: 1,
                        x: 0,
                        transition: {
                          delay: 0.3,
                          duration: 0.3,
                          ease: "easeInOut",
                          staggerChildren: 1,
                        },
                      },
                      hidden: { opacity: 0, x: -50 },
                    }}
              
            >
              <AnimatePresence>
                {SidebarData.map((item, index) => (
                  <motion.li
                    key={index}
                    variants={{
                      visible: {
                        opacity: 1,
                        x: 0,
                        transition: {
                          delay: 0.3,
                          duration: 0.8,
                          ease: "easeInOut",
                        },
                      },
                  
                    }}
                  >
                    <div>
                      <Link
                        href={item.path}
                        className="text-5xl font-montserrat font-medium flex items-center"
                        onClick={() =>
                          item.subItems && toggleDropdown(item.title)
                        }
                      >
                        {item.title}
                        {item.subItems && (
                          <span className="ml-2 cursor-pointer">
                            {dropdownOpen[item.title] ? (
                              <IconChevronUp className="w-12 h-12" />
                            ) : (
                              <IconChevronDown className="w-12 h-12" />
                            )}
                          </span>
                        )}
                      </Link>
                      {item.subItems && dropdownOpen[item.title] && (
                        <ul className="ml-4 mt-4 space-y-6">
                          {item.subItems.map((subItem, subIndex) => (
                            <li key={subIndex}>
                              <Link
                                href={subItem.path}
                                className="text-2xl font-light flex items-center gap-2"
                                onClick={showSidebar}
                              >
                                {subItem.title}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </motion.li>
                ))}
              </AnimatePresence>
            </motion.ul>
          </motion.nav>
        </IconContext.Provider>
      </div>
    </header>
  );
};

export default Header;
