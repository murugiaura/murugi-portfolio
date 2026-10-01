import { ArrowUp, Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-border bg-bg-secondary">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-6 py-6 text-xs text-muted sm:flex-row">
        <p>
          © {new Date().getFullYear()} Murugi Victoriana. All rights reserved.
        </p>

        <a
          href="#hero"
          className="inline-flex items-center gap-1.5 transition hover:text-text"
        >
          Back to top
          <ArrowUp className="h-3.5 w-3.5" />
        </a>

        <p className="inline-flex items-center gap-1.5">
          Made with <Heart className="h-3.5 w-3.5 fill-primary text-primary" /> by
          Murugi
        </p>
      </div>
    </footer>
  );
}