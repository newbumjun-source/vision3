"use client";

import { useState } from "react";
import { X, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface AnnouncementBarProps {
  badge?: string;
  message: string;
  link?: string;
  onClose?: () => void;
}

export const AnnouncementBar = ({ 
  badge = "New", 
  message, 
  link,
  onClose 
}: AnnouncementBarProps) => {
  const [isVisible, setIsVisible] = useState(true);

  const handleClose = () => {
    setIsVisible(false);
    onClose?.();
  };

  const content = (
    <div className="flex items-center gap-3">
      {badge && (
        <span className="px-2.5 py-1 text-[11px] font-medium tracking-wide border border-ink/20 rounded-full">
          {badge}
        </span>
      )}
      <span className="text-body-sm text-ink">
        {message}
      </span>
      {link && (
        <ArrowRight className="w-4 h-4 text-ink" />
      )}
    </div>
  );

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3 }}
          className="relative py-3 bg-canvas border-b border-canvas-tertiary"
        >
          <div className="container-editorial flex items-center justify-center">
            {link ? (
              <a 
                href={link} 
                className="flex items-center gap-3 hover:opacity-80 transition-opacity"
              >
                {content}
              </a>
            ) : (
              content
            )}
            
            <button
              onClick={handleClose}
              className="absolute right-4 md:right-8 p-1 text-ink-muted hover:text-ink transition-colors"
              aria-label="Close announcement"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};


