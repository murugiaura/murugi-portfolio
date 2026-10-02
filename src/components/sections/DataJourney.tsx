"use client";

import { Fragment, useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, ChevronRight, Rocket } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import {
  currentlyBuilding,
  journeyIntro,
  journeySteps,
  workflow,
  type JourneyStep,
} from "@/data/dataJourney";
import { contact } from "@/data/contact";
import WorkModal from "./WorkModal";

export default function DataJourney() {
  const [active, setActive] = useState<JourneyStep | null>(null);

  return (
    <section id="data-journey" className="bg-bg-secondary py-24">
      <div className="mx-auto max-w-6xl px-6">
        {/* Heading + intro */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            Data Journey
          </p>
          <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
            My Data Journey
          </h2>
          <div className="mx-auto mt-4 h-1 w-12 rounded-full bg-brand" />
          <div className="mx-auto mt-6 max-w-3xl space-y-4 leading-relaxed text-muted">
            {journeyIntro.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </motion.div>

        {/* Workflow strip */}
        <motion.ul
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-2 text-sm"
        >
          {workflow.map((step, i) => (
            <Fragment key={step}>
              <li className="rounded-full border border-border bg-card px-4 py-1.5 text-muted">
                {step}
              </li>
              {i < workflow.length - 1 && (
                <ChevronRight className="h-4 w-4 text-primary" />
              )}
            </Fragment>
          ))}
        </motion.ul>

        {/* Tool cards */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {journeySteps.map((step, i) => {
            const { title, icon: Icon, description, topics, inProgress, work } =
              step;
            return (
              <motion.article
                key={title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="flex flex-col rounded-xl border border-border bg-card p-6 transition hover:-translate-y-1 hover:border-primary/60"
              >
                <div className="flex items-start justify-between">
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand text-white">
                    <Icon className="h-6 w-6" />
                  </span>
                  <span className="text-sm font-semibold text-border">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>

                <div className="mt-5 flex flex-wrap items-center gap-2">
                  <h3 className="text-lg font-semibold">{title}</h3>
                  {inProgress && (
                    <span className="rounded-full border border-highlight/40 bg-highlight/10 px-2 py-0.5 text-[11px] font-medium text-highlight">
                      In progress
                    </span>
                  )}
                </div>

                <p className="mt-3 text-sm leading-relaxed text-muted">
                  {description}
                </p>

                <ul className="mt-5 flex flex-wrap gap-2 pt-1">
                  {topics.map((t) => (
                    <li
                      key={t}
                      className="rounded-md border border-border bg-bg-secondary px-2 py-1 text-xs text-muted"
                    >
                      {t}
                    </li>
                  ))}
                </ul>

                {/* Work link */}
                <div className="mt-auto pt-6">
                  {work && work.length > 0 ? (
                    <button
                      onClick={() => setActive(step)}
                      className="inline-flex items-center gap-1.5 text-sm font-medium text-accent transition hover:text-text"
                    >
                      View my work
                      <ArrowUpRight className="h-4 w-4" />
                    </button>
                  ) : (
                    <span className="text-xs text-muted">
                      Projects coming soon
                    </span>
                  )}
                </div>
              </motion.article>
            );
          })}
        </div>

        {/* Currently building */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mt-10 flex flex-col items-start gap-5 rounded-2xl border border-primary/30 bg-gradient-to-r from-primary/15 to-accent/10 p-6 sm:flex-row sm:items-center sm:p-8"
        >
          <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-brand text-white">
            <Rocket className="h-7 w-7" />
          </span>
          <div>
            <h3 className="text-lg font-semibold">Currently Building</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted sm:text-base">
              {currentlyBuilding}
            </p>
            <a
              href={contact.github}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center gap-2 rounded-lg border border-primary px-4 py-2 text-sm font-medium transition hover:bg-primary/10"
            >
              <FaGithub className="h-4 w-4" />
              See my work on GitHub
            </a>
          </div>
        </motion.div>
      </div>

      <WorkModal step={active} onClose={() => setActive(null)} />
    </section>
  );
}