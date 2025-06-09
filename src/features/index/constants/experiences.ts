import type { Experience } from '../types/experience';
 
export const experiences: Experience[] = [
  {
    company: "Dwarf",
    position: "Lead front-end developer",
    period: "2024 — Present",
    logo: "/logos/dwarf.png",
    description: "Leading a team of frontend developers, architecting scalable solutions and mentoring junior developers.",
    technologies: ["React", "TypeScript", "Next.js", "Tailwind CSS", "GraphQL"],
    achievements: [
      "Increased team productivity by 40% through improved development processes",
      "Led migration to modern tech stack reducing bundle size by 60%",
      "Implemented design system used across 5+ products"
    ]
  },
  {
    company: "Dwarf",
    position: "Senior front-end developer",
    period: "2022 — 2024",
    logo: "/logos/dwarf.png",
    description: "Developed complex user interfaces and collaborated with design teams to create exceptional user experiences.",
    technologies: ["Vue.js", "JavaScript", "SCSS", "Webpack", "Jest"],
    achievements: [
      "Built responsive dashboard used by 10,000+ users daily",
      "Reduced page load times by 45% through optimization",
      "Mentored 3 junior developers"
    ]
  },
  {
    company: "Ajukreizi",
    position: "Front-end developer",
    period: "2019 — 2020",
    logo: "/logos/ajukreizi.png",
    description: "Focused on creating modern web applications with emphasis on performance and accessibility.",
    technologies: ["React", "JavaScript", "CSS3", "Node.js"],
    achievements: [
      "Developed and maintained multiple client websites",
      "Improved site performance scores by 35%",
      "Implemented responsive designs across all projects"
    ]
  }
];
  
  export default experiences;