"use client";

import { useState, useEffect } from "react";
import { Menu, X, Sun, Moon } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Container from "./Container";
import { useLanguage } from "../../context/LanguageContext";
import { useTheme } from "../../context/ThemeContext";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { language, setLanguage, t } = useLanguage();
  const { theme, toggleTheme } = useTheme();

  const navItems = [
    { name: t("navbar.home"), href: "#home" },
    { name: t("navbar.about"), href: "#about" },
    { name: t("navbar.skills"), href: "#skills" },
    { name: t("navbar.experience"), href: "#experience" },
    { name: t("navbar.projects"), href: "#projects" },
    { name: t("navbar.contact"), href: "#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "border-b border-slate-200/80 bg-white/80 dark:border-slate-900/80 dark:bg-slate-950/80 backdrop-blur-md py-4"
          : "bg-transparent py-6"
      }`}
    >
      <Container>
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a
            href="#home"
            className="flex items-center gap-2 text-xl font-bold text-slate-900 dark:text-white hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
          >
            <span className="bg-gradient-to-r from-slate-900 via-slate-700 to-indigo-600 dark:from-white dark:via-slate-100 dark:to-indigo-300 bg-clip-text text-transparent">
              PMT
            </span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="relative text-sm font-medium text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white transition-colors group py-1"
              >
                {item.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-indigo-500 transition-all duration-300 group-hover:w-full" />
              </a>
            ))}

            {/* Language Switcher */}
            <div className="flex items-center gap-1 border border-slate-200 dark:border-slate-800 rounded-full p-0.5 bg-white/50 dark:bg-slate-900/50">
              <button
                onClick={() => setLanguage("vi")}
                className={`px-2 py-0.5 text-[10px] font-bold rounded-full transition-all cursor-pointer ${
                  language === "vi"
                    ? "bg-gradient-to-r from-indigo-600 to-cyan-600 text-white shadow-xs"
                    : "text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white"
                }`}
              >
                VI
              </button>
              <button
                onClick={() => setLanguage("en")}
                className={`px-2 py-0.5 text-[10px] font-bold rounded-full transition-all cursor-pointer ${
                  language === "en"
                    ? "bg-gradient-to-r from-indigo-600 to-cyan-600 text-white shadow-xs"
                    : "text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white"
                }`}
              >
                EN
              </button>
            </div>

            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 bg-white/50 text-slate-600 hover:bg-slate-100 hover:text-slate-900 dark:border-slate-800 dark:bg-slate-900/50 dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-white transition-all hover:scale-105 active:scale-95 cursor-pointer"
              aria-label="Toggle Theme"
            >
              {theme === "dark" ? (
                <Sun className="h-4.5 w-4.5 text-amber-500" />
              ) : (
                <Moon className="h-4.5 w-4.5 text-indigo-600" />
              )}
            </button>

            <a
              href="#contact"
              className="inline-flex h-9 items-center justify-center rounded-full bg-gradient-to-r from-indigo-600 to-cyan-600 px-4 text-xs font-semibold text-white hover:from-indigo-500 hover:to-cyan-500 transition-all hover:scale-105 active:scale-95 duration-200"
            >
              {t("navbar.contactBtn")}
            </a>
          </nav>

          {/* Mobile controls & toggle */}
          <div className="flex items-center gap-3 md:hidden">
            {/* Theme Toggle (Mobile) */}
            <button
              onClick={toggleTheme}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 bg-white/50 text-slate-600 hover:bg-slate-100 dark:border-slate-800 dark:bg-slate-900/50 dark:text-slate-400 dark:hover:bg-slate-800 transition-all cursor-pointer"
              aria-label="Toggle Theme"
            >
              {theme === "dark" ? (
                <Sun className="h-4.5 w-4.5 text-amber-500" />
              ) : (
                <Moon className="h-4.5 w-4.5 text-indigo-600" />
              )}
            </button>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 bg-white/50 text-slate-600 hover:text-slate-900 dark:border-slate-800 dark:bg-slate-900/50 dark:text-slate-400 dark:hover:text-white cursor-pointer"
              aria-label="Toggle Menu"
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </Container>

      {/* Mobile Menu Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden border-b border-slate-200/80 bg-white/95 dark:border-slate-900/80 dark:bg-slate-950/95 backdrop-blur-lg"
          >
            <nav className="flex flex-col gap-4 px-6 py-6 border-t border-slate-200/50 dark:border-slate-900/50">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="text-base font-medium text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white transition-colors"
                >
                  {item.name}
                </a>
              ))}

              {/* Language Switcher Mobile */}
              <div className="flex items-center justify-between border-t border-slate-200/50 dark:border-slate-900/50 pt-4 mt-2">
                <span className="text-sm font-medium text-slate-500 dark:text-slate-400">
                  Language / Ngôn ngữ
                </span>
                <div className="flex items-center gap-1 border border-slate-200 dark:border-slate-800 rounded-full p-0.5 bg-white/50 dark:bg-slate-900/50">
                  <button
                    onClick={() => setLanguage("vi")}
                    className={`px-3 py-1 text-xs font-bold rounded-full transition-all cursor-pointer ${
                      language === "vi"
                        ? "bg-gradient-to-r from-indigo-600 to-cyan-600 text-white"
                        : "text-slate-500 dark:text-slate-400"
                    }`}
                  >
                    VI
                  </button>
                  <button
                    onClick={() => setLanguage("en")}
                    className={`px-3 py-1 text-xs font-bold rounded-full transition-all cursor-pointer ${
                      language === "en"
                        ? "bg-gradient-to-r from-indigo-600 to-cyan-600 text-white"
                        : "text-slate-500 dark:text-slate-400"
                    }`}
                  >
                    EN
                  </button>
                </div>
              </div>

              <a
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="mt-2 inline-flex h-11 items-center justify-center rounded-lg bg-gradient-to-r from-indigo-600 to-cyan-600 text-sm font-semibold text-white hover:from-indigo-500 hover:to-cyan-500 transition-colors"
              >
                {t("navbar.contactBtn")}
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
