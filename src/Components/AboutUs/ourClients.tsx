"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  fadeInAnimationCompanies,
  textAnimationProps,
} from "@/animation/Framer";
import Image from "next/image";
import AIA from "@/assests/Clients/AIA.png";
import AIIMS from "@/assests/Clients/AIIMS.png";
import BiharBuilding from "@/assests/Clients/biharbuilding.png";
import BMSICL from "@/assests/Clients/bmiscl.png";
import CPWD from "@/assests/Clients/CPWD.png";
import DDA from "@/assests/Clients/DDA.png";
import EIL from "@/assests/Clients/EIL.png";
import HAL from "@/assests/Clients/hal.png";
import NBCC from "@/assests/Clients/nbcc.png";
import PWD from "@/assests/Clients/pwd.png";
import RITES from "@/assests/Clients/rites.png";
import RLDA from "@/assests/Clients/rlda.png";
import UPlok from "@/assests/Clients/UPlok.png";
import NPCIL from "@/assests/Clients/NPCIL.png";

export default function ourClients() {
  const clients = [
    { image: AIA, company_name: "AIA", width: 172, height: 97 },
    { image: AIIMS, company_name: "AIIMS", width: 86, height: 86 },
    {
      image: BiharBuilding,
      company_name: "Bihar_Building",
      width: 94,
      height: 94,
    },
    { image: BMSICL, company_name: "BMSICL", width: 185, height: 60 },
    { image: CPWD, company_name: "CPWD", width: 121, height: 87 },
    { image: DDA, company_name: "DDA", width: 80, height: 80 },
    { image: EIL, company_name: "EIL", width: 185, height: 60 },
    { image: HAL, company_name: "HAL", width: 180, height: 60 },
    { image: NBCC, company_name: "NBCC", width: 104, height: 88 },
    { image: PWD, company_name: "PWD", width: 105, height: 106 },
    { image: RITES, company_name: "RITES", width: 184, height: 62 },
    { image: RLDA, company_name: "RLDA", width: 172, height: 97 },
    { image: UPlok, company_name: "UP_Lokayukta", width: 121, height: 87 },
    { image: NPCIL, company_name: "NPCIL", width: 94, height: 90 },
  ];

  return (
    <section className="w-screen h-auto py-16 md:py-24 px-4 md:px-12 xl:px-24 bg-[#1A2635]">
      <div className="container mx-auto">
        <motion.h2
          className="text-4xl md:text-5xl xl:text-6xl text-center font-montserrat font-semibold text-white"
          {...textAnimationProps}
        >
          Our Clients
        </motion.h2>
        <div className="flex flex-wrap justify-center gap-[30px] mt-16 xl:mt-24">
          {clients.map((client, index) => (
            <motion.div
              key={index}
              className="flex w-72 h-28 justify-center items-center bg-white p-4 border border-[#1113181f] rounded-xl hover:shadow-lg"
              variants={{ ...fadeInAnimationCompanies }}
              initial="initial"
              whileInView="animate"
              custom={index}
            >
              <Image
                src={client.image}
                alt={client.company_name}
                width={client.width}
                height={client.height}
                loading="lazy"
                className=" object-contain transition-transform duration-300 hover:scale-105"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
