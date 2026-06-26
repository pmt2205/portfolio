"use client";

import React from "react";
import { motion, HTMLMotionProps } from "framer-motion";
import { cn } from "../../lib/utils";

interface CardProps extends HTMLMotionProps<"div"> {
  glow?: boolean;
}

export function Card({ children, className, glow = true, ...props }: CardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5 }}
      className={cn(
        "rounded-2xl border border-slate-200/80 bg-white/70 p-6 backdrop-blur-sm shadow-xs transition-all duration-300 hover:border-slate-300/80 hover:bg-white hover:shadow-md hover:shadow-slate-100/50 dark:border-slate-900 dark:bg-slate-900/40 dark:hover:border-slate-800 dark:hover:bg-slate-900/60 dark:hover:shadow-none",
        glow && "glow-effect",
        className
      )}
      {...props}
    >
      {children}
    </motion.div>
  );
}

export function CardHeader({ children, className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn("flex flex-col gap-1.5 mb-4", className)} {...props}>
      {children}
    </div>
  );
}

export function CardTitle({ children, className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h3 className={cn("text-lg font-semibold leading-none tracking-tight text-slate-900 dark:text-white", className)} {...props}>
      {children}
    </h3>
  );
}

export function CardDescription({ children, className, ...props }: React.HTMLAttributes<HTMLParagraphElement>) {
  return (
    <p className={cn("text-sm text-slate-500 dark:text-slate-400", className)} {...props}>
      {children}
    </p>
  );
}

export function CardContent({ children, className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn("text-sm text-slate-600 dark:text-slate-300", className)} {...props}>
      {children}
    </div>
  );
}

export function CardFooter({ children, className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn("flex items-center mt-6 pt-4 border-t border-slate-200 dark:border-slate-900", className)} {...props}>
      {children}
    </div>
  );
}
