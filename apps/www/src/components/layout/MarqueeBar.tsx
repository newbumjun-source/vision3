"use client";

import { useEffect, useRef } from "react";

interface MarqueeBarProps {
  items: string[];
  speed?: number;
}

export const MarqueeBar = ({ items, speed = 40 }: MarqueeBarProps) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Add the keyframes dynamically
    const styleId = "marquee-keyframes";
    if (!document.getElementById(styleId)) {
      const style = document.createElement("style");
      style.id = styleId;
      style.textContent = `
        @keyframes marquee-scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `;
      document.head.appendChild(style);
    }
  }, []);

  // Create the content that will be repeated
  const content = items.map((item, idx) => (
    <span key={idx} className="flex items-center shrink-0">
      <span className="text-[11px] font-medium tracking-[0.15em] uppercase text-ink-secondary px-5">
        {item}
      </span>
      <span className="text-ink-tertiary text-[11px]">✦</span>
    </span>
  ));

  return (
    <div className="relative w-full overflow-hidden bg-canvas py-3 border-b border-canvas-tertiary">
      <div
        ref={containerRef}
        className="flex whitespace-nowrap"
        style={{
          animation: `marquee-scroll ${speed}s linear infinite`,
        }}
      >
        {/* First set */}
        <div className="flex shrink-0">{content}</div>
        {/* Second set (duplicate for seamless loop) */}
        <div className="flex shrink-0">{content}</div>
        {/* Third set */}
        <div className="flex shrink-0">{content}</div>
        {/* Fourth set */}
        <div className="flex shrink-0">{content}</div>
      </div>
    </div>
  );
};
