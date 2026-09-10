import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";

import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Journey from "@/components/Journey";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { ThemeProvider } from "@/context/ThemeContext";

export default function Home() {
  return (
    <ThemeProvider>
      <main className="min-h-screen bg-bg-primary text-text-primary">
        <Navbar />
        <Hero />
        <Stats />
        <Skills />
        <Projects />
        <Journey />
        <Contact />
        <Footer />
      </main>
    </ThemeProvider>
  );
}
