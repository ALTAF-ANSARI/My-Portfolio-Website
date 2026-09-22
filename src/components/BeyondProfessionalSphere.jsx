"use client";

function FeatherIcon() {
  return (
    <svg viewBox="0 0 48 48" className="w-8 h-8" fill="none" aria-hidden="true">
      <path d="M35.5 7.5C24 8.2 13.4 15.2 11.4 28.3c-.7 4.7.7 8.2 3.2 10.7 2.6-6.4 7.2-12.2 13.8-17.1-5.2 6.7-8.6 12.9-10.1 19.2 8.7-3.2 15.2-10.6 17.2-19.2 1.1-4.9.7-9.8 0-14.4Z" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M13.5 39.5c5.3-8.1 10.4-13.5 18.7-19.4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
    </svg>
  );
}

function BookIcon() {
  return (
    <svg viewBox="0 0 48 48" className="w-8 h-8" fill="none" aria-hidden="true">
      <path d="M9 11.5c4.9-2.1 10.1-1.9 15 1.1v25.1c-4.9-3-10.1-3.2-15-1.1V11.5Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round"/>
      <path d="M39 11.5c-4.9-2.1-10.1-1.9-15 1.1v25.1c4.9-3 10.1-3.2 15-1.1V11.5Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round"/>
      <path d="M24 13v24" stroke="currentColor" strokeWidth="1.5"/>
    </svg>
  );
}

