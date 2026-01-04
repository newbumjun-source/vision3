"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useInView } from "motion/react";
import { useTranslations } from "next-intl";

export const PhilosophySection = () => {
  const t = useTranslations("philosophy");
  const containerRef = useRef<HTMLElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const textOpacity = useTransform(scrollYProgress, [0.1, 0.3, 0.7, 0.9], [0, 1, 1, 0]);

  return (
    <section
      ref={containerRef}
      className="relative py-section-lg bg-canvas-secondary"
    >
      <div className="container-editorial">
        {/* Large statement text */}
        <div className="max-w-4xl mx-auto text-center">
          <motion.p
            style={{ opacity: textOpacity }}
            className="text-[clamp(32px,5vw,56px)] font-medium leading-[1.1] tracking-[-0.03em]"
          >
            {t("statement")
              .split("\n")
              .map((line, index) => (
                <span 
                  key={index} 
                  className={`block ${index === 1 ? "text-ink-tertiary" : "text-ink"}`}
                >
                  {line}
                </span>
              ))}
          </motion.p>
        </div>

        {/* Three pillars */}
        <div className="mt-section grid md:grid-cols-3 gap-12 md:gap-8">
          {["craft", "simplicity", "impact"].map((key, index) => (
            <motion.div
              key={key}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 + index * 0.15 }}
              className="relative"
            >
              <span className="text-overline uppercase tracking-widest text-ink-muted mb-4 block">
                0{index + 1}
              </span>
              <h3 className="text-display-sm font-medium text-ink mb-4">
                {t(`pillars.${key}.title`)}
              </h3>
              <p className="text-body-md text-ink-secondary max-w-[45ch]">
                {t(`pillars.${key}.description`)}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
