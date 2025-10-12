"use client";
import { popUpAnimationProps, textAnimationProps } from "@/animation/Framer";
import React from "react";
import Proven from "@/assests/Icons/proven.png";
import EndToEnd from "@/assests/Icons/endtoend.png";
import Inovation from "@/assests/Icons/innovation.png";
import Customer from "@/assests/Icons/customer.png";
import Quality from "@/assests/Icons/compliance.png";
import Image from "next/image";
import { motion } from "framer-motion";

const WhyBsEnviro: React.FC = () => {
  const features = [
    {
      icon: Proven,
      title: "Proven Expertise",
      description:
        "With over 23+ years of experience, we have successfully executed projects across diverse industries, making us a trusted name in sustainable water solutions.",
    },
    {
      icon: EndToEnd,
      title: "End-to-End Services",
      description:
        "From Consulting & Engineering to EPC, O&M, and AMC, we offer complete lifecycle support – ensuring your systems are designed, built, and maintained for long-term efficiency.",
    },
    {
      icon: Inovation,
      title: "Innovation & Sustainability",
      description:
        "Our solutions are built around the core principles of Recycle, Reduce, and Reuse, helping clients not only meet compliance but also contribute to a greener future.",
    },
    {
      icon: Customer,
      title: "Customer-Centric Approach",
      description:
        "Every project we deliver is tailored to meet specific client needs. We pride ourselves on reliability, transparency, and on-time delivery.",
    },
    {
      icon: Quality,
      title: "Quality & Compliance",
      description:
        "We follow strict quality standards and regulatory guidelines, ensuring that our projects are safe, efficient, and future-ready.",
    },
  ];

  return (
    <section className="w-screen bg-white py-16 md:py-24 px-4 md:px-12 xl:px-24">
      <div className="container mx-auto text-center">
        <motion.h2
          className="text-4xl md:text-5xl xl:text-6xl font-montserrat font-semibold text-[#0195B1] mb-16 md:mb-28"
          {...textAnimationProps}
        >
          Why B S Enviro
        </motion.h2>

        <div className="flex flex-wrap justify-center gap-12 xl:gap-16 text-left w-full">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className={`flex flex-col items-start p-6 gap-3 xl:gap-6 lg:gap-6 w-full md:w-2/5 2xl:w-[30%] border border-gray-200 rounded-xl shadow-sm hover:shadow-lg transition-shadow duration-300`}
              {...popUpAnimationProps}
            >
              <Image
                src={feature.icon}
                alt={feature.title}
                className="w-12 xl:w-20 h-12 xl:h-20 "
                loading="lazy"
              />
              <h3 className="font-montserrat font-bold text-xl xl:text-3xl text-[#233852]">
                {feature.title}
              </h3>
              <p className="text-[#233852] text-sm xl:text-lg leading-relaxed font-epilogue font-normal">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyBsEnviro;
