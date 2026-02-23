"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ArrowRight, X, Expand } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useResumeStore } from "@/store/resume-store";
import { TemplateRenderer } from "@/components/resume";
import { TEMPLATES, TemplateId, TemplateConfig } from "@/types/resume";
import { sampleResumeData } from "@/lib/sample-data";

const accent = "#E8503A";

export default function TemplatesPage() {
  const router = useRouter();
  const { resumeData, selectedTemplate, setSelectedTemplate, setResumeData } =
    useResumeStore();
  const [previewTemplate, setPreviewTemplate] = useState<TemplateConfig | null>(null);

  useEffect(() => {
    if (!resumeData) {
      setResumeData(sampleResumeData);
    }
  }, [resumeData, setResumeData]);

  useEffect(() => {
    if (previewTemplate) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [previewTemplate]);

  useEffect(() => {
    if (!previewTemplate) return;
    const handleKey = (e: KeyboardEvent) => {
      const idx = TEMPLATES.findIndex((t) => t.id === previewTemplate.id);
      if (e.key === "ArrowLeft" && idx > 0) {
        setPreviewTemplate(TEMPLATES[idx - 1]);
      } else if (e.key === "ArrowRight" && idx < TEMPLATES.length - 1) {
        setPreviewTemplate(TEMPLATES[idx + 1]);
      } else if (e.key === "Escape") {
        setPreviewTemplate(null);
      }
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [previewTemplate]);

  const data = resumeData || sampleResumeData;

  const handleSelect = (id: TemplateId) => {
    setSelectedTemplate(id);
  };

  const handleContinue = () => {
    router.push(`/editor/${selectedTemplate}`);
  };

  const handlePreviewClick = (template: TemplateConfig) => {
    setPreviewTemplate(template);
  };

  const handleUseTemplate = (id: TemplateId) => {
    setSelectedTemplate(id);
    setPreviewTemplate(null);
    router.push(`/editor/${id}`);
  };

  const currentPreviewIndex = previewTemplate
    ? TEMPLATES.findIndex((t) => t.id === previewTemplate.id)
    : -1;

  const goToPrev = () => {
    if (currentPreviewIndex > 0) {
      setPreviewTemplate(TEMPLATES[currentPreviewIndex - 1]);
    }
  };

  const goToNext = () => {
    if (currentPreviewIndex < TEMPLATES.length - 1) {
      setPreviewTemplate(TEMPLATES[currentPreviewIndex + 1]);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Nav */}
      <nav className="sticky top-0 z-40 border-b border-neutral-200 bg-white">
        <div className="mx-auto flex h-14 max-w-7xl items-center justify-between px-6">
          <div className="flex items-center gap-4">
            <Link
              href="/create"
              className="flex items-center gap-1.5 text-[13px] text-neutral-400 transition-colors hover:text-neutral-900"
            >
              <ArrowLeft className="h-3.5 w-3.5" />
              Upload
            </Link>
            <span className="text-neutral-300">/</span>
            <span className="text-[13px] font-medium text-neutral-900">
              Choose template
            </span>
          </div>
          <Button
            onClick={handleContinue}
            size="sm"
            className="rounded-full text-[13px] font-medium text-white hover:opacity-90"
            style={{ backgroundColor: accent }}
          >
            Continue
            <ArrowRight className="ml-1 h-3.5 w-3.5" />
          </Button>
        </div>
      </nav>

      <div className="mx-auto max-w-6xl px-6 py-12">
        <h1 className="font-serif text-3xl tracking-tight text-neutral-900">
          Choose a template
        </h1>
        <p className="mt-2 text-[15px] text-neutral-500">
          Pick a layout. You can change templates and accent colors anytime in the editor.
        </p>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {TEMPLATES.map((template) => {
            const isSelected = selectedTemplate === template.id;
            return (
              <div key={template.id} className="relative">
                <button
                  onClick={() => handleSelect(template.id)}
                  className={`group relative w-full overflow-hidden rounded-lg border-2 text-left transition-all duration-200 ${
                    isSelected
                      ? "shadow-lg"
                      : "border-neutral-200 hover:border-neutral-400"
                  }`}
                  style={isSelected ? { borderColor: accent } : undefined}
                >
                  {/* Preview */}
                  <div className="relative overflow-hidden border-b border-neutral-100 bg-neutral-50">
                    <div className="origin-top-left scale-[0.32] w-[312.5%]" style={{ height: 360 }}>
                      <TemplateRenderer
                        templateId={template.id}
                        data={data}
                        accentColor={template.accentColor}
                      />
                    </div>
                    {/* Expand overlay on hover */}
                    <div
                      className="absolute inset-0 flex items-center justify-center bg-black/0 opacity-0 transition-all duration-200 group-hover:bg-black/5 group-hover:opacity-100"
                      onClick={(e) => {
                        e.stopPropagation();
                        handlePreviewClick(template);
                      }}
                    >
                      <span className="flex items-center gap-1.5 rounded-full bg-white px-3 py-1.5 text-[12px] font-medium text-neutral-700 shadow-md">
                        <Expand className="h-3 w-3" />
                        Preview
                      </span>
                    </div>
                  </div>

                  {/* Label */}
                  <div className="flex items-center justify-between px-4 py-3">
                    <div>
                      <h3 className="text-[14px] font-semibold text-neutral-900">
                        {template.name}
                      </h3>
                      <p className="mt-0.5 text-[12px] text-neutral-400">
                        {template.description}
                      </p>
                    </div>
                    <div
                      className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full border-2 transition-colors"
                      style={
                        isSelected
                          ? { borderColor: accent, backgroundColor: accent }
                          : { borderColor: "#d4d4d4" }
                      }
                    >
                      {isSelected && (
                        <svg
                          className="h-3 w-3 text-white"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={3}
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                      )}
                    </div>
                  </div>
                </button>
              </div>
            );
          })}
        </div>
      </div>

      {/* Preview Modal */}
      {previewTemplate && (
        <div
          className="fixed inset-0 z-50 flex items-start justify-center overflow-y-auto bg-black/60 backdrop-blur-sm"
          onClick={() => setPreviewTemplate(null)}
        >
          <div
            className="relative my-8 w-full max-w-[880px] px-4"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal header */}
            <div className="mb-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <h2 className="text-lg font-semibold text-white">
                  {previewTemplate.name}
                </h2>
                <span className="text-[13px] text-neutral-400">
                  {previewTemplate.description}
                </span>
              </div>
              <div className="flex items-center gap-2">
                {/* Prev / Next */}
                <div className="flex items-center gap-1">
                  <button
                    onClick={goToPrev}
                    disabled={currentPreviewIndex <= 0}
                    className="rounded-md p-1.5 text-white/70 transition-colors hover:bg-white/10 hover:text-white disabled:opacity-30 disabled:hover:bg-transparent"
                  >
                    <ArrowLeft className="h-4 w-4" />
                  </button>
                  <span className="min-w-[3rem] text-center text-[12px] tabular-nums text-neutral-400">
                    {currentPreviewIndex + 1} / {TEMPLATES.length}
                  </span>
                  <button
                    onClick={goToNext}
                    disabled={currentPreviewIndex >= TEMPLATES.length - 1}
                    className="rounded-md p-1.5 text-white/70 transition-colors hover:bg-white/10 hover:text-white disabled:opacity-30 disabled:hover:bg-transparent"
                  >
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
                <div className="mx-1 h-5 w-px bg-white/20" />
                <button
                  onClick={() => setPreviewTemplate(null)}
                  className="rounded-md p-1.5 text-white/70 transition-colors hover:bg-white/10 hover:text-white"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>
            </div>

            {/* Resume preview */}
            <div className="overflow-hidden rounded-lg bg-white shadow-2xl">
              <TemplateRenderer
                templateId={previewTemplate.id}
                data={data}
                accentColor={previewTemplate.accentColor}
              />
            </div>

            {/* Footer action */}
            <div className="mt-4 flex items-center justify-between pb-8">
              <p className="text-[13px] text-neutral-400">
                Click arrows or use <kbd className="rounded bg-white/10 px-1.5 py-0.5 text-[11px] text-neutral-300">←</kbd> <kbd className="rounded bg-white/10 px-1.5 py-0.5 text-[11px] text-neutral-300">→</kbd> to browse
              </p>
              <Button
                onClick={() => handleUseTemplate(previewTemplate.id)}
                className="rounded-full px-6 text-[13px] font-medium text-white hover:opacity-90"
                style={{ backgroundColor: accent }}
              >
                Use this template
                <ArrowRight className="ml-1.5 h-3.5 w-3.5" />
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
