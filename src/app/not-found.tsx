import Link from "next/link";
import React from "react";
import PageNotFound from "@/assests/savewater.jpg";
import Image from "next/image";

export default function NotFound() {
  return (
    <section className="w-screen h-screen overflow-hidden flex flex-col justify-center items-center bg-white text-center py-12">
      <Image
        src={PageNotFound}
        alt="404 - Page Not Found"
        className="w-1/2 max-h-[70vh] object-contain"
      />
      <h2 className="text-2xl md:text-3xl font-semibold text-[#233852] mt-6 font-montserrat">
        Looks like you’ve reached uncharted waters.
      </h2>
      <p className="text-gray-600 mt-2 mb-6 font-epilogue">
        But don’t worry — every drop finds its way home. Let’s get you back on
        track.
      </p>
      <Link
        href="/"
        className="text-white bg-[#01959A] px-6 py-3 rounded-lg font-medium hover:bg-[#017d82] transition-all font-montserrat"
      >
        Return Home
      </Link>
    </section>
  );
}
