import { personal } from "@/data/portfolio";

export default function Footer() {
  return (
    <footer className="border-t border-border-color py-8 bg-bg-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
        
        {/* Left */}
        <div className="flex items-center gap-1 font-display font-bold text-lg">
          <span className="text-text-primary">Altaf</span>
          <span className="text-accent-green">Ansari</span>
          <span className="text-accent-green ml-0.5">•</span>
        </div>

        {/* Center */}
        <div className="flex gap-2 text-sm text-text-secondary font-mono tracking-wide">
          <span>Code.</span>
          <span>Learn.</span>
          <span>Build.</span>
          <span>Grow.</span>
          <span className="text-accent-green">Repeat.</span>
        </div>

        {/* Right */}
        <p className="text-text-secondary text-sm">
          Made with <span className="text-red-500">❤️</span> and <span className="text-red-500">❤️</span> by <span className="text-text-primary underline underline-offset-4 decoration-border-color hover:decoration-accent-green transition-colors">{personal.name}</span>
        </p>

      </div>
    </footer>
  );
}
