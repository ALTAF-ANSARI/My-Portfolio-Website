"use client";

import { useState } from "react";
import { skills, softSkills } from "@/data/portfolio";

const categories = ["All", "Languages", "Web Technologies", "Core Concepts & Databases", "Tools & Platforms"];

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState("All");

  const displayedSkills = skills[activeCategory] || [];

  return (
    <section id="skills" className="py-24 relative bg-bg-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <p className="text-accent-green font-mono text-xs font-bold tracking-widest uppercase mb-2">My Skills</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-text-primary">
              Technologies I Work With
            </h2>
            <p className="text-text-secondary mt-2 text-sm">
              A versatile tech stack to build modern, scalable and intelligent applications.
            </p>
          </div>

          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-1.5 rounded-md text-xs font-semibold transition-colors whitespace-nowrap ${
                  activeCategory === cat
                    ? "bg-accent-green text-black"
                    : "bg-[#111812] text-text-secondary border border-[#1f2b21] hover:text-text-primary hover:border-accent-green/50"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-4">
          {displayedSkills.map((skill, index) => (
            <a
              key={`${skill.name}-${index}`}
              href={skill.docs}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Open official ${skill.name} documentation`}
              title={`Open official ${skill.name} documentation`}
              className="flex flex-col items-center justify-center gap-3 p-4 rounded-2xl bg-[#0b100c] border border-[#1a241b] hover:border-accent-green/60 hover:bg-[#101711] hover:-translate-y-1 transition-all duration-200 group cursor-pointer focus:outline-none focus:ring-2 focus:ring-accent-green/60"
            >
              <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-[#151b16] group-hover:bg-[#1a2419] transition-colors">
                <i className={`${skill.icon} text-3xl colored group-hover:scale-110 transition-transform drop-shadow-md`} />
              </div>
              <span className="text-xs font-medium text-text-secondary group-hover:text-text-primary text-center">
                {skill.name}
              </span>
            </a>
          ))}
        </div>

        <div className="mt-10 pt-8 border-t border-border-color flex flex-wrap items-center gap-3">
          <span className="text-xs font-semibold text-text-muted uppercase tracking-wide mr-1">Soft Skills:</span>
          {softSkills.map((s) => (
            <span
              key={s}
              className="px-3 py-1.5 rounded-full text-xs font-medium bg-bg-secondary border border-border-color text-text-secondary"
            >
              {s}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
