import React from "react";
import { cn } from "../../lib/utils";

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "primary" | "secondary" | "outline";
  children: React.ReactNode;
}

export default function Badge({ variant = "primary", className, children, ...props }: BadgeProps) {
  const baseStyles =
    "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500/50";

  const variants = {
    primary: "bg-indigo-500/10 text-indigo-300 border border-indigo-500/20",
    secondary: "bg-cyan-500/10 text-cyan-300 border border-cyan-500/20",
    outline: "border border-slate-800 text-slate-400 bg-transparent",
  };

  return (
    <span className={cn(baseStyles, variants[variant], className)} {...props}>
      {children}
    </span>
  );
}
