"use client";

import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "motion/react";
import { useTranslations } from "next-intl";
import { Plus, Minus } from "lucide-react";

const faqKeys = ["generate", "experience", "edit", "export", "trial", "brand"] as const;

export const FaqSection = () => {
  const t = useTranslations("faq");
  const containerRef = useRef<HTMLElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      id="faq"
      ref={containerRef}
      className="py-section-lg bg-canvas"
    >
      <div className="container-editorial">
        {/* Section header - asymmetric */}
        <div className="grid md:grid-cols-12 gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="md:col-span-5"
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

        {/* FAQ items */}
        <div className="divide-y divide-canvas-tertiary">
          {faqKeys.map((key, index) => (
            <motion.div
              key={key}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.05 }}
              className="py-6"
            >
              <button
                className="flex justify-between items-center w-full text-left"
                onClick={() => toggleFaq(index)}
              >
                <span 
                  className={`text-body-md font-medium transition-colors duration-300 ${
                    openIndex === index ? "text-accent" : "text-ink"
                  }`}
                >
                  {t(`items.${key}.question`)}
                </span>
                {openIndex === index ? (
                  <Minus className="w-5 h-5 flex-shrink-0 text-ink-muted" />
                ) : (
                  <Plus className="w-5 h-5 flex-shrink-0 text-ink-muted" />
                )}
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                    className="overflow-hidden"
                  >
                    <p className="mt-4 text-body-sm text-ink-secondary pr-8 max-w-[65ch]">
                      {t(`items.${key}.answer`)}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
