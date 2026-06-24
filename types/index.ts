export interface Skill {
  category: string;
  items: string[];
}

export interface Project {
  title: string;
  role: string;
  techStack: string[];
  description: string;
  githubUrl: string;
  liveUrl?: string; // Optional live project url
  imageUrl?: string; // Optional image url
}

export interface Experience {
  company: string;
  position: string;
  time: string;
  descriptions: string[];
}
