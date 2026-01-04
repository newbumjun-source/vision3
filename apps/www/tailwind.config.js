/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "../../packages/ui/src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        ink: {
          DEFAULT: "hsl(var(--ink))",
          secondary: "hsl(var(--ink-secondary))",
          tertiary: "hsl(var(--ink-tertiary))",
          muted: "hsl(var(--ink-muted))",
        },
        canvas: {
          DEFAULT: "hsl(var(--canvas))",
          secondary: "hsl(var(--canvas-secondary))",
          tertiary: "hsl(var(--canvas-tertiary))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "marquee": {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "marquee": "marquee 40s linear infinite",
      },
      fontFamily: {
        sans: ["Inter", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "Roboto", "Helvetica Neue", "Arial", "sans-serif"],
        display: ["Inter", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "Roboto", "Helvetica Neue", "Arial", "sans-serif"],
      },
      fontSize: {
        /* Display sizes - Hero / Page Headline: Inter SemiBold (600) */
        "display-3xl": ["96px", { lineHeight: "1.1", letterSpacing: "-0.02em", fontWeight: "600" }],
        "display-2xl": ["72px", { lineHeight: "1.1", letterSpacing: "-0.02em", fontWeight: "600" }],
        "display-xl": ["56px", { lineHeight: "1.15", letterSpacing: "-0.02em", fontWeight: "600" }],
        "display-lg": ["44px", { lineHeight: "1.2", letterSpacing: "-0.02em", fontWeight: "600" }],
        
        /* Section Title: Inter Medium (500) */
        "display-md": ["36px", { lineHeight: "1.3", letterSpacing: "-0.02em", fontWeight: "500" }],
        "display-sm": ["28px", { lineHeight: "1.4", letterSpacing: "-0.02em", fontWeight: "500" }],
        
        /* Body / Subheadline: Inter Regular (400) */
        "body-lg": ["20px", { lineHeight: "1.5", letterSpacing: "0em", fontWeight: "400" }],
        "body-md": ["18px", { lineHeight: "1.5", letterSpacing: "0em", fontWeight: "400" }],
        "body-sm": ["16px", { lineHeight: "1.5", letterSpacing: "0em", fontWeight: "400" }],
        "body-xs": ["14px", { lineHeight: "1.5", letterSpacing: "0em", fontWeight: "400" }],
        
        /* Caption and overline */
        "caption": ["12px", { lineHeight: "1.4", letterSpacing: "0.01em", fontWeight: "400" }],
        "overline": ["11px", { lineHeight: "1.2", letterSpacing: "0.08em", fontWeight: "500" }],
      },
      spacing: {
        "section-lg": "160px",
        "section-md": "120px",
        "section-sm": "80px",
        "section-xs": "48px",
        "grid-lg": "64px",
        "grid-md": "48px",
        "grid-sm": "32px",
      },
      maxWidth: {
        "container-editorial": "1200px",
      },
    },
  },
  plugins: [],
};
