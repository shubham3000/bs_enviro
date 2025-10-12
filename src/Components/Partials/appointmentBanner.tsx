"use client";
import React from "react";
import Appointemnet from "@/assests/appointment.png";
import Image from "next/image";
import Link from "next/link";
import { FaArrowRightLong } from "react-icons/fa6";
import { motion } from "framer-motion";
import { textAnimationProps } from "@/animation/Framer";

export default function appointmentBanner() {
  return (
    <section className="w-screen h-auto py-16 md:py-24 px-4 md:px-12 xl:px-24 bg-white">
      <div className="container mx-auto bg-[#F5FAFE] md:flex p-9">
        <motion.div
          className="md:w-1/2 flex flex-col justify-center"
          {...textAnimationProps}
        >
          <p className="font-epilogue font-medium text-sm xl:text-lg text-[#0195B1]">
            Appointment
          </p>
          <h3 className="font-montserrat text-lg md:text-2xl xl:text-4xl font-bold text-[#233852] mt-2">
            Product Enquiry / <br /> Quotation
          </h3>
          <Link
            href={"/contactus"}
            className="w-48 h-14 mt-6 xs:mt-10 lg:mt-16"
          >
            <div className="border border-[#233852] rounded-full px-4 xl:px-6 py-2 xs:py-3 lg:py-4 flex items-center gap-2 w-40 xl:w-48">
              <p className="font-montserrat font-semibold text-sm xl:text-lg text-[#233852]">
                Contact Us
              </p>
              <FaArrowRightLong className="w-8 h-4" />
            </div>
          </Link>
        </motion.div>
        <div className="md:w-1/2 flex md:justify-end justify-center">
          <Image
            src={Appointemnet}
            alt="Appointment"
            className="w-full xs:w-4/5 lg:w-3/5"
          />
        </div>
      </div>
    </section>
  );
}
