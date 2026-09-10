"use client";

import { useState, useEffect, useCallback } from "react";
import { useTheme } from "@/context/ThemeContext";

// NOTE: "About" and "Blog" were removed — there's no matching section/page
// for either yet, so they were dead links that did nothing when clicked.
// Add an id="about" section (or a /blog route) and restore these once that
// content exists.
const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [mobileOpen, setMobileOpen] = useState(false);
  const { heroDark, toggleHeroTheme } = useTheme();

  const handleScroll = useCallback(() => {
    setScrolled(window.scrollY > 20);

    const sections = navLinks.map((l) => l.href.replace("#", ""));
    for (let i = sections.length - 1; i >= 0; i--) {
      const el = document.getElementById(sections[i]);
      if (el && window.scrollY >= el.offsetTop - 120) {
        setActiveSection(sections[i]);
        break;
      }
    }
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  const handleNavClick = (href) => {
    setMobileOpen(false);
    const id = href.replace("#", "");
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  // Cream nav styling only makes sense while sitting on top of the light
  // (default) Hero. Once scrolled away, or once the Hero is switched to its
  // dark variant, the nav should match the rest of the page's dark theme.
  const showLightNav = !scrolled && !heroDark;

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          showLightNav
            ? "bg-[#F3EFE0]/90 backdrop-blur-md py-2"
            : "bg-bg-primary/90 backdrop-blur-md border-b border-border-color"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <a
              href="#home"
              onClick={(e) => { e.preventDefault(); handleNavClick("#home"); }}
              className="flex items-center gap-1 group"
            >
              <span className={`font-display font-bold text-xl ${showLightNav ? "text-[#1c1c14]" : "text-text-primary"}`}>
                Altaf
              </span>
              <span className={`font-display font-bold text-xl ${showLightNav ? "text-[#1c1c14]" : "text-text-primary"}`}>
                Ansari
              </span>
              <span className={`text-xl ml-0.5 ${showLightNav ? "text-[#2f6b45]" : "text-accent-green"}`}>•</span>
            </a>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-2">
              {navLinks.map((link) => {
                const id = link.href.replace("#", "");
                const isActive = activeSection === id;
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                    className={
                      !showLightNav
                        ? `nav-link ${isActive ? "active" : ""}`
                        : `px-4 py-2 text-sm font-medium transition-colors duration-200 relative ${
                            isActive ? "text-[#1c1c14]" : "text-[#5c5a4d] hover:text-[#1c1c14]"
                          } ${isActive ? "after:content-[''] after:absolute after:bottom-[-2px] after:left-1/4 after:w-1/2 after:h-0.5 after:bg-[#2f6b45] after:rounded-full" : ""}`
                    }
                  >
                    {link.label}
                  </a>
                );
              })}
            </nav>

            {/* Right side CTA */}
            <div className="flex items-center gap-4">
              <button
                onClick={() => handleNavClick("#contact")}
                className={`hidden sm:inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full font-semibold text-sm transition-colors ${
                  showLightNav ? "bg-[#1c1c14] text-white hover:bg-[#33321f]" : "bg-white text-black hover:bg-gray-200"
                }`}
              >
                Let&apos;s Connect
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>

              <button
                onClick={toggleHeroTheme}
                aria-label={heroDark ? "Switch hero to light mode" : "Switch hero to dark mode"}
                title={heroDark ? "Switch hero to light mode" : "Switch hero to dark mode"}
                className={`transition-colors p-2 rounded-full border hidden sm:block ${
                  showLightNav
                    ? "text-white bg-[#1c1c14] border-[#1c1c14] hover:bg-[#33321f]"
                    : "text-text-secondary hover:text-text-primary border-border-color bg-bg-secondary"
                }`}
              >
                {heroDark ? (
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                ) : (
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                  </svg>
                )}
              </button>

              {/* Mobile hamburger */}
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className={`md:hidden p-2 hover:text-[#2f6b45] ${showLightNav ? "text-[#1c1c14]" : "text-text-secondary"}`}
              >
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  {mobileOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="fixed inset-0 z-40 bg-bg-primary pt-24 px-4 md:hidden">
          <nav className="flex flex-col gap-4 text-center">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                className="text-xl font-medium text-text-secondary hover:text-accent-green"
              >
                {link.label}
              </a>
            ))}
            <button
              onClick={toggleHeroTheme}
              className="mt-4 mx-auto flex items-center gap-2 px-5 py-2 rounded-full border border-border-color text-sm text-text-secondary hover:text-text-primary"
            >
              {heroDark ? "☀️ Light hero" : "🌙 Dark hero"}
            </button>
          </nav>
        </div>
      )}
    </>
  );
}
