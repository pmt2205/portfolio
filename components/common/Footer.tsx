"use client";

import { Mail, ArrowUp } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./Icons";
import Container from "./Container";
import { useLanguage } from "../../context/LanguageContext";

export default function Footer() {
  const { t } = useLanguage();
  
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-slate-200 bg-slate-100/40 dark:border-slate-900 dark:bg-slate-950/40 py-12">
      <Container>
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          {/* Brand */}
          <div className="text-center sm:text-left">
            <p className="text-base font-bold text-slate-900 dark:text-white">PMT.dev</p>
            <p className="mt-1 text-xs text-slate-500">
              © {new Date().getFullYear()} Pham Manh Tuong. {t("footer.rights")}
            </p>
          </div>

          {/* Socials */}
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/pmt2205"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-500 hover:border-slate-300 hover:text-slate-950 dark:border-slate-900 dark:bg-slate-950 dark:text-slate-400 dark:hover:border-slate-800 dark:hover:text-white transition-all hover:scale-105"
              aria-label="GitHub"
            >
              <GithubIcon className="h-5 w-5" />
            </a>
            <a
              href="https://linkedin.com/in/pmt2205/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-500 hover:border-slate-300 hover:text-slate-950 dark:border-slate-900 dark:bg-slate-950 dark:text-slate-400 dark:hover:border-slate-800 dark:hover:text-white transition-all hover:scale-105"
              aria-label="LinkedIn"
            >
              <LinkedinIcon className="h-5 w-5" />
            </a>
            <a
              href="mailto:mt.tuongpham@gmail.com"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-500 hover:border-slate-300 hover:text-slate-950 dark:border-slate-900 dark:bg-slate-950 dark:text-slate-400 dark:hover:border-slate-800 dark:hover:text-white transition-all hover:scale-105"
              aria-label="Email"
            >
              <Mail className="h-5 w-5" />
            </a>
          </div>

          {/* Scroll to Top */}
          <button
            onClick={scrollToTop}
            className="group flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-500 hover:border-slate-300 hover:text-indigo-600 dark:border-slate-900 dark:bg-slate-950 dark:text-slate-400 dark:hover:border-slate-800 dark:hover:text-indigo-400 transition-all hover:scale-110 cursor-pointer"
            aria-label={t("footer.top")}
          >
            <ArrowUp className="h-5 w-5 transition-transform duration-300 group-hover:-translate-y-1" />
          </button>
        </div>
      </Container>
    </footer>
  );
}
