"use client";

import { stats } from "@/data/portfolio";

const iconMap = {
  code: (
    <span className="text-yellow-400 font-mono font-bold text-2xl tracking-tighter">
      {"</>"}
    </span>
  ),
  box: (
    <svg className="w-8 h-8 text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
    </svg>
  ),
  star: (
    <svg className="w-8 h-8 text-yellow-400 fill-yellow-400" viewBox="0 0 24 24">
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
    </svg>
  ),
  briefcase: (
    <svg className="w-8 h-8 text-accent-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
  ),
};

export default function Stats() {
  return (
    <section className="relative z-30 -mt-16 sm:-mt-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="bg-[#0f1510] border border-[#213023] rounded-[2rem] p-6 sm:p-8 shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-4 divide-x divide-transparent md:divide-[#213023]">
          {stats.map((stat, i) => (
            <div key={i} className={`flex items-center gap-4 ${i !== 0 ? 'md:pl-6' : ''}`}>
              <div className="shrink-0 drop-shadow-md">
                {iconMap[stat.icon]}
              </div>
              <div>
                <p className={`text-2xl sm:text-3xl font-bold ${stat.icon === 'briefcase' ? 'text-accent-green' : 'text-text-primary'}`}>
                  {stat.value}{stat.suffix}
                </p>
                <p className="text-text-secondary text-xs sm:text-sm mt-0.5">
                  {stat.label}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
