"use client";

import { useState } from "react";
import toast from "react-hot-toast";
import { personal } from "@/data/portfolio";

const initialForm = { name: "", email: "", subject: "", message: "" };

export default function Contact() {
  const [form, setForm] = useState(initialForm);
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (form.name.trim().length < 2) return toast.error("Name must be at least 2 characters.");
    if (!/^\S+@\S+\.\S+$/.test(form.email.trim())) return toast.error("Please enter a valid email address.");
    if (form.subject.trim().length < 3) return toast.error("Subject must be at least 3 characters.");
    if (form.message.trim().length < 10) return toast.error("Message must be at least 10 characters.");

    setSubmitting(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();

      if (!res.ok) {
        toast.error(data.error || "Something went wrong. Please try again.");
        return;
      }

      toast.success(data.message || "Thanks for reaching out!");
      setForm(initialForm);
    } catch (err) {
      toast.error("Network error. Please check your connection and try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 relative bg-bg-primary overflow-hidden border-t border-border-color">
      {/* Map Background */}
      <div className="absolute right-0 top-0 bottom-0 w-1/2 bg-dotted-map -z-10 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12">

          {/* Left: intro + quick links */}
          <div className="z-10">
            <p className="text-accent-green font-mono text-xs font-bold tracking-widest uppercase mb-2">Let's Connect</p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-text-primary mb-6 leading-tight">
              Let's Build Something Amazing Together
            </h2>
            <p className="text-text-secondary text-base max-w-lg mb-10">
              I'm always open to discussing new opportunities, collaborations or just tech and ideas.
            </p>

            <div className="flex flex-wrap items-center gap-4 mb-12">
              <a href={`mailto:${personal.email}`} className="btn-ghost !border-transparent bg-bg-secondary hover:!bg-bg-card-hover">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Email Directly
              </a>
              <a href={personal.linkedin} target="_blank" rel="noreferrer" className="btn-ghost !border-transparent bg-bg-secondary hover:!bg-bg-card-hover">
                <i className="devicon-linkedin-plain text-lg" />
                Connect on LinkedIn
              </a>
              <a href={personal.github} target="_blank" rel="noreferrer" className="btn-ghost !border-transparent bg-bg-secondary hover:!bg-bg-card-hover">
                <i className="devicon-github-original text-lg" />
                View GitHub
              </a>
            </div>

            {/* Location Card */}
            <div className="inline-flex bg-[#0f1510] border border-[#213023] rounded-2xl p-5 shadow-2xl items-center gap-4 transform rotate-2 hover:rotate-0 transition-transform duration-300">
              <div className="w-10 h-10 rounded-full bg-accent-green/20 flex items-center justify-center shrink-0">
                <svg className="w-5 h-5 text-accent-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div>
                <p className="text-text-primary font-bold text-sm">Based in India</p>
                <p className="text-text-secondary text-xs">Open to work globally</p>
              </div>
            </div>
          </div>

          {/* Right: working contact form */}
          <div className="z-10">
            <form onSubmit={handleSubmit} className="bg-bg-card border border-border-color rounded-2xl p-6 sm:p-8 space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="name" className="block text-xs font-semibold text-text-secondary mb-2">Name</label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    className="w-full bg-bg-secondary border border-border-color rounded-lg px-4 py-2.5 text-sm text-text-primary placeholder:text-text-muted focus:outline-none focus:border-accent-green/60 transition-colors"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-xs font-semibold text-text-secondary mb-2">Email</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                    className="w-full bg-bg-secondary border border-border-color rounded-lg px-4 py-2.5 text-sm text-text-primary placeholder:text-text-muted focus:outline-none focus:border-accent-green/60 transition-colors"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-xs font-semibold text-text-secondary mb-2">Subject</label>
                <input
                  id="subject"
                  name="subject"
                  type="text"
                  value={form.subject}
                  onChange={handleChange}
                  placeholder="What's this about?"
                  className="w-full bg-bg-secondary border border-border-color rounded-lg px-4 py-2.5 text-sm text-text-primary placeholder:text-text-muted focus:outline-none focus:border-accent-green/60 transition-colors"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-xs font-semibold text-text-secondary mb-2">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Tell me a bit about the opportunity or idea..."
                  className="w-full bg-bg-secondary border border-border-color rounded-lg px-4 py-2.5 text-sm text-text-primary placeholder:text-text-muted focus:outline-none focus:border-accent-green/60 transition-colors resize-none"
                />
              </div>

              <button type="submit" disabled={submitting} className="btn-primary w-full disabled:opacity-60 disabled:cursor-not-allowed">
                {submitting ? "Sending..." : "Send Message"}
                {!submitting && (
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                )}
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}
