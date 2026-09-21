"use client";

import Image from "next/image";
import { Github, Linkedin, Instagram, Mail } from "lucide-react";
import { personal } from "@/data/portfolio";
import { useTheme } from "@/context/ThemeContext";

// Custom "X" (Twitter) mark — lucide's bird icon is the old logo, so we draw
// the current X wordmark ourselves to match the reference exactly.
function XIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

// LeetCode's mark isn't in lucide-react, so it's drawn inline. Only rendered
// once personal.leetcode is filled in (see data/portfolio.js) — no dead link.
function LeetCodeIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M13.483 0a1.374 1.374 0 00-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 00-1.209 2.104 5.35 5.35 0 00-.125.513 5.527 5.527 0 00.062 2.362 5.83 5.83 0 00.443 1.241 5.716 5.716 0 001.278 1.649l4.238 3.918c.26.24.599.383.938.42a1.374 1.374 0 00.435-2.674l-4.238-3.918a2.972 2.972 0 01-.665-.858 2.958 2.958 0 01-.23-.645 2.878 2.878 0 01-.032-1.226 2.75 2.75 0 01.065-.267 2.736 2.736 0 01.629-1.093l3.854-4.126 3.854-4.126a1.374 1.374 0 00-1.008-2.312z" />
      <path d="M20.116 10.749H9.286a1.374 1.374 0 000 2.748h10.83a1.374 1.374 0 000-2.748z" />
    </svg>
  );
}

