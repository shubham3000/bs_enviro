"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { FaArrowLeftLong } from "react-icons/fa6";

interface HeroBgProps {
  heading: string;
  imageurl: string;
}

const HeroBg: React.FC<HeroBgProps> = ({ heading, imageurl }) => {
    const router = useRouter();
  return (
    <section className="w-screen h-auto pt-24 pb-12 md:pb-0 md:pt-44 px-4 md:px-12 xl:px-24 bg-[#01959A]">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start">
          <div className="flex flex-col gap-6 lg:gap-16">
            <button
              onClick={() => router.back()} 
              aria-label="Go back"
              className="flex items-center gap-2 text-white hover:text-gray-200 transition-colors duration-300 hover:translate-x-[-2px] cursor-pointer"
            >
              <FaArrowLeftLong className="w-8 h-8 " />
              <span className="font-montserrat font-medium">Go Back</span>
            </button>
            <h1
              className="text-white font-montserrat font-bold text-4xl md:text-4xl xl:text-6xl leading-tight"
              dangerouslySetInnerHTML={{ __html: heading }}
            ></h1>
          </div>

          <div className="hidden md:flex xl:w-[695px] h-[260px] lg:h-[360px] xl:h-[515px] justify-end">
            <img src={imageurl} alt="Hero Image" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroBg;
