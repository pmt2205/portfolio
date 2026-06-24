"use client";

import { motion } from "framer-motion";
import { Layout, Server, Database, Settings } from "lucide-react";
import Container from "../common/Container";
import SectionTitle from "../common/SectionTitle";
import { Card, CardHeader, CardTitle, CardContent } from "../ui/Card";
import Badge from "../ui/Badge";
import { skills } from "../../data/skills";

const iconMap: Record<string, React.ReactNode> = {
  Frontend: <Layout className="h-5 w-5 text-indigo-400" />,
  Backend: <Server className="h-5 w-5 text-cyan-400" />,
  Database: <Database className="h-5 w-5 text-purple-400" />,
  Tools: <Settings className="h-5 w-5 text-emerald-400" />,
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.5,
      ease: "easeOut" as const,
    },
  }),
};

export default function SkillsSection() {
  return (
    <section id="skills" className="py-20 relative">
      <div className="absolute top-1/2 left-1/2 -z-10 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-indigo-500/5 blur-3xl" />
      
      <Container>
        <SectionTitle title="Skills & Tech Stack" subtitle="My Toolkit" />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {skills.map((skillGroup, index) => (
            <motion.div
              key={skillGroup.category}
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={cardVariants}
            >
              <Card className="h-full flex flex-col justify-between">
                <div>
                  <CardHeader className="flex flex-row items-center gap-3">
                    <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-slate-950 border border-slate-800">
                      {iconMap[skillGroup.category] || <Settings className="h-5 w-5" />}
                    </div>
                    <CardTitle className="text-lg font-bold">{skillGroup.category}</CardTitle>
                  </CardHeader>

                  <CardContent className="mt-4">
                    <div className="flex flex-wrap gap-2">
                      {skillGroup.items.map((skill) => (
                        <Badge
                          key={skill}
                          variant={skillGroup.category === "Frontend" ? "primary" : "secondary"}
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
