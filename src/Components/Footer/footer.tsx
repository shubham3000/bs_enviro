"use client";
import React from "react";
import Logo from "@/assests/Logo/Footerlogo.png";
import Link from "next/link";
import Image from "next/image";
import { FaFacebookF, FaYoutube } from "react-icons/fa6";
import { FaInstagram, FaMapMarkerAlt, FaTwitter } from "react-icons/fa";
import { BsFillTelephoneFill } from "react-icons/bs";
import { IoMdMail } from "react-icons/io";
import { motion } from "framer-motion";
import { popUpAnimationProps } from "@/animation/Framer";

export default function Footer() {
  return (
    <footer className="bg-[#1A2635] text-white w-screen overflow-hidden flex flex-col justify-center items-center">
      {/* Top Section */}
      <div className="container mx-auto px-4 md:px-10 xl:px-6 py-12 flex flex-wrap justify-center lg:justify-between gap-8 lg:gap-12">
        {/* Left Section */}
        <motion.div
          className="font-medium font-montserrat"
          {...popUpAnimationProps}
        >
          <Link href="/">
            <Image
              src={Logo}
              alt="B S Enviro Logo"
              className="h-6 xl:h-9 w-auto mb-2"
            />
          </Link>
          <motion.div className="space-y-3 text-xs xl:text-sm opacity-65">
            <p className="flex items-center gap-2">
              <FaMapMarkerAlt className="w-4 h-4" /> E-1069, 2nd Floor, Sec-7,
              Dwarka New Delhi - 110077 INDIA
            </p>
            <div className="flex gap-2 items-start">
              <BsFillTelephoneFill className="mt-2 w-4 h-4" />
              <div className="flex flex-col space-y-3">
                <p>+91 1141411203</p>
                <p>+91 8130925273</p>
              </div>
            </div>
            <div className="flex gap-2 items-start">
              <IoMdMail className="w-5 h-5" />
              <div className="flex flex-col space-y-3">
                <p>info@bsenviro.com</p>
                <p>sales@bsenviro.com</p>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Middle Section */}
        <motion.div
          className="md:text-start flex space-x-24 xs:space-x-24 md:space-x-8 xl:space-x-24 font-montserrat"
          {...popUpAnimationProps}
        >
          <div className="">
            <h2 className="text-sm xl:text-lg font-bold mb-4">Quick Links</h2>
            <ul className="space-y-3 text-xs xl:text-sm font-medium opacity-65 cursor-pointer">
              <li>
                <Link href={"/home"}>Home</Link>
              </li>
              <li>
                <Link href={"/aboutus"}>About Us</Link>
              </li>
              <li>
                <Link href={"/projects"}>Projects</Link>
              </li>
              <li>
                <Link href={"/contactus"}>Contact Us</Link>
              </li>
            </ul>
          </div>
          <div className="">
            <h2 className="text-sm xl:text-lg font-bold mb-4">Products</h2>
            <ul className="space-y-3 text-xs xl:text-sm font-medium opacity-65 cursor-pointer">
              <li>
                <Link href={"/products/sewageTreatmentPlant"}>
                  Sewage Treatment Plant{" "}
                </Link>
              </li>
              <li>
                <Link href={"/products/effluentTreatmentPlant"}>
                  Effluent Treatment Plant{" "}
                </Link>
              </li>
              <li>
                <Link href={"/products/waterTreatmentPlant"}>
                  Water Treatment Plant{" "}
                </Link>
              </li>
              <li>
                <Link href={"/products/disinfectionUnit"}>
                  Disinfection Unit{" "}
                </Link>
              </li>
              <li>
                <Link href={"/products/fabricatedItem"}>Fabricated Item </Link>
              </li>
            </ul>
          </div>
        </motion.div>

        {/* Social Media Section */}
        <motion.div
          className=" font-montserrat"
          {...popUpAnimationProps}
        >
          <h2 className="text-sm text-center lg:text-start xl:text-lg font-bold mb-4">Follow Us</h2>
          <div className="flex space-x-4 justify-center md:justify-start">
            <Link
              href="#"
              rel="noopener noreferrer"
              className=" bg-[#2C3745] h-9 xl:h-12 w-9 xl:w-12 p-3 flex items-center justify-center border-0 rounded-full"
            >
              <FaFacebookF className="text-white text-lg xl:text-xl" />
            </Link>
            <Link
              href="#"
              rel="noopener noreferrer"
              className="bg-[#2C3745] h-9 xl:h-12 w-9 xl:w-12 p-3 flex items-center justify-center border-0 rounded-full"
            >
              <FaTwitter className="text-white text-lg xl:text-xl" />
            </Link>
            <Link
              href="#"
              rel="noopener noreferrer"
              className="bg-[#2C3745] h-9 xl:h-12 w-9 xl:w-12 p-3 flex items-center justify-center border-0 rounded-full"
            >
              <FaInstagram className="text-white text-lg xl:text-xl" />
            </Link>
            <Link
              href="#"
              rel="noopener noreferrer"
              className="bg-[#2C3745] h-9 xl:h-12 w-9 xl:w-12 p-3 flex items-center justify-center border-0 rounded-full"
            >
              <FaYoutube className="text-white text-lg xl:text-xl" />
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Bottom Section */}
      <div className="w-full bg-[#01959A] text-center py-4">
        <p
          className="text-xs xl:text-sm opacity-65 font-semibold font-montserrat"
        >
          Copyright © 2007-{new Date().getFullYear()} B S Enviro & Infracon Pvt.
          Ltd. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
