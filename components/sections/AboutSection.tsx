"use client";

import { User, GraduationCap, Code, Compass } from "lucide-react";
import { motion } from "framer-motion";
import Container from "../common/Container";
import SectionTitle from "../common/SectionTitle";
import { Card } from "../ui/Card";

export default function AboutSection() {
  const highlights = [
    {
      icon: <GraduationCap className="h-6 w-6 text-indigo-400" />,
      title: "Education",
      description: "Final-year Information Technology Student.",
    },
    {
      icon: <Code className="h-6 w-6 text-cyan-400" />,
      title: "Role",
      description: "Fullstack Developer Intern / Fresher.",
    },
    {
      icon: <Compass className="h-6 w-6 text-purple-400" />,
      title: "Career Goal",
      description: "Aiming to become an expert Fullstack Engineer.",
    },
  ];

  return (
    <section id="about" className="py-20 bg-slate-950/40 relative">
      <Container>
        <SectionTitle title="About Me" subtitle="My Journey" />

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
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-indigo-500 to-cyan-500 opacity-30 blur-lg transition duration-1000 group-hover:opacity-60" />
              
              <div className="relative rounded-2xl border border-slate-800 bg-slate-900/60 p-8 text-center backdrop-blur-sm">
                <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-indigo-500/20 to-cyan-500/20 text-white">
                  <User className="h-12 w-12 text-indigo-400" />
                </div>
                <h3 className="mt-6 text-xl font-bold text-white">Pham Manh Tuong</h3>
                <p className="mt-2 text-sm text-slate-400">Fullstack Developer Intern</p>
                <div className="mt-6 flex justify-around border-t border-slate-800 pt-6">
                  <div>
                    <span className="block text-2xl font-bold text-white">4+</span>
                    <span className="text-xs text-slate-500">Months Intern</span>
                  </div>
                  <div>
                    <span className="block text-2xl font-bold text-white">5+</span>
                    <span className="text-xs text-slate-500">Projects Built</span>
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
            <h3 className="text-xl font-bold text-white sm:text-2xl">
              I am a web & mobile developer based in Vietnam.
            </h3>
            
            <p className="mt-4 text-base leading-relaxed text-slate-400">
              As a final-year IT student, I have spent significant time learning modern technologies and translating them into functional products. Through my internship at <strong>WisdomRobotics</strong>, I gained real-world exposure building scalable Fullstack web and mobile apps, writing maintainable code, and working in professional development flows.
            </p>
            
            <p className="mt-4 text-base leading-relaxed text-slate-400">
              My core strength is my eagerness to learn and adapt to new tech stacks quickly. Whether it is configuring relational databases, writing RESTful backend APIs, or building highly responsive, pixel-perfect frontend experiences, I strive for clean architecture and premium UI/UX.
            </p>

            {/* Highlights Grid */}
            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {highlights.map((item, index) => (
                <Card key={index} className="p-4" glow={false}>
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-950 border border-slate-800">
                    {item.icon}
                  </div>
                  <h4 className="mt-4 font-bold text-white text-sm">{item.title}</h4>
                  <p className="mt-1 text-xs text-slate-400">{item.description}</p>
                </Card>
              ))}
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
