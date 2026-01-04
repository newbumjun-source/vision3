"use client";

import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { useTranslations } from "next-intl";

const featureKeys = ["conversation", "generation", "speed", "integration", "brand", "analytics"] as const;

export const FeaturesSection = () => {
  const t = useTranslations("features");
  const containerRef = useRef<HTMLElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  return (
    <section
      id="features"
      ref={containerRef}
      className="py-section-lg bg-canvas"
    >
      <div className="container-editorial">
        {/* Section header - asymmetric layout */}
        <div className="grid md:grid-cols-12 gap-8 mb-section">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="md:col-span-4"
          >
            <span className="text-overline uppercase tracking-widest text-ink-muted mb-4 block">
              {t("label")}
            </span>
            <h2 className="text-display-lg font-medium text-ink">
              {t("title")}
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="md:col-span-5 md:col-start-7"
          >
            <p className="text-body-lg text-ink-secondary">
              {t("description")}
            </p>
          </motion.div>
        </div>

        {/* Features grid - editorial style */}
        <div className="grid md:grid-cols-2 gap-x-16 gap-y-16">
          {featureKeys.map((key, index) => (
            <motion.div
              key={key}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 + index * 0.1 }}
              className="group"
            >
              <div className="flex-1">
                <h3 className="text-body-lg font-medium text-ink mb-3 group-hover:text-accent transition-colors duration-300">
                  {t(`items.${key}.title`)}
                </h3>
                <p className="text-body-sm text-ink-secondary max-w-[45ch]">
                  {t(`items.${key}.description`)}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
