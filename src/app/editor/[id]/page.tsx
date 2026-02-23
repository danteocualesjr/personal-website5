"use client";

import { useEffect, useState, useRef } from "react";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import {
  ArrowLeft,
  Download,
  Loader2,
  Eye,
  PenLine,
  Check,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useResumeStore } from "@/store/resume-store";
import { TemplateRenderer } from "@/components/resume";
import { BasicsEditor } from "@/components/editor/basics-editor";
import { ExperienceEditor } from "@/components/editor/experience-editor";
import { EducationEditor } from "@/components/editor/education-editor";
import { SkillsEditor } from "@/components/editor/skills-editor";
import { ProjectsEditor } from "@/components/editor/projects-editor";
import { TemplateId, TEMPLATES } from "@/types/resume";
import { sampleResumeData } from "@/lib/sample-data";
import { toast } from "sonner";

const accent = "#E8503A";

const ACCENT_COLORS = [
  "#171717",
  "#57534e",
  "#1e3a5f",
  "#0d9488",
  "#059669",
  "#2563eb",
  "#4f46e5",
  "#7c3aed",
  "#be185d",
  "#dc2626",
  "#E8503A",
  "#ca8a04",
];

export default function EditorPage() {
  const params = useParams();
  const router = useRouter();
  const templateId = params.id as TemplateId;
  const {
    resumeData,
    setResumeData,
    selectedTemplate,
    setSelectedTemplate,
    accentColor,
    setAccentColor,
  } = useResumeStore();

  const [isDownloading, setIsDownloading] = useState(false);
  const [mobileView, setMobileView] = useState<"edit" | "preview">("edit");
  const [showColors, setShowColors] = useState(false);
  const previewRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!resumeData) {
      setResumeData(sampleResumeData);
    }
  }, [resumeData, setResumeData]);

  useEffect(() => {
    if (templateId && TEMPLATES.find((t) => t.id === templateId)) {
      setSelectedTemplate(templateId);
    }
  }, [templateId, setSelectedTemplate]);

  const data = resumeData || sampleResumeData;

  const handleDownload = async () => {
    setIsDownloading(true);
    try {
      const response = await fetch("/api/generate-pdf", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          resumeData: data,
          templateId: selectedTemplate,
          accentColor,
        }),
      });

      if (!response.ok) throw new Error("PDF generation failed");

      const blob = await response.blob();
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = `${data.basics.name.replace(/\s+/g, "_")}_Resume.pdf`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
      toast.success("Resume downloaded");
    } catch {
      toast.error("Download failed. Try again.");
    } finally {
      setIsDownloading(false);
    }
  };

  return (
    <div className="flex h-screen flex-col bg-white">
      {/* Toolbar */}
      <nav className="flex h-12 shrink-0 items-center justify-between border-b border-neutral-200 px-3">
        {/* Left */}
        <div className="flex items-center gap-2">
          <Link
            href="/templates"
            className="flex items-center gap-1 rounded-md px-2 py-1 text-[12px] text-neutral-400 transition-colors hover:bg-neutral-100 hover:text-neutral-900"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            Back
          </Link>
          <div className="h-4 w-px bg-neutral-200" />
          {/* Template pills */}
          <div className="hidden items-center gap-0.5 sm:flex">
            {TEMPLATES.map((t) => (
              <button
                key={t.id}
                onClick={() => {
                  setSelectedTemplate(t.id);
                  router.replace(`/editor/${t.id}`);
                }}
                className={`rounded-md px-2.5 py-1 text-[12px] font-medium transition-colors ${
                  selectedTemplate === t.id
                    ? "text-white"
                    : "text-neutral-500 hover:bg-neutral-100 hover:text-neutral-900"
                }`}
                style={selectedTemplate === t.id ? { backgroundColor: accent } : undefined}
              >
                {t.name}
              </button>
            ))}
          </div>
          {/* Mobile select */}
          <select
            value={selectedTemplate}
            onChange={(e) => {
              const v = e.target.value as TemplateId;
              setSelectedTemplate(v);
              router.replace(`/editor/${v}`);
            }}
            className="h-7 rounded-md border border-neutral-200 bg-white px-2 text-[12px] sm:hidden"
          >
            {TEMPLATES.map((t) => (
              <option key={t.id} value={t.id}>{t.name}</option>
            ))}
          </select>
        </div>

        {/* Right */}
        <div className="flex items-center gap-1.5">
          {/* Color */}
          <div className="relative">
            <button
              onClick={() => setShowColors(!showColors)}
              className="flex h-7 items-center gap-1.5 rounded-md border border-neutral-200 px-2 text-[12px] text-neutral-500 hover:bg-neutral-50"
            >
              <div
                className="h-3.5 w-3.5 rounded-full ring-1 ring-inset ring-black/10"
                style={{ backgroundColor: accentColor }}
              />
              <span className="hidden sm:inline">Color</span>
            </button>
            {showColors && (
              <>
                <div className="fixed inset-0 z-40" onClick={() => setShowColors(false)} />
                <div className="absolute right-0 top-full z-50 mt-1.5 rounded-lg border border-neutral-200 bg-white p-2.5 shadow-lg">
                  <div className="grid grid-cols-6 gap-1">
                    {ACCENT_COLORS.map((c) => (
                      <button
                        key={c}
                        onClick={() => { setAccentColor(c); setShowColors(false); }}
                        className={`flex h-6 w-6 items-center justify-center rounded-md transition-transform hover:scale-110 ${
                          accentColor === c ? "ring-2 ring-offset-1" : ""
                        }`}
                        style={{
                          backgroundColor: c,
                          ...(accentColor === c ? { ringColor: accent } : {}),
                        }}
                      >
                        {accentColor === c && <Check className="h-3 w-3 text-white" strokeWidth={3} />}
                      </button>
                    ))}
                  </div>
                </div>
              </>
            )}
          </div>

          {/* Mobile view toggle */}
          <div className="flex items-center rounded-md border border-neutral-200 sm:hidden">
            <button
              onClick={() => setMobileView("edit")}
              className={`rounded-l-md px-2 py-1 ${mobileView === "edit" ? "text-white" : "text-neutral-400"}`}
              style={mobileView === "edit" ? { backgroundColor: accent } : undefined}
            >
              <PenLine className="h-3.5 w-3.5" />
            </button>
            <button
              onClick={() => setMobileView("preview")}
              className={`rounded-r-md px-2 py-1 ${mobileView === "preview" ? "text-white" : "text-neutral-400"}`}
              style={mobileView === "preview" ? { backgroundColor: accent } : undefined}
            >
              <Eye className="h-3.5 w-3.5" />
            </button>
          </div>

          {/* Download */}
          <Button
            size="sm"
            className="h-7 gap-1.5 rounded-md text-[12px] font-medium text-white hover:opacity-90"
            style={{ backgroundColor: accent }}
            onClick={handleDownload}
            disabled={isDownloading}
          >
            {isDownloading ? (
              <Loader2 className="h-3.5 w-3.5 animate-spin" />
            ) : (
              <Download className="h-3.5 w-3.5" />
            )}
            <span className="hidden sm:inline">Download PDF</span>
          </Button>
        </div>
      </nav>

      {/* Main */}
      <div className="flex flex-1 overflow-hidden">
        {/* Editor */}
        <div
          className={`w-full shrink-0 border-r border-neutral-200 sm:w-[400px] ${
            mobileView === "preview" ? "hidden sm:block" : ""
          }`}
        >
          <ScrollArea className="h-full">
            <div className="p-4">
              <Tabs defaultValue="basics" className="w-full">
                <TabsList className="mb-4 grid w-full grid-cols-5">
                  <TabsTrigger value="basics" className="text-[11px]">Basics</TabsTrigger>
                  <TabsTrigger value="experience" className="text-[11px]">Work</TabsTrigger>
                  <TabsTrigger value="education" className="text-[11px]">Education</TabsTrigger>
                  <TabsTrigger value="skills" className="text-[11px]">Skills</TabsTrigger>
                  <TabsTrigger value="projects" className="text-[11px]">Projects</TabsTrigger>
                </TabsList>
                <TabsContent value="basics"><BasicsEditor /></TabsContent>
                <TabsContent value="experience"><ExperienceEditor /></TabsContent>
                <TabsContent value="education"><EducationEditor /></TabsContent>
                <TabsContent value="skills"><SkillsEditor /></TabsContent>
                <TabsContent value="projects"><ProjectsEditor /></TabsContent>
              </Tabs>
            </div>
          </ScrollArea>
        </div>

        {/* Preview */}
        <div
          className={`flex-1 overflow-auto bg-neutral-100 p-6 sm:p-10 ${
            mobileView === "edit" ? "hidden sm:block" : ""
          }`}
        >
          <div className="mx-auto max-w-[816px]">
            <div
              ref={previewRef}
              className="rounded-sm bg-white shadow-[0_1px_3px_rgba(0,0,0,0.08),0_8px_30px_rgba(0,0,0,0.06)]"
            >
              <TemplateRenderer
                templateId={selectedTemplate}
                data={data}
                accentColor={accentColor}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
