"use client";

import { motion } from "framer-motion";
import { skills } from "@/data/skills";

export default function Skills() {
  return (
    <section id="skills" className="bg-bg py-24">
      <div className="mx-auto max-w-6xl px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            My Skills
          </p>
          <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
            Skills &amp; Technologies
          </h2>
        </motion.div>

        {/* Skills grid: 3 columns, filled top to bottom like the reference */}
        <div className="mt-14 grid gap-x-14 gap-y-8 md:grid-flow-col md:grid-cols-3 md:grid-rows-4">
          {skills.map(({ name, icon: Icon, level, color }, i) => (
            <motion.div
              key={name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.8 }}
              transition={{ duration: 0.4, delay: (i % 4) * 0.08 }}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Icon className="h-5 w-5" style={{ color }} />
                  <span className="text-sm font-medium">{name}</span>
                </div>
                <span className="text-sm text-muted">{level}%</span>
              </div>

              {/* Progress bar */}
              <div className="mt-3 h-1.5 w-full overflow-hidden rounded-full bg-border">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${level}%` }}
                  viewport={{ once: true, amount: 0.8 }}
                  transition={{
                    duration: 1,
                    delay: 0.2 + (i % 4) * 0.08,
                    ease: "easeOut",
                  }}
                  className="h-full rounded-full bg-brand"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}