"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Check, Mail, Phone } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { contact } from "@/data/contact";

const socials = [
  { label: "GitHub", href: contact.github, icon: FaGithub },
  { label: "LinkedIn", href: contact.linkedin, icon: FaLinkedin },
  { label: "Email", href: `mailto:${contact.email}`, icon: Mail },
];

const openTo = ["Data Analyst / Data Scientist roles", "Web development projects"];

export default function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden bg-bg py-24">
      {/* Soft glow */}
      <div className="pointer-events-none absolute left-1/2 top-0 h-[300px] w-[600px] -translate-x-1/2 rounded-full bg-primary/10 blur-[120px]" />

      <div className="relative mx-auto grid max-w-6xl items-center gap-10 px-6 lg:grid-cols-3">
        {/* LEFT: call to action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            Let&apos;s Work Together
          </p>
          <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
            Have a project in mind?
          </h2>
          <p className="mt-4 max-w-sm leading-relaxed text-muted">
            I&apos;m always open to discussing new projects and opportunities.
            Let&apos;s create something meaningful together.
          </p>
          <a
            href={`mailto:${contact.email}?subject=Hello%20Murugi`}
            className="mt-7 inline-flex items-center gap-2 rounded-lg bg-brand px-6 py-3 font-medium text-white shadow-lg shadow-primary/30 transition hover:-translate-y-0.5 hover:opacity-95"
          >
            Get In Touch
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </motion.div>

        {/* MIDDLE: availability card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="rounded-xl border border-border bg-card p-6"
        >
          <div className="flex items-center gap-3">
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-highlight opacity-75" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-highlight" />
            </span>
            <h3 className="font-semibold">Open to opportunities</h3>
          </div>
          <ul className="mt-5 space-y-3">
            {openTo.map((item) => (
              <li key={item} className="flex items-center gap-3 text-sm text-muted">
                <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/20 text-accent">
                  <Check className="h-3 w-3" />
                </span>
                {item}
              </li>
            ))}
          </ul>
        </motion.div>

        {/* RIGHT: links */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted">
            Follow Me
          </p>
          <div className="mt-4 flex gap-3">
            {socials.map(({ label, href, icon: Icon }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                aria-label={label}
                title={label}
                className="flex h-11 w-11 items-center justify-center rounded-lg border border-border text-muted transition hover:-translate-y-0.5 hover:border-primary hover:text-text"
              >
                <Icon className="h-5 w-5" />
              </a>
            ))}
          </div>

          <ul className="mt-6 space-y-3 text-sm">
            <li>
              <a
                href={`mailto:${contact.email}`}
                className="inline-flex items-center gap-3 text-muted transition hover:text-text"
              >
                <Mail className="h-4 w-4 text-accent" />
                {contact.email}
              </a>
            </li>
            <li>
              <a
                href={`tel:${contact.phoneHref}`}
                className="inline-flex items-center gap-3 text-muted transition hover:text-text"
              >
                <Phone className="h-4 w-4 text-accent" />
                {contact.phoneDisplay}
              </a>
            </li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
}