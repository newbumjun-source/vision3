/**
 * Design Tokens - Editorial Typography-First Design System
 * 
 * This file provides CSS variable references that can be used in inline styles.
 * All colors reference CSS custom properties defined in globals.css
 */

// CSS variable references for use in inline styles
export const colors = {
  // Ink - Text colors
  ink: "hsl(var(--ink))",
  inkSecondary: "hsl(var(--ink-secondary))",
  inkTertiary: "hsl(var(--ink-tertiary))",
  inkMuted: "hsl(var(--ink-muted))",

  // Canvas - Background colors
  canvas: "hsl(var(--canvas))",
  canvasSecondary: "hsl(var(--canvas-secondary))",
  canvasTertiary: "hsl(var(--canvas-tertiary))",

  // Accent
  accent: "hsl(var(--accent))",

  // Transparent variations for opacity
  inkTransparent: (opacity: number) => `hsl(var(--ink) / ${opacity})`,
  canvasTransparent: (opacity: number) => `hsl(var(--canvas) / ${opacity})`,
  accentTransparent: (opacity: number) => `hsl(var(--accent) / ${opacity})`,
} as const;

// Tailwind class mappings for common patterns
export const tw = {
  // Text colors
  textInk: "text-ink",
  textInkSecondary: "text-ink-secondary",
  textInkTertiary: "text-ink-tertiary",
  textInkMuted: "text-ink-muted",
  
  // Background colors
  bgCanvas: "bg-canvas",
  bgCanvasSecondary: "bg-canvas-secondary",
  bgCanvasTertiary: "bg-canvas-tertiary",
  bgAccent: "bg-accent",

  // Border colors
  borderCanvas: "border-canvas",
  borderCanvasTertiary: "border-canvas-tertiary",
} as const;

// Typography scale (matches tailwind.config.js)
export const typography = {
  display: {
    "3xl": "text-display-3xl",
    "2xl": "text-display-2xl",
    "xl": "text-display-xl",
    "lg": "text-display-lg",
    "md": "text-display-md",
    "sm": "text-display-sm",
  },
  body: {
    lg: "text-body-lg",
    md: "text-body-md",
    sm: "text-body-sm",
    xs: "text-body-xs",
  },
  caption: "text-caption",
  overline: "text-overline",
} as const;
