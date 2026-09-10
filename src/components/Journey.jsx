import { education, achievements, currentlyExploring, certificates } from "@/data/portfolio";

export default function Journey() {
  return (
    <section id="experience" className="py-24 relative bg-bg-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16">
          
          {/* Left Column: Education & Experience */}
          <div>
            <p className="text-accent-green font-mono text-xs font-bold tracking-widest uppercase mb-2">My Journey</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-text-primary mb-10">
              Education & Experience
            </h2>

            <div className="relative border-l border-border-color ml-3 md:ml-4 space-y-10">
              {education.map((item, index) => (
                <div key={item.id} className="relative pl-8">
                  {/* Timeline dot */}
                  <div className={`absolute -left-[5px] top-1 w-2.5 h-2.5 rounded-full ${index === 0 ? 'bg-accent-green shadow-[0_0_10px_#84cc16]' : 'bg-[#334155]'}`}></div>
                  
                  {/* Content */}
                  <div className="mb-1 text-text-primary font-bold text-lg flex items-center gap-3">
                    <div className="w-8 h-8 rounded bg-bg-secondary border border-border-color flex items-center justify-center shrink-0">
                      {index === 0 ? (
                        <svg className="w-5 h-5 text-orange-400" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM11 19.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.51c-.32-.78-.9-1.42-1.59-1.85-.4-.24-.92-.37-1.47-.37H14v-2c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V8h2c1.1 0 2-.9 2-2h-1c-1.38 0-2.5-1.12-2.5-2.5 0-.17.02-.33.06-.5C16.48 4.2 20 7.68 20 12c0 2.05-.78 3.93-2.1 5.42z"/></svg>
                      ) : (
                        <span className="font-mono text-text-muted text-xs font-bold">{"</>"}</span>
                      )}
                    </div>
                    {item.institution}
                  </div>
                  <p className="text-text-secondary text-sm mb-1">{item.degree}</p>
                  <p className="text-text-muted text-xs font-mono">{item.score}</p>
                  
                  <div className="mt-4 text-xs font-semibold text-text-muted">
                    {item.period} | {item.location}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Achievements */}
          <div>
             <p className="text-accent-green font-mono text-xs font-bold tracking-widest uppercase mb-2">Achievements</p>
             <h2 className="text-3xl sm:text-4xl font-bold text-text-primary mb-10">
               Beyond Academics
             </h2>

             {/* 2x2 Grid */}
             <div className="grid grid-cols-2 gap-4 mb-8">
               {achievements.map((item) => (
                 <div key={item.id} className="bg-bg-secondary rounded-xl p-5 border border-border-color flex flex-col items-center justify-center text-center">
                    <div className="text-yellow-400 mb-2">
                      {item.icon === 'award' && <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"/></svg>}
                      {item.icon === 'box' && <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"/></svg>}
                      {item.icon === 'certificate' && <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/></svg>}
                      {item.icon === 'zap' && <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>}
                    </div>
                    <h3 className="text-xl font-bold text-text-primary">{item.title}</h3>
                    <p className="text-xs text-text-secondary mt-1">{item.subtitle}</p>
                 </div>
               ))}
             </div>

             <div className="grid md:grid-cols-2 gap-4">
                {/* Currently Exploring */}
                <div className="bg-[#0f1711] rounded-xl p-6 border border-[#213023]">
                   <p className="text-accent-green font-mono text-[10px] font-bold tracking-widest uppercase mb-3">Currently Exploring</p>
                   <ul className="space-y-2">
                     {currentlyExploring.map((item, idx) => (
                       <li key={idx} className="flex items-start gap-2 text-sm text-text-secondary">
                         <span className="text-accent-green mt-1">•</span> {item}
                       </li>
                     ))}
                   </ul>
                </div>

                {/* Certificates — exact from resume */}
                <div className="bg-[#0f1711] rounded-xl p-6 border border-[#213023]">
                   <p className="text-accent-green font-mono text-[10px] font-bold tracking-widest uppercase mb-3">Certificates</p>
                   <ul className="space-y-2.5">
                     {certificates.map((c, idx) => (
                       <li key={idx} className="text-sm">
                         <p className="text-text-primary font-medium leading-snug">{c.title}</p>
                         <p className="text-text-muted text-xs">{c.issuer}{c.date ? ` · ${c.date}` : ""}</p>
                       </li>
                     ))}
                   </ul>
                </div>
             </div>

             {/* Quote Block */}
             <div className="mt-4 bg-[#1a221b] rounded-xl p-6 border border-[#2c3d2e] flex flex-col justify-center">
                <p className="font-serif text-lg text-text-primary italic leading-snug">
                  "Discipline today builds the freedom tomorrow."
                </p>
                <p className="text-right text-xs text-accent-green mt-4 font-mono">— Altaf Ansari</p>
             </div>

          </div>
        </div>
      </div>
    </section>
  );
}
