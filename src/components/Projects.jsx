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
          <a href={projects[0].github} target="_blank" rel="noreferrer" className="btn-ghost flex items-center gap-2">
            View All Projects
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div key={project.id} className="flex flex-col bg-bg-card rounded-2xl border border-border-color overflow-hidden hover:border-accent-green/40 transition-colors group">
              
              {/* Image / Preview Container */}
              <div className="relative h-48 w-full bg-[#1a241b] overflow-hidden border-b border-border-color flex items-center justify-center">
                {project.name === "LinguaFlow" || project.name === "MindForum" ? (
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
                  // No live screenshot for this repo — styled code-preview placeholder instead
                  // of pointing an <img> at a file that doesn't exist.
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
                  <a href={project.github} target="_blank" rel="noreferrer" className="text-text-secondary hover:text-accent-green transition-colors shrink-0 ml-2">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
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
