"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { moveToGetStarted } from "@/lib/moveToApp";
import { ImageMarquee } from "./ImageMarquee";

export const HeroSection = () => {
  const containerRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.96]);

  const handleGetStarted = (e: React.MouseEvent) => {
    e.preventDefault();
    moveToGetStarted();
  };

  return (
    <section
      ref={containerRef}
      className="relative flex flex-col bg-[#F5F5F5] overflow-hidden"
    >
      {/* Hero Content */}
      <motion.div
        style={{ opacity, scale }}
        className="container mx-auto px-6 pt-16 md:pt-24 lg:pt-28 pb-8"
      >
        {/* Main Headline - OSMO Style */}
        <div className="text-center max-w-[1200px] mx-auto">
          {/* Primary Headline - Single Line on Desktop */}
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="text-[clamp(38px,8.5vw,88px)] font-semibold leading-[1.05] tracking-[-0.04em] text-[#141414]"
          >
            {/* Mobile: Stack vertically, Desktop: Single line */}
            <span className="inline lg:inline">AI Thumbnails</span>
            <span className="inline-flex items-center justify-center mx-2 md:mx-4">
              <svg 
                viewBox="0 0 24 24" 
                fill="none" 
                className="w-[0.65em] h-[0.65em] text-[#7C5CFF]"
              >
                <path 
                  d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z" 
                  fill="currentColor"
                />
              </svg>
            </span>
            <span className="italic font-medium text-[#141414]">Built to Flex</span>
          </motion.h1>

          {/* Subheadline - Clean single text flow */}
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="mt-10 md:mt-12 lg:mt-14 text-[clamp(15px,2vw,20px)] leading-[1.7] text-[#2A2A2A] font-normal tracking-[-0.01em] max-w-[620px] mx-auto"
          >
            Platform packed with AI generation & YouTube resources,
            <br className="hidden sm:inline" />
            templates, editing tools and a 3-minute workflow
          </motion.p>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="mt-10 md:mt-12 flex flex-col items-center gap-3"
          >
            <button
              onClick={handleGetStarted}
              className="group px-7 py-3.5 text-[14px] font-semibold text-[#141414] bg-[#B9FF66] hover:bg-[#abf052] rounded-full transition-all duration-200"
            >
              Start creating free
            </button>
            <span className="text-[12px] text-[#999] tracking-wide font-normal">
              No credit card required
            </span>
          </motion.div>
        </div>
      </motion.div>

      {/* 2-Row Cross Direction Image Marquee */}
      <ImageMarquee />

      {/* Subtle Grid Pattern */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute inset-0 opacity-[0.012]"
          style={{
            backgroundImage: `
              linear-gradient(to right, #141414 1px, transparent 1px),
              linear-gradient(to bottom, #141414 1px, transparent 1px)
            `,
            backgroundSize: "100px 100px",
          }}
        />
      </div>
    </section>
  );
};