export default function Hero() {
  const { heroDark } = useTheme();

  const socials = [
    { icon: Github, href: personal.github, label: "GitHub" },
    { icon: Linkedin, href: personal.linkedin, label: "LinkedIn" },
    ...(personal.leetcode ? [{ icon: LeetCodeIcon, href: personal.leetcode, label: "LeetCode" }] : []),
    ...(personal.x ? [{ icon: XIcon, href: personal.x, label: "X" }] : []),
    ...(personal.instagram ? [{ icon: Instagram, href: personal.instagram, label: "Instagram" }] : []),
    { icon: Mail, href: `mailto:${personal.email}`, label: "Email" },
  ];

  const c = heroDark
    ? {
        section: "bg-[#050705]",
        blob1: "bg-[#132015]",
        blob2: "bg-[#16241a]",
        wave: "text-[#0c130d]",
        badgeBg: "bg-[#111812]/80",
        badgeText: "text-[#f8fafc]",
        badgeBorder: "border-[#1f2b21]",
        heading: "text-[#f8fafc]",
        accent: "text-[#84cc16]",
        subText: "text-[#94a3b8]",
        btnPrimary: "bg-[#84cc16] text-black hover:bg-[#65a30d]",
        btnOutline: "bg-[#111812] text-[#f8fafc] border-[#1f2b21] hover:bg-[#161f17]",
        socialBg: "bg-[#111812]",
        socialBorder: "border-[#1f2b21]",
        socialText: "text-[#f8fafc]",
        socialHover: "hover:border-[#84cc16] hover:text-[#84cc16]",
        handDrawn: "text-[#cbd5e1]",
        arrow: "text-[#64748b]",
        quoteText: "text-[#f8fafc]",
        quoteUnderline: "bg-[#84cc16]",
        glow: "bg-[#84cc16]/10",
      }
    : {
        section: "bg-[#F3EFE0]",
        blob1: "bg-[#DDE9C9]",
        blob2: "bg-[#CFE1B0]",
        wave: "text-[#e4dfca]",
        badgeBg: "bg-white/80",
        badgeText: "text-[#3a3a2c]",
        badgeBorder: "border-[#e3ddc4]",
        heading: "text-[#1c1c14]",
        accent: "text-[#2f6b45]",
        subText: "text-[#5c5a4d]",
        btnPrimary: "bg-[#2f6b45] text-white hover:bg-[#255736]",
        btnOutline: "bg-white text-[#1c1c14] border-[#d9d3ba] hover:bg-[#efe9d6]",
        socialBg: "bg-[#EDE9DA]",
        socialBorder: "border-[#ddd6bb]",
        socialText: "text-[#2b2b21]",
        socialHover: "hover:border-[#2f6b45] hover:text-[#2f6b45]",
        handDrawn: "text-[#2b2b21]",
        arrow: "text-[#8a8570]",
        quoteText: "text-[#1c1c14]",
        quoteUnderline: "bg-[#2f6b45]",
        glow: "bg-[#cfe1b0]/60",
      };

  return (
    <section
      id="home"
      className={`relative overflow-hidden pt-32 pb-24 transition-colors duration-500 ${c.section}`}
    >
      <div className="pointer-events-none absolute inset-0 -z-0">
        <div className={`absolute -top-10 right-0 h-[520px] w-[60%] rounded-full blur-3xl opacity-70 transition-colors duration-500 ${c.blob1}`} />
        <div className={`absolute bottom-0 right-[8%] h-[300px] w-[420px] rounded-full blur-2xl opacity-60 transition-colors duration-500 ${c.blob2}`} />
        <svg
          className={`absolute bottom-0 left-0 w-full transition-colors duration-500 ${c.wave}`}
          viewBox="0 0 1440 220"
          fill="none"
          preserveAspectRatio="none"
        >
          <path
            d="M0 120C240 60 480 180 720 130C960 80 1200 40 1440 100V220H0V120Z"
            fill="currentColor"
          />
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="space-y-6 z-10">
            <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold border shadow-sm transition-colors duration-500 ${c.badgeBg} ${c.badgeText} ${c.badgeBorder}`}>
              <span>👋</span> Hi, I&apos;m
            </div>

            <h1 className={`text-6xl sm:text-7xl font-bold tracking-tight leading-none transition-colors duration-500 ${c.heading}`}>
              Altaf <span className={c.accent}>Ansari</span>
            </h1>

            <h2 className={`text-2xl sm:text-3xl font-bold transition-colors duration-500 ${c.heading}`}>
              {personal.title}
            </h2>

            <p className={`text-base max-w-lg leading-relaxed transition-colors duration-500 ${c.subText}`}>
              {personal.tagline}
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <a
                href="#projects"
                className={`inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-full font-semibold text-sm transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] ${c.btnPrimary}`}
              >
                View My Work
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
              <a
                href={personal.resume}
                target="_blank"
                rel="noreferrer"
                className={`inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-full font-semibold text-sm border transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] ${c.btnOutline}`}
              >
                Download Resume
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
              </a>
            </div>

            {/* Straight, clean quote placed directly beneath the Resume button
                so it sits in the visual space between the CTA area and profile image. */}
            <div className="pt-1">
              <div className="inline-flex flex-col items-start">
                <p className={`text-lg sm:text-xl font-semibold tracking-wide leading-snug transition-colors duration-500 ${c.quoteText}`}>
                  “Consistent Progress Creates Extraordinary Results.”
                </p>
                <div className={`w-16 h-0.5 mt-2 rounded-full transition-colors duration-500 ${c.quoteUnderline}`} />
              </div>
            </div>

            {/* Socials */}
            <div className="flex gap-4 pt-3">
              {socials.map(({ icon: Icon, href, label }, i) => (
                <a
                  key={i}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                  className={`w-10 h-10 rounded-full flex items-center justify-center border transition-colors ${c.socialBg} ${c.socialBorder} ${c.socialText} ${c.socialHover}`}
                >
                  <Icon className="w-4 h-4" strokeWidth={2} />
                </a>
              ))}
            </div>
          </div>

          {/* Right content */}
          <div className="relative h-[560px] sm:h-[600px] flex justify-center lg:justify-end items-end">
            {/* Hand-drawn arrow and text */}
            <div className="absolute top-6 left-0 hidden md:block z-20">
              <p className={`hand-drawn text-2xl w-36 leading-tight transform -rotate-6 transition-colors duration-500 ${c.handDrawn}`}>
                Better Developer A Brighter Tomorrow
              </p>
              <svg className={`w-14 h-14 mt-2 ml-8 transform rotate-12 transition-colors duration-500 ${c.arrow}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
              </svg>
            </div>

            <div className="absolute top-4 right-0 rounded-xl p-4 hidden lg:block z-20 font-mono text-sm shadow-xl bg-[#0f1510]/95 border border-[#243026]">
              <div className="flex items-center gap-2 mb-2 border-b border-[#243026] pb-2">
                <span className="w-3 h-3 rounded-full bg-red-500" />
                <span className="w-3 h-3 rounded-full bg-yellow-500" />
                <span className="w-3 h-3 rounded-full bg-green-500" />
              </div>
              <div><span className="text-[#84cc16]">{">"}</span> <span className="text-yellow-300">dream()</span></div>
              <div><span className="text-[#84cc16]">{">"}</span> <span className="text-yellow-300">code()</span></div>
              <div><span className="text-[#84cc16]">{">"}</span> <span className="text-yellow-300">build()</span></div>
              <div><span className="text-[#84cc16]">{">"}</span> <span className="text-yellow-300">impact()</span></div>
              <div><span className="text-[#84cc16]">{">"}</span> <span className="text-yellow-300">repeat()</span></div>
              <div className="animate-pulse text-[#84cc16]">_</div>
            </div>

            {/* User image */}
            <div className="relative w-[380px] h-[480px] z-10">
              <div className={`absolute inset-x-4 bottom-4 top-10 rounded-full blur-3xl transition-colors duration-500 ${c.glow}`} />
              <div
                className="absolute inset-0 overflow-hidden rounded-[2.5rem]"
                style={{
                  maskImage: "linear-gradient(to bottom, black 82%, transparent 100%)",
                  WebkitMaskImage: "linear-gradient(to bottom, black 82%, transparent 100%)",
                }}
              >
                <Image
                  src="/profile.jpg"
                  alt={personal.name}
                  fill
                  className="object-cover object-top drop-shadow-2xl"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
