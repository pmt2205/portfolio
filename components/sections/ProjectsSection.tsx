"use client";

import Image from "next/image";
import { ExternalLink } from "lucide-react";
import { GithubIcon } from "../common/Icons";
import { motion } from "framer-motion";
import Container from "../common/Container";
import SectionTitle from "../common/SectionTitle";
import { Card, CardHeader, CardTitle, CardContent } from "../ui/Card";
import Badge from "../ui/Badge";
import Button from "../ui/Button";
import { projects as staticProjects } from "../../data/projects";
import { useLanguage } from "../../context/LanguageContext";

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: "easeOut" as const,
    },
  }),
};

export default function ProjectsSection() {
  const { t } = useLanguage();
  const projectsList = (t("projects.list") || []) as any[];

  // Merge dynamic translation with static attributes
  const projects = projectsList.map((p, idx) => ({
    ...p,
    imageUrl: staticProjects[idx]?.imageUrl,
    liveUrl: staticProjects[idx]?.liveUrl,
  }));

  return (
    <section id="projects" className="py-20 relative">
      <div className="absolute top-0 right-1/4 -z-10 h-96 w-96 rounded-full bg-cyan-500/2 dark:bg-cyan-500/5 blur-3xl animate-pulse" />
      
      <Container>
        <SectionTitle title={t("projects.title")} subtitle={t("projects.subtitle")} />

        <div className="grid gap-8 md:grid-cols-2 max-w-5xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={itemVariants}
              className="h-full"
            >
              <Card className="flex flex-col h-full overflow-hidden p-0 group">
                {/* Project Image Container */}
                {project.imageUrl && (
                  <div className="relative aspect-video w-full overflow-hidden border-b border-slate-200 bg-slate-100 dark:border-slate-900 dark:bg-slate-950">
                    <Image
                      src={project.imageUrl}
                      alt={project.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      priority={index === 0}
                      className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-slate-950/10 group-hover:bg-slate-950/0 transition-colors duration-300" />
                  </div>
                )}

                {/* Card Info */}
                <div className="flex flex-col justify-between flex-grow p-6">
                  <div>
                    <CardHeader className="p-0">
                      <div className="flex items-center justify-between">
                        <CardTitle className="text-xl font-bold group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                          {project.title}
                        </CardTitle>
                        <Badge variant="outline">{project.role}</Badge>
                      </div>
                    </CardHeader>

                    {/* Tech Stack */}
                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {project.techStack.map((tech: string) => (
                        <Badge key={tech} variant="secondary" className="text-[10px] px-2 py-0">
                          {tech}
                        </Badge>
                      ))}
                    </div>

                    <CardContent className="p-0 mt-4 text-slate-500 dark:text-slate-400 leading-relaxed text-sm">
                      {project.description}
                    </CardContent>
                  </div>

                  {/* Actions */}
                  <div className="mt-6 flex items-center gap-3">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full"
                    >
                      <Button variant="outline" className="w-full gap-2 text-xs h-10">
                        <GithubIcon className="h-4 w-4" /> {t("projects.sourceCode")}
                      </Button>
                    </a>
                    
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full"
                      >
                        <Button variant="primary" className="w-full gap-2 text-xs h-10">
                          <ExternalLink className="h-4 w-4" /> {t("projects.liveDemo")}
                        </Button>
                      </a>
                    )}
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
