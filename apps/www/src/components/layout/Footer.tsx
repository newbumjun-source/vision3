"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { DISCORD_LINK } from "@/constants/links";
import { SiDiscord, SiX } from "@icons-pack/react-simple-icons";

export const Footer = () => {
  const t = useTranslations("footer");

  const productLinks = [
    { label: t("product.features"), href: "#features" },
    { label: t("product.pricing"), href: "#pricing" },
    { label: t("product.faq"), href: "#faq" },
  ];

  const resourceLinks = [
    { label: t("resources.community"), href: DISCORD_LINK, external: true },
    { label: t("resources.support"), href: "mailto:support@vision3.ai", external: true },
  ];

  const legalLinks = [
    { label: t("legal.privacy"), href: "/privacy" },
    { label: t("legal.terms"), href: "/terms" },
  ];

  return (
    <footer className="py-section-md bg-canvas border-t border-canvas-tertiary">
      <div className="container-editorial">
        <div className="grid grid-cols-2 md:grid-cols-12 gap-12 md:gap-8 mb-16">
          {/* Brand */}
          <div className="col-span-2 md:col-span-4">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <Image
                src="/logo.svg"
                alt="Vision3"
                width={28}
                height={28}
                className="w-7 h-7"
              />
              <span className="text-body-lg font-semibold text-ink">
                Vision3
              </span>
            </Link>
            <p className="text-body-sm text-ink-secondary max-w-xs">
              {t("tagline")}
            </p>
          </div>

          {/* Product */}
          <div className="col-span-1 md:col-span-2 md:col-start-7">
            <h4 className="text-body-sm font-medium text-ink mb-4">
              {t("product.title")}
            </h4>
            <ul className="space-y-3">
              {productLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-body-xs text-ink-tertiary hover:text-ink transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div className="col-span-1 md:col-span-2">
            <h4 className="text-body-sm font-medium text-ink mb-4">
              {t("resources.title")}
            </h4>
            <ul className="space-y-3">
              {resourceLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target={link.external ? "_blank" : undefined}
                    rel={link.external ? "noopener noreferrer" : undefined}
                    className="text-body-xs text-ink-tertiary hover:text-ink transition-colors duration-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal & Social */}
          <div className="col-span-1 md:col-span-2">
            <h4 className="text-body-sm font-medium text-ink mb-4">
              {t("legal.title")}
            </h4>
            <ul className="space-y-3 mb-8">
              {legalLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-body-xs text-ink-tertiary hover:text-ink transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            <h4 className="text-body-sm font-medium text-ink mb-4">
              {t("social.title")}
            </h4>
            <div className="flex gap-4">
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="text-ink-tertiary hover:text-ink transition-colors duration-300"
                aria-label="Twitter"
              >
                <SiX className="w-5 h-5" />
              </a>
              <a
                href={DISCORD_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="text-ink-tertiary hover:text-ink transition-colors duration-300"
                aria-label="Discord"
              >
                <SiDiscord className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 text-center text-body-xs text-ink-muted border-t border-canvas-tertiary">
          {t("copyright")}
        </div>
      </div>
    </footer>
  );
};
