import { ResumeData } from "@/types/resume";

export const sampleResumeData: ResumeData = {
  basics: {
    name: "Alex Johnson",
    headline: "Senior Software Engineer",
    email: "alex.johnson@email.com",
    phone: "(555) 123-4567",
    location: "San Francisco, CA",
    linkedin: "linkedin.com/in/alexjohnson",
    website: "alexjohnson.dev",
    summary:
      "Results-driven software engineer with 8+ years of experience building scalable web applications and leading cross-functional teams. Passionate about clean code, developer experience, and delivering products that delight users. Proven track record of shipping features that drive 30%+ improvements in key business metrics.",
  },
  experience: [
    {
      id: "exp-1",
      company: "TechCorp Inc.",
      position: "Senior Software Engineer",
      startDate: "Jan 2022",
      endDate: "Present",
      location: "San Francisco, CA",
      highlights: [
        "Led a team of 5 engineers to redesign the core platform, resulting in a 40% improvement in page load times",
        "Architected and implemented a microservices-based API gateway handling 10M+ requests/day",
        "Mentored 3 junior developers through structured code reviews and pair programming sessions",
        "Introduced CI/CD best practices that reduced deployment time from 2 hours to 15 minutes",
      ],
    },
    {
      id: "exp-2",
      company: "StartupXYZ",
      position: "Full Stack Developer",
      startDate: "Mar 2019",
      endDate: "Dec 2021",
      location: "Remote",
      highlights: [
        "Built the entire frontend application from scratch using React and TypeScript, serving 50K+ users",
        "Designed and implemented RESTful APIs with Node.js and PostgreSQL",
        "Reduced infrastructure costs by 35% through optimization and migration to serverless architecture",
        "Collaborated with product and design teams to ship 20+ features per quarter",
      ],
    },
    {
      id: "exp-3",
      company: "Digital Agency Co.",
      position: "Frontend Developer",
      startDate: "Jun 2016",
      endDate: "Feb 2019",
      location: "New York, NY",
      highlights: [
        "Developed responsive web applications for 15+ clients across various industries",
        "Implemented A/B testing framework that increased conversion rates by 25%",
        "Built reusable component library adopted across 8 internal projects",
      ],
    },
  ],
  education: [
    {
      id: "edu-1",
      institution: "University of California, Berkeley",
      degree: "Bachelor of Science",
      field: "Computer Science",
      startDate: "2012",
      endDate: "2016",
      gpa: "3.8",
    },
  ],
  skills: [
    {
      category: "Languages",
      items: ["TypeScript", "JavaScript", "Python", "Go", "SQL"],
    },
    {
      category: "Frontend",
      items: ["React", "Next.js", "Vue.js", "Tailwind CSS", "HTML/CSS"],
    },
    {
      category: "Backend",
      items: ["Node.js", "Express", "PostgreSQL", "Redis", "GraphQL"],
    },
    {
      category: "Tools & Platforms",
      items: ["AWS", "Docker", "Kubernetes", "Git", "CI/CD"],
    },
  ],
  certifications: [
    {
      name: "AWS Solutions Architect - Associate",
      issuer: "Amazon Web Services",
      date: "2023",
    },
    {
      name: "Google Cloud Professional Developer",
      issuer: "Google",
      date: "2022",
    },
  ],
  languages: [
    { language: "English", proficiency: "Native" },
    { language: "Spanish", proficiency: "Professional Working" },
  ],
  projects: [
    {
      id: "proj-1",
      name: "Open Source CLI Tool",
      description: "A developer productivity tool for managing microservices locally",
      highlights: [
        "Built with Go, 2K+ GitHub stars",
        "Featured in several developer newsletters",
        "Active community with 50+ contributors",
      ],
    },
  ],
};
