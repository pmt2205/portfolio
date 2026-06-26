"use client";

import { useState, useEffect } from "react";
import { ArrowRight, Download, Terminal } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "../common/Icons";
import { motion } from "framer-motion";
import Container from "../common/Container";
import Button from "../ui/Button";
import { useLanguage } from "../../context/LanguageContext";

export default function HeroSection() {
  const { t } = useLanguage();
  const roles = (t("hero.roles") || []) as string[];
  const [roleIndex, setRoleIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    if (roles.length === 0) return;
    const activeRole = roles[roleIndex] || "";
    let timer: NodeJS.Timeout;

    if (isDeleting) {
      timer = setTimeout(() => {
        setCurrentText((prev) => prev.slice(0, -1));
      }, 50);
    } else {
      timer = setTimeout(() => {
        setCurrentText((prev) => activeRole.slice(0, prev.length + 1));
      }, 100);
    }

    if (!isDeleting && currentText === activeRole) {
      timer = setTimeout(() => setIsDeleting(true), 1500);
    } else if (isDeleting && currentText === "") {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, roleIndex, roles]);

  // Reset typewriter text if roles list changes due to language toggle
  useEffect(() => {
    setCurrentText("");
    setIsDeleting(false);
    setRoleIndex(0);
  }, [roles]);

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center overflow-hidden pt-20 grid-bg"
    >
      {/* Glow overlays */}
      <div className="absolute top-1/4 left-1/4 -z-10 h-72 w-72 rounded-full bg-indigo-500/10 blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 -z-10 h-96 w-96 rounded-full bg-cyan-500/10 blur-3xl" />

      <Container className="relative z-10 py-20 text-center">
        {/* Hello badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="mx-auto mb-6 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/60 dark:border-slate-800 dark:bg-slate-900/60 px-4 py-1.5 backdrop-blur-sm shadow-xs"
        >
          <Terminal className="h-4 w-4 text-cyan-500 dark:text-cyan-400" />
          <span className="text-xs font-semibold text-slate-700 dark:text-slate-300">
            {t("hero.welcome")}
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-6xl md:text-7xl"
        >
          {t("hero.headline")} <br className="sm:hidden" />
          <span className="bg-gradient-to-r from-indigo-600 via-purple-500 to-cyan-500 dark:from-indigo-400 dark:via-purple-400 dark:to-cyan-400 bg-clip-text text-transparent">
            Pham Manh Tuong
          </span>
        </motion.h1>

        {/* Subtitle / Typewriter */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mx-auto mt-6 h-8 text-lg font-medium text-slate-500 dark:text-slate-400 sm:text-xl md:text-2xl"
        >
          {t("hero.imA")}
          <span className="text-slate-900 dark:text-white font-semibold border-r-2 border-indigo-500 pr-1 animate-pulse">
            {currentText}
          </span>
        </motion.div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mx-auto mt-6 max-w-2xl text-base text-slate-600 dark:text-slate-400 sm:text-lg"
        >
          {t("hero.description")}
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
        >
          <a href="#projects">
            <Button variant="primary" className="gap-2">
              {t("hero.viewProjects")} <ArrowRight className="h-4 w-4" />
            </Button>
          </a>
          
          <a href="/cv/PhamManhTuong_CV_Fresher.pdf" download>
            <Button variant="outline" className="gap-2">
              {t("hero.downloadCv")} <Download className="h-4 w-4" />
            </Button>
          </a>
          
          <a href="#contact">
            <Button variant="ghost" className="text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white">
              {t("hero.contactMe")}
            </Button>
          </a>
        </motion.div>

        {/* Social Quick Links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 flex items-center justify-center gap-6 text-slate-400 dark:text-slate-500"
        >
          <a
            href="https://github.com/pmt2205"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-slate-900 dark:hover:text-white transition-colors"
          >
            <GithubIcon className="h-6 w-6" />
          </a>
          <a
            href="https://www.linkedin.com/in/pmt2205/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-slate-900 dark:hover:text-white transition-colors"
          >
            <LinkedinIcon className="h-6 w-6" />
          </a>
        </motion.div>
      </Container>
    </section>
  );
}
