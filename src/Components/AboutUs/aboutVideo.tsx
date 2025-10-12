"use client";
import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { textAnimationProps } from "@/animation/Framer";

export default function aboutVideo() {
    const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const videoElement = videoRef.current;
    if (!videoElement) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // ✅ When the section is visible — play and unmute
            videoElement.play().catch(() => {});
            videoElement.muted = false;
          } else {
            // ⏸️ When not visible — pause and mute
            videoElement.pause();
            videoElement.muted = true;
          }
        });
      },
      { threshold: 0.5 } // trigger when 50% of the video is visible
    );

    observer.observe(videoElement);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section className="relative w-screen bg-white py-16 md:py-24 px-4 md:px-12 xl:px-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-blue-100" />

      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-300/40 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-0 right-1/3 w-96 h-96 bg-cyan-200/40 rounded-full blur-3xl animate-pulse" />

      <div className="relative container mx-auto text-center z-10">
        <motion.h2
          className="text-4xl md:text-5xl xl:text-6xl text-[#0195B1] font-semibold font-montserrat"
          {...textAnimationProps}
        >
          Meet the Minds Behind B S Enviro
        </motion.h2>

        <div className="relative w-full max-w-6xl mx-auto mt-16 aspect-video rounded-2xl overflow-hidden shadow-xl border border-blue-100">
          <video
          ref={videoRef}
            className="w-full h-full object-cover"
            src="/assests/Video/BSVideoIntro.mp4"
            loop
            playsInline
              muted
          />

          <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 via-transparent to-transparent" />
        </div>
      </div>
    </section>
  );
}
