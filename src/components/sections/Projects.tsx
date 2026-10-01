"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight, Clock } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { projects, type Project } from "@/data/projects";

function ProjectCard({
  project,
  number,
  index,
}: {
  project: Project;
  number: number;
  index: number;
}) {
  const { title, description, tech, live, github, image, icon: Icon, clientWork } =
    project;

  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group flex flex-col overflow-hidden rounded-xl border border-border bg-card transition hover:-translate-y-1 hover:border-primary/60"
    >
      {/* Image / placeholder */}
      <div className="relative h-44 w-full overflow-hidden bg-gradient-to-br from-primary/30 via-card to-accent/20">
        {image ? (
          <Image
            src={image}
            alt={`${title} screenshot`}
            fill
            sizes="(min-width: 768px) 50vw, 100vw"
            className="object-cover object-top transition duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full items-center justify-center">
            <Icon className="h-14 w-14 text-primary/70" />
          </div>
        )}

        <span className="absolute left-3 top-3 z-10 rounded-md bg-bg/80 px-2 py-1 text-xs font-semibold backdrop-blur">
          {String(number).padStart(2, "0")}
        </span>

        {clientWork && (
          <span className="absolute right-3 top-3 z-10 rounded-md border border-highlight/40 bg-bg/80 px-2 py-1 text-xs font-medium text-highlight backdrop-blur">
            Client project
          </span>
        )}
      </div>

      {/* Body */}
      <div className="flex flex-1 flex-col p-5">
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-muted">{description}</p>

        <ul className="mt-4 flex flex-wrap gap-2">
          {tech.map((t) => (
            <li
              key={t}
              className="rounded-md border border-border bg-bg-secondary px-2 py-1 text-xs text-muted"
            >
              {t}
            </li>
          ))}
        </ul>

        <div className="mt-auto flex flex-wrap items-center gap-3 pt-5">
          {live && (
            <a
              href={live}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-lg bg-brand px-4 py-2 text-sm font-medium text-white transition hover:opacity-90"
            >
              Live Demo
              <ArrowUpRight className="h-4 w-4" />
            </a>
          )}
          {github && (
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-lg border border-border px-4 py-2 text-sm font-medium transition hover:border-primary hover:bg-primary/10"
            >
              <FaGithub className="h-4 w-4" />
              GitHub
            </a>
          )}
          {!live && (
            <span className="inline-flex items-center gap-1.5 text-xs text-muted">
              <Clock className="h-3.5 w-3.5" />
              Not live yet
            </span>
          )}
        </div>
      </div>
    </motion.article>
  );
}

export default function Projects() {
  const liveProjects = projects.filter((p) => p.live);
  const otherProjects = projects.filter((p) => !p.live);

  return (
    <section id="projects" className="bg-bg-secondary py-24">
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
            Featured Projects
          </p>
          <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
            Some of My Recent Work
          </h2>
          <div className="mx-auto mt-4 h-1 w-12 rounded-full bg-brand" />
          <p className="mx-auto mt-5 max-w-2xl text-muted">
            A selection of projects I&apos;ve built while developing my skills
            in web development and data.
          </p>
        </motion.div>

        {/* Live projects */}
        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {liveProjects.map((project, i) => (
            <ProjectCard
              key={project.title}
              project={project}
              number={projects.indexOf(project) + 1}
              index={i}
            />
          ))}
        </div>

        {/* More projects */}
        {otherProjects.length > 0 && (
          <>
            <div className="mb-6 mt-16 flex items-center gap-4">
              <h3 className="text-sm font-semibold uppercase tracking-widest text-muted">
                More Projects
              </h3>
              <span className="h-px flex-1 bg-border" />
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              {otherProjects.map((project, i) => (
                <ProjectCard
                  key={project.title}
                  project={project}
                  number={projects.indexOf(project) + 1}
                  index={i}
                />
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  );
}