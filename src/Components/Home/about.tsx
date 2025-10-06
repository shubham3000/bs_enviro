"use client"
import React from 'react'
import Image from "next/image";
import {motion} from "framer-motion";
import { textAnimationProps } from '@/animation/Framer';
import Aboutbg from "@/assests/Aboutbg.png";

export default function about() {
  return (
    <section className="w-screen overflow-hidden flex flex-col justify-center items-center">
      {/* Overflow Background */}
      {/* <div className=" bg-[#01959A] absolute top-0 left-0 w-3/4 h-full -z-10"></div>
      <div className=" bg-[#FFF] absolute top-0 right-0 w-1/4 h-full -z-10"></div> */}
      <div className="container max-w-full">
        <div className="w-full md:flex md:justify-between">
          {/* Left Section */}
          <div className="w-3/5 text-white py-24 px-24 bg-[#FFF] flex flex-col justify-center items-center">
            <motion.h2
              className="text-6xl text-[#0195B1] font-semibold font-montserrat"
              style={{ fontFamily: "Montserrat" }}
              {...textAnimationProps}
            >
              About B S Enviro N Infracon Pvt Ltd
            </motion.h2>
            <motion.p
              className="mt-6 text-lg font-medium text-[#233852]"
              style={{ fontFamily: "Epilogue" }}
              {...textAnimationProps}
            >
              Established in 2002 with an intention of providing solutions for RECYCLING, REDUCING & REUSING Waste Water from various domestic & industrial activities. B S Enviro & Infracon Pvt. Ltd. has grown to be a world leading solution provider for water and wastewater treatment with offices in Pan India. Our team of highly skilled & dedicated Engineers, Managers, and Consultants & Technicians is led by Mr. Manish Singh the Managing Director of the company who has deep knowledge & has 25 years of total experience in this field.
              <br/>
              <br/>
              We are committed to deliver high-grade quality products for cleaning water coming from diverse industries like residential, sewage, municipal, hotel etc.
            </motion.p>
          </div>

          {/* Right Section */}
          <div className="w-2/5 bg-white">
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
  )
}
