/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "bg-primary": "rgb(var(--bg-primary) / <alpha-value>)",
        "bg-secondary": "rgb(var(--bg-secondary) / <alpha-value>)",
        "bg-card": "rgb(var(--bg-card) / <alpha-value>)",
        "bg-card-hover": "rgb(var(--bg-card-hover) / <alpha-value>)",
        "bg-panel": "rgb(var(--bg-panel) / <alpha-value>)",
        "bg-panel-alt": "rgb(var(--bg-panel-alt) / <alpha-value>)",
        "bg-panel-strong": "rgb(var(--bg-panel-strong) / <alpha-value>)",
        "accent-green": "rgb(var(--accent-green) / <alpha-value>)",
        "accent-green-dark": "rgb(var(--accent-green-dark) / <alpha-value>)",
        "accent-contrast": "rgb(var(--accent-contrast) / <alpha-value>)",
        "text-primary": "rgb(var(--text-primary) / <alpha-value>)",
        "text-secondary": "rgb(var(--text-secondary) / <alpha-value>)",
        "text-muted": "rgb(var(--text-muted) / <alpha-value>)",
        "border-color": "rgb(var(--border-color) / <alpha-value>)",
        "border-accent": "rgb(var(--border-accent) / <alpha-value>)",
        "border-panel": "rgb(var(--border-panel) / <alpha-value>)",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
        display: ["Inter", "sans-serif"],
      },
      borderRadius: {
        '4xl': '2.5rem',
      }
    },
  },
  plugins: [],
};
