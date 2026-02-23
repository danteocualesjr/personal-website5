"use client";

import { useEffect, useState, useRef } from "react";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import {
  ArrowLeft,
  FileText,
  Download,
  Loader2,
  Palette,
  Eye,
  PenLine,
  Layers,
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

const ACCENT_COLORS = [
  "#6366f1",
  "#8b5cf6",
  "#a855f7",
  "#ec4899",
  "#ef4444",
  "#f97316",
  "#eab308",
  "#22c55e",
  "#14b8a6",
  "#0ea5e9",
  "#3b82f6",
  "#374151",
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
  const [showColorPicker, setShowColorPicker] = useState(false);
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
      toast.success("Resume downloaded!");
    } catch {
      toast.error("Download failed. Please try again.");
    } finally {
      setIsDownloading(false);
    }
  };

  return (
    <div className="flex h-screen flex-col bg-gray-50">
      {/* Top Bar */}
      <nav className="shrink-0 border-b border-gray-200/80 bg-white">
        <div className="flex h-14 items-center justify-between px-4">
          {/* Left */}
          <div className="flex items-center gap-3">
            <Link
              href="/templates"
              className="flex items-center gap-1.5 rounded-lg px-2 py-1 text-sm text-gray-500 transition-colors hover:bg-gray-100 hover:text-gray-900"
            >
              <ArrowLeft className="h-4 w-4" />
              <span className="hidden sm:inline">Templates</span>
            </Link>
            <div className="h-5 w-px bg-gray-200" />
            <div className="flex items-center gap-2">
              <div className="flex h-6 w-6 items-center justify-center rounded-md bg-gradient-to-br from-indigo-500 to-purple-600">
                <FileText className="h-3 w-3 text-white" />
              </div>
              <span className="text-sm font-semibold text-gray-900">Resume Editor</span>
              <span className="hidden rounded-full bg-indigo-50 px-2 py-0.5 text-[10px] font-semibold text-indigo-600 sm:inline-block">
                Step 3 of 3
              </span>
            </div>
          </div>

          {/* Right toolbar */}
          <div className="flex items-center gap-2">
            {/* Template Switcher */}
            <div className="hidden items-center gap-1 rounded-lg border border-gray-200/80 bg-gray-50 p-0.5 sm:flex">
              <Layers className="mx-1.5 h-3.5 w-3.5 text-gray-400" />
              {TEMPLATES.map((t) => (
                <button
                  key={t.id}
                  onClick={() => {
                    setSelectedTemplate(t.id);
                    router.replace(`/editor/${t.id}`);
                  }}
                  className={`rounded-md px-2.5 py-1 text-[11px] font-medium transition-all ${
                    selectedTemplate === t.id
                      ? "bg-white text-gray-900 shadow-sm"
                      : "text-gray-500 hover:text-gray-700"
                  }`}
                >
                  {t.name}
                </button>
              ))}
            </div>

            {/* Mobile template select */}
            <select
              value={selectedTemplate}
              onChange={(e) => {
                const newId = e.target.value as TemplateId;
                setSelectedTemplate(newId);
                router.replace(`/editor/${newId}`);
              }}
              className="h-8 rounded-lg border border-gray-200 bg-white px-2 text-xs sm:hidden focus:outline-none focus:ring-2 focus:ring-indigo-100"
            >
              {TEMPLATES.map((t) => (
                <option key={t.id} value={t.id}>
                  {t.name}
                </option>
              ))}
            </select>

            {/* Color Picker */}
            <div className="relative">
              <button
                onClick={() => setShowColorPicker(!showColorPicker)}
                className="flex h-8 items-center gap-1.5 rounded-lg border border-gray-200/80 bg-white px-2 text-xs text-gray-600 transition-colors hover:bg-gray-50"
              >
                <div
                  className="h-4 w-4 rounded-full ring-1 ring-inset ring-black/10"
                  style={{ backgroundColor: accentColor }}
                />
                <Palette className="hidden h-3.5 w-3.5 text-gray-400 sm:block" />
              </button>
              {showColorPicker && (
                <>
                  <div className="fixed inset-0 z-40" onClick={() => setShowColorPicker(false)} />
                  <div className="absolute right-0 top-full z-50 mt-2 rounded-xl border border-gray-200/80 bg-white p-3 shadow-xl animate-scale-in">
                    <p className="mb-2 text-[10px] font-semibold uppercase tracking-wider text-gray-400">
                      Accent Color
                    </p>
                    <div className="grid grid-cols-6 gap-1.5">
                      {ACCENT_COLORS.map((color) => (
                        <button
                          key={color}
                          onClick={() => {
                            setAccentColor(color);
                            setShowColorPicker(false);
                          }}
                          className={`flex h-7 w-7 items-center justify-center rounded-lg transition-all ${
                            accentColor === color
                              ? "scale-110 ring-2 ring-offset-1 ring-gray-400"
                              : "hover:scale-110"
                          }`}
                          style={{ backgroundColor: color }}
                        >
                          {accentColor === color && (
                            <Check className="h-3 w-3 text-white" strokeWidth={3} />
                          )}
                        </button>
                      ))}
                    </div>
                  </div>
                </>
              )}
            </div>

            {/* Mobile Toggle */}
            <div className="flex items-center rounded-lg border border-gray-200/80 bg-gray-50 p-0.5 sm:hidden">
              <button
                onClick={() => setMobileView("edit")}
                className={`rounded-md px-2.5 py-1 transition-all ${
                  mobileView === "edit"
                    ? "bg-white text-gray-900 shadow-sm"
                    : "text-gray-400"
                }`}
              >
                <PenLine className="h-3.5 w-3.5" />
              </button>
              <button
                onClick={() => setMobileView("preview")}
                className={`rounded-md px-2.5 py-1 transition-all ${
                  mobileView === "preview"
                    ? "bg-white text-gray-900 shadow-sm"
                    : "text-gray-400"
                }`}
              >
                <Eye className="h-3.5 w-3.5" />
              </button>
            </div>

            {/* Download */}
            <Button
              size="sm"
              className="gap-1.5 rounded-lg bg-gradient-to-r from-indigo-600 to-purple-600 shadow-md shadow-indigo-500/20 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
              onClick={handleDownload}
              disabled={isDownloading}
            >
              {isDownloading ? (
                <Loader2 className="h-4 w-4 animate-spin" />
              ) : (
                <Download className="h-4 w-4" />
              )}
              <span className="hidden sm:inline">Download PDF</span>
            </Button>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="flex flex-1 overflow-hidden">
        {/* Editor Panel */}
        <div
          className={`w-full shrink-0 border-r border-gray-200/80 bg-white sm:w-[420px] ${
            mobileView === "preview" ? "hidden sm:block" : ""
          }`}
        >
          <ScrollArea className="h-full">
            <div className="p-5">
              <Tabs defaultValue="basics" className="w-full">
                <TabsList className="mb-5 grid w-full grid-cols-5 rounded-xl bg-gray-100/80 p-1">
                  <TabsTrigger
                    value="basics"
                    className="rounded-lg text-xs data-[state=active]:bg-white data-[state=active]:shadow-sm"
                  >
                    Basics
                  </TabsTrigger>
                  <TabsTrigger
                    value="experience"
                    className="rounded-lg text-xs data-[state=active]:bg-white data-[state=active]:shadow-sm"
                  >
                    Work
                  </TabsTrigger>
                  <TabsTrigger
                    value="education"
                    className="rounded-lg text-xs data-[state=active]:bg-white data-[state=active]:shadow-sm"
                  >
                    Edu
                  </TabsTrigger>
                  <TabsTrigger
                    value="skills"
                    className="rounded-lg text-xs data-[state=active]:bg-white data-[state=active]:shadow-sm"
                  >
                    Skills
                  </TabsTrigger>
                  <TabsTrigger
                    value="projects"
                    className="rounded-lg text-xs data-[state=active]:bg-white data-[state=active]:shadow-sm"
                  >
                    Projects
                  </TabsTrigger>
                </TabsList>
                <TabsContent value="basics">
                  <BasicsEditor />
                </TabsContent>
                <TabsContent value="experience">
                  <ExperienceEditor />
                </TabsContent>
                <TabsContent value="education">
                  <EducationEditor />
                </TabsContent>
                <TabsContent value="skills">
                  <SkillsEditor />
                </TabsContent>
                <TabsContent value="projects">
                  <ProjectsEditor />
                </TabsContent>
              </Tabs>
            </div>
          </ScrollArea>
        </div>

        {/* Preview Panel */}
        <div
          className={`flex-1 overflow-auto p-6 sm:p-8 ${
            mobileView === "edit" ? "hidden sm:block" : ""
          }`}
          style={{
            background: "linear-gradient(135deg, #f0f0f5 0%, #e8e8f0 50%, #f0eff5 100%)",
          }}
        >
          <div className="mx-auto max-w-[816px]">
            <div
              ref={previewRef}
              className="rounded-xl shadow-2xl shadow-gray-400/20 ring-1 ring-gray-200/50 transition-shadow duration-300 hover:shadow-3xl"
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
