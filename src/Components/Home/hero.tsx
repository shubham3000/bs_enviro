import { IconArrowDown } from "@tabler/icons-react";
import React from "react";

export default function hero() {
  return (
    <>
      <section
        className="flex flex-col justify-center items-center relative"
        style={{
          backgroundImage: "url('/assests/Homeherobg.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "100vh",
          width: "100%",
        }}
      >
        <div className="flex flex-col justify-center items-center">
          <h1 className="font-montserrat text-center font-bold text-7xl text-white max-w-7xl">
            Advanced Industrial & Municipal Water Treatment Solutions
          </h1>
          <h3 className="font-epilogue text-center px-4 mt-12 text-white text-lg md:text-2xl max-w-5xl">
            Designing and Installing Sewage Treatment, UF/UV/RO & Water Supply
            Systems Tailored for Industrial, Residential & Municipal Needs
          </h3>
        </div>
        <div className=" absolute bottom-8 text-white font-montserrat font-semibold text-lg animate-bounce flex justify-center items-center gap-2">
            <p>Scroll Down</p> 
            <IconArrowDown />
        </div>
      </section>
    </>
  );
}
