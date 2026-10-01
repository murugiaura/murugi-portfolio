"use client";

import { motion } from "framer-motion";
import { Calendar, MapPin } from "lucide-react";
import { experiences } from "@/data/experience";

export default function Experience() {
  return (
    <section id="experience" className="bg-bg py-24">
      <div className="mx-auto max-w-4xl px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            Experience
          </p>
          <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
            Hands-On Experience
          </h2>
          <div className="mx-auto mt-4 h-1 w-12 rounded-full bg-brand" />
          <p className="mx-auto mt-5 max-w-2xl text-muted">
            Practical roles where I&apos;ve applied my technical, analytical
            and communication skills.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative mt-14">
          {/* Vertical line */}
          <div className="absolute bottom-4 left-5 top-4 w-px bg-border" />

          <ul className="space-y-10">
            {experiences.map(
              (
                {
                  role,
                  organization,
                  location,
                  period,
                  description,
                  skills,
                  icon: Icon,
                },
                i
              ) => (
                <motion.li
                  key={role}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.25 }}
                  transition={{ duration: 0.5, delay: i * 0.05 }}
                  className="relative pl-16"
                >
                  {/* Icon on the line */}
                  <span className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-full bg-brand text-white ring-4 ring-bg">
                    <Icon className="h-5 w-5" />
                  </span>

                  {/* Card */}
                  <div className="rounded-xl border border-border bg-card p-6 transition hover:border-primary/60">
                    <h3 className="text-lg font-semibold">{role}</h3>
                    <p className="mt-1 text-sm font-medium text-highlight">
                      {organization}
                    </p>

                    <div className="mt-3 flex flex-wrap gap-x-5 gap-y-1 text-xs text-muted">
                      <span className="inline-flex items-center gap-1.5">
                        <MapPin className="h-3.5 w-3.5" />
                        {location}
                      </span>
                      <span className="inline-flex items-center gap-1.5">
                        <Calendar className="h-3.5 w-3.5" />
                        {period}
                      </span>
                    </div>

                    <p className="mt-4 text-sm leading-relaxed text-muted">
                      {description}
                    </p>

                    <ul className="mt-4 flex flex-wrap gap-2">
                      {skills.map((skill) => (
                        <li
                          key={skill}
                          className="rounded-md border border-border bg-bg-secondary px-2.5 py-1 text-xs text-muted"
                        >
                          {skill}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.li>
              )
            )}
          </ul>
        </div>
      </div>
    </section>
  );
}