"use client";

import { Briefcase, Calendar } from "lucide-react";
import { motion } from "framer-motion";
import Container from "../common/Container";
import SectionTitle from "../common/SectionTitle";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "../ui/Card";
import { experiences } from "../../data/experience";

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-20 bg-slate-950/40 relative">
      <Container>
        <SectionTitle title="Work Experience" subtitle="My Career Path" />

        <div className="relative mx-auto max-w-3xl">
          {/* Vertical line running down the center (large screens) or side (small screens) */}
          <div className="absolute left-4 top-0 h-full w-0.5 bg-gradient-to-b from-indigo-500 via-cyan-500 to-slate-950 sm:left-1/2" />

          {experiences.map((exp, index) => {
            const isEven = index % 2 === 0;
            return (
              <div
                key={index}
                className="relative mb-12 flex flex-col sm:flex-row sm:justify-between"
              >
                {/* Timeline Node Icon */}
                <div className="absolute left-1.5 top-6 z-10 flex h-6.5 w-6.5 items-center justify-center rounded-full bg-slate-950 border-2 border-indigo-500 sm:left-1/2 sm:-translate-x-1/2">
                  <Briefcase className="h-3 w-3 text-indigo-400" />
                </div>

                {/* Left Side Content Placeholder for alignment (only on large screens) */}
                <div className={`hidden sm:block w-[45%] ${isEven ? "order-1" : "order-2"}`} />

                {/* Main Card Content */}
                <motion.div
                  initial={{ opacity: 0, x: isEven ? 50 : -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6 }}
                  className={`w-full pl-10 sm:w-[45%] sm:pl-0 ${isEven ? "order-2" : "order-1"}`}
                >
                  <Card className="relative overflow-hidden">
                    {/* Glowing highlight strip */}
                    <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-indigo-500 to-cyan-500" />
                    
                    <CardHeader className="pl-4">
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <CardTitle className="text-xl font-bold text-white">
                          {exp.position}
                        </CardTitle>
                        
                        <div className="flex items-center gap-1.5 rounded-full bg-slate-950 border border-slate-800 px-3 py-1 text-xs text-slate-400">
                          <Calendar className="h-3.5 w-3.5 text-indigo-400" />
                          <span>{exp.time}</span>
                        </div>
                      </div>
                      <CardDescription className="text-indigo-400 font-semibold text-sm mt-1">
                        {exp.company}
                      </CardDescription>
                    </CardHeader>
                    
                    <CardContent className="pl-4 mt-2">
                      <ul className="list-none space-y-2 text-slate-300">
                        {exp.descriptions.map((desc, idx) => (
                          <li key={idx} className="flex gap-2 items-start text-sm">
                            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-indigo-500" />
                            <span>{desc}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </motion.div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
