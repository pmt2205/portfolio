import { Project } from "../types";

export const projects: Project[] = [
  {
    title: "JobPT",
    role: "Fullstack Developer",
    techStack: ["React Native", "Django", "MySQL", "WebSocket"],
    description:
      "A mobile job application that allows users to search and apply for jobs, receive real-time notifications, chat with recruiters, and use premium job posting services.",
    githubUrl: "https://github.com/pmt2205/Django",
    imageUrl: "/images/jobpt.png",
  },
  {
    title: "MovieHub",
    role: "Fullstack Developer",
    techStack: ["ReactJS", "Node.js", "Express.js", "MongoDB", "JWT", "Tailwind CSS", "Socket"],
    description:
      "A movie ticket booking website with role-based authentication, seat selection, real-time seat updates, payment integration, reviews, ratings, and real-time chat.",
    githubUrl: "https://github.com/pmt2205/MovieHub",
    imageUrl: "/images/moviehub.png",
  },
];
