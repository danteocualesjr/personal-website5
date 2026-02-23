"use client";

import { useState, useCallback } from "react";
import { useRouter } from "next/navigation";
import { useDropzone } from "react-dropzone";
import {
  Upload,
  Loader2,
  AlertCircle,
  ArrowLeft,
  CheckCircle2,
} from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useResumeStore } from "@/store/resume-store";

const accent = "#E8503A";

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
      await new Promise((r) => setTimeout(r, 1200));
      setResumeData(sampleResumeData);
      setUploadSuccess(true);
      setTimeout(() => router.push("/templates"), 600);
    } catch {
      setParseError("Failed to load demo data");
    } finally {
      setIsParsing(false);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Nav */}
      <nav className="border-b border-neutral-200">
        <div className="mx-auto flex h-14 max-w-3xl items-center gap-4 px-6">
          <Link
            href="/"
            className="flex items-center gap-1.5 text-[13px] text-neutral-400 transition-colors hover:text-neutral-900"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            Home
          </Link>
          <span className="text-neutral-300">/</span>
          <span className="text-[13px] font-medium text-neutral-900">Upload</span>
        </div>
      </nav>

      <div className="mx-auto max-w-xl px-6 pt-16 pb-24">
        <h1 className="font-serif text-3xl tracking-tight text-neutral-900">
          Upload your LinkedIn PDF
        </h1>
        <p className="mt-2 text-[15px] leading-relaxed text-neutral-500">
          Export your profile from LinkedIn as a PDF, then drop it here.
          AI will parse it into structured resume data.
        </p>

        {/* Upload Zone */}
        <div
          {...getRootProps()}
          className={`mt-10 flex cursor-pointer flex-col items-center rounded-lg border-2 border-dashed px-6 py-14 text-center transition-all duration-200 ${
            isDragActive
              ? "bg-red-50/50"
              : isParsing
                ? "cursor-wait border-neutral-200 bg-neutral-50"
                : uploadSuccess
                  ? "border-emerald-600 bg-emerald-50"
                  : "border-neutral-300 hover:border-neutral-400 hover:bg-neutral-50"
          }`}
          style={isDragActive ? { borderColor: accent } : undefined}
        >
          <input {...getInputProps()} />

          {isParsing ? (
            <>
              <Loader2 className="h-8 w-8 animate-spin" style={{ color: accent }} />
              <p className="mt-4 text-[15px] font-medium text-neutral-900">
                Parsing {fileName}...
              </p>
              <p className="mt-1 text-[13px] text-neutral-500">
                AI is extracting your profile data
              </p>
            </>
          ) : uploadSuccess ? (
            <>
              <CheckCircle2 className="h-8 w-8 text-emerald-600" />
              <p className="mt-4 text-[15px] font-medium text-neutral-900">
                Done. Redirecting...
              </p>
            </>
          ) : (
            <>
              <Upload className="h-7 w-7 text-neutral-400" />
              <p className="mt-4 text-[15px] font-medium text-neutral-900">
                {isDragActive ? "Drop it here" : "Drag and drop your PDF"}
              </p>
              <p className="mt-1 text-[13px] text-neutral-400">
                or click to browse &middot; 10MB max
              </p>
            </>
          )}
        </div>

        {/* Error */}
        {parseError && (
          <div className="mt-4 flex items-start gap-3 rounded-lg border border-red-200 bg-red-50 p-4">
            <AlertCircle className="mt-0.5 h-4 w-4 shrink-0 text-red-600" />
            <div>
              <p className="text-[13px] font-medium text-red-900">Parsing failed</p>
              <p className="mt-0.5 text-[13px] text-red-700">{parseError}</p>
            </div>
          </div>
        )}

        {/* Demo */}
        <div className="mt-8 flex items-center gap-4">
          <div className="h-px flex-1 bg-neutral-200" />
          <span className="text-[12px] text-neutral-400">or</span>
          <div className="h-px flex-1 bg-neutral-200" />
        </div>
        <div className="mt-4 text-center">
          <button
            className="text-[13px] font-medium underline underline-offset-4 decoration-neutral-300 transition-colors hover:decoration-neutral-900"
            style={{ color: accent }}
            onClick={handleDemoData}
            disabled={isParsing}
          >
            Try with sample data instead
          </button>
        </div>

        {/* Instructions */}
        <div className="mt-16 border-t border-neutral-200 pt-8">
          <h3 className="text-[13px] font-semibold uppercase tracking-wider text-neutral-400">
            How to get your LinkedIn PDF
          </h3>
          <ol className="mt-4 space-y-3 text-[14px] leading-relaxed text-neutral-600">
            {[
              "Go to your LinkedIn profile",
              <>Click <strong>More</strong> below your profile photo</>,
              <>Select <strong>Save to PDF</strong></>,
              "Upload the downloaded file above",
            ].map((text, i) => (
              <li key={i} className="flex gap-3">
                <span
                  className="mt-px flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-[11px] font-bold text-white"
                  style={{ backgroundColor: accent }}
                >
                  {i + 1}
                </span>
                {text}
              </li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
}
