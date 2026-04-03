"use client";
import React from "react";
import { motion } from "framer-motion";
import { textAnimationProps } from "@/animation/Framer";

export default function CareerOpportunities() {
  return (
    <section className="w-screen bg-white py-16 md:py-24 px-4 md:px-12 xl:px-24">
      <div className="container mx-auto">
        <div className="flex flex-col items-center justify-center">
          <motion.h2
            className="text-4xl md:text-5xl xl:text-6xl font-montserrat font-semibold text-[#0195B1] mb-6 md:mb-12 xl:mb-16"
            {...textAnimationProps}
          >
            Career Opportunities
          </motion.h2>
          <motion.p className=" max-w-6xl font-epilogue font-normal text-sm md:text-lg xl:text-xl text-[#233852] text-center">
            Employees are the driving force behind our success. If you’re
            passionate about shaping a sustainable and innovative future in
            water and environmental solutions, we’d love to hear from you.
          </motion.p>
          <motion.p className=" max-w-6xl font-epilogue font-normal text-sm md:text-lg xl:text-xl text-[#233852] text-center mt-4">
            Please send your resume to: 
            <strong> admin@bsenviro.com </strong>
            <br /> Kindly mention your name and the position you are applying
            for in the email subject line.
          </motion.p>
        </div>
      </div>
    </section>
  );
}
