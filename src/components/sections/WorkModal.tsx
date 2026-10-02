"use client";

import { useEffect } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import type { JourneyStep } from "@/data/dataJourney";

export default function WorkModal({
  step,
  onClose,
}: {
  step: JourneyStep | null;
  onClose: () => void;
}) {
  // Close on Escape + lock page scroll while open
  useEffect(() => {
    if (!step) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [step, onClose]);

  return (
    <AnimatePresence>
      {step && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 z-[60] flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm"
        >
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label={`${step.title} work`}
            initial={{ opacity: 0, y: 30, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 30, scale: 0.97 }}
            transition={{ duration: 0.25 }}
            onClick={(e) => e.stopPropagation()}
            className="relative max-h-[85vh] w-full max-w-3xl overflow-y-auto rounded-2xl border border-border bg-card p-6 sm:p-8"
          >
            <button
              onClick={onClose}
              aria-label="Close"
              className="absolute right-4 top-4 rounded-lg p-2 text-muted transition hover:text-text"
            >
              <X className="h-5 w-5" />
            </button>

            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
              {step.title} · My Work
            </p>

            <div className="mt-5 space-y-10">
              {step.work?.map((w) => (
                <article key={w.title}>
                  <h3 className="text-xl font-semibold">{w.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted sm:text-base">
                    {w.description}
                  </p>

                  <ul className="mt-4 flex flex-wrap gap-2">
                    {w.tags.map((t) => (
                      <li
                        key={t}
                        className="rounded-md border border-border bg-bg-secondary px-2 py-1 text-xs text-muted"
                      >
                        {t}
                      </li>
                    ))}
                  </ul>

                  {w.images.length > 0 && (
                    <div className="mt-6 grid gap-3 sm:grid-cols-2">
                      {w.images.map((src) => (
                        <a
                          key={src}
                          href={src}
                          target="_blank"
                          rel="noopener noreferrer"
                          title="Open full size"
                          className="relative block aspect-video overflow-hidden rounded-lg border border-border bg-bg-secondary"
                        >
                          <Image
                            src={src}
                            alt={`${w.title} screenshot`}
                            fill
                            sizes="(min-width: 640px) 350px, 90vw"
                            className="object-contain transition duration-300 hover:scale-105"
                          />
                        </a>
                      ))}
                    </div>
                  )}

                  {w.github && (
                    <a
                      href={w.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-6 inline-flex items-center gap-2 rounded-lg bg-brand px-5 py-2.5 text-sm font-medium text-white transition hover:opacity-90"
                    >
                      <FaGithub className="h-4 w-4" />
                      View on GitHub
                    </a>
                  )}
                </article>
              ))}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}