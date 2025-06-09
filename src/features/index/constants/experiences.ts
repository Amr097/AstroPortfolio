import type { Experience } from '../types/experience';
 
export const experiences: Experience[] = [
  {
    company: "NFSSC",
    position: "Frontend Engineer",
    period: "09/2024 — Present",
    logo: "/logos/nfssc.svg",
    description: "Building internal KYC dashboard for document verification and management in Saudi Arabia's financial sector.",
    technologies: ["Vue.js", "React", "TypeScript", "Tailwind CSS", "Chart.js"],
    achievements: [
      "Built KYC dashboard streamlining customer document verification",
      "Collaborated with cross-functional teams to define frontend architecture",
      "Developed reusable components and form validation systems",
      "Created data visualization dashboards for user statistics"
    ]
  },
  {
    company: "Quanovations",
    position: "Frontend Engineer",
    period: "12/2023 — 09/2024",
    logo: "/logos/quanovations.svg",
    description: "Developed multiple admin dashboards and web applications for Saudi Arabian businesses.",
    technologies: ["React", "Vue.js", "JavaScript", "TailwindCSS", "REST API"],
    achievements: [
      "Built petrol station admin dashboard processing 280,000+ receipts",
      "Developed interactive social club web application",
      "Created HR dashboard with role-based access control",
      "Established reusable component library for future projects"
    ]
  },
  {
    company: "Algoriza",
    position: "Frontend Developer Intern",
    period: "09/2023 — 12/2023",
    logo: "/logos/algoriza.png",
    description: "Developed and deployed Hotels Booking application while receiving mentorship and guidance.",
    technologies: ["Vue.js", "TailwindCSS", "Firebase", "Git"],
    achievements: [
      "Built full-featured hotel booking application",
      "Participated in daily mentorship sessions",
      "Implemented responsive designs and user interfaces",
      "Integrated Firebase backend services"
    ]
  }
];
  
  export default experiences;