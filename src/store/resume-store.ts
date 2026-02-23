import { create } from "zustand";
import {
  ResumeData,
  ResumeExperience,
  ResumeEducation,
  ResumeProject,
  TemplateId,
} from "@/types/resume";

interface ResumeStore {
  resumeData: ResumeData | null;
  selectedTemplate: TemplateId;
  accentColor: string;
  isParsing: boolean;
  parseError: string | null;

  setResumeData: (data: ResumeData) => void;
  setSelectedTemplate: (id: TemplateId) => void;
  setAccentColor: (color: string) => void;
  setIsParsing: (val: boolean) => void;
  setParseError: (err: string | null) => void;

  updateBasics: (field: string, value: string) => void;
  updateExperience: (id: string, updates: Partial<ResumeExperience>) => void;
  addExperience: (exp: ResumeExperience) => void;
  removeExperience: (id: string) => void;
  updateEducation: (id: string, updates: Partial<ResumeEducation>) => void;
  addEducation: (edu: ResumeEducation) => void;
  removeEducation: (id: string) => void;
  updateSkillCategory: (index: number, category: string, items: string[]) => void;
  addSkillCategory: () => void;
  removeSkillCategory: (index: number) => void;
  updateProject: (id: string, updates: Partial<ResumeProject>) => void;
  addProject: (proj: ResumeProject) => void;
  removeProject: (id: string) => void;

  reset: () => void;
}

export const useResumeStore = create<ResumeStore>((set) => ({
  resumeData: null,
  selectedTemplate: "modern",
  accentColor: "#2563eb",
  isParsing: false,
  parseError: null,

  setResumeData: (data) => set({ resumeData: data }),
  setSelectedTemplate: (id) => set({ selectedTemplate: id }),
  setAccentColor: (color) => set({ accentColor: color }),
  setIsParsing: (val) => set({ isParsing: val }),
  setParseError: (err) => set({ parseError: err }),

  updateBasics: (field, value) =>
    set((state) => {
      if (!state.resumeData) return state;
      return {
        resumeData: {
          ...state.resumeData,
          basics: { ...state.resumeData.basics, [field]: value },
        },
      };
    }),

  updateExperience: (id, updates) =>
    set((state) => {
      if (!state.resumeData) return state;
      return {
        resumeData: {
          ...state.resumeData,
          experience: state.resumeData.experience.map((exp) =>
            exp.id === id ? { ...exp, ...updates } : exp
          ),
        },
      };
    }),

  addExperience: (exp) =>
    set((state) => {
      if (!state.resumeData) return state;
      return {
        resumeData: {
          ...state.resumeData,
          experience: [...state.resumeData.experience, exp],
        },
      };
    }),

  removeExperience: (id) =>
    set((state) => {
      if (!state.resumeData) return state;
      return {
        resumeData: {
          ...state.resumeData,
          experience: state.resumeData.experience.filter((e) => e.id !== id),
        },
      };
    }),

  updateEducation: (id, updates) =>
    set((state) => {
      if (!state.resumeData) return state;
      return {
        resumeData: {
          ...state.resumeData,
          education: state.resumeData.education.map((edu) =>
            edu.id === id ? { ...edu, ...updates } : edu
          ),
        },
      };
    }),

  addEducation: (edu) =>
    set((state) => {
      if (!state.resumeData) return state;
      return {
        resumeData: {
          ...state.resumeData,
          education: [...state.resumeData.education, edu],
        },
      };
    }),

  removeEducation: (id) =>
    set((state) => {
      if (!state.resumeData) return state;
      return {
        resumeData: {
          ...state.resumeData,
          education: state.resumeData.education.filter((e) => e.id !== id),
        },
      };
    }),

  updateSkillCategory: (index, category, items) =>
    set((state) => {
      if (!state.resumeData) return state;
      const skills = [...state.resumeData.skills];
      skills[index] = { category, items };
      return { resumeData: { ...state.resumeData, skills } };
    }),

  addSkillCategory: () =>
    set((state) => {
      if (!state.resumeData) return state;
      return {
        resumeData: {
          ...state.resumeData,
          skills: [...state.resumeData.skills, { category: "", items: [] }],
        },
      };
    }),

  removeSkillCategory: (index) =>
    set((state) => {
      if (!state.resumeData) return state;
      return {
        resumeData: {
          ...state.resumeData,
          skills: state.resumeData.skills.filter((_, i) => i !== index),
        },
      };
    }),

  updateProject: (id, updates) =>
    set((state) => {
      if (!state.resumeData) return state;
      return {
        resumeData: {
          ...state.resumeData,
          projects: state.resumeData.projects.map((p) =>
            p.id === id ? { ...p, ...updates } : p
          ),
        },
      };
    }),

  addProject: (proj) =>
    set((state) => {
      if (!state.resumeData) return state;
      return {
        resumeData: {
          ...state.resumeData,
          projects: [...state.resumeData.projects, proj],
        },
      };
    }),

  removeProject: (id) =>
    set((state) => {
      if (!state.resumeData) return state;
      return {
        resumeData: {
          ...state.resumeData,
          projects: state.resumeData.projects.filter((p) => p.id !== id),
        },
      };
    }),

  reset: () =>
    set({
      resumeData: null,
      selectedTemplate: "modern",
      accentColor: "#2563eb",
      isParsing: false,
      parseError: null,
    }),
}));
