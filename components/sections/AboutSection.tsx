"use client";

import { User, GraduationCap, Code, Compass } from "lucide-react";
import { motion } from "framer-motion";
import Container from "../common/Container";
import SectionTitle from "../common/SectionTitle";
import { Card } from "../ui/Card";
import { useLanguage } from "../../context/LanguageContext";

export default function AboutSection() {
  const { t } = useLanguage();

  const highlights = [
    {
      icon: <GraduationCap className="h-6 w-6 text-indigo-500 dark:text-indigo-400" />,
      title: t("about.highlights.education.title"),
      description: t("about.highlights.education.desc"),
    },
    {
      icon: <Code className="h-6 w-6 text-cyan-500 dark:text-cyan-400" />,
      title: t("about.highlights.role.title"),
      description: t("about.highlights.role.desc"),
    },
    {
      icon: <Compass className="h-6 w-6 text-purple-500 dark:text-purple-400" />,
      title: t("about.highlights.goal.title"),
      description: t("about.highlights.goal.desc"),
    },
  ];

  return (
    <section id="about" className="py-20 bg-slate-50/40 dark:bg-slate-950/40 relative border-y border-slate-200/50 dark:border-slate-900/50">
      <Container>
        <SectionTitle title={t("about.title")} subtitle={t("about.subtitle")} />

        <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
          {/* Visual Presentation (Glow Image Card) */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 flex justify-center"
          >
            <div className="relative group max-w-sm w-full">
              {/* Outer Glow */}
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-indigo-500 to-cyan-500 opacity-20 dark:opacity-30 blur-lg transition duration-1000 group-hover:opacity-40 dark:group-hover:opacity-60" />
              
              <div className="relative rounded-2xl border border-slate-200 bg-white/70 dark:border-slate-800 dark:bg-slate-900/60 p-8 text-center backdrop-blur-sm shadow-xs">
                <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-indigo-500/10 to-cyan-500/10 text-slate-800 dark:text-white">
                  <User className="h-12 w-12 text-indigo-500 dark:text-indigo-400" />
                </div>
                <h3 className="mt-6 text-xl font-bold text-slate-900 dark:text-white">Pham Manh Tuong</h3>
                <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">{t("about.role")}</p>
                
                <div className="mt-6 flex justify-around border-t border-slate-200 dark:border-slate-800 pt-6">
                  <div>
                    <span className="block text-2xl font-bold text-slate-900 dark:text-white">4+</span>
                    <span className="text-xs text-slate-500">{t("about.stats.intern")}</span>
                  </div>
                  <div>
                    <span className="block text-2xl font-bold text-slate-900 dark:text-white">5+</span>
                    <span className="text-xs text-slate-500">{t("about.stats.projects")}</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Description */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7"
          >
            <h3 className="text-xl font-bold text-slate-900 dark:text-white sm:text-2xl">
              {t("about.intro")}
            </h3>
            
            <p className="mt-4 text-base leading-relaxed text-slate-600 dark:text-slate-400">
              {t("about.bio1")}
            </p>
            
            <p className="mt-4 text-base leading-relaxed text-slate-600 dark:text-slate-400">
              {t("about.bio2")}
            </p>

            {/* Highlights Grid */}
            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {highlights.map((item, index) => (
                <Card key={index} className="p-4" glow={false}>
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-50 border border-slate-200 dark:bg-slate-950 dark:border-slate-800">
                    {item.icon}
                  </div>
                  <h4 className="mt-4 font-bold text-slate-900 dark:text-white text-sm">{item.title}</h4>
                  <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">{item.description}</p>
                </Card>
              ))}
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
