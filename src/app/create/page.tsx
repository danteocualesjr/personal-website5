"use client";

import { useState, useCallback } from "react";
import { useRouter } from "next/navigation";
import { useDropzone } from "react-dropzone";
import {
  Upload,
  FileText,
  Loader2,
  AlertCircle,
  ArrowLeft,
  CheckCircle2,
  Info,
  Sparkles,
  CloudUpload,
} from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useResumeStore } from "@/store/resume-store";

export default function CreatePage() {
  const router = useRouter();
  const { setResumeData, isParsing, setIsParsing, parseError, setParseError } =
    useResumeStore();
  const [fileName, setFileName] = useState<string | null>(null);
  const [uploadSuccess, setUploadSuccess] = useState(false);

  const handleFile = useCallback(
    async (file: File) => {
      setFileName(file.name);
      setParseError(null);
      setIsParsing(true);
      setUploadSuccess(false);

      try {
        const formData = new FormData();
        formData.append("file", file);

        const response = await fetch("/api/parse-linkedin", {
          method: "POST",
          body: formData,
        });

        if (!response.ok) {
          const err = await response.json();
          throw new Error(err.error || "Failed to parse PDF");
        }

        const data = await response.json();
        setResumeData(data);
        setUploadSuccess(true);

        setTimeout(() => {
          router.push("/templates");
        }, 800);
      } catch (err) {
        setParseError(
          err instanceof Error ? err.message : "An unexpected error occurred"
        );
      } finally {
        setIsParsing(false);
      }
    },
    [router, setResumeData, setIsParsing, setParseError]
  );

  const onDrop = useCallback(
    (acceptedFiles: File[]) => {
      const file = acceptedFiles[0];
      if (file) handleFile(file);
    },
    [handleFile]
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: { "application/pdf": [".pdf"] },
    maxFiles: 1,
    maxSize: 10 * 1024 * 1024,
    disabled: isParsing,
  });

  const handleDemoData = async () => {
    setIsParsing(true);
    setParseError(null);
    setFileName("demo-profile.pdf");

    try {
      const { sampleResumeData } = await import("@/lib/sample-data");
      await new Promise((r) => setTimeout(r, 1500));
      setResumeData(sampleResumeData);
      setUploadSuccess(true);
      setTimeout(() => router.push("/templates"), 800);
    } catch {
      setParseError("Failed to load demo data");
    } finally {
      setIsParsing(false);
    }
  };

  return (
    <div className="relative min-h-screen">
      <div className="mesh-gradient absolute inset-0 -z-10" />
      <div className="dot-grid absolute inset-0 -z-10 opacity-30" />

      {/* Nav */}
      <nav className="glass border-b border-white/20">
        <div className="mx-auto flex h-16 max-w-4xl items-center gap-4 px-6">
          <Link
            href="/"
            className="flex items-center gap-2 text-sm text-gray-500 transition-colors hover:text-gray-900"
          >
            <ArrowLeft className="h-4 w-4" />
            Back
          </Link>
          <div className="flex items-center gap-2.5">
            <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600">
              <FileText className="h-3.5 w-3.5 text-white" />
            </div>
            <span className="font-semibold text-gray-900">Resumaker</span>
          </div>
        </div>
      </nav>

      <div className="mx-auto max-w-2xl px-6 py-16">
        {/* Header */}
        <div className="animate-fade-up mb-10 text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-indigo-200/60 bg-white/60 px-3 py-1 text-xs font-medium text-indigo-600 backdrop-blur-sm">
            <CloudUpload className="h-3.5 w-3.5" />
            Step 1 of 3
          </div>
          <h1 className="mb-3 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Upload your LinkedIn PDF
          </h1>
          <p className="text-gray-500">
            Download your profile from LinkedIn as PDF, then drop it here.
            <br className="hidden sm:block" />
            Our AI will extract all your information automatically.
          </p>
        </div>

        {/* Upload Zone */}
        <div className="animate-fade-up stagger-1">
          <div
            {...getRootProps()}
            className={`group relative cursor-pointer rounded-2xl border-2 border-dashed p-10 text-center transition-all duration-300 sm:p-14 ${
              isDragActive
                ? "border-indigo-400 bg-indigo-50/80 scale-[1.01]"
                : isParsing
                  ? "border-gray-200 bg-white/60 cursor-wait"
                  : uploadSuccess
                    ? "border-emerald-300 bg-emerald-50/80"
                    : "border-gray-200/80 bg-white/60 backdrop-blur-sm hover:border-indigo-300 hover:bg-white/80 hover:shadow-xl hover:shadow-indigo-500/5"
            }`}
          >
            <input {...getInputProps()} />

            {isParsing ? (
              <div className="flex flex-col items-center gap-5">
                <div className="relative">
                  <div className="absolute inset-0 animate-ping rounded-full bg-indigo-400/20" />
                  <div className="relative flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 shadow-lg shadow-indigo-500/30">
                    <Loader2 className="h-7 w-7 animate-spin text-white" />
                  </div>
                </div>
                <div>
                  <p className="text-lg font-bold text-gray-900">
                    Parsing your profile...
                  </p>
                  <p className="mt-1 text-sm text-gray-500">
                    AI is extracting data from{" "}
                    <span className="font-medium text-indigo-600">{fileName}</span>
                  </p>
                </div>
                {/* Progress dots */}
                <div className="flex gap-1.5">
                  {[0, 1, 2].map((i) => (
                    <div
                      key={i}
                      className="h-2 w-2 rounded-full bg-indigo-500 animate-pulse-soft"
                      style={{ animationDelay: `${i * 0.3}s` }}
                    />
                  ))}
                </div>
              </div>
            ) : uploadSuccess ? (
              <div className="flex flex-col items-center gap-5">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-emerald-400 to-teal-500 shadow-lg shadow-emerald-500/30 animate-scale-in">
                  <CheckCircle2 className="h-8 w-8 text-white" />
                </div>
                <div>
                  <p className="text-lg font-bold text-gray-900">
                    Successfully parsed!
                  </p>
                  <p className="mt-1 text-sm text-gray-500">
                    Redirecting to template selection...
                  </p>
                </div>
              </div>
            ) : (
              <div className="flex flex-col items-center gap-5">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-50 to-purple-50 ring-1 ring-indigo-100/50 transition-transform duration-300 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-indigo-500/10">
                  <Upload className="h-7 w-7 text-indigo-500" />
                </div>
                <div>
                  <p className="text-lg font-bold text-gray-900">
                    {isDragActive
                      ? "Drop your PDF here"
                      : "Drag & drop your LinkedIn PDF"}
                  </p>
                  <p className="mt-1.5 text-sm text-gray-400">
                    or click to browse &middot; PDF only &middot; max 10MB
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Error */}
        {parseError && (
          <div className="animate-fade-up mt-4 flex items-start gap-3 rounded-xl border border-red-200/80 bg-red-50/80 p-4 backdrop-blur-sm">
            <AlertCircle className="mt-0.5 h-5 w-5 shrink-0 text-red-500" />
            <div>
              <p className="font-semibold text-red-800">Parsing failed</p>
              <p className="mt-0.5 text-sm text-red-600">{parseError}</p>
            </div>
          </div>
        )}

        {/* Divider + Demo */}
        <div className="animate-fade-up stagger-2 mt-10 text-center">
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-200/60" />
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="bg-transparent px-4 text-gray-400">
                or try it out first
              </span>
            </div>
          </div>
          <Button
            variant="outline"
            className="mt-5 gap-2 rounded-xl border-gray-200/80 bg-white/60 backdrop-blur-sm transition-all hover:bg-white/80 hover:shadow-md"
            onClick={handleDemoData}
            disabled={isParsing}
          >
            <Sparkles className="h-4 w-4 text-indigo-500" />
            Try with Demo Profile
          </Button>
        </div>

        {/* Instructions */}
        <div className="animate-fade-up stagger-3 mt-14 rounded-2xl border border-indigo-100/60 bg-white/60 p-6 backdrop-blur-sm">
          <div className="mb-4 flex items-center gap-2.5">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-indigo-100 to-purple-100">
              <Info className="h-4 w-4 text-indigo-600" />
            </div>
            <h3 className="font-bold text-gray-900">
              How to download your LinkedIn PDF
            </h3>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {[
              { step: "1", text: "Go to your LinkedIn profile page" },
              {
                step: "2",
                text: 'Click the "More" button below your header',
              },
              { step: "3", text: 'Select "Save to PDF"' },
              { step: "4", text: "Upload the downloaded PDF here" },
            ].map((item) => (
              <div
                key={item.step}
                className="flex items-start gap-3 rounded-xl bg-white/60 p-3"
              >
                <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 text-[10px] font-bold text-white">
                  {item.step}
                </div>
                <p className="text-sm text-gray-600">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
