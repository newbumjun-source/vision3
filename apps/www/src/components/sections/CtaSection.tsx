"use client";

import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { useTranslations } from "next-intl";
import { ArrowRight } from "lucide-react";
import { moveToGetStarted } from "@/lib/moveToApp";

export const CtaSection = () => {
  const t = useTranslations("cta");
  const containerRef = useRef<HTMLElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  const handleGetStarted = (e: React.MouseEvent) => {
    e.preventDefault();
    moveToGetStarted();
  };

  return (
    <section
      ref={containerRef}
      className="py-section-lg bg-canvas-secondary"
    >
      <div className="container-editorial">
        <div className="max-w-3xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-display-lg md:text-display-xl font-medium text-ink mb-6"
          >
            {t("title")}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-body-lg text-ink-secondary mb-10 max-w-xl mx-auto"
          >
            {t("description")}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col items-center gap-4"
          >
            <button
              onClick={handleGetStarted}
              className="group inline-flex items-center gap-3 px-8 py-4 text-body-md font-medium rounded-sm bg-ink text-canvas transition-all duration-300 hover:bg-ink-secondary"
            >
              <span>{t("cta")}</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </button>
            <span className="text-caption text-ink-muted">
              {t("ctaNote")}
            </span>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
