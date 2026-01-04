"use client";

import { motion } from "motion/react";
import { InfiniteSlider } from "@/components/ui/infinite-slider";

// High-quality thumbnail images (16:9 aspect ratio)
const thumbnailImages = {
  row1: [
    "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=640&h=360&fit=crop&auto=format",
    "https://images.unsplash.com/photo-1626785774573-4b799315345d?w=640&h=360&fit=crop&auto=format",
    "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=640&h=360&fit=crop&auto=format",
    "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=640&h=360&fit=crop&auto=format",
    "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=640&h=360&fit=crop&auto=format",
    "https://images.unsplash.com/photo-1614850715649-1d0106293bd1?w=640&h=360&fit=crop&auto=format",
    "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=640&h=360&fit=crop&auto=format",
  ],
  row2: [
    "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=640&h=360&fit=crop&auto=format",
    "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=640&h=360&fit=crop&auto=format",
    "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=640&h=360&fit=crop&auto=format",
    "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=640&h=360&fit=crop&auto=format",
    "https://images.unsplash.com/photo-1563089145-599997674d42?w=640&h=360&fit=crop&auto=format",
    "https://images.unsplash.com/photo-1618172193622-ae2d025f4032?w=640&h=360&fit=crop&auto=format",
    "https://images.unsplash.com/photo-1605379399642-870262d3d051?w=640&h=360&fit=crop&auto=format",
  ],
};

// Pre-defined rotation values (±0.5° to ±1.5°) - subtle and refined
const rotations = {
  row1: [-1.2, 0.8, -0.6, 1.1, -0.9, 0.7, -1.0],
  row2: [1.0, -0.7, 0.9, -1.1, 0.6, -0.8, 1.2],
};

// Image card component with rotation
interface ImageCardProps {
  src: string;
  alt: string;
  rotation: number;
}

const ImageCard = ({ src, alt, rotation }: ImageCardProps) => (
  <motion.div
    className="relative flex-shrink-0 overflow-hidden rounded-2xl shadow-xl"
    style={{
      rotate: rotation,
      width: "320px",
    }}
    whileHover={{ 
      scale: 1.015,
      rotate: 0,
      transition: { duration: 0.4, ease: "easeOut" }
    }}
  >
    <div className="aspect-video w-full overflow-hidden bg-[#E0E0E0]">
      <img
        src={src}
        alt={alt}
        className="w-full h-full object-cover transition-transform duration-700 hover:scale-[1.02]"
        loading="lazy"
      />
    </div>
    {/* Subtle overlay for depth */}
    <div className="absolute inset-0 bg-gradient-to-t from-black/4 to-transparent pointer-events-none" />
  </motion.div>
);

export const ImageMarquee = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="relative w-full mt-16 md:mt-24 overflow-hidden"
    >
      {/* Top gradient mask - reduced */}
      <div 
        className="absolute top-0 left-0 right-0 h-12 z-10 pointer-events-none"
        style={{
          background: "linear-gradient(to bottom, #F5F5F5 0%, transparent 100%)",
        }}
      />
      
      {/* Bottom gradient mask - reduced */}
      <div 
        className="absolute bottom-0 left-0 right-0 h-12 z-10 pointer-events-none"
        style={{
          background: "linear-gradient(to top, #F5F5F5 0%, transparent 100%)",
        }}
      />

      {/* Left gradient mask - reduced */}
      <div 
        className="absolute top-0 bottom-0 left-0 w-20 md:w-32 z-10 pointer-events-none"
        style={{
          background: "linear-gradient(to right, #F5F5F5 0%, transparent 100%)",
        }}
      />

      {/* Right gradient mask - reduced */}
      <div 
        className="absolute top-0 bottom-0 right-0 w-20 md:w-32 z-10 pointer-events-none"
        style={{
          background: "linear-gradient(to left, #F5F5F5 0%, transparent 100%)",
        }}
      />

      {/* Marquee Container */}
      <div className="py-6 space-y-5">
        {/* Row 1: Left to Right */}
        <InfiniteSlider 
          gap={28} 
          duration={55}
          durationOnHover={90}
          className="py-3"
        >
          {thumbnailImages.row1.map((src, index) => (
            <ImageCard
              key={`row1-${index}`}
              src={src}
              alt={`Thumbnail ${index + 1}`}
              rotation={rotations.row1[index] ?? 0}
            />
          ))}
        </InfiniteSlider>

        {/* Row 2: Right to Left (reverse) */}
        <InfiniteSlider 
          gap={28} 
          duration={60}
          durationOnHover={95}
          reverse
          className="py-3"
        >
          {thumbnailImages.row2.map((src, index) => (
            <ImageCard
              key={`row2-${index}`}
              src={src}
              alt={`Thumbnail ${index + 8}`}
              rotation={rotations.row2[index] ?? 0}
            />
          ))}
        </InfiniteSlider>
      </div>
    </motion.div>
  );
};
