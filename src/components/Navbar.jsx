"use client";

import { useState, useEffect, useCallback } from "react";
import { useTheme } from "@/context/ThemeContext";

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

  const showLightNav = !scrolled && !heroDark;

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          showLightNav
            ? "bg-[#F3EFE0]/90 backdrop-blur-md py-2"
            : "bg-[#050705] border-b border-[#1f2b21] shadow-lg py-0"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <a
              href="#home"
              onClick={(e) => { e.preventDefault(); handleNavClick("#home"); }}
              className="flex items-center gap-1 group"
            >
              <span className={`font-display font-bold text-xl ${showLightNav ? "text-[#1c1c14]" : "text-text-primary"}`}>Altaf</span>
              <span className={`font-display font-bold text-xl ${showLightNav ? "text-[#1c1c14]" : "text-text-primary"}`}>Ansari</span>
              <span className={`text-xl ml-0.5 ${showLightNav ? "text-[#2f6b45]" : "text-accent-green"}`}>•</span>
            </a>

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

            <div className="flex items-center gap-4">
              <button
                onClick={() => handleNavClick("#contact")}
                className={`hidden sm:inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full font-semibold text-sm transition-colors ${
                  showLightNav ? "bg-[#1c1c14] text-white hover:bg-[#33321f]" : "bg-white text-black hover:bg-gray-200"
                }`}
              >
                Let's Connect
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24">
                  <path stroke="currentColor" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
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
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0z" />
                  </svg>
                ) : (
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                  </svg>
                )}
              </button>

              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className={`md:hidden p-2 hover:text-[#2f6b45] ${showLightNav ? "text-[#1c1c14]" : "text-text-secondary"}`}
                aria-label={mobileOpen ? "Close navigation menu" : "Open navigation menu"}
              >
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24">
                  {mobileOpen ? (
                    <path stroke="currentColor" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path stroke="currentColor" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>
      </header>

      {mobileOpen && (
        <div className="fixed top-[4.75rem] left-4 right-4 z-40 md:hidden max-h-[calc(100vh-6rem)] overflow-y-auto rounded-2xl bg-[#050705] border border-[#2f6b45] shadow-2xl">
          <nav className="flex flex-col gap-2 p-4">
            {navLinks.map((link) => {
              const id = link.href.replace("#", "");
              const isActive = activeSection === id;

              return (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                  className={`w-full rounded-xl px-4 py-3 text-base font-semibold transition-all duration-200 border ${
                    isActive
                      ? "bg-[#84cc16] text-black border-[#84cc16] shadow-lg shadow-[#84cc16]/20"
                      : "bg-[#0b100c] text-white border-[#1f2b21] hover:bg-[#111812] hover:border-[#84cc16] hover:text-[#84cc16]"
                  }`}
                >
                  {link.label}
                </a>
              );
            })}

            <button
              onClick={toggleHeroTheme}
              className="mt-2 w-full rounded-xl px-4 py-3 flex items-center justify-center gap-2 border border-[#1f2b21] bg-white text-black font-semibold text-sm hover:bg-[#f1f1f1] transition-colors"
            >
              {heroDark ? "☀️ Light hero" : "🌙 Dark hero"}
            </button>
          </nav>
        </div>
      )}
    </>
  );
}
