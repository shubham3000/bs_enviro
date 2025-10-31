"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { popUpAnimationProps } from "@/animation/Framer";
import Career1 from "@/assests/career1.jpg"
import Career2 from "@/assests/career2.png"
import Career3 from "@/assests/career3.jpg"
import Career4 from "@/assests/career4.jpg"
import Career5 from "@/assests/career5.jpg"

export default function hero() {
  return (
    <section className="w-screen overflow-hidden px-4 md:px-12 xl:px-24 pb-16 md:pb-24 pt-28 md:pt-40 xl:pt-56 bg-[#F5FAFE]">
      <div className="container mx-auto text-center">
         <motion.h1
          className="text-[#0195B1] text-4xl md:text-5xl xl:text-6xl font-bold text-center font-montserrat mb-12"
          {...popUpAnimationProps}
        >
          Build a Greener Future <br className="hidden md:block" /> With Us
        </motion.h1>

        {/* Image Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {/* Large Left Image */}
          <div className="md:col-span-1 md:row-span-2 bg-gray-300 rounded-lg overflow-hidden">
            <Image
              src={Career1}
              alt="Green project 1"
              width={500}
              height={600}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Top Right Image */}
          <div className="md:col-span-2 bg-gray-300 rounded-lg overflow-hidden">
            <Image
              src={Career2}
              alt="Green project 2"
              width={800}
              height={400}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Large Right Image */}
          <div className="md:col-span-1 md:row-span-2 bg-gray-300 rounded-lg overflow-hidden">
            <Image
              src={Career3}
              alt="Green project 1"
              width={500}
              height={600}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Bottom Right Smaller Images */}
          <div className="bg-gray-300 rounded-lg overflow-hidden">
            <Image
              src={Career4}
              alt="Green project 3"
              width={400}
              height={400}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="bg-gray-300 rounded-lg overflow-hidden">
            <Image
              src={Career5}
              alt="Green project 4"
              width={400}
              height={400}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
