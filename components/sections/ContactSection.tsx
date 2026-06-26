"use client";

import { Mail, Phone } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "../common/Icons";
import { motion } from "framer-motion";
import Container from "../common/Container";
import SectionTitle from "../common/SectionTitle";
import { Card } from "../ui/Card";
import { useLanguage } from "../../context/LanguageContext";

export default function ContactSection() {
  const { t, language } = useLanguage();

  const contactInfo = [
    {
      icon: <Mail className="h-6 w-6 text-indigo-500 dark:text-indigo-400" />,
      label: "Email",
      value: "mt.tuongpham@gmail.com",
      href: "mailto:mt.tuongpham@gmail.com",
    },
    {
      icon: <Phone className="h-6 w-6 text-cyan-500 dark:text-cyan-400" />,
      label: "Phone",
      value: "(+84) 795533253",
      href: "tel:+84795533253",
    },
    {
      icon: <GithubIcon className="h-6 w-6 text-purple-500 dark:text-purple-400" />,
      label: "GitHub",
      value: "github.com/pmt2205",
      href: "https://github.com/pmt2205",
    },
    {
      icon: <LinkedinIcon className="h-6 w-6 text-indigo-500 dark:text-indigo-400" />,
      label: "LinkedIn",
      value: "linkedin.com/in/pmt2205",
      href: "https://www.linkedin.com/in/pmt2205/",
    },
  ];

  const contactLabels: Record<string, string> = {
    Email: "Email",
    Phone: language === "vi" ? "Điện thoại" : "Phone",
    GitHub: "GitHub",
    LinkedIn: "LinkedIn"
  };

  return (
    <section id="contact" className="py-24 bg-slate-50/40 dark:bg-slate-950/40 relative border-t border-slate-200/50 dark:border-slate-900/50">
      <div className="absolute bottom-0 left-0 -z-10 h-72 w-72 rounded-full bg-indigo-500/2 dark:bg-indigo-500/5 blur-3xl animate-pulse" />
      
      <Container>
        <SectionTitle title={t("contact.title")} subtitle={t("contact.subtitle")} />

        <div className="mx-auto max-w-5xl">
          {/* Centered Intro */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white sm:text-3xl">
              {t("contact.connect")}
            </h3>
            <p className="mt-4 text-base text-slate-500 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
              {t("contact.desc")}
            </p>
          </motion.div>

          {/* Grid Layout of 4 columns */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="h-full"
              >
                <a
                  href={info.href}
                  target={info.label !== "Email" && info.label !== "Phone" ? "_blank" : undefined}
                  rel={info.label !== "Email" && info.label !== "Phone" ? "noopener noreferrer" : undefined}
                  className="block h-full group"
                >
                  <Card className="flex flex-col items-center p-6 text-center h-full transition-all duration-300 hover:-translate-y-1.5" glow={true}>
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-50 border border-slate-200 dark:bg-slate-950 dark:border-slate-800 transition-colors group-hover:border-indigo-500/30">
                      {info.icon}
                    </div>
                    <div className="mt-4 flex-grow flex flex-col justify-center">
                      <span className="block text-xs font-semibold text-slate-400 dark:text-slate-500 uppercase tracking-wider">
                        {contactLabels[info.label] || info.label}
                      </span>
                      <span className="block text-sm font-semibold text-slate-850 dark:text-white mt-2 break-all group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                        {info.value}
                      </span>
                    </div>
                  </Card>
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
