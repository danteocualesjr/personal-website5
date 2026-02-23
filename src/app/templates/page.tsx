"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useResumeStore } from "@/store/resume-store";
import { TemplateRenderer } from "@/components/resume";
import { TEMPLATES, TemplateId } from "@/types/resume";
import { sampleResumeData } from "@/lib/sample-data";

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
    <div className="min-h-screen bg-white">
      {/* Nav */}
      <nav className="sticky top-0 z-50 border-b border-neutral-200 bg-white">
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
            className="rounded-full"
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
              <button
                key={template.id}
                onClick={() => handleSelect(template.id)}
                className={`group relative overflow-hidden rounded-lg border-2 text-left transition-all ${
                  isSelected
                    ? "border-neutral-900"
                    : "border-neutral-200 hover:border-neutral-400"
                }`}
              >
                {/* Preview */}
                <div className="overflow-hidden border-b border-neutral-100 bg-neutral-50">
                  <div className="origin-top-left scale-[0.32] w-[312.5%]" style={{ height: 360 }}>
                    <TemplateRenderer
                      templateId={template.id}
                      data={data}
                      accentColor={template.accentColor}
                    />
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
                    className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-full border-2 transition-colors ${
                      isSelected
                        ? "border-neutral-900 bg-neutral-900"
                        : "border-neutral-300 group-hover:border-neutral-400"
                    }`}
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
            );
          })}
        </div>
      </div>
    </div>
  );
}
