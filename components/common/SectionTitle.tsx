"use client";

import { motion } from "framer-motion";
import { cn } from "../../lib/utils";

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  className?: string;
}

export default function SectionTitle({ title, subtitle, className }: SectionTitleProps) {
  return (
    <div className={cn("mb-12 flex flex-col items-center text-center", className)}>
      {subtitle && (
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-xs font-semibold uppercase tracking-widest text-cyan-400 sm:text-sm"
        >
          {subtitle}
        </motion.span>
      )}
      
      <motion.h2
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="mt-2 text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl md:text-5xl"
      >
        {title}
      </motion.h2>

      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: "80px" }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="mt-4 h-1 rounded-full bg-gradient-to-r from-indigo-500 to-cyan-500"
      />
    </div>
  );
}
