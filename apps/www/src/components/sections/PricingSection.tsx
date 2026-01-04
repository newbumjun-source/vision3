"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "motion/react";
import { useTranslations } from "next-intl";
import { Check } from "lucide-react";
import { moveToGetStarted } from "@/lib/moveToApp";

const plans = [
  { key: "starter", price: { monthly: 0, yearly: 0 }, highlighted: false },
  { key: "pro", price: { monthly: 15, yearly: 12 }, highlighted: true },
  { key: "business", price: { monthly: 70, yearly: 56 }, highlighted: false },
] as const;

export const PricingSection = () => {
  const t = useTranslations("pricing");
  const containerRef = useRef<HTMLElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });
  const [isYearly, setIsYearly] = useState(false);

  const handleGetStarted = (e: React.MouseEvent) => {
    e.preventDefault();
    moveToGetStarted();
  };

  return (
    <section
      id="pricing"
      ref={containerRef}
      className="py-section-lg bg-canvas-secondary"
    >
      <div className="container-editorial">
        {/* Section header */}
        <div className="max-w-2xl mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-overline uppercase tracking-widest text-ink-muted mb-4 block"
          >
            {t("label")}
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-display-lg font-medium text-ink mb-4"
          >
            {t("title")}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-body-lg text-ink-secondary"
          >
            {t("description")}
          </motion.p>
        </div>

        {/* Billing toggle */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex items-center gap-4 mb-12"
        >
          <button
            onClick={() => setIsYearly(false)}
            className={`text-body-sm transition-colors ${
              !isYearly ? "text-ink font-medium" : "text-ink-muted"
            }`}
          >
            {t("monthly")}
          </button>
          <button
            onClick={() => setIsYearly(!isYearly)}
            className="relative w-12 h-6 rounded-full bg-canvas-tertiary transition-colors"
          >
            <span
              className={`absolute top-1 w-4 h-4 rounded-full bg-ink transition-all duration-300 ${
                isYearly ? "left-7" : "left-1"
              }`}
            />
          </button>
          <button
            onClick={() => setIsYearly(true)}
            className={`text-body-sm transition-colors flex items-center gap-2 ${
              isYearly ? "text-ink font-medium" : "text-ink-muted"
            }`}
          >
            {t("yearly")}
            <span className="text-caption px-2 py-0.5 rounded-full bg-accent text-canvas">
              {t("yearlyDiscount")}
            </span>
          </button>
        </motion.div>

        {/* Pricing cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.key}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
              className={`relative p-8 rounded-sm border transition-all duration-300 hover:border-ink ${
                plan.highlighted
                  ? "bg-ink text-canvas border-ink"
                  : "bg-canvas border-canvas-tertiary"
              }`}
            >
              {plan.highlighted && (
                <span className="absolute -top-3 left-8 text-caption px-3 py-1 bg-accent text-canvas rounded-full">
                  {t("popular")}
                </span>
              )}

              <div className="mb-6">
                <h3
                  className={`text-body-lg font-medium mb-2 ${
                    plan.highlighted ? "text-canvas" : "text-ink"
                  }`}
                >
                  {t(`plans.${plan.key}.name`)}
                </h3>
                <p
                  className={`text-body-sm ${
                    plan.highlighted ? "text-canvas/70" : "text-ink-secondary"
                  }`}
                >
                  {t(`plans.${plan.key}.description`)}
                </p>
              </div>

              <div className="mb-8">
                <span
                  className={`text-display-md font-medium ${
                    plan.highlighted ? "text-canvas" : "text-ink"
                  }`}
                >
                  ${isYearly ? plan.price.yearly : plan.price.monthly}
                </span>
                <span
                  className={`text-body-sm ${
                    plan.highlighted ? "text-canvas/70" : "text-ink-tertiary"
                  }`}
                >
                  /{t("perMonth")}
                </span>
              </div>

              <ul className="space-y-3 mb-8">
                {(t.raw(`plans.${plan.key}.features`) as string[]).map((feature, i) => (
                  <li
                    key={i}
                    className={`flex items-start gap-3 text-body-sm ${
                      plan.highlighted ? "text-canvas/90" : "text-ink-secondary"
                    }`}
                  >
                    <Check
                      className={`w-4 h-4 mt-0.5 flex-shrink-0 ${
                        plan.highlighted ? "text-canvas" : "text-ink-tertiary"
                      }`}
                    />
                    {feature}
                  </li>
                ))}
              </ul>

              <button
                onClick={handleGetStarted}
                className={`w-full py-3 text-body-sm font-medium rounded-sm transition-all duration-300 ${
                  plan.highlighted
                    ? "bg-canvas text-ink hover:bg-canvas/90"
                    : "bg-ink text-canvas hover:bg-ink-secondary"
                }`}
              >
                {t(`plans.${plan.key}.cta`)}
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
