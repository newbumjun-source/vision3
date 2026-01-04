"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { useTranslations } from "next-intl";

export const VisualBreakSection = () => {
  const t = useTranslations("visualBreak");
  const containerRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const x1 = useTransform(scrollYProgress, [0, 1], ["0%", "-25%"]);
  const x2 = useTransform(scrollYProgress, [0, 1], ["-25%", "0%"]);

  return (
    <section
      ref={containerRef}
      className="py-section-lg overflow-hidden bg-ink"
    >
      {/* First marquee line */}
      <motion.div
        style={{ x: x1 }}
        className="whitespace-nowrap mb-8"
      >
        <span className="text-[clamp(48px,8vw,96px)] font-bold uppercase tracking-tight text-canvas/20">
          {Array(4)
            .fill(t("phrase1"))
            .map((text, i) => (
              <span key={i}>
                {text}
                <span className="mx-8 text-accent/50">·</span>
              </span>
            ))}
        </span>
      </motion.div>

      {/* Center tagline */}
      <div className="container-editorial text-center py-16">
        <motion.p
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-[clamp(28px,4vw,48px)] font-medium text-canvas"
        >
          {t("tagline")}
        </motion.p>
      </div>

      {/* Second marquee line */}
      <motion.div
        style={{ x: x2 }}
        className="whitespace-nowrap"
      >
        <span className="text-[clamp(48px,8vw,96px)] font-bold uppercase tracking-tight text-canvas/20">
          {Array(4)
            .fill(t("phrase2"))
            .map((text, i) => (
              <span key={i}>
                {text}
                <span className="mx-8 text-accent/50">·</span>
              </span>
            ))}
        </span>
      </motion.div>
    </section>
  );
};
