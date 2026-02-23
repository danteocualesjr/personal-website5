"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import {
  ArrowLeft,
  FileText,
  Check,
  ArrowRight,
  Sparkles,
  LayoutGrid,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useResumeStore } from "@/store/resume-store";
import { TemplateRenderer } from "@/components/resume";
import { TEMPLATES, TemplateId } from "@/types/resume";
import { sampleResumeData } from "@/lib/sample-data";

const templateTags: Record<string, string> = {
  modern: "Most Popular",
  classic: "ATS-Friendly",
  minimal: "Clean",
  bold: "Eye-Catching",
  executive: "Senior-Level",
};

const tagColors: Record<string, string> = {
  modern: "from-indigo-500 to-purple-500",
  classic: "from-emerald-500 to-teal-500",
  minimal: "from-gray-500 to-slate-500",
  bold: "from-red-500 to-orange-500",
  executive: "from-amber-600 to-yellow-600",
};

export default function TemplatesPage() {
  const router = useRouter();
  const { resumeData, selectedTemplate, setSelectedTemplate, setResumeData } =
    useResumeStore();

  useEffect(() => {
    if (!resumeData) {
      setResumeData(sampleResumeData);
    }
  }, [resumeData, setResumeData]);

  const data = resumeData || sampleResumeData;

  const handleSelect = (id: TemplateId) => {
    setSelectedTemplate(id);
  };

  const handleContinue = () => {
    router.push(`/editor/${selectedTemplate}`);
  };

  return (
    <div className="relative min-h-screen">
      <div className="mesh-gradient absolute inset-0 -z-10 opacity-50" />

      {/* Nav */}
      <nav className="glass sticky top-0 z-50 border-b border-white/20">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
          <div className="flex items-center gap-4">
            <Link
              href="/create"
              className="flex items-center gap-2 text-sm text-gray-500 transition-colors hover:text-gray-900"
            >
              <ArrowLeft className="h-4 w-4" />
              Back
            </Link>
            <div className="hidden items-center gap-2.5 border-l border-gray-200/60 pl-4 sm:flex">
              <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600">
                <LayoutGrid className="h-3.5 w-3.5 text-white" />
              </div>
              <span className="font-semibold text-gray-900">Choose a Template</span>
              <span className="rounded-full bg-indigo-50 px-2 py-0.5 text-[10px] font-semibold text-indigo-600">
                Step 2 of 3
              </span>
            </div>
          </div>
          <Button
            onClick={handleContinue}
            className="gap-2 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 shadow-lg shadow-indigo-500/25 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl"
          >
            Continue to Editor
            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      </nav>

      <div className="mx-auto max-w-7xl px-6 py-10">
        {/* Header */}
        <div className="animate-fade-up mb-10 text-center">
          <h1 className="mb-3 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Pick your <span className="gradient-text">style</span>
          </h1>
          <p className="mx-auto max-w-md text-gray-500">
            Select a template that matches your industry and personal brand.
            Colors and content are fully customizable in the editor.
          </p>
        </div>

        {/* Template Grid */}
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {TEMPLATES.map((template, i) => {
            const isSelected = selectedTemplate === template.id;
            return (
              <button
                key={template.id}
                onClick={() => handleSelect(template.id)}
                className={`animate-fade-up stagger-${i + 1} group relative rounded-2xl border-2 bg-white/70 p-2 text-left backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl ${
                  isSelected
                    ? "border-indigo-500 shadow-xl shadow-indigo-500/15 ring-4 ring-indigo-100"
                    : "border-white/60 shadow-lg shadow-gray-200/50 hover:border-indigo-200"
                }`}
              >
                {/* Selection Badge */}
                {isSelected && (
                  <div className="absolute -top-3 -right-3 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 text-white shadow-lg shadow-indigo-500/40 animate-scale-in">
                    <Check className="h-4 w-4" strokeWidth={3} />
                  </div>
                )}

                {/* Tag */}
                <div className="absolute top-4 left-4 z-10">
                  <span
                    className={`inline-flex items-center gap-1 rounded-full bg-gradient-to-r ${tagColors[template.id]} px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-white shadow-md`}
                  >
                    {template.id === "modern" && <Sparkles className="h-2.5 w-2.5" />}
                    {templateTags[template.id]}
                  </span>
                </div>

                {/* Template Preview */}
                <div className="overflow-hidden rounded-xl bg-white ring-1 ring-gray-100">
                  <div className="origin-top-left scale-[0.34] w-[294%]" style={{ height: 380 }}>
                    <TemplateRenderer
                      templateId={template.id}
                      data={data}
                      accentColor={template.accentColor}
                    />
                  </div>
                </div>

                {/* Label */}
                <div className="mt-3 flex items-center justify-between px-2 pb-2">
                  <div>
                    <h3 className="font-bold text-gray-900">{template.name}</h3>
                    <p className="mt-0.5 text-xs text-gray-400">
                      {template.description}
                    </p>
                  </div>
                  <div
                    className={`flex h-8 w-8 items-center justify-center rounded-full transition-all duration-300 ${
                      isSelected
                        ? "bg-indigo-50 text-indigo-600"
                        : "bg-gray-50 text-gray-300 group-hover:bg-indigo-50 group-hover:text-indigo-400"
                    }`}
                  >
                    <Check className="h-4 w-4" />
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
