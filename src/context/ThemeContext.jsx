"use client";

import { createContext, useContext, useEffect, useState } from "react";

// Scope note: the rest of the site (Skills/Projects/Journey/Contact/Footer)
// is a single dark theme by design — only the Hero section was built with a
// light "cream" palette to match the reference mockup. So this toggle
// switches the Hero between that cream look (default, matches the reference)
// and a dark variant that matches the rest of the page — rather than
// re-theming the entire site, which wasn't part of the original design.
const ThemeContext = createContext(null);

export function ThemeProvider({ children }) {
  const [heroDark, setHeroDark] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const stored = window.localStorage.getItem("hero-theme");
    if (stored === "dark") setHeroDark(true);
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    window.localStorage.setItem("hero-theme", heroDark ? "dark" : "light");
  }, [heroDark, mounted]);

  const toggleHeroTheme = () => setHeroDark((prev) => !prev);

  return (
    <ThemeContext.Provider value={{ heroDark, toggleHeroTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error("useTheme must be used within a ThemeProvider");
  return ctx;
}
