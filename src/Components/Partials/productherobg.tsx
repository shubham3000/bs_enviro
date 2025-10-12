"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { FaArrowLeftLong } from "react-icons/fa6";

interface HeroBgProps {
  heading: string;
  imageurl: string;
}

const ProductHeroBg: React.FC<HeroBgProps> = ({ heading, imageurl }) => {
  const router = useRouter();
  return (
    <section
      className="w-screen h-auto py-24 md:py-44 px-4 md:px-12 xl:px-24"
      style={{
        backgroundImage: `url(${imageurl})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
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
        </div>
      </div>
    </section>
  );
};

export default ProductHeroBg;
