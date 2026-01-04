"use client";

import { motion, useReducedMotion } from "motion/react";
import { MessageSquare, Sparkles, Download, ArrowRight } from "lucide-react";

const STEPS = [
  {
    step: 1,
    icon: MessageSquare,
    title: "Describe Your Video",
    description:
      "Simply tell us about your video topic, target audience, and the vibe you're going for. No design skills needed.",
  },
  {
    step: 2,
    icon: Sparkles,
    title: "AI Creates & Refines",
    description:
      "Our AI generates CTR-optimized thumbnails and titles. Chat to refine until it's perfect.",
  },
  {
    step: 3,
    icon: Download,
    title: "Download & Upload",
    description:
      "Export in YouTube-ready formats (1280×720, 1920×1080). Copy titles and upload directly.",
  },
];

export const HowItWorksSection = () => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="how-it-works" className="px-4 py-24 bg-white sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <AnimatedContainer shouldReduceMotion={shouldReduceMotion}>
          <div className="max-w-3xl mx-auto mb-16 text-center">
            <p className="mb-2 font-medium text-gray-600">How It Works</p>
            <h2 className="mb-4 text-4xl font-medium tracking-tight md:text-5xl text-gray-950">
              From Idea to Thumbnail
              <br />
              <span className="text-primary">in 3 Minutes</span>
            </h2>
            <p className="text-lg font-light text-gray-600">
              No design experience required. Just have a conversation with our
              AI.
            </p>
          </div>
        </AnimatedContainer>

        <div className="relative">
          {/* Connection Line */}
          <div className="absolute hidden md:block top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-gray-200 to-transparent -translate-y-1/2 z-0" />

          <div className="relative z-10 grid gap-8 md:grid-cols-3">
            {STEPS.map((step, index) => (
              <AnimatedContainer
                key={step.step}
                shouldReduceMotion={shouldReduceMotion}
                delay={0.2 + index * 0.15}
              >
                <div className="relative flex flex-col items-center p-8 text-center transition-all duration-300 bg-white border border-gray-100 rounded-2xl hover:shadow-lg hover:border-gray-200 group">
                  {/* Step Number Badge */}
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 text-sm font-semibold text-white rounded-full bg-primary">
                    Step {step.step}
                  </div>

                  {/* Icon */}
                  <div className="flex items-center justify-center w-16 h-16 mb-6 transition-colors duration-300 rounded-2xl bg-gray-50 group-hover:bg-primary/10">
                    <step.icon
                      className="w-8 h-8 text-gray-700 transition-colors duration-300 group-hover:text-primary"
                      strokeWidth={1.5}
                    />
                  </div>

                  {/* Content */}
                  <h3 className="mb-3 text-xl font-semibold text-gray-900">
                    {step.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-gray-600">
                    {step.description}
                  </p>

                  {/* Arrow for desktop */}
                  {index < STEPS.length - 1 && (
                    <div className="absolute hidden md:flex -right-4 top-1/2 -translate-y-1/2 z-20 items-center justify-center w-8 h-8 bg-white border border-gray-200 rounded-full">
                      <ArrowRight className="w-4 h-4 text-gray-400" />
                    </div>
                  )}
                </div>
              </AnimatedContainer>
            ))}
          </div>
        </div>
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
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.6 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}


