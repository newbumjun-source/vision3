"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { motion, AnimatePresence } from "motion/react";
import { Link } from "@/i18n/navigation";
import { Menu, X } from "lucide-react";
import { moveToGetStarted, moveToSignIn } from "@/lib/moveToApp";
import { MarqueeBar } from "./MarqueeBar";

export const Header = () => {
  const t = useTranslations();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleGetStarted = (e: React.MouseEvent) => {
    e.preventDefault();
    moveToGetStarted();
  };

  const marqueeItems = [
    "AI THUMBNAIL GENERATION",
    "BUILT FOR CREATORS",
    "NO DESIGN SKILLS NEEDED",
  ];

  return (
    <>
      {/* OSMO Style Header */}
      <header className="sticky top-0 z-50 w-full pt-4 pb-0">
        <div className="flex justify-center px-4">
          <motion.nav
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex items-center justify-between w-full max-w-[720px] px-2 py-2 rounded-full bg-[#1a1a1a]"
          >
            {/* Left - Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="flex items-center gap-2 px-4 py-2.5 text-white/90 hover:text-white transition-colors"
              aria-label="Toggle menu"
            >
              <div className="flex flex-col gap-[5px]">
                <span className="w-4 h-[1.5px] bg-current" />
                <span className="w-4 h-[1.5px] bg-current" />
              </div>
              <span className="text-[13px] font-medium tracking-wide">Menu</span>
            </button>

            {/* Center - Logo */}
            <Link href="/" className="absolute left-1/2 -translate-x-1/2 flex items-center">
              <span className="text-[22px] font-bold text-white tracking-[-0.02em]">
                VISION3
              </span>
            </Link>

            {/* Right - Auth Buttons */}
            <div className="flex items-center gap-1.5">
              <button
                onClick={() => moveToSignIn()}
                className="px-4 py-2.5 text-[13px] font-medium text-white/80 hover:text-white bg-[#333] rounded-full transition-colors"
              >
                Login
              </button>
              <button
                onClick={handleGetStarted}
                className="px-4 py-2.5 text-[13px] font-semibold text-[#1a1a1a] bg-[#B9FF66] hover:bg-[#a8f050] rounded-full transition-colors"
              >
                Join
              </button>
            </div>
          </motion.nav>
        </div>
      </header>

      {/* Marquee Announcement Bar */}
      <div className="pt-4">
        <MarqueeBar items={marqueeItems} speed={18} />
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            
            {/* Menu Panel */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="fixed top-4 left-4 right-4 z-50 bg-[#1a1a1a] rounded-3xl overflow-hidden"
            >
              {/* Header */}
              <div className="flex items-center justify-between p-4 border-b border-white/10">
                <span className="text-[22px] font-bold text-white tracking-[-0.02em]">
                  VISION3
                </span>
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-2 text-white/60 hover:text-white transition-colors"
                  aria-label="Close menu"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Navigation Links */}
              <nav className="p-6">
                <ul className="space-y-1">
                  {[
                    { name: t("header.features"), href: "#features" },
                    { name: t("header.pricing"), href: "#pricing" },
                    { name: t("header.faq"), href: "#faq" },
                  ].map((item) => (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="block py-4 text-[28px] font-medium text-white hover:text-white/70 transition-colors tracking-[-0.02em]"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>

              {/* Bottom Actions */}
              <div className="p-6 pt-0 flex gap-3">
                <button
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    moveToSignIn();
                  }}
                  className="flex-1 py-3.5 text-[15px] font-medium text-white bg-[#333] rounded-full transition-colors hover:bg-[#444]"
                >
                  {t("common.signIn")}
                </button>
                <button
                  onClick={(e) => {
                    setIsMobileMenuOpen(false);
                    handleGetStarted(e);
                  }}
                  className="flex-1 py-3.5 text-[15px] font-semibold text-[#1a1a1a] bg-[#B9FF66] rounded-full transition-colors hover:bg-[#a8f050]"
                >
                  {t("common.getStarted")}
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};
