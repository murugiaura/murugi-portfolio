"use client";

import Image from "next/image";
import { motion, type Variants } from "framer-motion";
import { ArrowUpRight, Download, TrendingUp } from "lucide-react";
import { technologies } from "@/data/technologies";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: 0.1 * i, ease: "easeOut" },
  }),
};

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative overflow-hidden bg-bg pt-24 md:pt-0"
    >
      {/* Background glows */}
      <div className="pointer-events-none absolute -left-40 top-20 h-[420px] w-[420px] rounded-full bg-primary/20 blur-[120px]" />
      <div className="pointer-events-none absolute -right-32 bottom-0 h-[380px] w-[380px] rounded-full bg-accent/20 blur-[120px]" />

      <div className="relative mx-auto grid min-h-screen max-w-6xl items-center gap-10 px-6 md:grid-cols-2">
        {/* LEFT: text */}
        <div className="py-10 md:py-24">
          <motion.h1
            custom={0}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="text-5xl font-bold leading-tight sm:text-6xl"
          >
            Hi, I&apos;m{" "}
            <span className="bg-brand bg-clip-text text-transparent">
              Murugi
            </span>
          </motion.h1>

          <motion.p
            custom={1}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="mt-3 text-2xl font-semibold text-text/90 sm:text-3xl"
          >
            I turn data into meaningful insights.
          </motion.p>

          <motion.p
            custom={2}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="mt-6 max-w-xl text-base leading-relaxed text-muted sm:text-lg"
          >
            I&apos;m a Mathematics and Computer Science graduate building
            practical skills in data analytics and data science. I enjoy using
            data, technology and problem-solving to turn complex information
            into clear insights.
          </motion.p>

          {/* Buttons */}
          <motion.div
            custom={3}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="mt-8 flex flex-wrap gap-4"
          >
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-lg bg-brand px-6 py-3 font-medium text-white shadow-lg shadow-primary/30 transition hover:-translate-y-0.5 hover:opacity-95"
            >
              View My Work
              <ArrowUpRight className="h-4 w-4" />
            </a>
            <a
              href="/Murugi_CV.pdf"
              download
              className="inline-flex items-center gap-2 rounded-lg border border-primary px-6 py-3 font-medium text-text transition hover:-translate-y-0.5 hover:bg-primary/10"
            >
              Download CV
              <Download className="h-4 w-4" />
            </a>
          </motion.div>

          {/* Tools row */}
          <motion.div
            custom={4}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="mt-12"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted">
              Tools I work with
            </p>
            <ul className="mt-4 flex flex-wrap gap-3">
              {technologies.map(({ name, icon: Icon }) => (
                <li
                  key={name}
                  title={name}
                  className="group flex w-[72px] flex-col items-center gap-2 rounded-xl border border-border bg-card/70 px-2 py-3 transition hover:-translate-y-1 hover:border-primary/60"
                >
                  <Icon className="h-6 w-6 text-muted transition-colors group-hover:text-highlight" />
                  <span className="text-[11px] text-muted">{name}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        
        {/* RIGHT: photo */}
<motion.div
  initial={{ opacity: 0, scale: 0.95 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
  className="relative mx-auto w-full max-w-[520px] self-center"
>
  <div className="relative h-[480px] w-full md:h-[600px]">
    {/* Purple circle: larger than the photo so it shows around it */}
   {/* Purple circle */}
<div className="absolute bottom-0 right-0 aspect-square w-[92%] rounded-full bg-brand shadow-[0_0_80px_rgba(124,58,237,0.45)]" />

{/* Photo */}
<div className="absolute bottom-0 left-1/2 z-10 h-full w-[80%] -translate-x-1/2 [mask-image:linear-gradient(to_bottom,black_82%,transparent)]">
  <Image
    src="/images/Murugi.png"
    alt="Murugi"
    fill
    priority
    sizes="(min-width: 768px) 420px, 80vw"
    className="object-contain object-bottom"
  />
</div> 

    {/* Floating data card */}
    <motion.div
      animate={{ y: [0, -8, 0] }}
      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      className="absolute -left-2 bottom-16 z-20 w-40 rounded-xl border border-border bg-card/90 p-3 shadow-xl backdrop-blur sm:-left-6 sm:w-44"
    >
      <div className="flex items-center justify-between text-xs text-muted">
        <span>Insights</span>
        <TrendingUp className="h-4 w-4 text-highlight" />
      </div>
      <div className="mt-3 flex h-12 items-end gap-1.5">
        {[40, 65, 50, 80, 95].map((h, i) => (
          <motion.span
            key={i}
            initial={{ height: 0 }}
            animate={{ height: `${h}%` }}
            transition={{ delay: 0.9 + i * 0.1, duration: 0.5 }}
            className="flex-1 rounded-sm bg-brand"
          />
        ))}
      </div>
    </motion.div>
  </div>
</motion.div>
      </div>
    </section>
  );
}