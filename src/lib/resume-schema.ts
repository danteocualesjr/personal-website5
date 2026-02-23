import { z } from "zod";

export const resumeBasicsSchema = z.object({
  name: z.string().default(""),
  headline: z.string().default(""),
  email: z.string().default(""),
  phone: z.string().default(""),
  location: z.string().default(""),
  linkedin: z.string().default(""),
  website: z.string().default(""),
  summary: z.string().default(""),
});

export const resumeExperienceSchema = z.object({
  id: z.string(),
  company: z.string().default(""),
  position: z.string().default(""),
  startDate: z.string().default(""),
  endDate: z.string().default(""),
  location: z.string().default(""),
  highlights: z.array(z.string()).default([]),
});

export const resumeEducationSchema = z.object({
  id: z.string(),
  institution: z.string().default(""),
  degree: z.string().default(""),
  field: z.string().default(""),
  startDate: z.string().default(""),
  endDate: z.string().default(""),
  gpa: z.string().optional(),
});

export const resumeSkillGroupSchema = z.object({
  category: z.string().default(""),
  items: z.array(z.string()).default([]),
});

export const resumeCertificationSchema = z.object({
  name: z.string().default(""),
  issuer: z.string().default(""),
  date: z.string().default(""),
});

export const resumeLanguageSchema = z.object({
  language: z.string().default(""),
  proficiency: z.string().default(""),
});

export const resumeProjectSchema = z.object({
  id: z.string(),
  name: z.string().default(""),
  description: z.string().default(""),
  highlights: z.array(z.string()).default([]),
});

export const resumeDataSchema = z.object({
  basics: resumeBasicsSchema,
  experience: z.array(resumeExperienceSchema).default([]),
  education: z.array(resumeEducationSchema).default([]),
  skills: z.array(resumeSkillGroupSchema).default([]),
  certifications: z.array(resumeCertificationSchema).default([]),
  languages: z.array(resumeLanguageSchema).default([]),
  projects: z.array(resumeProjectSchema).default([]),
});

export type ResumeDataParsed = z.infer<typeof resumeDataSchema>;
