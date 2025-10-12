"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { textAnimationProps } from "@/animation/Framer";
import Aboutbg from "@/assests/Aboutbg.png";
import Link from "next/link";
import { FaArrowRightLong } from "react-icons/fa6";

export default function about() {
  return (
    <section className="w-screen overflow-hidden flex flex-col justify-center items-center relative">
      {/* Overflow Background */}
      <div className=" bg-[#F5FAFE] absolute top-0 left-0 w-3/5 h-full -z-10"></div>
      <div className="bg-[#F5FAFE] absolute top-0 right-0 w-2/5 h-full -z-10"></div>
      <div className="container mx-auto">
        <div className="w-full md:flex md:justify-between">
          {/* Left Section */}
          <div className="w-full md:w-3/5 text-white py-12 md:py-24 px-4 md:px-12 xl:px-24 bg-[#F5FAFE] flex flex-col justify-center">
            <motion.h2
              className="text-4xl md:text-5xl xl:text-6xl text-[#0195B1] font-semibold font-montserrat"
              {...textAnimationProps}
            >
              About B S Enviro N Infracon Pvt Ltd
            </motion.h2>
            <motion.p
              className="mt-6 text-sm xl:text-lg font-medium text-[#233852] font-epilogue"
              {...textAnimationProps}
            >
              Established in 2002 with an intention of providing solutions for
              RECYCLING, REDUCING & REUSING Waste Water from various domestic &
              industrial activities. B S Enviro N Infracon PVT. LTD. has grown
              to be a world leading solution provider for water and wastewater
              treatment with offices in Pan India.
              <br />
              <br />
              The economy on our future world relies on Green technologies and
              Waste Management. We are an established and popular company with
              an excellent record of accomplishment in Water Management field. B
              S Enviro is green initiative company with tremendous growth in
              short span of time. We provide solutions and services Water
              Management technology. We took a step forward to make environment
              clean. Our prime focus is on Water & Waste-Water Treatment Plants,
              We are leading firm in this field and have outstanding proven
              works. We have well qualified and experienced staff and with their
              best ideas we deal with aerobic technologies like MBBR, SBR, MBR,
              Advanced MBBR (PVA GEL) etc. We deal in designing and Execution of
              Water & Waste - Water Management projects.
            </motion.p>

            <p className=" p-4 xl:p-6 mt-12 border rounded-full border-[#233852] w-12 xl:w-16 h-12 xl:h-16 flex justify-center items-center">
              <Link href={"/aboutus"}>
                <FaArrowRightLong className="text-[#233852]" />{" "}
              </Link>
            </p>
          </div>

          {/* Right Section */}
          <div className="w-2/5 bg-[#F5FAFE] hidden md:block">
            <Image
              src={Aboutbg}
              alt="About Image"
              width={600}
              height={600}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
