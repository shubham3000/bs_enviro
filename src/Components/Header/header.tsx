"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { IconContext } from "react-icons";
import { LiaGripLinesSolid } from "react-icons/lia";
import { RxCross1 } from "react-icons/rx";
import { BsArrowRight } from "react-icons/bs";
import { IconDownload, IconMenu } from "@tabler/icons-react";
import { AnimatePresence, motion } from "framer-motion";

import Logo from "@/assests/Logo/Logo.png";
import LogoBlue from "@/assests/Logo/Logogreen1.png";

interface HeaderProps {
  isWhite?: boolean;
  isLogin?: boolean;
}

const Header: React.FC<HeaderProps> = ({ isWhite = true, isLogin = false }) => {
  const pathname = usePathname();
  const router = useRouter();

  const [sidebar, setSidebar] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const showSidebar = () => setSidebar((prev) => !prev);

  const SidebarData = [
    { title: "Home", path: "/" },
    { title: "About Us", path: "/aboutus" },
    { title: "Products", path: "/products" },
    { title: "Projects", path: "/projects" },
    { title: "Careers", path: "/careers" },
    { title: "Contact Us", path: "/contactus" },
  ];


  const sidebarVariants = {
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        delay: 0.3,
        duration: 0.3,
        ease: "easeIn",
        staggerChildren: 1,
      },
    },
    hidden: { opacity: 0, x: -50 },
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`w-full z-50 transition-all ${
        isScrolled ? "fixed top-0 left-0 shadow-md" : "absolute"
      }`}
      style={{
        backgroundColor: isScrolled
          ? isWhite
            ? "#1456A2"
            : "#FFF"
          : "transparent",
      }}
    >
      <div className="container mx-auto px-4">
        <IconContext.Provider value={{ color: "#fff" }}>
          <div className="flex items-center justify-between py-4">
            {/* Logo */}
            <div className="flex items-center">
              <Link href="/" className="navbar-brand">
                <Image
                  src={isWhite ? Logo : LogoBlue}
                  alt="CloudExtel Logo"
                  className="h-10 w-auto"
                />
              </Link>
            </div>

            {/* Right Side */}
            <div className="flex items-center space-x-8 py-2.5">
                <>
                  <motion.div
                    className={`${isWhite ? "border-white": "border-[#233852]"} flex items-center gap-2 cursor-pointer font-semibold border-2 px-4 py-4 rounded-full transition-colors text-white `}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Link href="/" className={`${isWhite ? "text-white": "text-[#233852]"} transition-colors`}>Catalogue Download</Link>
                    <IconDownload className={`${isWhite ? "text-white": "text-[#233852]"} transition-colors`} />
                  </motion.div>

                  <motion.div whileTap={{ scale: 0.9 }}>
                    <button
                      onClick={showSidebar}
                      className={`${
                        isWhite ? "text-white border-white" : "text-[#01959A] border-[#01959A]"
                      } text-4xl flex justify-center items-center w-20 border-2 px-4 py-4 cursor-pointer rounded-full`}
                    >
                      <IconMenu className={`${isWhite ? "text-white": "text-[#01959A]"} transition-colors w-20`} />
                    </button>
                  </motion.div>
                </>
            </div>
          </div>

          {/* Sidebar */}
          <motion.nav
            className={`fixed top-0 left-0 h-full w-64 bg-[#233852] text-white transform transition-transform ${
              sidebar ? "translate-x-0" : "-translate-x-full"
            }`}
          >
            <div className="flex justify-end p-4">
              <button onClick={showSidebar}>
                <RxCross1 className="text-2xl" />
              </button>
            </div>

            <motion.ul
              className="flex flex-col space-y-6 px-6"
              initial="hidden"
            >
              <AnimatePresence>
                {SidebarData.map((item, index) => (
                  <motion.li key={index}>
                    <Link
                      href={item.path}
                      className="text-lg font-medium hover:underline"
                      onClick={showSidebar}
                    >
                      {item.title}
                    </Link>
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
