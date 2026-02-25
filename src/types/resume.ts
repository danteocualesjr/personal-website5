export interface ResumeBasics {
  name: string;
  headline: string;
  email: string;
  phone: string;
  location: string;
  linkedin: string;
  website: string;
  summary: string;
}

export interface ResumeExperience {
  id: string;
  company: string;
  position: string;
  startDate: string;
  endDate: string;
  location: string;
  highlights: string[];
}

export interface ResumeEducation {
  id: string;
  institution: string;
  degree: string;
  field: string;
  startDate: string;
  endDate: string;
  gpa?: string;
}

export interface ResumeSkillGroup {
  category: string;
  items: string[];
}

export interface ResumeCertification {
  name: string;
  issuer: string;
  date: string;
}

export interface ResumeLanguage {
  language: string;
  proficiency: string;
}

export interface ResumeProject {
  id: string;
  name: string;
  description: string;
  highlights: string[];
}

export interface ResumeData {
  basics: ResumeBasics;
  experience: ResumeExperience[];
  education: ResumeEducation[];
  skills: ResumeSkillGroup[];
  certifications: ResumeCertification[];
  languages: ResumeLanguage[];
  projects: ResumeProject[];
}

export type TemplateId = "modern" | "classic" | "minimal" | "bold" | "executive" | "compact" | "creative" | "timeline";

export interface TemplateConfig {
  id: TemplateId;
  name: string;
  description: string;
  accentColor: string;
}

export const TEMPLATES: TemplateConfig[] = [
  {
    id: "modern",
    name: "Modern",
    description: "Clean two-column layout with accent colors and icons",
    accentColor: "#2563eb",
  },
  {
    id: "classic",
    name: "Classic",
    description: "Traditional single-column, serif fonts, formal style",
    accentColor: "#1e3a5f",
  },
  {
    id: "minimal",
    name: "Minimal",
    description: "Lots of whitespace, sans-serif, ultra-clean",
    accentColor: "#374151",
  },
  {
    id: "bold",
    name: "Bold",
    description: "Strong typography, dark headers, high contrast",
    accentColor: "#dc2626",
  },
  {
    id: "executive",
    name: "Executive",
    description: "Sophisticated, muted tones, suited for senior roles",
    accentColor: "#6b5b47",
  },
  {
    id: "compact",
    name: "Compact",
    description: "Dense two-column, fits more content on one page",
    accentColor: "#0f766e",
  },
  {
    id: "creative",
    name: "Creative",
    description: "Colored sidebar, great for design and marketing roles",
    accentColor: "#7c3aed",
  },
  {
    id: "timeline",
    name: "Timeline",
    description: "Vertical timeline rail, clear career progression",
    accentColor: "#0369a1",
  },
];
