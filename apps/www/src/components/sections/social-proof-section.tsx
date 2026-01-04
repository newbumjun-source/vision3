"use client";

import { motion, useReducedMotion } from "motion/react";

const COMPANY_LOGOS = [
  { name: "YouTube", logo: "YouTube" },
  { name: "Twitch", logo: "Twitch" },
  { name: "TikTok", logo: "TikTok" },
  { name: "Instagram", logo: "Instagram" },
  { name: "Discord", logo: "Discord" },
  { name: "Patreon", logo: "Patreon" },
];

export const SocialProofSection = () => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="px-4 py-16 bg-white border-y border-gray-100">
      <div className="max-w-6xl mx-auto">
        <AnimatedContainer shouldReduceMotion={shouldReduceMotion}>
          <p className="mb-8 text-sm font-medium tracking-wider text-center text-gray-500 uppercase">
            Trusted by creators on
          </p>
        </AnimatedContainer>

        <AnimatedContainer
          shouldReduceMotion={shouldReduceMotion}
          delay={0.2}
          className="flex flex-wrap items-center justify-center gap-8 md:gap-12"
        >
          {COMPANY_LOGOS.map((company, index) => (
            <div
              key={company.name}
              className="flex items-center justify-center px-4 py-2 transition-all duration-300 opacity-60 hover:opacity-100"
              style={{
                animationDelay: `${index * 100}ms`,
              }}
            >
              <span className="text-lg font-semibold tracking-tight text-gray-400 hover:text-gray-700 transition-colors">
                {company.logo}
              </span>
            </div>
          ))}
        </AnimatedContainer>

        <AnimatedContainer
          shouldReduceMotion={shouldReduceMotion}
          delay={0.4}
          className="flex items-center justify-center gap-8 mt-10"
        >
          <div className="text-center">
            <p className="text-3xl font-bold text-gray-900">10,000+</p>
            <p className="text-sm text-gray-500">Thumbnails Created</p>
          </div>
          <div className="w-px h-12 bg-gray-200" />
          <div className="text-center">
            <p className="text-3xl font-bold text-gray-900">500+</p>
            <p className="text-sm text-gray-500">Active Creators</p>
          </div>
          <div className="w-px h-12 bg-gray-200" />
          <div className="text-center">
            <p className="text-3xl font-bold text-gray-900">35%</p>
            <p className="text-sm text-gray-500">Avg. CTR Increase</p>
          </div>
        </AnimatedContainer>
      </div>
    </section>
  );
};

type AnimatedContainerProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  shouldReduceMotion: boolean | null;
};

function AnimatedContainer({
  children,
  className,
  delay = 0.1,
  shouldReduceMotion,
}: AnimatedContainerProps) {
  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.6 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}


