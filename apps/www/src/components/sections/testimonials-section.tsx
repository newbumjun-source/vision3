"use client";

import { motion, useReducedMotion } from "motion/react";
import { Star, Quote } from "lucide-react";

const TESTIMONIALS = [
  {
    id: 1,
    name: "Alex Gaming",
    role: "Gaming Creator",
    avatar: "AG",
    subscribers: "250K subscribers",
    quote:
      "Vision3 completely changed my workflow. I used to spend 2 hours on each thumbnail. Now it's literally 3 minutes, and my CTR went from 4% to 7%!",
    rating: 5,
  },
  {
    id: 2,
    name: "Sarah Learns",
    role: "Education Creator",
    avatar: "SL",
    subscribers: "180K subscribers",
    quote:
      "As someone who's not a designer, this tool is a game-changer. The AI understands exactly what makes educational content click-worthy.",
    rating: 5,
  },
  {
    id: 3,
    name: "Mike Lifestyle",
    role: "Lifestyle Vlogger",
    avatar: "ML",
    subscribers: "95K subscribers",
    quote:
      "The conversational approach is brilliant. I just describe my video and boom - professional thumbnails that match my brand perfectly.",
    rating: 5,
  },
];

export const TestimonialsSection = () => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="px-4 py-24 bg-gray-50 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <AnimatedContainer shouldReduceMotion={shouldReduceMotion}>
          <div className="max-w-3xl mx-auto mb-16 text-center">
            <p className="mb-2 font-medium text-gray-600">Testimonials</p>
            <h2 className="mb-4 text-4xl font-medium tracking-tight md:text-5xl text-gray-950">
              Loved by Creators
              <br />
              <span className="text-primary">Worldwide</span>
            </h2>
            <p className="text-lg font-light text-gray-600">
              Join thousands of creators who&apos;ve transformed their YouTube
              game with Vision3.
            </p>
          </div>
        </AnimatedContainer>

        <div className="grid gap-8 md:grid-cols-3">
          {TESTIMONIALS.map((testimonial, index) => (
            <AnimatedContainer
              key={testimonial.id}
              shouldReduceMotion={shouldReduceMotion}
              delay={0.2 + index * 0.15}
            >
              <div className="relative flex flex-col h-full p-8 transition-all duration-300 bg-white border border-gray-100 rounded-2xl hover:shadow-xl hover:border-gray-200 group">
                {/* Quote Icon */}
                <Quote className="absolute w-8 h-8 text-gray-100 top-6 right-6 group-hover:text-primary/20 transition-colors" />

                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 text-yellow-400 fill-yellow-400"
                    />
                  ))}
                </div>

                {/* Quote */}
                <p className="flex-1 mb-6 text-gray-700 leading-relaxed">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>

                {/* Author */}
                <div className="flex items-center gap-4 pt-6 border-t border-gray-100">
                  <div className="flex items-center justify-center w-12 h-12 font-semibold text-white rounded-full bg-gradient-to-br from-primary to-primary/70">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">
                      {testimonial.name}
                    </p>
                    <p className="text-sm text-gray-500">
                      {testimonial.role} · {testimonial.subscribers}
                    </p>
                  </div>
                </div>
              </div>
            </AnimatedContainer>
          ))}
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


