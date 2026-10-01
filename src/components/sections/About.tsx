"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, Sparkles, User } from "lucide-react";
import {
  aboutCurrently,
  aboutIntro,
  aboutStats,
  aboutStory,
} from "@/data/about";

export default function About() {
  const [expanded, setExpanded] = useState(false);

  return (
    <section id="about" className="bg-bg-secondary py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* LEFT: intro */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block rounded border border-border bg-card px-3 py-1 text-xs font-semibold uppercase tracking-widest text-accent">
              About Me
            </span>

            <h2 className="mt-5 text-3xl font-bold leading-tight sm:text-4xl">
              I&apos;m passionate about turning data into{" "}
              <span className="bg-brand bg-clip-text text-transparent">
                meaningful insights
              </span>
            </h2>

            <p className="mt-5 max-w-lg leading-relaxed text-muted">
              {aboutIntro}
            </p>

            <button
              onClick={() => setExpanded((v) => !v)}
              aria-expanded={expanded}
              className="mt-8 inline-flex items-center gap-2 rounded-lg border border-border px-5 py-3 text-sm font-medium transition hover:border-primary hover:bg-primary/10"
            >
              {expanded ? "Show Less" : "Learn More About Me"}
              {expanded ? (
                <ChevronDown className="h-4 w-4 rotate-180 transition-transform" />
              ) : (
                <User className="h-4 w-4" />
              )}
            </button>
          </motion.div>

          {/* RIGHT: stats grid */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="grid grid-cols-2"
          >
            {aboutStats.map(({ icon: Icon, value, label }, i) => (
              <div
                key={label}
                className={`flex flex-col items-start gap-4 border-border p-6 sm:flex-row sm:items-center ${
                  i % 2 === 0 ? "border-r" : ""
                } ${i < 2 ? "border-b" : ""}`}
              >
                <span
                  className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl text-white ${
                    i % 2 === 0
                      ? "bg-primary"
                      : "border border-accent/40 bg-accent/20"
                  }`}
                >
                  <Icon className="h-6 w-6" />
                </span>
                <div>
                  <p className="text-xl font-bold sm:text-2xl">{value}</p>
                  <p className="text-sm text-muted">{label}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* EXPANDED STORY */}
        <AnimatePresence initial={false}>
          {expanded && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="overflow-hidden"
            >
              <div className="mt-12 rounded-2xl border border-border bg-card p-6 sm:p-10">
                <div className="space-y-5 leading-relaxed text-muted">
                  {aboutStory.map((paragraph, i) => (
                    <p key={i}>{paragraph}</p>
                  ))}
                </div>

                <div className="mt-8 flex items-start gap-4 rounded-xl border border-primary/30 bg-primary/10 p-5">
                  <Sparkles className="mt-0.5 h-5 w-5 shrink-0 text-highlight" />
                  <p className="text-sm leading-relaxed">
                    <span className="font-semibold text-highlight">
                      Currently:{" "}
                    </span>
                    {aboutCurrently}
                  </p>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}