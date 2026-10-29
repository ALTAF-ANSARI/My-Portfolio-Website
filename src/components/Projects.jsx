"use client";

import Image from "next/image";
import { projects } from "@/data/portfolio";

export default function Projects() {
  return (
    <section id="projects" className="py-24 relative bg-bg-primary border-t border-border-color">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <p className="text-accent-green font-mono text-xs font-bold tracking-widest uppercase mb-2">Featured Projects</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-text-primary">
              Some Things I've Built
            </h2>
            <p className="text-text-secondary mt-2 text-sm">
              Real-world projects that solve problems and create impact.
            </p>
          </div>
          <a href="https://github.com/ALTAF-ANSARI?tab=repositories" target="_blank" rel="noreferrer" className="btn-ghost flex items-center gap-2">
            View All Projects
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div key={project.id} className="flex flex-col bg-bg-card rounded-2xl border border-border-color overflow-hidden hover:border-accent-green/40 transition-colors group">
              
              {/* Image / Preview Container */}
              <div className="relative h-48 w-full bg-[#1a241b] overflow-hidden border-b border-border-color flex items-center justify-center">
                {project.name === "AgniDrishti" ? (
                  <div className="relative w-full h-full overflow-hidden bg-[#0d130e] text-accent-green">
                    <div className="absolute inset-0 opacity-25" style={{ backgroundImage: "linear-gradient(rgba(110, 231, 133, 0.24) 1px, transparent 1px), linear-gradient(90deg, rgba(110, 231, 133, 0.24) 1px, transparent 1px)", backgroundSize: "28px 28px" }}></div>
                    <svg className="absolute inset-0 w-full h-full opacity-80" viewBox="0 0 600 240" preserveAspectRatio="xMidYMid slice" fill="none" aria-hidden="true">
                      <path d="M-20 45 L90 22 L150 57 L220 35 L270 70 L345 42 L415 67 L485 28 L620 55 L620 135 L555 158 L495 130 L425 170 L355 145 L285 185 L215 150 L145 178 L75 138 L-20 160 Z" fill="#183321" stroke="#4ade80" strokeOpacity=".35" />
                      <path d="M-10 90 L95 72 L160 103 L230 82 L295 117 L355 92 L425 115 L505 83 L615 110 M20 190 L95 138 L165 165 L225 133 L300 165 L365 137 L430 166 L505 132 L590 154 M120 0 L140 70 L115 130 L145 200 L132 250 M250 0 L268 70 L250 122 L280 185 L270 250 M390 0 L410 66 L388 125 L420 182 L405 250 M510 0 L520 55 L500 112 L535 170 L525 250" stroke="#86efac" strokeOpacity=".38" strokeWidth="1.5" />
                      <circle cx="185" cy="92" r="20" fill="#ef4444" fillOpacity=".12" stroke="#f87171" strokeOpacity=".8" />
                      <circle cx="185" cy="92" r="7" fill="#f87171" />
                      <circle cx="365" cy="132" r="24" fill="#f59e0b" fillOpacity=".1" stroke="#fbbf24" strokeOpacity=".8" />
                      <circle cx="365" cy="132" r="7" fill="#fbbf24" />
                      <circle cx="470" cy="72" r="17" fill="#ef4444" fillOpacity=".1" stroke="#f87171" strokeOpacity=".7" />
                      <circle cx="470" cy="72" r="5" fill="#f87171" />
                    </svg>
                    <div className="absolute left-5 top-5 flex items-center gap-2 rounded-full border border-accent-green/30 bg-[#0b100c]/85 px-3 py-1.5 text-[10px] font-mono uppercase tracking-wider text-accent-green">
                      <span className="h-1.5 w-1.5 rounded-full bg-accent-green animate-pulse"></span>
                      Geospatial monitoring concept
                    </div>
                    <div className="absolute bottom-4 left-5 right-5 flex items-end justify-between gap-3">
                      <div>
                        <p className="text-lg font-bold tracking-wide text-white">AgniDrishti</p>
                        <p className="text-[10px] font-mono text-accent-green/80">SATELLITE-BASED INCIDENT DASHBOARD</p>
                      </div>
                      <span className="rounded-md border border-amber-300/30 bg-amber-400/10 px-2 py-1 text-[10px] font-mono text-amber-200">IN DEVELOPMENT</span>
                    </div>
                  </div>
                ) : project.name === "LinguaFlow" || project.name === "MindForum" ? (
                  <>
                    <div className="absolute inset-0 bg-gradient-to-t from-bg-card to-transparent opacity-50 z-10"></div>
                    <Image
                      src={project.name === "LinguaFlow" ? "/project_linguaflow.png" : "/project_mindforum.png"}
                      alt={project.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </>
                ) : (
                  // Styled code-preview placeholder for the console-based C++ project.
                  <div className="w-full h-full flex flex-col items-center justify-center gap-2 bg-[#0d130e] font-mono text-xs text-accent-green/80 px-6">
                    <svg className="w-8 h-8 text-accent-green/60 mb-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
                    </svg>
                    <span className="text-text-muted">console-based · C++</span>
                  </div>
                )}
                {project.isFork && (
                  <span className="absolute top-3 right-3 z-20 text-[10px] font-semibold px-2 py-1 rounded-full bg-black/60 border border-white/10 text-amber-300 flex items-center gap-1">
                    <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 3v12m0 0a3 3 0 106 0m-6 0a3 3 0 116 0m6-9a3 3 0 11-6 0 3 3 0 016 0zm0 0v3a3 3 0 01-3 3h-3" />
                    </svg>
                    Fork
                  </span>
                )}
              </div>

              {/* Content Container */}
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex justify-between items-start mb-1">
                  <h3 className="text-xl font-bold text-text-primary group-hover:text-accent-green transition-colors">
                    {project.name}
                  </h3>
                  {project.github && (
                    <a href={project.github} target="_blank" rel="noreferrer" aria-label={`View ${project.name} on GitHub`} className="text-text-secondary hover:text-accent-green transition-colors shrink-0 ml-2">
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  )}
                </div>

                {project.subtitle && (
                  <p className="text-xs text-accent-green/80 font-mono mb-3">{project.subtitle}</p>
                )}

                <p className="text-sm text-text-secondary mb-6 flex-grow">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tech.slice(0, 4).map((t, i) => (
                    <span key={i} className={`text-[10px] px-2 py-1 rounded bg-[#0b100c] border border-border-color font-mono font-medium ${
                      i === 0 ? 'text-accent-green' : 'text-text-secondary'
                    }`}>
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
