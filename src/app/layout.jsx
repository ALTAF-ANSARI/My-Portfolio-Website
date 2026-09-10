import "./globals.css";
import { Toaster } from "react-hot-toast";
import { personal } from "@/data/portfolio";

export const metadata = {
  // Falls back to localhost during local dev; set NEXT_PUBLIC_SITE_URL once
  // deployed (e.g. https://your-domain.vercel.app) so social share previews
  // (OG/Twitter images) resolve to correct absolute URLs.
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"),
  title: `${personal.name} — Full Stack & Generative AI Engineer`,
  description: `Portfolio of ${personal.name}. B.Tech CSE at Lovely Professional University. Full Stack & Generative AI Engineer building scalable web applications and AI-powered products. 300+ DSA problems solved.`,
  keywords: [
    "Altaf Ansari",
    "Full Stack Developer",
    "Generative AI Engineer",
    "Next.js Developer",
    "React Developer",
    "Node.js",
    "MongoDB",
    "LPU",
    "Lovely Professional University",
    "Portfolio",
    "JavaScript",
    "Software Engineer India",
  ],
  authors: [{ name: personal.name, url: personal.github }],
  creator: personal.name,
  openGraph: {
    type: "website",
    title: `${personal.name} — Full Stack & Generative AI Engineer`,
    description: "B.Tech CSE @ LPU. Building scalable full-stack web apps and AI-powered products. 300+ DSA problems solved.",
    siteName: `${personal.name} Portfolio`,
    images: [{ url: "/profile.jpg", width: 1080, height: 1080, alt: `${personal.name} — Full Stack Developer` }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${personal.name} — Full Stack & Generative AI Engineer`,
    description: "B.Tech CSE @ LPU. Building scalable full-stack web apps and AI-powered products.",
    images: ["/profile.jpg"],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=Outfit:wght@400;500;600;700;800;900&family=JetBrains+Mono:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css"
        />
      </head>
      <body className="antialiased">
        {children}
        <Toaster
          position="bottom-right"
          toastOptions={{
            style: { background: "#111812", color: "#f8fafc", border: "1px solid #1f2b21" },
            success: { iconTheme: { primary: "#84cc16", secondary: "#111812" } },
          }}
        />
      </body>
    </html>
  );
}