export default function BeyondProfessionalSphere() {
  return (
    <section id="beyond" className="relative overflow-hidden border-t border-[#223126] bg-[#070b08] py-20 sm:py-24">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[8%] top-16 h-40 w-40 rounded-full bg-[#88b77c]/5 blur-3xl" />
        <div className="absolute right-[10%] bottom-10 h-52 w-52 rounded-full bg-[#6f9d68]/5 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 flex items-end justify-between gap-8">
          <div>
            <div className="mb-2 flex items-center gap-3">
              <span className="h-px w-10 bg-[#8fbd82]" />
              <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.32em] text-[#92b88a]">
                Beyond the Professional Sphere
              </p>
            </div>
            <h2 className="text-3xl font-bold tracking-tight text-[#f1f4ed] sm:text-4xl">
              Beyond the <span className="text-[#9bc88f]">Professional Sphere</span>
            </h2>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-[#a4ada4]">
              Technology builds my career, but these passions keep me grounded.
              <br className="hidden sm:block" />
              Here are a few things that inspire, relax, and motivate me outside the professional world.
            </p>
          </div>

          <div className="hidden shrink-0 pb-2 text-right sm:block">
            <p className="hand-drawn rotate-[-5deg] text-2xl leading-[0.9] text-[#a9c89d]">
              Good
              <br />
              Books
              <br />
              Better
              <br />
              Thoughts
            </p>
            <div className="ml-auto mt-2 h-px w-12 rotate-[-8deg] bg-[#7fa774]" />
          </div>
        </div>

        <div className="grid gap-5 lg:grid-cols-2">
          <article className="group relative min-h-[300px] overflow-hidden rounded-xl border border-[#26362a] bg-[#0b110d] p-5 shadow-[0_18px_60px_rgba(0,0,0,0.28)] transition-all duration-300 hover:-translate-y-1 hover:border-[#5e8759]">
            <div className="absolute right-4 top-4 rounded-full border border-[#324535] bg-[#101a13] px-3 py-1 text-[9px] font-medium tracking-wide text-[#91b987]">
              Words that Heal
            </div>

            <div className="flex max-w-[62%] items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#17321e] text-[#9bc88f]">
                <FeatherIcon />
              </div>
              <div>
                <p className="text-xs font-semibold text-[#c2c9c0]">Interested in</p>
                <h3 className="mt-0.5 text-xl font-bold text-[#f0f3ed] sm:text-2xl">
                  Hindi <span className="text-[#9bc88f]">Poetry</span>
                </h3>
                <p className="mt-3 text-xs leading-relaxed text-[#a1aaa1]">
                  I find peace in Hindi poetry. The depth of emotions, simplicity of words,
                  and real-life perspectives always inspire me to think deeper and stay connected to my roots.
                </p>
              </div>
            </div>

            <div className="absolute right-5 top-[72px] hidden w-28 rotate-[-2deg] rounded-md bg-[#c9b788] px-4 py-5 text-center text-[11px] font-semibold leading-relaxed text-[#3c382d] shadow-lg sm:block">
              <span className="font-serif">कुछ<br/>शब्द,<br/>कुछ एहसास,<br/>और मैं ...</span>
              <div className="absolute -right-2 bottom-1 h-16 w-2 rotate-[18deg] rounded-full bg-[#1e2920]" />
            </div>

            <div className="absolute bottom-5 left-5 right-5 rounded-lg border border-[#213126] bg-[#0f1812] px-4 py-3 sm:right-[42%]">
              <span className="absolute -left-1 top-2 text-2xl leading-none text-[#9bc88f]">“</span>
              <p className="pl-3 text-[10px] italic leading-relaxed text-[#c5cec4]">
                Shabdon mein woh taakat hai, jo khamosh dilon ko bhi awaaz de deti hai.
              </p>
              <p className="mt-1 pl-3 text-[9px] text-[#758176]">— Unknown</p>
            </div>
          </article>

          <article className="group relative min-h-[300px] overflow-hidden rounded-xl border border-[#26362a] bg-[#0b110d] p-5 shadow-[0_18px_60px_rgba(0,0,0,0.28)] transition-all duration-300 hover:-translate-y-1 hover:border-[#5e8759]">
            <div className="absolute right-4 top-4 rounded-full border border-[#324535] bg-[#101a13] px-3 py-1 text-[9px] font-medium tracking-wide text-[#91b987]">
              A Page at a Time
            </div>

            <div className="flex max-w-[62%] items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#17321e] text-[#9bc88f]">
                <BookIcon />
              </div>
              <div>
                <p className="text-xs font-semibold text-[#c2c9c0]">Reading</p>
                <h3 className="mt-0.5 text-xl font-bold text-[#f0f3ed] sm:text-2xl">
                  <span className="text-[#9bc88f]">Books</span>
                </h3>
                <p className="mt-3 text-xs leading-relaxed text-[#a1aaa1]">
                  Books are my constant source of learning, motivation, and new perspectives.
                  Whether it&apos;s self-improvement, technology, or real-life stories, I love getting lost in a good book.
                </p>
              </div>
            </div>

            <div className="absolute right-5 top-[84px] hidden w-32 rotate-[2deg] space-y-1 sm:block">
              {["THINK LIKE A MONK", "Atomic Habits", "THE PSYCHOLOGY OF MONEY", "DO EPIC SHIT"].map((book, index) => (
                <div
                  key={book}
                  className="rounded-sm border border-[#5d654e] bg-[#9d8b61] px-2 py-2 text-center text-[8px] font-bold uppercase leading-tight text-[#302f26] shadow-md"
                  style={{ transform: `translateX(${index * 3}px) rotate(${index % 2 ? -1 : 1}deg)` }}
                >
                  {book}
                </div>
              ))}
            </div>

            <div className="absolute bottom-5 left-5 right-5 rounded-lg border border-[#213126] bg-[#0f1812] px-4 py-3 sm:right-[42%]">
              <span className="absolute -left-1 top-2 text-2xl leading-none text-[#9bc88f]">“</span>
              <p className="pl-3 text-[10px] italic leading-relaxed text-[#c5cec4]">
                A reader lives a thousand lives before he dies.
              </p>
              <p className="mt-1 pl-3 text-[9px] text-[#758176]">— George R. R. Martin</p>
            </div>
          </article>
        </div>

        <div className="mt-12 flex items-center gap-4">
          <span className="h-px flex-1 bg-[#27372b]" />
          <span className="font-mono text-[9px] font-semibold uppercase tracking-[0.35em] text-[#718171]">
            Same mind · Better days
          </span>
          <span className="h-px flex-1 bg-[#27372b]" />
        </div>
      </div>
    </section>
  );
}
