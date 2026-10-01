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
      className="relative overflow-hidden bg-bg pt-20 md:pt-0"
    >
      {/* Background glows */}
      <div className="pointer-events-none absolute -left-40 top-20 h-[420px] w-[420px] rounded-full bg-primary/20 blur-[120px]" />
      <div className="pointer-events-none absolute -right-32 bottom-0 h-[380px] w-[380px] rounded-full bg-accent/20 blur-[120px]" />

      <div className="relative mx-auto grid min-h-screen max-w-6xl grid-cols-2 items-center gap-3 px-4 sm:gap-10 sm:px-6">
        {/* LEFT: text */}
        <div className="py-6 md:py-24">
          <motion.h1
            custom={0}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="text-3xl font-bold leading-tight sm:text-5xl lg:text-6xl"
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
            className="mt-2 text-base font-semibold text-text/90 sm:mt-3 sm:text-2xl lg:text-3xl"
          >
            I turn data into meaningful insights.
          </motion.p>

          <motion.p
            custom={2}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="mt-3 max-w-xl text-[11px] leading-relaxed text-muted sm:mt-6 sm:text-base lg:text-lg"
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
            className="mt-5 flex flex-col gap-2 sm:mt-8 sm:flex-row sm:flex-wrap sm:gap-4"
          >
            <a
              href="#projects"
              className="inline-flex items-center justify-center gap-1.5 rounded-lg bg-brand px-3 py-2 text-xs font-medium text-white shadow-lg shadow-primary/30 transition hover:-translate-y-0.5 hover:opacity-95 sm:gap-2 sm:px-6 sm:py-3 sm:text-base"
            >
              View My Work
              <ArrowUpRight className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
            </a>
            <a
              href="/Murugi_CV.pdf"
              download
              className="inline-flex items-center justify-center gap-1.5 rounded-lg border border-primary px-3 py-2 text-xs font-medium text-text transition hover:-translate-y-0.5 hover:bg-primary/10 sm:gap-2 sm:px-6 sm:py-3 sm:text-base"
            >
              Download CV
              <Download className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
            </a>
          </motion.div>

          {/* Tools row */}
          <motion.div
            custom={4}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="mt-6 sm:mt-12"
          >
            <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-muted sm:text-xs">
              Tools I work with
            </p>
            <ul className="mt-3 grid grid-cols-3 gap-1.5 sm:mt-4 sm:flex sm:flex-wrap sm:gap-3">
              {technologies.map(({ name, icon: Icon }) => (
                <li
                  key={name}
                  title={name}
                  className="group flex flex-col items-center justify-center gap-1 rounded-lg border border-border bg-card/70 py-2 transition hover:-translate-y-1 hover:border-primary/60 sm:w-[72px] sm:gap-2 sm:rounded-xl sm:px-2 sm:py-3"
                >
                  <Icon className="h-4 w-4 text-muted transition-colors group-hover:text-highlight sm:h-6 sm:w-6" />
                  <span className="hidden text-[11px] text-muted sm:block">
                    {name}
                  </span>
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
          <div className="relative h-[300px] w-full sm:h-[480px] md:h-[600px]">
            {/* Purple circle */}
            <div className="absolute bottom-0 right-0 aspect-square w-[92%] rounded-full bg-brand shadow-[0_0_80px_rgba(124,58,237,0.45)]" />

            {/* Photo */}
            <div className="absolute bottom-0 left-1/2 z-10 h-full w-[80%] -translate-x-1/2 [mask-image:linear-gradient(to_bottom,black_82%,transparent)]">
              <Image
                src="/images/Murugi.png"
                alt="Murugi"
                fill
                priority
                sizes="(min-width: 768px) 420px, 45vw"
                className="object-contain object-bottom"
              />
            </div>

            {/* Floating data card (hidden on phones, too tight) */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -left-2 bottom-20 z-20 hidden w-40 rounded-xl border border-border bg-card/90 p-3 shadow-xl backdrop-blur sm:-left-6 sm:block sm:w-44"
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